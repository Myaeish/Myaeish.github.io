import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export const ContactSection = () => {
    return (
        <section
            id="contact" 
            className="py-24 px-4 relative bg-secondary/30 z-40"
        >
            <div className="container mx-auto max-w-4xl relative z-50">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="text-primary"> Touch</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Have a project in mind or want to collaborate? Feel free to reach out,
                        I'm always open to discussing new opportunities!
                    </p>
                </div>

                {/* Main Content Card */}
                <div className="bg-card rounded-3xl border border-white/10 shadow-xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        
                        {/* LEFT: Contact Info */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                            
                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-center space-x-5 group">
                                    <div className="p-4 rounded-full bg-primary/10 shrink-0 transition-colors group-hover:bg-primary/20">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-xs text-muted-foreground uppercase tracking-widest mb-1">Email</h4>
                                        <a href="mailto:yaeish.2@osu.edu" className="text-lg font-medium hover:text-primary transition-colors">
                                            yaeish.2@osu.edu
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center space-x-5 group">
                                    <div className="p-4 rounded-full bg-primary/10 shrink-0 transition-colors group-hover:bg-primary/20">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-xs text-muted-foreground uppercase tracking-widest mb-1">Phone</h4>
                                        <a href="tel:+16149156148" className="text-lg font-medium hover:text-primary transition-colors">
                                            +1 (614) 915-6148
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center space-x-5 group">
                                    <div className="p-4 rounded-full bg-primary/10 shrink-0 transition-colors group-hover:bg-primary/20">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-xs text-muted-foreground uppercase tracking-widest mb-1">Location</h4>
                                        <p className="text-lg font-medium">Columbus, OH, United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Social Connect */}
                        <div className="flex flex-col justify-center items-center md:items-start md:border-l md:border-white/10 md:pl-12">
                            <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                            <p className="text-muted-foreground mb-8 text-center md:text-left">
                                Follow my professional journey and latest projects on LinkedIn.
                            </p>
                            <a 
                                href="https://www.linkedin.com/in/mohammad-yaeish/" 
                                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-white font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/20"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="h-5 w-5" />
                                LinkedIn Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};