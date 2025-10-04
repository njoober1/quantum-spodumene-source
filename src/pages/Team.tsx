import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Wajahat Siddiqui",
      role: "Chief Executive Officer",
      bio: "Wajahat brings over 20 years of experience in the mining and energy sectors. He holds a PhD in Geology from MIT and has led strategic initiatives for major lithium suppliers across three continents. His vision has positioned Quantum Green Energy as a trusted leader in sustainable spodumene sourcing.",
      linkedin: "#",
      email: "w.siddiqui@quantumgenergy.com"
    },
    {
      name: "Nizar Joober",
      role: "Chief Operating Officer",
      bio: "With 15 years of operational excellence in mining consultancy, Nizar oversees all day-to-day operations and client relationships. He previously managed supply chain operations for one of Australia's largest lithium producers and has extensive expertise in mine site evaluation and logistics optimization.",
      linkedin: "#",
      email: "n.joober@quantumgenergy.com"
    },
    {
      name: "John Snow",
      role: "Chief Financial Officer",
      bio: "John is a seasoned financial strategist with expertise in commodities trading and international finance. He holds an MBA from Columbia Business School and has worked with leading investment firms specializing in critical minerals. John ensures our clients receive competitive pricing and optimal contract structures.",
      linkedin: "#",
      email: "j.snow@quantumgenergy.com"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Our Leadership Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Meet the experienced professionals guiding Quantum Green Energy's mission to connect 
              sustainable mining operations with clean energy initiatives worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-professional transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold text-primary-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground text-center mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold text-center mb-4">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a 
                      href={member.linkedin}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
