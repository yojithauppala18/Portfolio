import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Initialize EmailJS with public key
emailjs.init("ABTqA-qMU-9z-eb0L");

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    { icon: Mail, label: "Email", value: "yojitha.188@gmail.com", href: "mailto:yojitha.188@gmail.com" },
    { icon: Phone, label: "Phone", value: "(469) 688-7337", href: "tel:+14696887337" },
    { icon: MapPin, label: "Location", value: "Dallas, TX, USA" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send notification email to Yojitha
      await emailjs.send("service_s6uz55p", "template_30mcorh", {
        name: formData.name,
        recruiter_email: formData.email,
        message: formData.message,
        submitted_at: new Date().toLocaleString(),
      });

      // Send auto-reply to recruiter
      await emailjs.send("service_s6uz55p", "template_3aodb64", {
        name: formData.name,
        recruiter_email: formData.email,
      });

      setMessageSent(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setMessageSent(false);
        setFormData({ name: "", email: "", message: "" });
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success message UI
  if (messageSent) {
    return (
      <section className="animate-fade-in">
        <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
          Contact
          <span className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent ml-4" />
        </h2>

        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-scale-in">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-3">
            Your message has been received!
          </h3>
          <p className="text-muted-foreground max-w-md mb-4">
            Thank you for reaching out. I'll get back to you within 24-48 hours.
          </p>
          <p className="text-sm text-muted-foreground">
            This form will reset automatically...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="animate-fade-in">
      <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
        Contact
        <span className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent ml-4" />
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          <p className="text-muted-foreground">
            I'm always interested in hearing about new opportunities, exciting projects, or just having a chat about data and AI. Feel free to reach out!
          </p>

          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl gold-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-secondary border-border focus:border-primary h-12 rounded-xl"
            />
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-secondary border-border focus:border-primary h-12 rounded-xl"
            />
          </div>
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="bg-secondary border-border focus:border-primary rounded-xl resize-none"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
