import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Star, Check, X } from "lucide-react";
import { useState } from "react";

/* Header Component */
export function Header() {
  return (
    <>
      {/* Skip Link para acessibilidade */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-black focus:px-4 focus:py-2 focus:rounded"
      >
        Pular para o conteúdo principal
      </a>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-primary/20" role="banner">
        <div className="container py-4 flex justify-between items-center">
          <a href="#hero" className="flex items-center gap-3" aria-label="Ir para o início">
            <picture>
              <source srcSet="/assets/logo-no-bg.webp" type="image/webp" />
              <img
                src="/assets/logo-no-bg.png"
                alt="Logo C&C Vida e Negócio"
                className="h-10 w-auto"
                width="40"
                height="40"
              />
            </picture>
            <span className="text-xl font-bold text-primary tracking-tighter">
              C&C VIDA E NEGÓCIO
            </span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium" role="navigation" aria-label="Navegação principal">
            <a href="#hero" className="hover:text-primary transition focus:outline-none focus:text-primary">Início</a>
            <a href="#apresentacao" className="hover:text-primary transition focus:outline-none focus:text-primary">Sobre</a>
            <a href="#comparativo" className="hover:text-primary transition focus:outline-none focus:text-primary">Soluções</a>
            <a href="#faq" className="hover:text-primary transition focus:outline-none focus:text-primary">FAQ</a>
            <a href="#formulario" className="hover:text-primary transition focus:outline-none focus:text-primary">Contato</a>
          </nav>
        </div>
      </header>
    </>
  );
}

/* Hero Section */
export function HeroSection() {
  return (
    <section id="hero" className="section-light pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block border border-primary/30 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              Proteção Familiar & Empresarial
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Proteja o que mais importa: <br />
              <span className="text-accent-gold font-bowie font-bold">Sua Vida, Seu Negócio e Sua Familia</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              Especialistas em seguros personalizados. Garantimos a tranquilidade da sua família e a continuidade do seu empreendimento com soluções de elite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/5517992378821?text=Ol%C3%A1%20Cleber!%20Vi%20o%20site%20da%20C%26C%20Vida%20e%20Neg%C3%B3cio%20e%20gostaria%20de%20conhecer%20melhor%20as%20solu%C3%A7%C3%B5es%20de%20prote%C3%A7%C3%A3o%20que%20voc%C3%AAs%20oferecem." target="_blank" rel="noopener noreferrer">
                <Button className="btn-gold w-full sm:w-auto text-base h-14 px-8">
                  Fale Conosco no WhatsApp
                </Button>
              </a>
              <a href="#formulario">
                <Button variant="outline" className="w-full sm:w-auto text-base h-14 px-8 border-primary/50 text-primary hover:bg-primary/10">
                  Solicite uma Cotação
                </Button>
              </a>
            </div>
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-primary/80">
              <p className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                Atendimento Personalizado
              </p>
              <p className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                Resposta Rápida
              </p>
              <p className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                Consultoria Especializada
              </p>
              <p className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                Soluções Sob Medida
              </p>
            </div>
          </div>
          <div className="relative group">
            {/* Efeito de brilho ao fundo */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700 pointer-events-none" />

            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl border border-primary/20 shadow-2xl bg-neutral-900 group-hover:border-primary/40 transition-colors duration-500">
              <picture>
                <source srcSet="/assets/familia-cleber.webp" type="image/webp" />
                <img
                  src="/assets/familia-cleber.png"
                  alt="Cleber Carrijo, fundador da C&C Vida e Negócio, com sua família - especialistas em seguros de vida e empresariais em Catanduva SP"
                  className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </picture>
              {/* Overlay gradiente para elegância */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Stats Section */
export function StatsSection() {
  const stats = [
    { label: "Clientes Satisfeitos", value: "500+" },
    { label: "Capital Segurado", value: "R$ 50M+" },
    { label: "Taxa de Satisfação", value: "98%" },
    { label: "Anos de Experiência", value: "10+" },
  ];

  return (
    <section id="stats" className="bg-black py-16 md:py-24 border-y border-primary/10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <p className="text-primary/60 uppercase tracking-widest text-xs font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Apresentação Section */
export function ApresentacaoSection() {
  const differentials = [
    { title: "Consultoria Especializada", description: "Atendimento individualizado para entender seu momento de vida." },
    { title: "Análise Criteriosa", description: "Estudo detalhado de riscos para garantir as melhores coberturas." },
    { title: "Suporte Total", description: "Acompanhamento completo e humanizado em momentos de sinistro." },
    { title: "Parceria Global", description: "Conexão direta com as maiores e mais sólidas seguradoras do mundo." }
  ];

  return (
    <section id="apresentacao" className="section-light py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Sua tranquilidade é o nosso <br />
            <span className="text-accent-gold">maior compromisso.</span>
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            A C&C Vida e Negócio nasceu da união de princípios familiares e da visão de Cleber e sua esposa, que juntos construíram uma consultoria de seguros verdadeiramente consultiva. Nosso compromisso é com a sua tranquilidade, protegendo o seu patrimônio e, acima de tudo, quem você mais ama, com estratégias sólidas e personalizadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentials.map((item, i) => (
            <div key={i} className="bg-neutral-900/50 border border-primary/10 rounded-2xl p-8 hover:border-primary/40 transition-all group flex items-start gap-6 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 group-hover:bg-primary/20 transition-colors">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-primary/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Depoimentos Section */
export function DepoimentosSection() {
  const testimonials = [
    {
      name: "Ricardo Oliveira",
      role: "Empresário",
      content: "O atendimento do Cleber foi excepcional. Ele conseguiu entender exatamente o que minha empresa precisava e desenhou um plano que me deu total segurança.",
      stars: 5
    },
    {
      name: "Mariana Silva",
      role: "Médica",
      content: "Sempre tive dúvidas sobre seguro de vida, mas na C&C tudo foi explicado de forma clara. Hoje durmo tranquila sabendo que minha família está protegida.",
      stars: 5
    },
    {
      name: "Carlos Eduardo",
      role: "Advogado",
      content: "Eficiência e profissionalismo definem. O processo foi rápido e as coberturas superaram minhas expectativas. Recomendo fortemente!",
      stars: 5
    }
  ];

  return (
    <section id="depoimentos" className="bg-black py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            O que dizem nossos <br />
            <span className="text-accent-gold">clientes de elite.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-neutral-900/50 border-primary/10 p-8 rounded-2xl hover:border-primary/40 transition-all group">
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/90 italic mb-8 leading-relaxed">"{t.content}"</p>
              <div>
                <p className="font-bold text-white group-hover:text-primary transition-colors">{t.name}</p>
                <p className="text-primary/60 text-sm">{t.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Comparativo Section */
export function ComparativoSection() {
  const features = [
    { name: "Consultoria Personalizada", cc: true, others: false },
    { name: "Análise de Riscos Detalhada", cc: true, others: false },
    { name: "Suporte em Sinistros 24h", cc: true, others: "Limitado" },
    { name: "Acesso às Melhores Seguradoras", cc: true, others: true },
    { name: "Estratégias de Sucessão Familiar", cc: true, others: false },
    { name: "Proteção de Capital Social", cc: true, others: false },
  ];

  return (
    <section id="comparativo" className="section-light py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Por que escolher a <br />
            <span className="text-accent-gold">C&C Vida e Negócio?</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-primary/20 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary/10">
                <th className="p-6 text-primary font-bold uppercase tracking-widest text-xs">Diferenciais</th>
                <th className="p-6 text-primary font-bold uppercase tracking-widest text-xs text-center">C&C Vida e Negócio</th>
                <th className="p-6 text-primary/80 font-bold uppercase tracking-widest text-xs text-center">Outras Corretoras</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/10">
              {features.map((f, i) => (
                <tr key={i} className="hover:bg-primary/5 transition-colors">
                  <td className="p-6 text-white font-medium">{f.name}</td>
                  <td className="p-6 text-center">
                    {f.cc ? <Check className="w-6 h-6 text-primary mx-auto" /> : <X className="w-6 h-6 text-primary/20 mx-auto" />}
                  </td>
                  <td className="p-6 text-center text-primary/60">
                    {typeof f.others === "string" ? f.others : (f.others ? <Check className="w-5 h-5 mx-auto" /> : <X className="w-5 h-5 mx-auto" />)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* FAQ Section */
export function FAQSection() {
  const faqs = [
    {
      q: "Como funciona a consultoria da C&C?",
      a: "Nossa consultoria começa com um diagnóstico completo do seu momento atual, identificando riscos e necessidades específicas para então apresentar as melhores soluções de proteção."
    },
    {
      q: "Quais tipos de seguros vocês oferecem?",
      a: "Somos especialistas em Seguro de Vida (Individual e em Grupo), Seguro Empresarial, Responsabilidade Civil, Previdência Privada e estratégias de Sucessão Empresarial."
    },
    {
      q: "O atendimento é apenas em Catanduva?",
      a: "Não! Embora nossa sede seja em Catanduva/SP, utilizamos tecnologia de ponta para atender clientes e empresas em todo o território nacional com a mesma excelência."
    },
    {
      q: "Como solicitar uma cotação?",
      a: "Você pode clicar no botão do WhatsApp para falar diretamente conosco ou preencher o formulário abaixo. Retornamos seu contato em poucos minutos."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-black py-20 md:py-32">
      <div className="container max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Dúvidas Frequentes</h2>
          <p className="text-primary/60">Esclareça os principais pontos sobre nossas soluções.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-primary/10 rounded-2xl overflow-hidden transition-all hover:border-primary/30">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors"
              >
                <span className="font-bold text-white">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === i && (
                <div className="p-6 bg-neutral-900/10 text-primary/80 leading-relaxed border-t border-primary/5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Form Section */
export function FormSection() {
  return (
    <section id="formulario" className="section-light py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full translate-y-1/2 pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto bg-neutral-900/80 border border-primary/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="p-8 md:p-12 md:w-1/2 bg-primary/5 flex flex-col justify-center space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para proteger seu futuro?</h2>
              <p className="text-primary/70">Preencha os dados e um de nossos consultores especialistas entrará em contato.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-white">Consultoria 100% Gratuita</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-white">Análise Personalizada</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-white">As Melhores Taxas do Mercado</p>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-12 md:w-1/2">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary/60">Nome Completo</label>
                <input type="text" className="w-full bg-black/50 border border-primary/20 rounded-xl p-4 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary/60">WhatsApp</label>
                <input type="tel" className="w-full bg-black/50 border border-primary/20 rounded-xl p-4 text-white focus:border-primary focus:outline-none transition-colors" placeholder="(00) 00000-0000" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-primary/60">Tipo de Seguro</label>
                <select className="w-full bg-black/50 border border-primary/20 rounded-xl p-4 text-white focus:border-primary focus:outline-none transition-colors appearance-none">
                  <option>Seguro de Vida</option>
                  <option>Seguro Empresarial</option>
                  <option>Previdência Privada</option>
                  <option>Outros</option>
                </select>
              </div>
              <Button className="btn-gold w-full h-14 text-base mt-4">Solicitar Contato</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Footer Component */
export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-primary/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="text-2xl font-bold text-primary tracking-tighter">
              C&C VIDA E NEGÓCIO
            </div>
            <p className="text-primary/60 max-w-sm">
              Especialistas em seguros de elite. Protegendo o seu futuro com transparência, ética e as melhores soluções do mercado.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="https://wa.me/5517992378821?text=Ol%C3%A1%20Cleber!%20Vi%20o%20site%20da%20C%26C%20Vida%20e%20Neg%C3%B3cio%20e%20gostaria%20de%20conhecer%20melhor%20as%20solu%C3%A7%C3%B5es%20de%20prote%C3%A7%C3%A3o%20que%20voc%C3%AAs%20oferecem." target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary transition flex items-center gap-2">
                  WhatsApp: (17) 99237-8821
                </a>
              </li>
              <li className="text-primary/60">Catanduva, SP</li>
              <li className="text-primary/60">Atendimento em todo o Brasil</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <div className="space-y-4">
              <p className="text-xs text-primary/40">
                CNPJ: 51.820.039/0001-96
              </p>
              <p className="text-xs text-primary/40 leading-relaxed">
                Corretora de seguros autorizada pela SUSEP. Proteção garantida pelas maiores seguradoras.
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary/5 pt-8 text-center">
          <p className="text-primary/40 text-xs font-medium tracking-widest uppercase">
            &copy; 2026 C&C Vida e Negócio. Excelência em Seguros.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* Floating WhatsApp Button */
export function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/5517992378821?text=Ola%20Cleber!%20Vi%20o%20site%20da%20C%26C%20Vida%20e%20Negocio%20e%20gostaria%20de%20conhecer%20melhor%20as%20solucoes%20de%20protecao%20que%20voces%20oferecem."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-black rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-3 group animate-pulse-gold"
      aria-label="Fale conosco pelo WhatsApp"
      role="button"
    >
      {/* Tooltip */}
      <span className="hidden group-hover:block bg-neutral-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
        Fale conosco!
      </span>
      <svg
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}
