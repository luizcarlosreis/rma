import Link from "next/link";
import { TrendingUp, Users, FileText, Coins, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/data/services";

export default function HomeB() {
  // Map icons dynamically
  const iconMap = {
    TrendingUp: TrendingUp,
    Users: Users,
    FileText: FileText,
    Coins: Coins,
  };

  // Main benefits for hero badges
  const valueProps = [
    { title: "Gestão 100% Transparente", text: "Balancetes interativos e pastas auditáveis disponíveis 24/7." },
    { title: "Segurança Jurídica Total", text: "Minimização de riscos trabalhistas com eSocial rigoroso." },
    { title: "Atendimento Humanizado", text: "Suporte dedicado com contadores focados na sua tranquilidade." }
  ];

  return (
    <div className="relative w-full overflow-hidden grid-bg pb-20 bg-slate-950 text-slate-100">
      
      {/* High-Tech Glow Orbs */}
      <div className="absolute left-1/4 top-10 -z-10 h-[600px] w-[600px] rounded-full bg-cyan-900/10 blur-3xl pointer-events-none" />
      <div className="absolute right-10 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-900/10 blur-3xl pointer-events-none" />
      <div className="absolute left-1/3 bottom-10 -z-10 h-[400px] w-[400px] rounded-full bg-blue-900/10 blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="relative px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            
            {/* Small Glowing Tag */}
            <div className="inline-flex max-w-max items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 shadow-md text-xs font-semibold text-slate-300">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Assessoria de Alto Padrão em Guarulhos</span>
            </div>

            {/* Title / Main H1 */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Transparência e <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                eficiência absoluta
              </span> <br />
              na gestão do condomínio.
            </h1>

            {/* Subtitle */}
            <p className="text-lg leading-relaxed text-slate-400 max-w-2xl font-light">
              Garantimos regularidade fiscal, controle trabalhista impecável e saúde financeira robusta. Administre seu condomínio com a tranquilidade que você e seus moradores merecem.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/layout-b/cliente"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 text-base font-bold text-slate-950 shadow-lg shadow-cyan-500/10 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/20 hover:scale-[1.01]"
              >
                <span>Acessar Área do Cliente</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/layout-b/servicos"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 px-8 py-4 text-base font-bold text-slate-300 shadow-sm transition-all hover:bg-slate-800 hover:text-white"
              >
                Conhecer Serviços
              </Link>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800/80">
              <div>
                <span className="block text-2xl font-extrabold text-white flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  100%
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Prestação Digital</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-white flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Zero
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Passivo Trabalhista</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-white flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Guarulhos
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Presença Local</span>
              </div>
            </div>

          </div>

          {/* Right Premium Graphic / Visual Mock */}
          <div className="lg:col-span-5 relative lg:block">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-gradient-to-br from-slate-900/90 to-slate-950/95 rounded-3xl p-8 shadow-2xl border border-slate-800/80 overflow-hidden text-white backdrop-blur-sm">
              
              {/* Card Glow */}
              <div className="absolute right-0 top-0 -z-0 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
              <div className="absolute left-0 bottom-0 -z-0 h-44 w-44 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col space-y-6">
                <div className="flex items-center justify-between border-b border-slate-850 pb-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-cyan-450 text-cyan-400" />
                    <span className="text-sm font-bold tracking-wide uppercase text-slate-350 text-slate-300">RMA Auditoria Ativa</span>
                  </div>
                  <span className="rounded-full bg-cyan-950/80 border border-cyan-800/50 px-2.5 py-0.5 text-[10px] font-bold text-cyan-400">
                    PROTEGIDO
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-slate-105 text-slate-100">Balanço Conciliado Diariamente</p>
                      <p className="text-xs text-slate-450 text-slate-400">Zero divergências bancárias nas auditorias mensais.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-slate-105 text-slate-100">Escala & eSocial Validados</p>
                      <p className="text-xs text-slate-450 text-slate-400">Folha de portaria e limpeza integrada sem horas extras excedentes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-slate-105 text-slate-100">Cobrança e Pix Híbrido</p>
                      <p className="text-xs text-slate-450 text-slate-400">Redução de inadimplência em até 40% nos primeiros 95 dias.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950/70 border border-slate-850 rounded-2xl p-4 text-center mt-2">
                  <span className="text-xs text-slate-500 block mb-1">Status do Portal RMA</span>
                  <span className="text-sm font-extrabold text-white flex items-center justify-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    Acesso Seguro Ativado
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Value Proposition / Focus */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {valueProps.map((prop, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 shadow-xl backdrop-blur-sm hover:border-slate-700 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-cyan-950 border border-cyan-850 text-cyan-400 text-xs font-bold">
                  0{idx + 1}
                </span>
                {prop.title}
              </h3>
              <p className="text-sm text-slate-405 text-slate-450 leading-relaxed font-light">{prop.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-455 text-cyan-400">Serviços Rápidos</span>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              Soluções Especializadas para o seu Condomínio
            </h2>
            <p className="text-base text-slate-400 max-w-xl font-light">
              Nossa assessoria atua de forma preventiva e inteligente, cuidando de toda a burocracia contábil e de pessoal.
            </p>
          </div>
          
          <Link
            href="/layout-b/servicos"
            className="group inline-flex items-center gap-1.5 text-sm font-bold text-cyan-450 text-cyan-450 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Ver especificações técnicas</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName as keyof typeof iconMap];
            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between rounded-2xl border border-slate-900 bg-slate-900/25 p-6 shadow-xl card-hover-effect hover:border-slate-800 hover:bg-slate-900/40 backdrop-blur-sm"
              >
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-slate-300 border border-slate-850 transition-colors group-hover:bg-cyan-950/80 group-hover:text-cyan-400 group-hover:border-cyan-800/50">
                    {IconComponent && <IconComponent className="h-6 w-6" />}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-light mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <Link
                  href={`/layout-b/servicos#${service.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-350 hover:text-cyan-450 group-hover:text-cyan-400 transition-colors"
                >
                  <span>Ver especificações</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            );
          })}
        </div>

      </section>

      {/* Client CTA Banner */}
      <section className="px-4 py-10 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12">
        <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-950 to-cyan-950 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl text-white">
          <div className="absolute right-0 top-0 -z-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl font-extrabold sm:text-3xl tracking-tight">
                Já é síndico ou morador assessorado pela RMA?
              </h2>
              <p className="text-slate-300 text-sm md:text-base font-light max-w-xl">
                Acesse agora mesmo o portal logado para emitir segundas vias de boletos, consultar pastas de prestação de contas mensais e conferir relatórios gerenciais em tempo real.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="/layout-b/cliente"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-555 bg-cyan-500 px-7 py-3.5 text-slate-950 font-bold hover:bg-cyan-400 transition-all shadow-md shadow-cyan-950/10 scale-100 hover:scale-[1.02]"
              >
                <span>Entrar no Portal RMA</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
