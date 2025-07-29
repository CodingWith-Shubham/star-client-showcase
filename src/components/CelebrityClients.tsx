import { Badge } from "@/components/ui/badge";
import { Star, Sparkles } from "lucide-react";
import celebrity1 from "@/assets/celebrity-1.jpg";
import celebrity2 from "@/assets/celebrity-2.jpg";
import celebrity3 from "@/assets/celebrity-3.jpg";
import celebrity4 from "@/assets/celebrity-4.jpg";

interface CelebrityClient {
  id: string;
  name: string;
  profession: string;
  image: string;
  clientSince: string;
  status: "featured" | "ongoing" | "vip";
  isActive?: boolean;
}

const celebrityClients: CelebrityClient[] = [
  {
    id: "1",
    name: "Yo Yo Honey Singh",
    profession: "Singer & Rapper",
    image: celebrity1,
    clientSince: "2023",
    status: "featured",
    isActive: true,
  },
  {
    id: "2", 
    name: "Urvashi Rautela",
    profession: "Actress & Model",
    image: celebrity2,
    clientSince: "2023",
    status: "ongoing",
    isActive: true,
  },
  {
    id: "3",
    name: "Arjun Rampal",
    profession: "Actor & Producer",
    image: celebrity3,
    clientSince: "2022",
    status: "vip",
  },
  {
    id: "4",
    name: "Kriti Sanon",
    profession: "Actress",
    image: celebrity4,
    clientSince: "2024",
    status: "featured",
    isActive: true,
  },
];

const CelebrityClients = () => {
  const getStatusBadge = (status: string) => {
    const badges = {
      featured: { label: "Featured", className: "bg-gradient-gold text-luxury-darker font-semibold" },
      ongoing: { label: "Ongoing", className: "bg-luxury-platinum text-luxury-dark font-semibold" },
      vip: { label: "VIP", className: "bg-luxury-glow text-luxury-darker font-semibold animate-luxury-glow" },
    };
    
    return badges[status as keyof typeof badges] || badges.featured;
  };

  return (
    <section className="py-20 bg-gradient-luxury relative overflow-hidden">
      {/* Background Sparkles */}
      <div className="absolute inset-0 opacity-10">
        <Sparkles className="absolute top-20 left-10 text-luxury-gold animate-float" size={24} />
        <Star className="absolute top-32 right-20 text-luxury-platinum animate-pulse" size={16} />
        <Sparkles className="absolute bottom-20 left-1/4 text-luxury-glow animate-float" size={20} />
        <Star className="absolute bottom-32 right-1/3 text-luxury-gold animate-pulse" size={14} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-glass backdrop-blur-sm border border-luxury-platinum/20 rounded-full px-6 py-2 mb-6">
            <Star className="text-luxury-gold" size={16} />
            <span className="text-luxury-platinum text-sm font-medium">Celebrity Portfolio</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Our <span className="bg-gradient-gold bg-clip-text text-transparent">Star</span> Clients
          </h2>
          
          <p className="text-xl text-luxury-platinum max-w-2xl mx-auto leading-relaxed">
            Icons who trust our lens to capture their most memorable moments
          </p>
        </div>

        {/* Celebrity Grid - Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {celebrityClients.map((client, index) => (
            <CelebrityCard key={client.id} client={client} index={index} />
          ))}
        </div>

        {/* Celebrity Scroll - Mobile */}
        <div className="md:hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 px-4 -mx-4 snap-x snap-mandatory">
            {celebrityClients.map((client, index) => (
              <div key={client.id} className="flex-shrink-0 w-72 snap-center">
                <CelebrityCard client={client} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 text-luxury-platinum">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-luxury-gold"></div>
            <span className="text-sm font-medium">Join Our Elite Clientele</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-luxury-gold"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface CelebrityCardProps {
  client: CelebrityClient;
  index: number;
}

const CelebrityCard = ({ client, index }: CelebrityCardProps) => {
  const statusBadge = getStatusBadge(client.status);
  
  return (
    <div 
      className="group relative"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Status Ribbon */}
      <div className="absolute -top-2 -right-2 z-20">
        <Badge className={`${statusBadge.className} shadow-lg border-0 text-xs px-3 py-1`}>
          {statusBadge.label}
        </Badge>
      </div>

      {/* Card Container */}
      <div className="relative bg-gradient-glass backdrop-blur-xl border border-luxury-platinum/20 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-luxury group-hover:border-luxury-gold/30">
        
        {/* Shine Effect */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
        </div>

        {/* Profile Image */}
        <div className="relative mb-6 mx-auto w-24 h-24">
          {/* Glow Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-gold p-[2px] group-hover:animate-luxury-glow">
            <div className="w-full h-full rounded-full bg-luxury-darker p-1">
              <img
                src={client.image}
                alt={client.name}
                className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          
          {/* Active Indicator */}
          {client.isActive && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-gold rounded-full border-2 border-luxury-darker flex items-center justify-center">
              <div className="w-2 h-2 bg-luxury-darker rounded-full animate-pulse" />
            </div>
          )}
        </div>

        {/* Client Info */}
        <div className="text-center space-y-3">
          <h3 className="text-white font-bold text-lg leading-tight group-hover:text-luxury-gold transition-colors duration-300">
            {client.name}
          </h3>
          
          <p className="text-luxury-platinum text-sm font-medium">
            {client.profession}
          </p>
          
          <div className="inline-flex items-center gap-2 bg-luxury-darker/50 backdrop-blur-sm rounded-full px-3 py-1 border border-luxury-platinum/10">
            <Star className="text-luxury-gold" size={12} />
            <span className="text-luxury-platinum text-xs font-medium">
              Client Since {client.clientSince}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const getStatusBadge = (status: string) => {
  const badges = {
    featured: { label: "Featured", className: "bg-gradient-gold text-luxury-darker font-semibold" },
    ongoing: { label: "Ongoing", className: "bg-luxury-platinum text-luxury-dark font-semibold" },
    vip: { label: "VIP", className: "bg-luxury-glow text-luxury-darker font-semibold animate-luxury-glow" },
  };
  
  return badges[status as keyof typeof badges] || badges.featured;
};

export default CelebrityClients;