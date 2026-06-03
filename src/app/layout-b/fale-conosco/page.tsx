"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldAlert } from "lucide-react";

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
    <div className="relative min-h-screen bg-slate-50 grid-bg py-16 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      
      {/* Decorative Glow Orbs */}
      <div className="absolute left-1/4 top-20 -z-10 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute right-1/4 bottom-20 -z-10 h-72 w-72 rounded-full bg-sky-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Fale Conosco</span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Estamos prontos para atender você
          </h1>
          <p className="text-base text-slate-500 font-light leading-relaxed">
            Dúvidas, solicitações de propostas de assessoria ou suporte técnico? Preencha o formulário rápido abaixo ou utilize nossos canais diretos de atendimento telefônico.
          </p>
        </div>

        {/* Top: 3 Contact Cards side-by-side (Structural change) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Phone Card */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-900 border border-blue-100">
              <Phone className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wide">Fones de Atendimento</h3>
              <p className="text-sm font-bold text-slate-900">(11) 4803-8005</p>
              <p className="text-sm font-bold text-slate-900">(11) 4803-8006</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-900 border border-blue-100">
              <Mail className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wide">E-mail Comercial</h3>
              <p className="text-sm font-bold text-slate-900 break-all">contato@rmasolutions.com.br</p>
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-900 border border-blue-100">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wide">Nosso Escritório</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Rua Sete de Setembro, 235 – 1º andar – sala 16 – Centro de Guarulhos-SP
              </p>
            </div>
          </div>

        </div>

        {/* Bottom: Centered Contact Form (Structural change) */}
        <div className="max-w-3xl mx-auto bg-white border border-slate-200/80 rounded-2xl p-8 sm:p-10 shadow-xl shadow-blue-900/5">
          {submitted ? (
            <div className="text-center py-10 space-y-6 animate-fadeIn">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-900 border border-blue-100">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h2 className="text-2xl font-extrabold text-slate-900 font-black">Mensagem Enviada!</h2>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  Agradecemos seu contato. Nossa equipe técnica de assessores condominiais analisará sua mensagem e retornará em até 24 horas úteis.
                </p>
              </div>
              <div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-950 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-sky-600 active:scale-95"
                >
                  Enviar nova mensagem
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="fullname" className="text-xs font-bold text-slate-700">Nome Completo</label>
                  <input
                    id="fullname"
                    type="text"
                    required
                    placeholder="ex: Carlos Silva"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-700">E-mail Corporativo</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="ex: sindico@email.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-bold text-slate-700">Telefone / WhatsApp</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="ex: (11) 99999-9999"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-700">Assunto</label>
                  <select
                    id="subject"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                <label htmlFor="message" className="text-xs font-bold text-slate-700">Mensagem</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Descreva brevemente sua solicitação ou dados do condomínio..."
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                />
              </div>

              <div className="flex items-start gap-2.5 bg-slate-50 border border-slate-150 rounded-xl p-3 text-[10px] text-slate-500 leading-normal">
                <ShieldAlert className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  Ao enviar este formulário, você aceita o processamento seguro de seus dados de contato exclusivamente para fins de atendimento interno da RMA Solutions.
                </span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-950 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-sky-600 disabled:opacity-75 disabled:cursor-not-allowed mt-2 transition-all"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processando Envio...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 text-sky-400" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
