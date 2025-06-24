import { Description } from "@radix-ui/react-toast";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const projects = [
  {
    id: 1,
    title: "Civfest PNJ 2025",
    description: "A Website for Information about Civil Engineering Festival PNJ 2025.",
    image: "/projects/cifvest.png",
    type: "Website",
    tags: ["Laravel", "Tailwind", "PHP"],
    url: "https://civfestpnj.com/",
    github: "https://github.com/rezaHarsono/civfest-2025",
  },

  {
    id: 2,
    title: "REDSEA Indonesia",
    description: "A Company Profile Website for REDSEA Indo.",
    image: "/projects/redseaindo.png",
    type: "Website",
    tags: ["Laravel", "Tailwind", "PHP"],
    url: "https://redseaindo.com/",
    github: "https://github.com/rezaHarsono/redseaindo",
  },

  {
    id: 3,
    title: "Sumber Talenta Muda",
    description: "A Company Profile Website for Sumber Talenta Muda.",
    image: "/projects/sumberTalenta.png",
    type: "Website",
    tags: ["Laravel", "Tailwind", "PHP"],
    url: "https://sumbertalentamuda.com/",
    github: "https://github.com/rezaHarsono/sumber-talenta-muda",
  },

  {
    id: 4,
    title: "Mbah Laptop",
    description: "An Android Application for Estimating Laptop Prices Based on Specifications.",
    image: "/projects/mbahLaptop.png",
    type: "Android",
    tags: ["Kotlin", "Firebase", "Android Studio"],
    url: "https://youtu.be/E6FgBBK6TpQ",
    github: "https://github.com/rezaHarsono/Bangkit-Capstone-MbahLaptop",
  },

  {
    id: 5,
    title: "Nyam",
    description: "An Android Application for Estimating Calorie and Macronutrients Based on Food Image.",
    image: "/projects/nyam.png",
    type: "Android",
    tags: ["Kotlin", "Firebase", "Android Studio"],
    url: "https://drive.google.com/file/d/1oE7Kjfj4KqVr3aaNDaPY5buUGwuXaIQR/view?usp=sharing",
    github: "https://github.com/Seismiks-Alpha/FR-mobile",
  },

  {
    id: 6,
    title: "Story App",
    description: "An Android Application for Uploading and Reading Stories from Users.",
    image: "/projects/storyApp.png",
    type: "Android",
    tags: ["Kotlin", "Firebase", "Android Studio"],
    url: "https://drive.google.com/file/d/1QU0yxILb_RVGHKnR9vLKrkK9T2prtDb0/view?usp=sharing",
    github: "https://github.com/rezaHarsono/my-story-app",
  },
];

const types = ["All", "Website", "Android"];

export const ProjectsSection = () => {
  const [selectedType, setSelectedType] = useState("All");

  const filteredType = projects.filter((project) => selectedType === "All" || project.type === selectedType);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured<span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent projects. Each project is a unique opportunity to showcase my skills and creativity.</p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {types.map((type, key) => (
            <button
              key={key}
              onClick={() => setSelectedType(type)}
              className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", selectedType == type ? "bg-primary text-blue-900" : "bg-secondary/70 text-foreground hover:bg-secondary")}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredType.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border">{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                <p className="text-muted-foreground text-sm mb-4"> {project.description} </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a href={project.url} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300 rounded-full">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.github} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com/rezaHarsono" target="_blank" className="cosmic-button text-black w-fit flex items-center mx-auto gap-2">
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
