"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function FaleConoscoPageB() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulating message submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 grid-bg py-16 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      
      {/* Decorative Glow Orbs */}
      <div className="absolute left-1/4 top-20 -z-10 h-80 w-80 rounded-full bg-cyan-950/15 blur-3xl pointer-events-none" />
      <div className="absolute right-1/4 bottom-20 -z-10 h-72 w-72 rounded-full bg-indigo-950/15 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Fale Conosco</span>
          <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Estamos prontos para atender você
          </h1>
          <p className="text-base text-slate-400 font-light leading-relaxed">
            Dúvidas, solicitações de propostas de assessoria ou suporte técnico? Preencha o formulário rápido abaixo ou utilize nossos canais diretos de atendimento telefônico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-slate-900/60 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 backdrop-blur-sm">
            
            <div className="space-y-6">
              <h2 className="text-xl font-extrabold tracking-tight">Canais Corporativos</h2>
              <p className="text-xs text-slate-455 text-slate-500 font-light leading-relaxed">
                Entre em contato diretamente com nossos departamentos de atendimento administrativo, contábil ou comercial.
              </p>

              <div className="space-y-5 pt-4">
                
                {/* Phone Card */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-cyan-400 border border-slate-850">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Fones de Atendimento</h3>
                    <p className="text-sm font-bold text-white mt-1">(11) 4803-8005</p>
                    <p className="text-sm font-bold text-white">(11) 4803-8006</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-cyan-400 border border-slate-850">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide">E-mail Comercial</h3>
                    <p className="text-sm font-bold text-white mt-1">contato@rmasolutions.com.br</p>
                  </div>
                </div>

                {/* Address Card */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-cyan-400 border border-slate-850">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Nosso Escritório</h3>
                    <p className="text-xs text-slate-300 font-light mt-1 leading-relaxed">
                      Rua Sete de Setembro, 235 – 1º andar – sala 16 <br />
                      Centro de Guarulhos-SP - CEP 07011-020
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="border-t border-slate-950 pt-6">
              <span className="text-[10px] text-slate-500 block uppercase tracking-wider font-bold mb-1">Horário de Funcionamento</span>
              <p className="text-xs text-slate-400 font-light">Segunda a Sexta: das 08h às 17h30 (exceto feriados)</p>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-slate-900/30 border border-slate-900 rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-center backdrop-blur-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-6">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-950 text-cyan-400 border border-cyan-850">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h2 className="text-2xl font-extrabold text-white">Mensagem Enviada!</h2>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    Agradecemos seu contato. Nossa equipe técnica de assessores condominiais analisará sua mensagem e retornará em até 24 horas úteis.
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-455 hover:bg-cyan-400 transition-all active:scale-[0.99]"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="fullname" className="text-xs font-bold text-slate-300">Nome Completo</label>
                    <input
                      id="fullname"
                      type="text"
                      required
                      placeholder="ex: Carlos Silva"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-650 placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-300">E-mail Corporativo</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="ex: sindico@email.com"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-650 placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-300">Telefone / WhatsApp</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="ex: (11) 99999-9999"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-650 placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-bold text-slate-300">Assunto</label>
                    <select
                      id="subject"
                      required
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    >
                      <option value="">Selecione o motivo...</option>
                      <option value="comercial">Solicitação de Proposta Comercial</option>
                      <option value="suporte">Suporte Técnico à Área do Cliente</option>
                      <option value="financeiro">Dúvidas sobre Boletos e Balancetes</option>
                      <option value="outros">Outros Assuntos</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-300">Mensagem</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Descreva brevemente sua solicitação ou dados do condomínio..."
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-655 placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 resize-none"
                  />
                </div>

                <div className="flex items-start gap-2.5 bg-slate-950/80 border border-slate-900 rounded-xl p-3 text-[10px] text-slate-400 leading-normal">
                  <ShieldAlert className="h-4.5 w-4.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    Ao enviar este formulário, você aceita o processamento seguro de seus dados de contato exclusivamente para fins de atendimento interno da RMA Solutions.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3.5 text-sm font-bold text-slate-950 shadow-md hover:bg-cyan-400 disabled:opacity-75 disabled:cursor-not-allowed mt-2 transition-all active:scale-[0.99]"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                      <span>Processando Envio...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 text-slate-905" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
