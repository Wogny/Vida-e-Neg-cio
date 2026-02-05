import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Star, Check, X } from "lucide-react";
import { useState } from "react";

/* Hero Section */
export function HeroSection() {
  return (
    <section id="hero" className="section-light pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              PROTEÇÃO FAMILIAR
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "Playfair Display" }}>
              Proteja o que mais importa: Sua Vida e Seu Negócio
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Especialistas em seguros de vida e empresariais, oferecemos soluções personalizadas para garantir a tranquilidade da sua família e a continuidade do seu empreendimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/5517992378821" target="_blank" rel="noopener noreferrer">
                <Button className="btn-gold w-full sm:w-auto text-base h-12">
                  Fale Conosco no WhatsApp
                </Button>
              </a>
              <a href="#formulario">
                <Button variant="outline" className="w-full sm:w-auto text-base h-12">
                  Solicite uma Cotação
                </Button>
              </a>
            </div>
            <div className="pt-6 space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                Atendimento Humano e Personalizado
              </p>
              <p className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                Resposta Rápida
              </p>
              <p className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                Mais de 10 Anos de Experiência
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-orange-100 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary/30" style={{ fontFamily: "Playfair Display" }}>
                C&C
              </div>
              <p className="text-gray-500 mt-2">Imagem do Corretor</p>
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
    <section id="stats" className="section-dark py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: "Playfair Display" }}>
          Nossos Números Falam por Nós
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <Card key={idx} className="bg-secondary/50 border-0 p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: "Playfair Display" }}>
                {stat.value}
              </div>
              <p className="text-secondary-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Apresentação Section */
export function ApresentacaoSection() {
  return (
    <section id="apresentacao" className="section-light py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-primary/10 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary/30" style={{ fontFamily: "Playfair Display" }}>
                CR
              </div>
              <p className="text-gray-500 mt-2">Foto do Cleber</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "Playfair Display" }}>
              Quem é C&C Vida e Negócio
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A C&C Vida e Negócio é mais que uma corretora de seguros; somos seus parceiros na construção de um futuro seguro. Com foco em soluções inovadoras e um atendimento que realmente entende suas necessidades, garantimos proteção e tranquilidade para você, sua família e seu patrimônio.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">Cleber Ribeiro - Fundador e Especialista em Seguros</h3>
                <p className="text-gray-600">
                  Com 10 anos de atuação no mercado de seguros, Cleber Ribeiro construiu a C&C Vida e Negócio com a missão de desmistificar o universo dos seguros, tornando-o acessível e compreensível para todos. Sua paixão é proteger sonhos e garantir a segurança financeira de seus clientes.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Conhecimento Profundo</p>
                    <p className="text-sm text-gray-600">De seguros de vida e proteção familiar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Atendimento Consultivo</p>
                    <p className="text-sm text-gray-600">Personalizado e focado em resultados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Depoimentos Section */
