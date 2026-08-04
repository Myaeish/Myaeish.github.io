import { Bot, User, Briefcase } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center">
                    {/* Added rounded-3xl and shadow-2xl to match the Skills/Projects style */}
                    <div className="gradient-border p-8 bg-card rounded-3xl shadow-2xl card-hover space-y-6">
                        <h3 className="text-2xl font-semi-bold">
                            Applied Aerospace & Robotics Engineer
                        </h3>

                        <p className="text-muted-foreground">
                            As a second year student at The Ohio State University,
                            I have almost two years of experience working on multiple projects, 
                            including drone research, an autonomous robot, a rocket, and many more.
                        </p>

                        <p className="text-muted-foreground">
                            Through my experiences, I have been able to focus on 
                            integration of software and structures, developing a 
                            specialized approach of solving the unique challenges 
                            found in modern aerospace design.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {/* Added rounded-2xl and shadow-xl to the side cards */}
                        <div className="gradient-border p-6 rounded-2xl shadow-xl card-hover bg-card">
                            <div className=" flex items-start gap-4">
                                <div className=" p-3 rounded-full bg-primary/10">
                                    <Bot className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-text-semibold text-lg"> Systems Integration </h4>
                                    <p className="text-muted-foreground text-sm">
                                        Building complex robotic systems that
                                        integrate software logic with high-performance hardware.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 rounded-2xl shadow-xl card-hover bg-card">
                            <div className=" flex items-start gap-4">
                                <div className=" p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-text-semibold text-lg"> Education & Focus </h4>
                                    <p className="text-muted-foreground text-sm">
                                        Pursuing Aerospace Engineering at Ohio State with a 3.86 GPA, 
                                        focusing on the intersection of autonomous flight and orbital mechanics.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 rounded-2xl shadow-xl card-hover bg-card">
                            <div className=" flex items-start gap-4">
                                <div className=" p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-text-semibold text-lg"> Technical Contributions </h4>
                                    <p className="text-muted-foreground text-sm">
                                        Active member of Terrestrial Robotics and university research labs, 
                                        contributing to Mars-analog rover development and wildfire reconnaissance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};