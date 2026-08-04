import React, { useState } from 'react';
import { Github, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "Autonomous Reconnaissance Drone",
    description: "Built a custom-frame autonomous drone at OSU's Laboratory for Autonomy. Integrated ESCs and flight controllers to improve modularity. Configured QGroundControl for mission planning and waypoint navigation.",
    media: [
      { type: 'image', src: "/projects/Drone1.jpeg" },
      { type: 'image', src: "/projects/Drone2.jpeg" }
    ],
    github: null,
    tags: ["QGroundControl", "ESCs", "Autonomous Flight"]
  },
  {
    title: "Buckeye Space Launch Avionics Bay",
    description: "Architected a sliding PCB rail system in SolidWorks for a full-scale rocket, reducing maintenance time. Integrated 3 PCBs and GPS for successful competition launches.",
    media: [
        { type: 'image', src: "/projects/Avionic1.png" },
        { type: 'video', src: "/projects/AvionicsBaySolidWorkSR.mp4" }
    ],
    github: null,
    tags: ["SolidWorks", "PCB Design", "Hardware Integration"]
  },
  {
    title: "Terrestrial Robotics Mars Rover",
    description: "Working with a team of undergraduate students to develop a C++/Python autonomy software for a Mars-analog rover. Implementing A* path planning and LiDAR-based obstacle detection for rugged Utah terrain. Follow my work on github!",
    media: [
      { type: 'image', src: "/projects/Robot1.jpg" }
    ],
    github: "https://github.com/Myaeish/URC-Autonomy-Highlights",
    tags: ["Python", "C++", "Path Planning"]
  },
  {
    title: "Various MATLAB projects",
    description: "Developed an interactive MATLAB app to simulate 2D projectile motion with user-defined planetary gravity Programmed real-time trajectory plots and collision logic, along with various Aerospace coursework lab code. Follow my work on github!",
    media: [
      { type: 'image', src: "/projects/MATLAB1.png" } 
    ],
    github: "https://github.com/Myaeish/MATLAB-Projects/tree/main",
    tags: ["MATLAB", "App Designer", "Physics Modeling"]
  }
];

export const ProjectsSection = () => {
  const [currentIndices, setCurrentIndices] = useState({});

  const handleNext = (e, projectKey, maxLength) => {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    setCurrentIndices(prev => ({
      ...prev,
      [projectKey]: ((prev[projectKey] || 0) + 1) % maxLength
    }));
  };

  const handlePrev = (e, projectKey, maxLength) => {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    setCurrentIndices(prev => ({
      ...prev,
      [projectKey]: ((prev[projectKey] || 0) - 1 + maxLength) % maxLength
    }));
  };

  return (
    <section id="projects" className="py-24 px-4 relative z-40">
      <div className="container max-w-6xl mx-auto relative z-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
            Featured <span className="text-primary"> Projects </span>
        </h2>
        
        {/* Updated grid to lg:grid-cols-2 for a balanced 2x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const projectIndex = currentIndices[index] || 0;
            const currentMedia = project.media[projectIndex];

            return (
              <div key={index} className="bg-card rounded-3xl overflow-hidden flex flex-col group card-hover shadow-xl border border-white/10">
                
                {/* Media Container */}
                <div className="h-64 overflow-hidden bg-black relative">
                  {currentMedia.type === 'video' ? (
                    <video 
                      key={currentMedia.src}
                      src={currentMedia.src}
                      autoPlay loop muted playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img 
                      src={currentMedia.src} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}

                  {project.media.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                      <button 
                        onPointerDown={(e) => handlePrev(e, index, project.media.length)}
                        className="bg-black/70 p-3 rounded-full z-50 text-white pointer-events-auto md:opacity-0 md:group-hover:opacity-100 transition-opacity active:scale-90"
                        aria-label="Previous Media"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button 
                        onPointerDown={(e) => handleNext(e, index, project.media.length)}
                        className="bg-black/70 p-3 rounded-full z-50 text-white pointer-events-auto md:opacity-0 md:group-hover:opacity-100 transition-opacity active:scale-90"
                        aria-label="Next Media"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  )}
                  
                  {project.media.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                        {project.media.map((_, i) => (
                            <div key={i} className={`h-1.5 w-1.5 rounded-full ${i === projectIndex ? 'bg-primary' : 'bg-white/40'}`} />
                        ))}
                    </div>
                  )}
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors shrink-0 ml-4">
                            <Github size={24} />
                        </a>
                      )}
                  </div>
                  <p className="text-muted-foreground text-base mb-8 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2.5 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-bold bg-primary/10 text-primary px-3 py-1.5 border border-primary/20 rounded-full uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};