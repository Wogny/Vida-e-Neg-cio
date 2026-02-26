import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Star, Check, X, Shield, TrendingUp, Scale, Menu, X as XIcon } from "lucide-react";
import { useState, useRef, useCallback, useEffect } from "react";

/* ─── Constants ─── */
const WHATSAPP_NUMBER = "5517992378821";
const WHATSAPP_DEFAULT_MSG = "Olá Cleber! Vi o site da C&C Vida e Negócio e gostaria de conhecer melhor as soluções de proteção que vocês oferecem.";
const whatsappUrl = (msg = WHATSAPP_DEFAULT_MSG) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

/* ─── Scroll Animation Hook ─── */
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

/* ─── Nav Links ─── */
const NAV_LINKS = [
  { href: "#hero", label: "Início" },
  { href: "#apresentacao", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#comparativo", label: "Soluções" },
  { href: "#faq", label: "FAQ" },
  { href: "#formulario", label: "Contato" },
];

/* Header Component */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 text-sm font-medium" role="navigation" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-black rounded px-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <XIcon className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </button>
        </div>
      </header>

      {/* Mobile menu - rendered OUTSIDE header to avoid stacking context issues */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-[60]"
          style={{ top: 73 }}
        >
          {/* Solid black background */}
          <div className="absolute inset-0 bg-[#000000]" />

          <nav className="relative z-10 flex flex-col items-center gap-2 pt-8 px-6" role="navigation" aria-label="Navegação mobile">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="w-full text-center text-lg font-semibold py-4 border-b border-primary/10 text-white hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full"
            >
              <Button className="btn-gold w-full h-14 text-base">
                Fale no WhatsApp
              </Button>
            </a>
          </nav>
        </div>
      )}
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
              <span className="text-accent-gold font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Sua Vida, Seu Negócio e Sua Familia</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              Especialistas em seguros personalizados. Garantimos a tranquilidade da sua família e a continuidade do seu empreendimento com soluções de elite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
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
                  loading="eager"
                  fetchPriority="high"
                  width="600"
                  height="750"
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
    { label: "Anos de Experiência", value: "4+" },
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

  const anim = useScrollAnimation();

  return (
    <section id="apresentacao" ref={anim.ref} className={`section-light py-20 md:py-32 transition-all duration-700 ${anim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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

  const depAnim = useScrollAnimation();

  return (
    <section id="depoimentos" ref={depAnim.ref} className={`bg-black py-20 md:py-32 transition-all duration-700 ${depAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
    { name: "Acesso às Melhores Seguradoras", cc: true, others: false },
    { name: "Estratégias de Sucessão Familiar", cc: true, others: false },
    { name: "Proteção de Capital Social", cc: true, others: false },
  ];

  const compAnim = useScrollAnimation();

  return (
    <section id="comparativo" ref={compAnim.ref} className={`section-light py-20 md:py-32 transition-all duration-700 ${compAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIdx === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
                aria-hidden={openIdx !== i}
              >
                <div className="p-6 bg-neutral-900/10 text-primary/80 leading-relaxed border-t border-primary/5">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Form Section */
export function FormSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [insuranceType, setInsuranceType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá Cleber! Me chamo ${name}.
Meu WhatsApp: ${phone}.
Interesse em: ${insuranceType || "Consultoria Personalizada"}.
Vi o site da C&C Vida e Negócio e gostaria de uma consultoria.`;
    window.open(whatsappUrl(message), "_blank");
  };

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="form-name" className="text-xs font-bold uppercase tracking-widest text-primary/60">Nome Completo</label>
                <input
                  id="form-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black/50 border border-primary/20 rounded-xl p-4 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="form-phone" className="text-xs font-bold uppercase tracking-widest text-primary/60">WhatsApp</label>
                <input
                  id="form-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-black/50 border border-primary/20 rounded-xl p-4 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="form-insurance" className="text-xs font-bold uppercase tracking-widest text-primary/60">Tipo de Seguro</label>
                <select
                  id="form-insurance"
                  value={insuranceType}
                  onChange={(e) => setInsuranceType(e.target.value)}
                  aria-label="Selecione o tipo de seguro desejado"
                  className="w-full bg-black/50 border border-primary/20 rounded-xl p-4 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors appearance-none scrollbar-thin scrollbar-thumb-primary"
                >
                  <option value="">Selecione...</option>
                  <optgroup label="Seguros Individuais">
                    <option>Seguro Vida Inteira (Vitalício)</option>
                    <option>Seguro Vida Inteira Idades Especiais</option>
                    <option>Seguro Vida Inteira Único</option>
                    <option>Seguro Vida Inteira Mais</option>
                    <option>Seguro Prudential Vida & Saúde</option>
                    <option>Seguro de Vida Temporário</option>
                    <option>Seguro Temporário Decrescente</option>
                    <option>Seguro Temporário Preferencial</option>
                    <option>Seguro Renda Familiar</option>
                    <option>Seguro Doenças Graves</option>
                    <option>Seguro Invalidez Acidental</option>
                    <option>Seguro Morte Acidental</option>
                    <option>Seguro Assistência Funeral</option>
                    <option>Seguro Renda Hospitalar</option>
                    <option>Seguro Cirurgia e Cirurgia Ampliada</option>
                  </optgroup>
                  <optgroup label="Seguros Empresariais">
                    <option>Seguro de Vida em Grupo (Corporate)</option>
                    <option>Seguro de Vida em Grupo Express (PME)</option>
                    <option>Seguro Capital Global (PME)</option>
                    <option>Seguro Sucessão Empresarial</option>
                    <option>Seguro Acidentes Pessoais Coletivo</option>
                    <option>Seguro Acidentes Pessoais Eventos</option>
                    <option>Seguro Acidentes Pessoais Passageiros</option>
                    <option>Seguro Viagem Corporativo</option>
                    <option>Seguro Prestamista</option>
                    <option>Seguro Doenças Tropicais</option>
                    <option>Seguro Responsabilidade Civil Profissional (E&O)</option>
                    <option>Seguro Responsabilidade Civil Diretores (D&O)</option>
                    <option>Seguro Garantia Contratual</option>
                    <option>Seguro de Carga e Logística</option>
                    <option>Seguro Patrimonial Empresarial</option>
                  </optgroup>
                  <optgroup label="Finanças">
                    <option>Limpa Nome / Restrições</option>
                    <option>Consórcio</option>
                    <option>Empréstimo / Financiamento</option>
                    <option>Previdência</option>
                    <option>Financiamento Imobiliário</option>
                  </optgroup>
                  <optgroup label="Tributário">
                    <option>Revisão Tributária</option>
                    <option>Holding Patrimonial</option>
                  </optgroup>
                  <option value="Consultoria Personalizada">Outros / Consultoria Personalizada</option>
                </select>
              </div>
              <Button type="submit" className="btn-gold w-full h-14 text-base mt-4">
                Enviar via WhatsApp
              </Button>
              <p className="text-xs text-center text-primary/40 mt-2">
                Ao enviar, você será redirecionado para o WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Services Section - Accordion interativo estilo jamm.co */
const servicesData = [
  {
    id: "seguros",
    title: "Seguros",
    subtitle: "Proteção completa para você, sua família e seu negócio",
    icon: Shield,
    services: [
      {
        name: "Especialista em Seguros Individuais",
        details: "Seguro Vida Inteira; Vitalício, Único, Sucessão Empresarial; Proteção de sócios e continuidade; Idades Especiais; Temporários Padrão, Decrescente, Preferencial; Renda Familiar e Renda Hospitalar; Afastamento por qualquer doença e acidente; Doenças Graves; Invalidez por doença e por acidente; Cirurgia e Assistência Funeral",
      },
      {
        name: "Vida em Grupo - Global e Flex",
        details: "Prudential Vida & Saúde, MAG; Corporate, Express, Capital Global",
      },
      {
        name: "Acidentes Pessoais",
        details: "Coletivo, Eventos, Passageiros",
      },
      {
        name: "Responsabilidade Civil",
        details: "Para profissionais da saúde",
      },
      {
        name: "Seguro Garantia, Carga, Patrimonial e Viagem Corporativa",
        details: null,
      },
      { name: "Seguro Prestamista", details: null },
      { name: "Plano de Saúde", details: null },
      { name: "Seguro Veicular", details: null },
      { name: "Seguro Residencial", details: null },
    ],
  },
  {
    id: "financas",
    title: "Finanças",
    subtitle: "Gestão financeira estratégica e soluções de crédito",
    icon: TrendingUp,
    services: [
      { name: "Limpa nome e retirada de restrições", details: null },
      { name: "Aumento no score e rating", details: null },
      { name: "Atualização no BACEN", details: null },
      { name: "Assessoria financeira personalizada", details: null },
      { name: "Consórcio", details: null },
      { name: "Empréstimo", details: null },
      { name: "Financiamento", details: null },
      { name: "Capital de giro", details: null },
      { name: "Previdência", details: null },
      {
        name: "Especialista em empreendimentos de alto padrão",
        details: null,
      },
      { name: "Financiamento imobiliário", details: null },
      { name: "Gestão de projetos", details: null },
      { name: "Venda na planta", details: null },
      { name: "Compra e venda", details: null },
    ],
  },
  {
    id: "tributario",
    title: "Tributário",
    subtitle: "Planejamento tributário e proteção patrimonial",
    icon: Scale,
    services: [
      { name: "Revisão tributária", details: null },
      { name: "Gestão de passivos", details: null },
      { name: "Holding Patrimonial", details: null },
    ],
  },
];

function ServiceAccordionItem({
  area,
  isOpen,
  onToggle,
  index,
}: {
  area: (typeof servicesData)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  // Recalculate on window resize
  useEffect(() => {
    const handleResize = () => {
      if (isOpen && contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const IconComponent = area.icon;

  return (
    <div className="border-b border-primary/10 last:border-b-0">
      {/* Trigger */}
      <button
        onClick={onToggle}
        className="w-full group cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={`services-panel-${area.id}`}
      >
        <div className="flex items-center justify-between py-6 md:py-8 px-4 md:px-8 hover:bg-primary/5 transition-all duration-300">
          <div className="flex items-center gap-4 md:gap-6">
            {/* Number indicator */}
            <span className="text-sm md:text-base font-mono text-primary/40 group-hover:text-primary transition-colors duration-300 tabular-nums">
              0{index + 1}
            </span>
            {/* Icon */}
            <div
              className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                isOpen
                  ? "bg-primary/20 border-primary/40"
                  : "bg-primary/5 border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/30"
              }`}
            >
              <IconComponent
                className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 ${
                  isOpen ? "text-primary" : "text-primary/50 group-hover:text-primary"
                }`}
              />
            </div>
            {/* Title & subtitle */}
            <div className="text-left">
              <h3
                className={`text-xl md:text-3xl lg:text-4xl font-bold tracking-tight transition-colors duration-300 ${
                  isOpen ? "text-accent-gold" : "text-white group-hover:text-primary"
                }`}
                style={
                  isOpen
                    ? {
                        background: "linear-gradient(to right, #D4AF37, #FFD700)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }
                    : undefined
                }
              >
                {area.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mt-1 hidden sm:block">
                {area.subtitle}
              </p>
            </div>
          </div>

          {/* Chevron + counter */}
          <div className="flex items-center gap-3 md:gap-4">
            <span className="text-xs text-gray-600 font-medium hidden md:block">
              {area.services.length} {area.services.length === 1 ? "serviço" : "serviços"}
            </span>
            <div
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${
                isOpen
                  ? "bg-primary border-primary rotate-180"
                  : "border-primary/20 group-hover:border-primary/50"
              }`}
            >
              <ChevronDown
                className={`w-5 h-5 transition-all duration-500 ${
                  isOpen ? "text-black" : "text-primary/60 group-hover:text-primary"
                }`}
              />
            </div>
          </div>
        </div>
      </button>

      {/* Expandable content */}
      <div
        id={`services-panel-${area.id}`}
        role="region"
        style={{ height }}
        className="overflow-hidden transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      >
        <div ref={contentRef}>
          <div className="px-4 md:px-8 pb-8 md:pb-10">
            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-6 md:mb-8" />

            {/* Services grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {area.services.map((service, i) => (
                <div
                  key={i}
                  className="group/item bg-neutral-900/50 border border-primary/10 rounded-xl p-4 md:p-5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  style={{
                    animationDelay: `${i * 50}ms`,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0 group-hover/item:bg-primary transition-colors" />
                    <div className="space-y-1.5">
                      <span className="text-sm md:text-base font-semibold text-gray-200 group-hover/item:text-white transition-colors leading-tight block">
                        {service.name}
                      </span>
                      {service.details && (
                        <p className="text-xs text-gray-500 leading-relaxed group-hover/item:text-gray-400 transition-colors">
                          {service.details}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA at bottom */}
            <div className="mt-6 md:mt-8 flex justify-center">
              <a
                href={whatsappUrl(`Olá Cleber! Vi o site da C&C Vida e Negócio e gostaria de saber mais sobre os serviços de ${area.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-gold h-12 px-8 text-sm">
                  Saiba mais sobre {area.title}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section id="servicos" className="bg-black py-20 md:py-32">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <div className="inline-block border border-primary/30 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
            Nossas Soluções
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Áreas de <span className="text-accent-gold">Atuação</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Oferecemos soluções completas em três grandes áreas, sempre com
            atendimento consultivo e personalizado.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-primary/15 bg-neutral-950/80 overflow-hidden shadow-2xl">
          {servicesData.map((area, index) => (
            <ServiceAccordionItem
              key={area.id}
              area={area}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
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
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary transition flex items-center gap-2">
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
              <p className="text-xs text-primary/60">
                CNPJ: 51.820.039/0001-96
              </p>
              <p className="text-xs text-primary/60 leading-relaxed">
                Corretora de seguros autorizada pela SUSEP. Proteção garantida pelas maiores seguradoras.
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary/5 pt-8 text-center space-y-2">
          <p className="text-primary/60 text-xs font-medium tracking-widest uppercase">
            &copy; 2026 C&C Vida e Negócio. Excelência em Seguros.
          </p>
          <p className="text-primary/40 text-xs">
            Feito por{" "}
            <a
              href="https://www.mercavejo.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/60 hover:text-primary transition-colors underline underline-offset-2"
            >
              Mercavejo
            </a>
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
      href={whatsappUrl()}
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
