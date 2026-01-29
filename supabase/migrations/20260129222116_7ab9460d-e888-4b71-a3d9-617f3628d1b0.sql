-- Create page_views table
CREATE TABLE public.page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_name text UNIQUE NOT NULL,
  view_count bigint DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read view counts (public portfolio)
CREATE POLICY "Anyone can view page counts"
  ON public.page_views
  FOR SELECT
  USING (true);

-- Allow anyone to update view counts (for incrementing)
CREATE POLICY "Anyone can update view counts"
  ON public.page_views
  FOR UPDATE
  USING (true);

-- Enable realtime for page_views table
ALTER PUBLICATION supabase_realtime ADD TABLE public.page_views;

-- Insert initial row for portfolio
INSERT INTO public.page_views (page_name, view_count)
VALUES ('portfolio', 0);