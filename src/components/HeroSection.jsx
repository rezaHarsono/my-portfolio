import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col align-center justify-center px-4">
      <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-1"> Muhammad </span>
            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">Reza </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Harsono</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            {" "}
            I am an informatics student with a deep passion for technology and a strong interest in Android and website development. I'm eager to collaborate, grow, and contribute to impactful projects that make a difference.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="cosmic-button text-black">
              View My Works
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