export function DepoimentosSection() {
  const testimonials = [
    {
      text: "Cleber foi muito atencioso e me ajudou a escolher o melhor plano. Processo rápido e sem complicações!",
      author: "Marina Silva",
      location: "São Paulo",
    },
    {
      text: "Excelente atendimento! Contratar seguro nunca foi tão fácil. Recomendo para todos!",
      author: "Carlos Santos",
      location: "Rio de Janeiro",
    },
    {
      text: "Segurança e transparência em primeiro lugar. Cleber realmente se importa com seus clientes.",
      author: "Juliana Costa",
      location: "Belo Horizonte",
    },
  ];

  return (
    <section id="depoimentos" className="section-dark py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: "Playfair Display" }}>
          O que Nossos Clientes Dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="bg-secondary/50 border-0 p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-secondary-foreground mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t border-secondary/30 pt-4">
                <p className="font-semibold text-secondary-foreground">{testimonial.author}</p>
                <p className="text-sm text-secondary-foreground/70">{testimonial.location}</p>
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
  const comparison = [
    { feature: "Agilidade", ccvida: "Contratação e atendimento rápidos", tradicional: "Processos mais longos" },
    { feature: "Transparência", ccvida: "Condições claras e sem letras miúdas", tradicional: "Linguagem complexa" },
    { feature: "Suporte", ccvida: "Consultoria personalizada", tradicional: "Atendimento padronizado" },
    { feature: "Flexibilidade", ccvida: "Soluções adaptadas", tradicional: "Planos pré-definidos" },
    { feature: "Burocracia", ccvida: "Mínima", tradicional: "Alta" },
    { feature: "Experiência Digital", ccvida: "100% online e intuitiva", tradicional: "Dependência de canais físicos" },
  ];

  return (
    <section id="comparativo" className="section-light py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: "Playfair Display" }}>
          Por Que Escolher C&C Vida e Negócio?
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="text-left py-4 px-4 font-bold text-primary">Característica</th>
                <th className="text-left py-4 px-4 font-bold text-primary">C&C Vida e Negócio</th>
                <th className="text-left py-4 px-4 font-bold text-primary">Seguradoras Tradicionais</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-4 font-semibold">{item.feature}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item.ccvida}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{item.tradicional}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-12">
          <a href="https://wa.me/5517992378821" target="_blank" rel="noopener noreferrer">
            <Button className="btn-gold text-base h-12">
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
      title: "Entenda Suas Necessidades",
      description: "Fale conosco via WhatsApp para que possamos compreender seu cenário e objetivos.",
    },
    {
      number: "02",
      title: "Proposta Personalizada",
      description: "Receba uma solução de seguro sob medida, com as melhores condições do mercado.",
    },
    {
      number: "03",
      title: "Proteção Ativada",
      description: "Contrate de forma rápida e digital, garantindo sua tranquilidade e a de quem você ama.",
    },
  ];

  return (
    <section id="como-funciona" className="section-dark py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: "Playfair Display" }}>
          Sua Proteção em 3 Passos Simples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="bg-primary/10 rounded-2xl p-8">
                <div className="text-5xl font-bold text-primary/30 mb-4" style={{ fontFamily: "Playfair Display" }}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ChevronDown className="w-8 h-8 text-primary rotate-90" />
                </div>
              )}
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
      question: "Qual é a cobertura?",
      answer: "Cobertura vitalícia com proteção para morte natural, acidental e doenças graves. Personalizamos conforme suas necessidades.",
    },
    {
      question: "Qual é o preço?",
      answer: "Prêmios a partir de R$ 50/mês. Simulamos seu valor personalizado conforme seu perfil e necessidades.",
    },
    {
      question: "E condições pré-existentes?",
      answer: "Aceitamos condições pré-existentes sem restrições adicionais. Consulte-nos para detalhes específicos.",
    },
    {
      question: "Posso cancelar?",
      answer: "Sim! Você pode cancelar a qualquer momento sem penalidades. Sua tranquilidade é nossa prioridade.",
    },
    {
      question: "Quanto tempo leva para contratar?",
      answer: "O processo é 100% digital e leva apenas 5 minutos. Aprovação em até 1 dia útil.",
    },
    {
      question: "Como faço para contratar?",
      answer: "Fale conosco via WhatsApp, preencha o formulário ou solicite uma cotação. Nossos especialistas guiarão você.",
    },
  ];

  return (
    <section id="faq" className="section-light py-16 md:py-24">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: "Playfair Display" }}>
          Dúvidas Frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-left">{question}</span>
        <ChevronDown className={`w-5 h-5 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

/* Formulário Section */
export function FormularioSection() {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    renda: "",
    filhos: "",
    doencas: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de receber uma cotação. Meu nome é ${formData.nome}, tenho ${formData.idade} anos, renda mensal de R$ ${formData.renda}, ${formData.filhos} filhos e histórico de doenças: ${formData.doencas || "Nenhuma"}`;
    window.open(`https://wa.me/5517992378821?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="formulario" className="bg-gradient-to-b from-background to-gray-100 py-16 md:py-24">
      <div className="container max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ fontFamily: "Playfair Display" }}>
          Receba Sua Cotação Personalizada
        </h2>
        <p className="text-center text-gray-700 text-lg mb-12">
          Preencha o formulário abaixo e um de nossos especialistas entrará em contato em breve para oferecer a melhor solução.
        </p>
        <Card className="bg-white border-4 border-primary shadow-2xl p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-base font-bold mb-3 text-gray-900">Nome Completo *</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-lg bg-white border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base"
                placeholder="Digite seu nome completo"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-base font-bold mb-3 text-gray-900">Idade *</label>
                <input
                  type="number"
                  name="idade"
                  value={formData.idade}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-lg bg-white border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base"
                  placeholder="Ex: 35"
                />
              </div>
              <div>
                <label className="block text-base font-bold mb-3 text-gray-900">Renda Mensal (R$) *</label>
                <input
                  type="text"
                  name="renda"
                  value={formData.renda}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-lg bg-white border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base"
                  placeholder="Ex: 5000"
                />
              </div>
            </div>
            <div>
              <label className="block text-base font-bold mb-3 text-gray-900">Número de Filhos</label>
              <input
                type="number"
                name="filhos"
                value={formData.filhos}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-lg bg-white border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base"
                placeholder="Ex: 2"
              />
            </div>
            <div>
              <label className="block text-base font-bold mb-3 text-gray-900">Histórico de Doenças Graves</label>
              <textarea
                name="doencas"
                value={formData.doencas}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-lg bg-white border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base"
                placeholder="Descreva se houver alguma condição importante"
                rows={4}
              />
            </div>
            <div className="flex gap-4 pt-6">
              <Button type="submit" className="btn-gold flex-1 text-lg h-14 font-bold">
                ✓ Enviar via WhatsApp
              </Button>
            </div>
            <p className="text-sm text-gray-600 text-center mt-6">
              ✓ Seus dados serão utilizados apenas para gerar sua cotação personalizada, conforme a LGPD.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
}

/* Footer */
export function Footer() {
  return (
    <footer className="section-dark py-12 md:py-16 border-t border-secondary/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">C&C Vida e Negócio</h3>
            <p className="text-secondary-foreground/70 text-sm">
              Sua segurança, nossa prioridade. Proteção familiar e empresarial com confiança.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="text-secondary-foreground/70 hover:text-primary transition">Home</a></li>
              <li><a href="#apresentacao" className="text-secondary-foreground/70 hover:text-primary transition">Quem Somos</a></li>
              <li><a href="#depoimentos" className="text-secondary-foreground/70 hover:text-primary transition">Depoimentos</a></li>
              <li><a href="#faq" className="text-secondary-foreground/70 hover:text-primary transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://wa.me/5517992378821" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/70 hover:text-primary transition">
                  WhatsApp: (17) 99237-8821
                </a>
              </li>
              <li className="text-secondary-foreground/70">Catanduva, SP</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <p className="text-xs text-secondary-foreground/70">
              CNPJ: 51.820.039/0001-96
            </p>
            <p className="text-xs text-secondary-foreground/70 mt-2">
              C&C Vida e Negócio é uma corretora de seguros devidamente registrada e autorizada a operar no Brasil.
            </p>
          </div>
        </div>
        <div className="border-t border-secondary/30 pt-8 text-center text-secondary-foreground/70 text-sm">
          <p>&copy; 2026 C&C Vida e Negócio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
