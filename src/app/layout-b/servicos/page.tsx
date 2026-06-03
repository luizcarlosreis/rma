import { TrendingUp, Users, FileText, Coins, CheckSquare, Shield, HelpCircle } from "lucide-react";
import { servicesData } from "@/data/services";
import Link from "next/link";

export default function ServicesPageB() {
  const iconMap = {
    TrendingUp: TrendingUp,
    Users: Users,
    FileText: FileText,
    Coins: Coins,
  };

  return (
    <div className="relative w-full min-h-screen bg-slate-950 text-slate-100 grid-bg py-16 animate-fadeIn">
      
      {/* Decorative Orbs */}
      <div className="absolute right-1/4 top-10 -z-10 h-96 w-96 rounded-full bg-cyan-900/10 blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 bottom-20 -z-10 h-80 w-80 rounded-full bg-indigo-900/10 blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <section className="px-4 max-w-7xl mx-auto mb-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Catálogo Operacional</span>
          <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Nossos Serviços & Descritivo Técnico
          </h1>
          <p className="text-lg text-slate-400 font-light leading-relaxed">
            Um escopo de atuação robusto desenvolvido sob medida para garantir eficiência administrativa, conformidade com a legislação trabalhista e transparência contábil completa.
          </p>
        </div>
      </section>

      {/* Anchor Navigation */}
      <div className="sticky top-20 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 py-3 mb-16 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-6 text-sm font-semibold text-slate-350">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={`#${service.id}`}
              className="hover:text-cyan-400 transition-colors"
            >
              {service.title.split(" & ")[0]}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Details Section */}
      <section className="px-4 max-w-7xl mx-auto space-y-16 sm:px-6 lg:px-8">
        {servicesData.map((service, idx) => {
          const IconComponent = iconMap[service.iconName as keyof typeof iconMap];
          const isEven = idx % 2 === 0;

          return (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-slate-900/30 border border-slate-900 rounded-3xl p-6 sm:p-10 shadow-xl backdrop-blur-sm transition-all hover:border-slate-800"
            >
              
              {/* Service Info Block */}
              <div className={`lg:col-span-6 flex flex-col justify-between space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className="space-y-4">
                  
                  {/* Category Tag */}
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 border border-slate-850 px-3 py-1 text-xs font-semibold text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-450 bg-cyan-400" />
                    {service.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed font-light text-sm sm:text-base">
                    {service.longDescription}
                  </p>
                </div>

                {/* Micro Assurance Card */}
                <div className="bg-slate-950/80 border border-slate-900 rounded-2xl p-4 flex gap-3 items-center">
                  <Shield className="h-5 w-5 text-cyan-400 shrink-0" />
                  <span className="text-xs font-medium text-slate-300 leading-tight">
                    Conformidade e precisão técnica asseguradas com auditoria dupla pré-envio.
                  </span>
                </div>
              </div>

              {/* Technical Specifications Checklist */}
              <div className={`lg:col-span-6 bg-slate-900/60 border border-slate-800 text-slate-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div>
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-white border border-slate-850">
                      {IconComponent && <IconComponent className="h-5 w-5 text-cyan-400" />}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-350">Especificações Técnicas</h3>
                      <p className="text-[10px] text-slate-500">Entregáveis operacionais do serviço</p>
                    </div>
                  </div>

                  <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300 font-light">
                    {service.technicalSpecs.map((spec, specIdx) => (
                      <li key={specIdx} className="flex items-start gap-2.5">
                        <CheckSquare className="h-4.5 w-4.5 text-cyan-455 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 text-[11px] text-slate-555 text-slate-500 flex justify-between items-center">
                  <span>Guarulhos / SP</span>
                  <span>RMA Solutions</span>
                </div>
              </div>

            </div>
          );
        })}
      </section>

      {/* Support & Contact Section */}
      <section className="px-4 max-w-3xl mx-auto mt-24 text-center space-y-6 sm:px-6">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 shadow-xl text-cyan-405 text-cyan-400">
          <HelpCircle className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-extrabold text-white">
          Precisa de um escopo personalizado ou assessoria extra?
        </h2>
        <p className="text-slate-400 font-light max-w-xl mx-auto text-sm leading-relaxed">
          Nossa equipe de contadores e especialistas em condomínio está pronta para auxiliar na migração da sua administradora antiga ou configurar uma nova rotina contábil e de DP.
        </p>
        <div>
          <Link
            href="/layout-b/fale-conosco"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-md transition-all hover:bg-cyan-400 hover:scale-[1.01]"
          >
            <span>Falar com um Consultor</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
