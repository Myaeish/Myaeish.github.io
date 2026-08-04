import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        title: "Undergraduate Research Assistant",
        organization: "The Ohio State University",
        location: "Columbus, OH",
        period: "Feb 2025 – Present",
        description: [
            "Assisting in the development of autonomous systems for drone research",
            "Utilizing Qgroundcontrol and Marvelmind to implement navigation algorithms",
            "Collaborating with a team of students to document hardware-in-the-loop testing results"
        ]
    },
     {
        title: "Phenomenology Modeling Engineer Intern",
        organization: "Astrion, Systems Engineering Group",
        location: "Columbia, MD",
        period: "Jun 2026 – Aug 2026",
        description: [
            "Generated a study with post-intercept debris (PID) modeling using MATLAB & Python to assess how a minimum mass limit impacts the infrared (IR) scene, allowing customers/users to simulate PID models at ~80% faster rates",
            "Optimized a multi-node MATLAB distributed computing cluster, refining job-offloading workflows across networked machines to reduce simulation execution times",
            "Presented with an intern-led case study team, proposing a company-wide skills-visibility framework to executive leadership and placing 1st out of 6 competing intern teams",
            "Collaborated with engineers to analyze IR PID scene models, evaluate debris behavior, and support improvements in phenomenology modeling accuracy through the analysis of multi-variable data"

        ]
    },
    // You can add future internships here
];

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative z-40 bg-transparent">
            <div className="container mx-auto max-w-4xl relative z-50">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Work <span className="text-primary">Experience</span>
                </h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div 
                            key={index} 
                            className="bg-card p-6 md:p-8 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden"
                        >
                            {/* Header Info */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                                    <div className="flex items-center gap-2 text-primary font-medium mt-1">
                                        <Briefcase size={16} />
                                        <span>{exp.organization}</span>
                                    </div>
                                </div>
                                <div className="space-y-1 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2 md:justify-end">
                                        <Calendar size={14} />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className="flex items-center gap-2 md:justify-end">
                                        <MapPin size={14} />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Description Bullets */}
                            <ul className="space-y-3">
                                {exp.description.map((point, i) => (
                                    <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                                        <span className="text-primary mt-1.5">•</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};