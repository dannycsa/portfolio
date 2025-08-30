import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_8t6vu1o",         // Your Service ID
        "template_nvnru1d",        // Your Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "XmBvE-PjZrsI4hbt3"        // Your Public Key
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setForm({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          toast({
            title: "Error",
            description: "Oops! Something went wrong, please try again.",
            variant: "destructive",
          });
          setIsSubmitting(false);
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's <span className="text-primary">Connect</span>
        </h2>

        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in collaborating, space robotics, AI, or computer vision projects? 
          Feel free to reach out. I’m always open to discuss new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 w-full max-w-xs mx-auto">
              {[
                {
                  icon: <Mail className="h-6 w-6 text-primary" />,
                  label: "Email",
                  value: "dannycallata@gmail.com",
                  href: "mailto:dannycallata@gmail.com",
                },
                {
                  icon: <Phone className="h-6 w-6 text-primary" />,
                  label: "Phone",
                  value: "+591 78839403",
                  href: "tel:+59178839403",
                },
                {
                  icon: <MapPin className="h-6 w-6 text-primary" />,
                  label: "Location",
                  value: "La Paz, Bolivia",
                  href: "#",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">{item.icon}</div>
                  <div className="text-left">
                    <h4 className="font-medium">{item.label}</h4>
                    {item.href !== "#" ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-6 justify-center text-primary">
                <a
                  href="https://www.linkedin.com/in/daniel-callata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary/80 transition-colors"
                >
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6 text-center">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Daniel Callata"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="example@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                  rows={5}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
