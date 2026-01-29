import { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ViewCounter = () => {
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchAndIncrement = async () => {
      // Fetch current count
      const { data, error } = await supabase
        .from("page_views")
        .select("view_count")
        .eq("page_name", "portfolio")
        .maybeSingle();

      if (error) {
        console.error("Error fetching view count:", error);
        return;
      }

      if (data) {
        setViewCount(data.view_count);

        // Check if already counted this session
        const hasViewed = sessionStorage.getItem("portfolio_viewed");

        if (!hasViewed) {
          // Increment view count
          const { error: updateError } = await supabase
            .from("page_views")
            .update({ view_count: data.view_count + 1, updated_at: new Date().toISOString() })
            .eq("page_name", "portfolio");

          if (!updateError) {
            setViewCount(data.view_count + 1);
            sessionStorage.setItem("portfolio_viewed", "true");
          }
        }
      }
    };

    fetchAndIncrement();

    // Subscribe to real-time updates
    const channel = supabase
      .channel("page_views_realtime")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "page_views",
          filter: "page_name=eq.portfolio",
        },
        (payload) => {
          const newCount = (payload.new as { view_count: number }).view_count;
          setViewCount(newCount);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary gold-border text-sm text-muted-foreground">
      <Eye className="w-4 h-4 text-primary" />
      <span className="font-medium">
        {viewCount !== null ? viewCount.toLocaleString() : "..."}
      </span>
    </div>
  );
};

export default ViewCounter;
