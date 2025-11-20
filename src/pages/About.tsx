import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Lightbulb,
  Users,
  TrendingUp,
  Target,
  Shield,
  RefreshCw,
  BookOpen,
  Handshake,
  Leaf,
  Trophy,
  Crown,
  Calculator,
  Monitor,
  UserCheck,
  Compass,
  HardHat,
  Settings,
  PenTool,
  Eye,
  Medal,
  Briefcase,
  Flag,
  Factory,
  FileText,
  BarChart,
  Pencil,
  Waves,
  Box,
  Ship,
} from "lucide-react";
import stakeholdersImage from "@/assets/stakeholders-diagram.jpg";
import teamPhoto from "@/assets/team-photo.jpg";

const values = [
  {
    icon: Trophy,
    title: "Excellence",
    description: "We strive for excellence in everything we do, delivering high-quality maritime consultancy services that meet or exceed client expectations.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Integrity is at the core of our operations. We uphold the highest ethical standards, ensuring transparency, honesty, and trustworthiness in all our interactions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace innovation to drive continuous improvement and find creative solutions to complex maritime challenges.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "Our clients' success is our priority. We are committed to understanding their unique needs and providing customized solutions that add value and achieve results.",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "With a team of experienced professionals, we bring deep industry knowledge and technical expertise to every project, ensuring informed decision-making and effective problem-solving.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "We believe in the power of collaboration and partnership, working closely with clients, stakeholders, and industry peers to achieve mutual success.",
  },
  {
    icon: Leaf,
    title: "Safety and Sustainability",
    description: "Safety and sustainability are paramount in all our operations. We promote practices that protect people, assets, and the environment.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "We are committed to continuous learning and development, staying updated with industry trends, technologies, and best practices to better serve our clients.",
  },
  {
    icon: Target,
    title: "Accountability",
    description: "We take accountability for our actions and decisions, delivering on our promises and taking responsibility for outcomes.",
  },
  {
    icon: RefreshCw,
    title: "Adaptability",
    description: "In a dynamic maritime environment, we pride ourselves on being adaptable and responsive, adjusting our strategies and approaches to meet evolving challenges and opportunities.",
  },
];

const stakeholders = [
  {
    name: "Commercial Owners",
    icon: Briefcase,
    description: "Partnering with commercial vessel owners for operational excellence",
  },
  {
    name: "Classification Societies",
    icon: Shield,
    description: "Working with major classification societies for compliance",
  },
  {
    name: "Private Owners",
    icon: Users,
    description: "Supporting private yacht and vessel owners",
  },
  {
    name: "Shipping Agents",
    icon: Target,
    description: "Collaborating with shipping agents worldwide",
  },
  {
    name: "Shipyards",
    icon: Factory,
    description: "Technical support for shipyard operations",
  },
  {
    name: "Flags & Government",
    icon: Flag,
    description: "Regulatory compliance with flag states and authorities",
  },
];

const team = [
  { role: "Managing Director", count: 1, icon: Crown },
  { role: "Accounts", count: 1, icon: Calculator },
  { role: "IT & Public Relations", count: 1, icon: Monitor },
  { role: "Assistant Manager", count: 2, icon: UserCheck },
  { role: "Sr. Naval Architect", count: 1, icon: Compass },
  { role: "Sr. Structural Engineer", count: 1, icon: HardHat },
  { role: "Sr. Piping & Machinery", count: 1, icon: Settings },
  { role: "Draughtsman", count: 2, icon: PenTool },
  { role: "Consultants", count: 2, icon: Lightbulb },
];

const software = [
  { name: "DRAFTSIGHT", use: "Drafting", icon: Pencil },
  { name: "AUTO HYDRO", use: "Stability Analysis", icon: Waves },
  { name: "DNV NAUTICUS", use: "Structural Analysis", icon: Box },
  { name: "RHINO", use: "3D Modeling", icon: Box },
  { name: "ZOHO", use: "Accounting & CRM", icon: BarChart },
  { name: "MICROSOFT", use: "Documentation", icon: FileText },
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[400px] bg-gradient-to-br from-primary to-secondary text-white flex items-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 wave-animation" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-sm mb-4 opacity-90">
            <Link to="/" className="hover:underline">Home</Link> &gt; About Us
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">About Agile Marine Consultancy</h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in">Your Trusted Partner in Maritime Excellence</p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <img
                src={teamPhoto}
                alt="Agile Marine Team"
                className="rounded-2xl shadow-2xl w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Agile Marine Consultancy, we specialize in delivering innovative solutions and expert consultancy services tailored to the maritime industry. With a deep commitment to excellence and a passion for maritime engineering, we are dedicated to helping our clients navigate challenges and optimize their operations efficiently.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team comprises seasoned professionals with extensive experience across various facets of marine operations, including project management, technical consultancy, regulatory compliance, safety and risk management, and environmental sustainability. Whether you are a shipping company, port authority, or maritime service provider, we are dedicated to supporting your business goals and navigating challenges together with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="card-hover border-none shadow-md bg-gradient-to-br from-primary/10 to-primary/5 animate-fade-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  "Empowering maritime industries through innovative solutions and expert guidance. At Agile Marine Consultancy, our mission is to navigate the complexities of the marine world with adaptability and insight, fostering sustainable practices, enhancing safety, and driving efficiency for our clients worldwide."
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-none shadow-md bg-gradient-to-br from-secondary/10 to-secondary/5 animate-fade-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  "To be the leading force in shaping the future of marine industries worldwide by pioneering innovative solutions, fostering sustainable practices, and setting new standards of excellence. Through our relentless commitment to agility, expertise, and integrity, we envision a world where maritime enterprises thrive, ecosystems flourish, and the seas remain a vital resource for generations to come."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stakeholder Network */}
      <section className="py-20 bg-gradient-to-br from-navy-dark to-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Our Stakeholder Network</h2>
            <p className="text-xl opacity-90">Building Strong Partnerships Across the Maritime Industry</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <img
                src={stakeholdersImage}
                alt="Stakeholders Network Diagram"
                className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              {stakeholders.map((stakeholder, index) => (
                <Card
                  key={index}
                  className="border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all hover:scale-105 cursor-pointer group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <stakeholder.icon className="h-8 w-8" />
                    </div>
                    <div className="font-semibold text-sm mb-2">{stakeholder.name}</div>
                    <p className="text-xs opacity-75">{stakeholder.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-hover border-none shadow-md group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-muted-foreground">14 seasoned professionals committed to your success</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="card-hover border-none shadow-md text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <member.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">{member.role}</h4>
                  <div className="text-2xl font-bold text-primary">{member.count}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Certifications</h2>
            <p className="text-lg text-muted-foreground">Certified by UAF AMERICO</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "ISO 9001", subtitle: "Quality Management Systems" },
              { name: "ISO 14001", subtitle: "Environmental Management" },
              { name: "ISO 45001", subtitle: "Occupational Health & Safety" },
            ].map((cert, index) => (
              <Card key={index} className="card-hover border-none shadow-md group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                    <Medal className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{cert.subtitle}</p>
                  <p className="text-xs text-muted-foreground mt-2">UAF AMERICO</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Tools */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Software & Tools We Use</h2>
            <p className="text-lg text-muted-foreground">Industry-leading technology for superior results</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {software.map((tool, index) => (
              <Card key={index} className="card-hover border-none shadow-md group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                    <tool.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="font-bold text-sm mb-1">{tool.name}</h4>
                  <p className="text-xs text-muted-foreground">{tool.use}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discover how our expertise can elevate your maritime operations
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform">
                Explore Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-transform">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
