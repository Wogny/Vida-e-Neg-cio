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
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
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
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-400">
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
              <p className="text-gray-500 uppercase tracking-widest text-xs font-semibold">{stat.label}</p>
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
          <p className="text-lg text-gray-400 leading-relaxed">
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
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
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
          <h2 className="text-3xl md:text-5xl font-bold">O que nossos <span className="text-accent-gold">clientes dizem</span></h2>
          <p className="text-gray-500">A confiança de quem já conta com a nossa proteção.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-neutral-900/50 border-primary/10 p-8 hover:border-primary/30 transition-colors group hover-lift">
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed">"{t.content}"</p>
              <div>
                <p className="font-bold text-white group-hover:text-primary transition-colors">{t.name}</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</p>
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
  const rows = [
    { feature: "Atendimento", ccvida: "Consultivo e Humano", tradicional: "Call centers impessoais" },
    { feature: "Personalização", ccvida: "Plano sob medida", tradicional: "Pacotes engessados" },
    { feature: "Flexibilidade", ccvida: "Soluções adaptadas", tradicional: "Planos pré-definidos" },
    { feature: "Suporte no Sinistro", ccvida: "Acompanhamento total", tradicional: "Você resolve sozinho" },
  ];

  return (
    <section id="comparativo" className="section-light py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Por que escolher a <span className="text-accent-gold">C&C?</span></h2>
          <p className="text-gray-500">Compare e veja a diferença de uma corretora de elite.</p>
        </div>
        {/* Indicador de scroll para mobile */}
        <div className="md:hidden text-center text-sm text-gray-500 mb-2 flex items-center justify-center gap-2">
          <span>←</span>
          <span>Deslize para ver mais</span>
          <span>→</span>
        </div>
        <div className="max-w-4xl mx-auto overflow-x-auto rounded-2xl border border-primary/20 shadow-2xl scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
          <table className="w-full border-collapse text-left min-w-[600px]">
            <thead>
              <tr className="bg-primary/10 border-b border-primary/20">
                <th className="p-4 md:p-6 font-bold text-gray-300 whitespace-nowrap">Diferencial</th>
                <th className="p-4 md:p-6 font-bold text-primary whitespace-nowrap">C&C Vida e Negócio</th>
                <th className="p-4 md:p-6 font-bold text-gray-500 whitespace-nowrap">Seguradoras Tradicionais</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/10">
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-primary/5 transition-colors">
                  <td className="p-4 md:p-6 text-gray-400 font-medium whitespace-nowrap">{row.feature}</td>
                  <td className="p-4 md:p-6 text-white font-semibold">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span>{row.ccvida}</span>
                    </div>
                  </td>
                  <td className="p-4 md:p-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 opacity-50 shrink-0" />
                      <span>{row.tradicional}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-16">
          <a href="https://wa.me/5517992378821?text=Ol%C3%A1%20Cleber!%20Vi%20o%20site%20da%20C%26C%20Vida%20e%20Neg%C3%B3cio%20e%20gostaria%20de%20conhecer%20melhor%20as%20solu%C3%A7%C3%B5es%20de%20prote%C3%A7%C3%A3o%20que%20voc%C3%AAs%20oferecem." target="_blank" rel="noopener noreferrer">
            <Button className="btn-gold text-lg h-14 px-12">
              Conheça Nossas Soluções
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

/* Como Funciona Section */
export function ComoFuncionaSection() {
  const steps = [
    {
      number: "01",
      title: "Consultoria Inicial",
      description: "Entendemos seu perfil e necessidades reais em uma conversa rápida via WhatsApp.",
    },
    {
      number: "02",
      title: "Análise de Mercado",
      description: "Buscamos nas melhores seguradoras a solução com o melhor custo-benefício para você.",
    },
    {
      number: "03",
      title: "Proteção Ativada",
      description: "Você assina sua apólice e passa a contar com nossa assessoria permanente.",
    },
  ];

  return (
    <section id="como-funciona" className="bg-black py-20 md:py-32">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">Processo <span className="text-accent-gold">Simples e Seguro</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-neutral-900 border border-primary/20 rounded-xl p-8 flex items-start gap-6 hover:border-primary/50 transition-all group hover-lift">
              <div className="text-4xl font-black text-primary/40 group-hover:text-primary transition-colors shrink-0 pt-1">
                {step.number}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* FAQ Section */
export function FAQSection() {
  const faqs = [
    {
      question: "Por que contratar um seguro de vida?",
      answer: "O seguro de vida garante a manutenção do padrão de vida da sua família em momentos difíceis, além de poder oferecer coberturas para doenças graves e invalidez para o próprio segurado."
    },
    {
      question: "Como funciona o seguro empresarial?",
      answer: "Ele protege o patrimônio físico da sua empresa, mas também pode garantir a continuidade do negócio em caso de ausência de sócios-chave ou responsabilidades civis."
    },
    {
      question: "Qual o diferencial da C&C?",
      answer: "Nosso diferencial é o atendimento personalizado. Não somos apenas um site de vendas; somos consultores que analisam cada detalhe para que você não pague por coberturas desnecessárias."
    },
    {
      question: "Como solicitar uma cotação?",
      answer: "Basta clicar em qualquer botão de WhatsApp no site ou preencher o formulário abaixo. Entraremos em contato em poucos minutos."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="section-light py-20 md:py-32">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Dúvidas <span className="text-accent-gold">Frequentes</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-primary/10 rounded-xl overflow-hidden bg-neutral-900/30">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-primary/5 transition-colors"
              >
                <span className="font-bold text-gray-200">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === i && (
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-primary/5">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Formulário Section */
export function FormularioSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [profile, setProfile] = useState("");
  const [healthHistory, setHealthHistory] = useState("");
  const [needs, setNeeds] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá Cleber! Me chamo ${name}.
Meu perfil/ocupação: ${profile || 'Não informado'}.
Histórico de doenças: ${healthHistory || 'Não informado'}.
O que procuro/necessito: ${needs || 'Não informado'}.
Meu WhatsApp: ${phone}.
Vi seu site e gostaria de uma consultoria.`;
    window.open(`https://wa.me/5517992378821?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="formulario" className="bg-black pt-20 pb-10 md:pt-32 md:pb-16 relative">
      <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto bg-neutral-900 border border-primary/20 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12 bg-primary/10 text-center border-b border-primary/10">
            <h2 className="text-3xl font-bold mb-4">Solicite sua <span className="text-accent-gold">Consultoria Especializada</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Quanto mais detalhes você fornecer, melhor o Cleber poderá preparar uma solução personalizada para o seu caso.</p>
          </div>
          <div className="p-8 md:p-12 bg-neutral-900">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Nome Completo</label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black border border-primary/20 rounded-lg p-4 focus:border-primary outline-none transition-colors"
                  placeholder="Ex: João Silva"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">WhatsApp</label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-black border border-primary/20 rounded-lg p-4 focus:border-primary outline-none transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Seu Perfil (Ocupação / Empresa)</label>
                  <input
                    type="text"
                    value={profile}
                    onChange={(e) => setProfile(e.target.value)}
                    className="w-full bg-black border border-primary/20 rounded-lg p-4 focus:border-primary outline-none transition-colors"
                    placeholder="Ex: Profissional Liberal"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Histórico de Doenças</label>
                <textarea
                  value={healthHistory}
                  onChange={(e) => setHealthHistory(e.target.value)}
                  rows={2}
                  className="w-full bg-black border border-primary/20 rounded-lg p-4 focus:border-primary outline-none transition-colors resize-none"
                  placeholder="Informe se possui algum histórico relevante de saúde..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">O que você procura ou necessita?</label>
                <textarea
                  required
                  value={needs}
                  onChange={(e) => setNeeds(e.target.value)}
                  rows={4}
                  className="w-full bg-black border border-primary/20 rounded-lg p-4 focus:border-primary outline-none transition-colors resize-none"
                  placeholder="Explique detalhadamente sua necessidade para que possamos te ajudar melhor..."
                />
              </div>

              <Button type="submit" className="btn-gold w-full h-16 text-lg mt-4 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                Enviar Solicitação via WhatsApp
              </Button>
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
    <footer className="bg-black pt-16 pb-8 border-t border-primary/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="text-2xl font-bold text-primary tracking-tighter">
              C&C VIDA E NEGÓCIO
            </div>
            <p className="text-gray-500 max-w-sm">
              Especialistas em seguros de elite. Protegendo o seu futuro com transparência, ética e as melhores soluções do mercado.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="https://wa.me/5517992378821?text=Ol%C3%A1%20Cleber!%20Vi%20o%20site%20da%20C%26C%20Vida%20e%20Neg%C3%B3cio%20e%20gostaria%20de%20conhecer%20melhor%20as%20solu%C3%A7%C3%B5es%20de%20prote%C3%A7%C3%A3o%20que%20voc%C3%AAs%20oferecem." target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition flex items-center gap-2">
                  WhatsApp: (17) 99237-8821
                </a>
              </li>
              <li className="text-gray-400">Catanduva, SP</li>
              <li className="text-gray-400">Atendimento em todo o Brasil</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <div className="space-y-4">
              <p className="text-xs text-gray-600">
                CNPJ: 51.820.039/0001-96
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Corretora de seguros autorizada pela SUSEP. Proteção garantida pelas maiores seguradoras.
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary/5 pt-8 text-center">
          <p className="text-gray-600 text-xs font-medium tracking-widest uppercase">
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
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-3 group animate-pulse-gold"
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
