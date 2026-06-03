import { TrendingUp, Users, FileText, Coins, Check, Shield, HelpCircle } from "lucide-react";
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
    <div className="relative w-full min-h-screen bg-white text-slate-800 grid-bg py-16">
      
      {/* Decorative Orbs */}
      <div className="absolute right-1/4 top-10 -z-10 h-96 w-96 rounded-full bg-blue-50/60 blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 bottom-20 -z-10 h-80 w-80 rounded-full bg-sky-50/50 blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <section className="px-4 max-w-5xl mx-auto mb-16 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Catálogo Operacional</span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Nossos Serviços & Descritivo Técnico
          </h1>
          <p className="text-lg text-slate-650 text-slate-500 font-light leading-relaxed">
            Um escopo de atuação robusto desenvolvido sob medida para garantir eficiência administrativa, conformidade com a legislação trabalhista e transparência contábil completa.
          </p>
        </div>
      </section>

      {/* Sidebar + Main Column Layout Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Sticky Table of Contents (3 columns) */}
        <aside className="lg:col-span-3 sticky top-28 z-20 space-y-2 hidden lg:block border-r border-slate-100 pr-6">
          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-4">Sumário de Serviços</span>
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={`#${service.id}`}
              className="group flex items-center gap-2 rounded-xl py-2 px-3 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all border border-transparent hover:border-slate-100"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors" />
              <span>{service.title.split(" & ")[0]}</span>
            </Link>
          ))}
        </aside>

        {/* Right Single-Column Services (9 columns) */}
        <main className="lg:col-span-9 space-y-16">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName as keyof typeof iconMap];

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 hover:shadow-md transition-shadow"
              >
                
                {/* Service Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-900 border border-blue-100 shadow-inner">
                      {IconComponent && <IconComponent className="h-5 w-5" />}
                    </div>
                    <div>
                      <span className="inline-block bg-blue-50 text-blue-900 text-[10px] font-bold px-2 py-0.5 rounded border border-blue-100 mb-1">
                        {service.category}
                      </span>
                      <h2 className="text-xl font-black text-slate-900 leading-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 font-light leading-relaxed text-sm">
                  {service.longDescription}
                </p>

                {/* Technical Specifications presented in a Clean Table / List structure */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    Entregáveis e Detalhamento Operacional
                  </h3>
                  
                  {/* Detailed Table Rows */}
                  <div className="border border-slate-200/80 rounded-xl overflow-hidden text-xs">
                    {service.technicalSpecs.map((spec, specIdx) => (
                      <div
                        key={specIdx}
                        className={`flex items-start gap-3 p-3.5 border-b border-slate-100 last:border-b-0 ${
                          specIdx % 2 === 0 ? "bg-slate-50/50" : "bg-white"
                        }`}
                      >
                        <Check className="h-4 w-4 text-sky-500 shrink-0 mt-0.5" />
                        <span className="text-slate-650 text-slate-700 leading-normal font-light">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro Assurance Card */}
                <div className="bg-blue-50/20 border border-blue-100/50 rounded-xl p-3 flex gap-2.5 items-center text-xs text-blue-950 font-light">
                  <Shield className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Conformidade jurídica CRC ativa. Processos auditados duplamente.</span>
                </div>

              </div>
            );
          })}
        </main>

      </div>

      {/* Support & Contact Section */}
      <section className="px-4 max-w-3xl mx-auto mt-24 text-center space-y-6 sm:px-6">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-slate-150 shadow-sm text-blue-600">
          <HelpCircle className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900">
          Precisa de um escopo personalizado ou assessoria extra?
        </h2>
        <p className="text-slate-550 text-slate-600 font-light max-w-xl mx-auto text-sm leading-relaxed">
          Nossa equipe de contadores e especialistas em condomínio está pronta para auxiliar na migração da sua administradora antiga ou configurar uma nova rotina contábil e de DP.
        </p>
        <div>
          <Link
            href="/layout-b/fale-conosco"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-950 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-sky-600 transition-all hover:scale-[1.01]"
          >
            <span>Falar com um Consultor</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
