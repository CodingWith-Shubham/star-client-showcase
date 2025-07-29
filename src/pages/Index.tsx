import CelebrityClients from "@/components/CelebrityClients";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-luxury relative">
        <div className="text-center text-white z-10">
          <h1 className="text-6xl font-bold mb-6 tracking-tight">
            Premium <span className="bg-gradient-gold bg-clip-text text-transparent">Creative</span> Studio
          </h1>
          <p className="text-xl text-luxury-platinum max-w-2xl mx-auto leading-relaxed">
            Where artistry meets excellence. We create visual masterpieces for the world's most distinguished clients.
          </p>
        </div>
      </section>

      {/* Celebrity Clients Section */}
      <CelebrityClients />
    </div>
  );
};

export default Index;
