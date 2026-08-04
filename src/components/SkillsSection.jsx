import { useState } from 'react';

const skillCategories = {
    "Software & Programming": ["Python", "C++", "MATLAB", "Java", "Arduino IDE", "CAD","QGroundControl", "Solidworks", "Onshape", "Linux", "Simulink"],
    "Systems & Electronics": ["Autonomous Navigation", "LiDAR", "PCB Integration", "Flight Controllers", "ESCs", "Motor Drivers, Arduino"],
    "Fabrication & Tools": ["Rapid Prototyping", "Drone Assembly",  "Drill Press", "Soldering", "3D Printing", "Milling Machine"]
};

export const SkillsSection = () => {
    const [activeTab, setActiveTab] = useState('Software & Programming');

    const handleTabChange = (e, tab) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setActiveTab(tab);
    };

    return (
        <section id="skills" className="py-24 px-4 relative z-40 bg-transparent">
            <div className="container mx-auto max-w-4xl relative z-50">
                {/* Reverted to standard text color for the title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Technical <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-8 bg-card p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl relative z-50 pointer-events-auto">
                    
                    {/* Left Side Navigation Tabs */}
                    <div className="flex flex-col gap-3 min-w-[200px] relative z-50">
                        {Object.keys(skillCategories).map((tab) => (
                            <button
                                key={tab}
                                onPointerDown={(e) => handleTabChange(e, tab)}
                                className={`px-6 py-4 rounded-xl font-semibold transition-all text-left active:scale-95 cursor-pointer relative z-50 ${
                                    activeTab === tab 
                                    ? "bg-primary text-white shadow-lg scale-105" 
                                    : "text-muted-foreground hover:text-primary hover:bg-white/5"
                                }`}
                                style={{ touchAction: 'manipulation' }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Right Side: Skill Content Box */}
                    <div className="flex-1 bg-background/50 rounded-2xl p-6 md:p-10 border border-white/5 relative">
                        {/* Title inside box matches the heading color */}
                        <h3 className="text-2xl font-semibold mb-8 text-center">
                            {activeTab}
                        </h3>
                        
                        <div className="flex flex-wrap justify-center gap-4">
                            {skillCategories[activeTab].map((skill) => (
                                <div 
                                    key={skill} 
                                    className="bg-secondary/50 px-6 py-3 rounded-full border border-white/10"
                                >
                                    {/* Reverted skill badges to standard text color */}
                                    <span className="font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};