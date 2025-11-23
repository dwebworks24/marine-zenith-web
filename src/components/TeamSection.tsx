import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import managingDirector from "@/assets/team/managing-director.jpg";
import accountsManager from "@/assets/team/accounts-manager.jpg";
import itPrOfficer from "@/assets/team/it-pr-officer.jpg";
import assistantManager1 from "@/assets/team/assistant-manager-1.jpg";
import assistantManager2 from "@/assets/team/assistant-manager-2.jpg";
import navalArchitect from "@/assets/team/naval-architect.jpg";
import structuralEngineer from "@/assets/team/structural-engineer.jpg";
import pipingEngineer from "@/assets/team/piping-engineer.jpg";
import draughtsman1 from "@/assets/team/draughtsman-1.jpg";
import draughtsman2 from "@/assets/team/draughtsman-2.jpg";
import consultant1 from "@/assets/team/consultant-1.jpg";
import consultant2 from "@/assets/team/consultant-2.jpg";

const teamMembers = [
  {
    name: "Robert Chen",
    role: "Managing Director",
    photo: managingDirector,
    bio: "Leading Agile Marine with 20+ years of maritime industry expertise",
  },
  {
    name: "Sarah Ahmed",
    role: "Accounts Manager",
    photo: accountsManager,
    bio: "Expert in financial management and maritime accounting",
  },
  {
    name: "Michael Torres",
    role: "IT & PR Officer",
    photo: itPrOfficer,
    bio: "Driving technology innovation and public relations",
  },
  {
    name: "Emily Zhang",
    role: "Assistant Manager",
    photo: assistantManager1,
    bio: "Supporting operational excellence across all projects",
  },
  {
    name: "Priya Sharma",
    role: "Assistant Manager",
    photo: assistantManager2,
    bio: "Coordinating teams for seamless project execution",
  },
  {
    name: "James Anderson",
    role: "Sr. Naval Architect",
    photo: navalArchitect,
    bio: "15+ years designing cutting-edge maritime vessels",
  },
  {
    name: "David Martinez",
    role: "Sr. Structural Engineer",
    photo: structuralEngineer,
    bio: "Expert in structural analysis and marine engineering",
  },
  {
    name: "Ahmed Hassan",
    role: "Sr. Piping & Machinery Engineer",
    photo: pipingEngineer,
    bio: "Specialist in piping systems and machinery design",
  },
  {
    name: "Lucas Bennett",
    role: "Draughtsman",
    photo: draughtsman1,
    bio: "Precise technical drawings and production documentation",
  },
  {
    name: "Mei Lin",
    role: "Draughtsman",
    photo: draughtsman2,
    bio: "CAD specialist creating detailed vessel plans",
  },
  {
    name: "Richard Cooper",
    role: "Maritime Consultant",
    photo: consultant1,
    bio: "Strategic advisor with deep industry knowledge",
  },
  {
    name: "Sofia Rodriguez",
    role: "Maritime Consultant",
    photo: consultant2,
    bio: "Specialized consultant for regulatory compliance",
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="text-6xl font-bold gradient-text mb-2">14</div>
            <p className="text-lg text-muted-foreground font-medium">Expert Professionals</p>
          </div>
          <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seasoned Professionals Dedicated to Maritime Excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-300 card-hover"
            >
              <CardContent className="p-0">
                {/* Photo Container */}
                <div className="relative w-full aspect-square overflow-hidden bg-muted">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  
                  {/* Bio Overlay - appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
                
                {/* Info Section */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-base gradient-text font-semibold">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="text-center mt-12">
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform text-white shadow-lg"
            >
              Join Our Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
