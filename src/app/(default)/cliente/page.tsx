"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../../public/logo.png";

import { Lock, ShieldAlert, ArrowRight, UserCheck, HelpCircle, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ClientePage() {
  const [activeTab, setActiveTab] = useState<"morador" | "sindico">("morador");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulating secure authentication delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 grid-bg py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute left-10 bottom-20 -z-10 h-72 w-72 rounded-full bg-slate-200/50 blur-3xl pointer-events-none" />
      <div className="absolute right-20 top-20 -z-10 h-[450px] w-[450px] rounded-full bg-rose-50/70 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Informative panel */}
        <div className="lg:col-span-6 space-y-8">
          
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-600" />
              Área Restrita e Criptografada
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight leading-[1.15]">
              Bem-vindo ao Portal de Gestão RMA
            </h1>
            <p className="text-base text-slate-600 font-light leading-relaxed">
              Desenvolvemos um ecossistema seguro e transparente para facilitar a rotina do seu condomínio. Acesse suas informações administrativas e financeiras com apenas um clique.
            </p>
          </div>

          {/* Quick guide steps */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-100 shadow-sm text-rose-500 font-bold">
                1
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Segunda Via de Boleto</h3>
                <p className="text-xs text-slate-500 font-light mt-0.5">Emita e efetue o pagamento da cota condominial imediatamente pelo QR Code Pix.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-100 shadow-sm text-rose-500 font-bold">
                2
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Prestação de Contas e Balancetes</h3>
                <p className="text-xs text-slate-500 font-light mt-0.5">Consulte pastas de relatórios financeiros mensais arquivadas de forma auditável.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-100 shadow-sm text-rose-500 font-bold">
                3
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Reservas e Atas</h3>
                <p className="text-xs text-slate-500 font-light mt-0.5">Faça agendamentos de áreas comuns e acesse atas de assembleias condominiais.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-900 rounded-2xl p-4 flex items-center gap-3.5 text-white max-w-md">
            <UserCheck className="h-5 w-5 text-rose-500 shrink-0" />
            <p className="text-xs font-light text-slate-300">
              **Primeiro Acesso?** Caso seja seu primeiro login, utilize o código de condomínio presente no seu boleto impresso ou solicite as credenciais.
            </p>
          </div>

        </div>

        {/* Right Side: Responsive Login Form */}
        <div className="lg:col-span-6 w-full max-w-md mx-auto">
          
          <div className="bg-white border border-slate-100 rounded-3xl shadow-xl p-8 relative overflow-hidden">
            
            {/* Header Brand */}
            <div className="flex items-center gap-3 mb-8">
              <Image
                src={logoImg}
                alt="RMA Logo"
                width={36}
                height={36}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-md font-bold text-slate-900 leading-tight">Portal RMA</span>
                <span className="text-[10px] text-slate-500 leading-none">Acesso Autenticado</span>
              </div>
            </div>

            {/* Success Animation */}
            {success ? (
              <div className="space-y-6 py-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <Lock className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">Conexão Estabelecida!</h3>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                    Você está sendo redirecionado para a Área Logada Segura da RMA Solutions...
                  </p>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-rose-600 rounded-full animate-[loading_1.5s_ease-in-out_infinite]" style={{ width: "60%" }} />
                </div>
              </div>
            ) : (
              <>
                {/* Custom Segmented Tab Selectors */}
                <div className="grid grid-cols-2 gap-1 bg-slate-100/80 p-1.5 rounded-xl mb-6">
                  <button
                    onClick={() => setActiveTab("morador")}
                    className={cn(
                      "py-2.5 text-xs font-bold rounded-lg transition-all",
                      activeTab === "morador"
                        ? "bg-white text-slate-950 shadow-sm"
                        : "text-slate-500 hover:text-slate-900"
                    )}
                  >
                    Sou Morador / Condômino
                  </button>
                  <button
                    onClick={() => setActiveTab("sindico")}
                    className={cn(
                      "py-2.5 text-xs font-bold rounded-lg transition-all",
                      activeTab === "sindico"
                        ? "bg-white text-slate-950 shadow-sm"
                        : "text-slate-500 hover:text-slate-900"
                    )}
                  >
                    Sou Síndico / Gestor
                  </button>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLoginSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label htmlFor="user-id" className="text-xs font-bold text-slate-700">
                      {activeTab === "morador" ? "Código do Imóvel ou E-mail" : "CPF ou E-mail do Gestor"}
                    </label>
                    <input
                      id="user-id"
                      type="text"
                      required
                      placeholder={activeTab === "morador" ? "ex: 104-blocoA ou morador@email.com" : "ex: 123.456.789-00"}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 placeholder-slate-400 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label htmlFor="user-pass" className="text-xs font-bold text-slate-700">
                        Senha de Acesso
                      </label>
                      <Link href="#recuperar" className="text-[11px] font-semibold text-rose-600 hover:underline">
                        Esqueceu a senha?
                      </Link>
                    </div>
                    <div className="relative">
                      <input
                        id="user-pass"
                        type={showPassword ? "text" : "password"}
                        required
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 placeholder-slate-400 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                      >
                        {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-rose-600 focus:ring-rose-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 text-xs font-medium text-slate-600 select-none">
                      Lembrar minhas credenciais neste computador
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 py-3.5 text-sm font-bold text-white shadow-sm ring-1 ring-slate-900 transition-all hover:bg-rose-600 hover:ring-rose-600 disabled:opacity-75 disabled:cursor-not-allowed mt-2"
                  >
                    {loading ? (
                      <>
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Autenticando...</span>
                      </>
                    ) : (
                      <>
                        <Lock className="h-4 w-4 text-rose-500" />
                        <span>Conectar com Segurança</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Secure Badge */}
                <div className="flex items-center justify-center gap-2 mt-6 text-[10px] text-slate-400">
                  <ShieldAlert className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Conexão SSL criptografada ponta a ponta (AES-256)</span>
                </div>
              </>
            )}

          </div>

          {/* Quick Help Link */}
          <div className="text-center mt-6">
            <span className="text-xs text-slate-500 font-light">Problemas ao acessar? </span>
            <Link href="/fale-conosco" className="text-xs font-bold text-slate-900 hover:text-rose-600 transition-colors">
              Fale Conosco
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
