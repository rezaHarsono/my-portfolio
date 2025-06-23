import { Linkedin, LinkedinIcon, Mail, Map, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {}, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Feel free to reach out. I'm always open to discussing new opportunities and collaborations.</p>

        <div className="mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="flex flex-col md:flex-row space-x-6 gap-5 items-center justify-center">
              <div className="flex items-start space-x-4 justify-between">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors duration-300" href="mailto:reza220304@gmail.com">
                    reza220304@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors duration-300" href="mailto:reza220304@gmail.com">
                    +62812-8696-5014
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Map className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors duration-300">Jagakarsa, South Jakarta</a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me In Linkedin</h4>
              <div className="flex flex-row space-x-4 items-center justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <a target="_blank" href="https://www.linkedin.com/in/muhammad-reza-harsono" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Muhammad Reza Harsono
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
