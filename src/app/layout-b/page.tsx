"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, Users, FileText, Coins, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";
import { servicesData } from "@/data/services";

export default function HomeB() {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);

  // Map icons dynamically
  const iconMap = {
    TrendingUp: TrendingUp,
    Users: Users,
    FileText: FileText,
    Coins: Coins,
  };

  // Main benefits
  const valueProps = [
    { title: "Gestão 100% Transparente", text: "Balancetes interativos e pastas auditáveis disponíveis 24/7." },
    { title: "Segurança Jurídica Total", text: "Minimização de riscos trabalhistas com eSocial rigoroso." },
    { title: "Atendimento Humanizado", text: "Suporte dedicado com contadores focados na sua tranquilidade." }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-white text-slate-800 pb-20">
      
      {/* Decorative Orbs */}
      <div className="absolute left-1/4 top-10 -z-10 h-[500px] w-[500px] rounded-full bg-blue-50/65 blur-3xl pointer-events-none" />
      <div className="absolute right-10 top-20 -z-10 h-[450px] w-[450px] rounded-full bg-sky-50/80 blur-3xl pointer-events-none" />

      {/* Hero Section - Centered Layout */}
      <section className="relative px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20 max-w-5xl mx-auto text-center">
        
        {/* Small Tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-3.5 py-1.5 text-xs font-bold text-blue-900 mb-8 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-sky-550 bg-sky-500 animate-pulse" />
          <span>Assessoria de Alto Padrão em Guarulhos</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
          Transparência e <br />
          <span className="bg-gradient-to-r from-blue-950 via-blue-800 to-sky-600 bg-clip-text text-transparent">
            eficiência absoluta
          </span> <br />
          na gestão do condomínio.
        </h1>

        {/* Subtitle */}
        <p className="text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto font-light mb-8">
          Garantimos regularidade fiscal, controle trabalhista impecável e saúde financeira robusta. Administre seu condomínio com a tranquilidade que você e seus moradores merecem.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/layout-b/cliente"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-950 px-8 py-4 text-base font-bold text-white shadow-md hover:bg-sky-655 hover:bg-sky-600 transition-all hover:scale-[1.01]"
          >
            <span>Acessar Área do Cliente</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/layout-b/servicos"
            className="inline-flex items-center justify-center rounded-xl bg-white border border-slate-200 px-8 py-4 text-base font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-950"
          >
            Conhecer Serviços
          </Link>
        </div>

        {/* Centered Large Dashboard Preview Panel */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-6 shadow-xl shadow-blue-900/5 overflow-hidden">
          {/* Header window mockup */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="text-xs text-slate-450 ml-2 font-medium tracking-wide uppercase">Painel de Controle RMA</span>
            </div>
            <div className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              CONCILIADO & SEGURO
            </div>
          </div>

          {/* Grid Content Mock */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
            
            {/* Sidebar Mock */}
            <div className="md:col-span-3 space-y-2 border-r border-slate-100 pr-4 hidden md:block">
              <div className="h-8 rounded-lg bg-blue-50 text-blue-900 font-bold text-xs flex items-center px-3 gap-2">
                <TrendingUp className="h-3.5 w-3.5" />
                <span>Balancete Geral</span>
              </div>
              <div className="h-8 rounded-lg hover:bg-slate-50 text-slate-500 text-xs flex items-center px-3 gap-2 cursor-pointer">
                <Users className="h-3.5 w-3.5" />
                <span>eSocial & RH</span>
              </div>
              <div className="h-8 rounded-lg hover:bg-slate-50 text-slate-500 text-xs flex items-center px-3 gap-2 cursor-pointer">
                <FileText className="h-3.5 w-3.5" />
                <span>Pastas Fiscais</span>
              </div>
              <div className="h-8 rounded-lg hover:bg-slate-50 text-slate-500 text-xs flex items-center px-3 gap-2 cursor-pointer">
                <Coins className="h-3.5 w-3.5" />
                <span>Inadimplência</span>
              </div>
            </div>

            {/* Main Stats Area */}
            <div className="md:col-span-9 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                  <span className="text-[10px] text-slate-450 block font-bold uppercase tracking-wider">Saldo em Conta</span>
                  <span className="text-lg font-black text-slate-900 block mt-1">R$ 142.850,22</span>
                  <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5 mt-1">100% Conciliado</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                  <span className="text-[10px] text-slate-450 block font-bold uppercase tracking-wider">eSocial Enviado</span>
                  <span className="text-lg font-black text-slate-900 block mt-1">Competência Ativa</span>
                  <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5 mt-1">Zero Divergências</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                  <span className="text-[10px] text-slate-450 block font-bold uppercase tracking-wider">Acordos de Cobrança</span>
                  <span className="text-lg font-black text-slate-900 block mt-1">94% de Sucesso</span>
                  <span className="text-[10px] text-blue-600 font-bold flex items-center gap-0.5 mt-1">-40% Inadimplência</span>
                </div>
              </div>

              {/* Progress bar visual mockup */}
              <div className="bg-blue-50/40 border border-blue-100/50 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Previsão Orçamentária Utilizada (Mensal)</span>
                  <span>78.4%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-900 to-sky-500 rounded-full" style={{ width: "78.4%" }} />
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Value Propositions - Airy stacked list */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-6 border-t border-slate-100">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {valueProps.map((prop, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-900 border border-blue-100 shadow-sm font-black text-base">
                0{idx + 1}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">{prop.title}</h3>
                <p className="text-sm text-slate-550 font-light leading-relaxed">{prop.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Services Section (Tabs Component) */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-100">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Serviços do Portal</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Soluções Especializadas para o seu Condomínio
          </h2>
          <p className="text-sm text-slate-550 font-light max-w-lg mx-auto leading-relaxed">
            Navegue pelas abas abaixo e conheça o escopo operacional de nossa assessoria contábil e de DP.
          </p>
        </div>

        {/* Interactive Tabs Layout */}
        <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 md:p-8 shadow-sm">
          
          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap gap-2 justify-center border-b border-slate-200 pb-6 mb-8">
            {servicesData.map((service) => {
              const IconComp = iconMap[service.iconName as keyof typeof iconMap];
              const isSelected = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-3 text-xs font-bold transition-all ${
                    isSelected 
                      ? "bg-blue-950 text-white shadow-md shadow-blue-950/10" 
                      : "bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/80"
                  }`}
                >
                  {IconComp && <IconComp className="h-4 w-4 shrink-0" />}
                  <span>{service.title.split(" & ")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel Content */}
          {servicesData.map((service) => {
            if (service.id !== activeTab) return null;
            const IconComp = iconMap[service.iconName as keyof typeof iconMap];
            return (
              <div key={service.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
                
                {/* Text column (7 columns) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-900 border border-blue-100">
                      Categoria: {service.category}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                      {IconComp && <IconComp className="h-6 w-6 text-blue-600 shrink-0" />}
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                      {service.longDescription}
                    </p>
                  </div>

                  <div>
                    <Link
                      href={`/layout-b/servicos#${service.id}`}
                      className="inline-flex items-center gap-1 text-sm font-extrabold text-blue-900 hover:text-sky-600 transition-colors"
                    >
                      <span>Ver especificações técnicas completas</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Specs column (5 columns) */}
                <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block border-b border-slate-100 pb-2">Entregáveis Oficiais</span>
                  <ul className="space-y-3 text-xs text-slate-600 font-light">
                    {service.technicalSpecs.slice(0, 3).map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-sky-500 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 border-t border-slate-100 text-[10px] text-slate-400">
                    Acompanhamento CRC ativo & Auditoria Dupla
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* Client CTA Banner */}
      <section className="px-4 py-8 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-6">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-50/50 via-sky-50/30 to-blue-50/80 border border-blue-100 rounded-3xl p-8 md:p-10 shadow-sm text-slate-800">
          <div className="absolute right-0 top-0 -z-0 h-96 w-96 rounded-full bg-blue-200/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <h2 className="text-2xl font-extrabold sm:text-3xl tracking-tight text-slate-900">
                Já é síndico ou morador assessorado pela RMA?
              </h2>
              <p className="text-slate-600 text-sm font-light max-w-xl">
                Acesse agora mesmo o portal logado para emitir segundas vias de boletos, consultar pastas de prestação de contas mensais e conferir relatórios gerenciais em tempo real.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="/layout-b/cliente"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-950 px-7 py-3.5 text-white font-bold hover:bg-sky-600 hover:text-white transition-all shadow-md shadow-blue-950/10 scale-100 hover:scale-[1.02]"
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
