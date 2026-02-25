import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <div className="text-center px-6 max-w-lg mx-auto space-y-6">
        <div className="text-8xl md:text-9xl font-black text-accent-gold leading-none"
          style={{
            background: "linear-gradient(to right, #D4AF37, #FFD700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Página não encontrada
        </h1>

        <p className="text-primary/60 leading-relaxed">
          Desculpe, a página que você procura não existe ou foi movida.
        </p>

        <Button
          onClick={handleGoHome}
          className="btn-gold h-14 px-8 text-base mt-4"
        >
          <Home className="w-5 h-5 mr-2" />
          Voltar ao Início
        </Button>
      </div>
    </div>
  );
}
