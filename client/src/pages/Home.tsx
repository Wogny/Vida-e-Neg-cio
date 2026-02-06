import {
  HeroSection,
  StatsSection,
  ApresentacaoSection,
  DepoimentosSection,
  ComparativoSection,
  ComoFuncionaSection,
  FAQSection,
  FormularioSection,
  Footer,
  Header,
} from "@/components/LandingComponents";

/**
 * C&C Vida e Negócio - Landing Page
 * Design: Luxury Gold Theme with Dark Accents
 * 
 * Seções:
 * 1. Hero Section - Headline forte e CTAs principais
 * 2. Stats Section - Números animados de impacto
 * 3. Apresentação - Quem é C&C e diferencial
 * 4. Depoimentos - 3 cards com 5 estrelas
 * 5. Comparativo - C&C vs Seguradoras Tradicionais
 * 6. Como Funciona - 3 passos simples
 * 7. FAQ - Dúvidas frequentes
 * 8. Formulário - Contato via WhatsApp
 * Footer - Informações legais e contato
 */
export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <HeroSection />
        <ApresentacaoSection />
        <DepoimentosSection />
        <ComparativoSection />
        <ComoFuncionaSection />
        <FAQSection />
        <FormularioSection />
      </main>
      <Footer />
    </div>
  );
}
