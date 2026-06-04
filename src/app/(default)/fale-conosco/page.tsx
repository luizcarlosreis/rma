"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function FaleConoscoPage() {
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
    <div className="relative min-h-screen bg-slate-50 grid-bg py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Decorative Orbs */}
      <div className="absolute left-1/4 top-20 -z-10 h-80 w-80 rounded-full bg-slate-200/40 blur-3xl pointer-events-none" />
      <div className="absolute right-1/4 bottom-20 -z-10 h-72 w-72 rounded-full bg-rose-50/60 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Fale Conosco</span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Estamos prontos para atender você
          </h1>
          <p className="text-base text-slate-600 font-light leading-relaxed">
            Dúvidas, solicitações de propostas de assessoria ou suporte técnico? Preencha o formulário rápido abaixo ou utilize nossos canais diretos de atendimento telefônico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-900">
            
            <div className="space-y-6">
              <h2 className="text-xl font-extrabold tracking-tight">Canais Corporativos</h2>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Entre em contato diretamente com nossos departamentos de atendimento administrativo, contábil ou comercial.
              </p>

              <div className="space-y-5 pt-4">
                
                {/* Phone Card */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-rose-400 border border-white/10">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wide">Fones de Atendimento</h3>
                    <p className="text-sm font-bold text-white mt-1">(11) 4803-8005</p>
                    <a
                      href="https://wa.me/551148038006"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#25D366] transition-colors mt-0.5"
                    >
                      <span>(11) 4803-8006</span>
                      <svg
                        className="h-3.5 w-3.5 text-slate-400 fill-current group-hover:text-[#25D366] transition-colors shrink-0"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.42 9.86-9.864.001-2.637-1.03-5.115-2.905-6.99C16.553 1.876 14.076.845 11.441.845 6.008.845 1.585 5.26 1.581 10.697c-.001 1.709.447 3.378 1.299 4.873l-.993 3.624 3.76-.987zm11.567-7.28c-.313-.156-1.854-.915-2.141-1.018-.287-.104-.497-.156-.707.156-.21.312-.813 1.018-.996 1.225-.183.208-.365.234-.678.078-.313-.156-1.32-.486-2.514-1.55-1.082-.965-1.813-2.158-2.025-2.522-.21-.365-.022-.562.134-.717.14-.14.313-.365.47-.547.157-.182.21-.312.313-.52.103-.209.052-.39-.026-.547-.079-.156-.708-1.705-.97-2.33-.255-.612-.513-.529-.706-.539-.183-.01-.39-.01-.597-.01-.207 0-.544.078-.83.39-.286.312-1.096 1.069-1.096 2.604 0 1.536 1.117 3.023 1.272 3.23.156.209 2.197 3.355 5.323 4.704.743.32 1.323.511 1.776.654.747.238 1.428.205 1.966.125.6-.089 1.854-.757 2.115-1.457.26-.7.26-1.3.183-1.428-.078-.128-.287-.208-.6-.364z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-rose-400 border border-white/10">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wide">E-mail Comercial</h3>
                    <p className="text-sm font-bold text-white mt-1">contato@rmasolutions.com.br</p>
                  </div>
                </div>

                {/* Address Card */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-rose-400 border border-white/10">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wide">Nosso Escritório</h3>
                    <p className="text-xs text-slate-300 font-light mt-1 leading-relaxed">
                      Rua Sete de Setembro, 235 – 1º andar – sala 16 <br />
                      Centro de Guarulhos-SP - CEP 07011-020
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="border-t border-slate-900 pt-6">
              <span className="text-[10px] text-slate-500 block uppercase tracking-wider font-bold mb-1">Horário de Funcionamento</span>
              <p className="text-xs text-slate-400 font-light">Segunda a Sexta: das 08h às 17h30 (exceto feriados)</p>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-10 space-y-6">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h2 className="text-2xl font-extrabold text-slate-900">Mensagem Enviada!</h2>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    Agradecemos seu contato. Nossa equipe técnica de assessores condominiais analisará sua mensagem e retornará em até 24 horas úteis.
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-rose-600"
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
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-700">E-mail Corporativo</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="ex: sindico@email.com"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
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
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-bold text-slate-700">Assunto</label>
                    <select
                      id="subject"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
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
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500 resize-none"
                  />
                </div>

                <div className="flex items-start gap-2.5 bg-slate-50 border border-slate-100 rounded-xl p-3 text-[10px] text-slate-500 leading-normal">
                  <ShieldAlert className="h-4.5 w-4.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    Ao enviar este formulário, você aceita o processamento seguro de seus dados de contato exclusivamente para fins de atendimento interno da RMA Solutions.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 py-3.5 text-sm font-bold text-white shadow-sm ring-1 ring-slate-900 transition-all hover:bg-rose-600 hover:ring-rose-600 disabled:opacity-75 disabled:cursor-not-allowed mt-2"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Processando Envio...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 text-rose-500" />
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
