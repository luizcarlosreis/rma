"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lock, ShieldAlert, UserCheck, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ClientePageB() {
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
    <div className="relative min-h-screen bg-slate-50 grid-bg py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      
      {/* Decorative Glows */}
      <div className="absolute left-1/3 bottom-10 -z-10 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute right-1/3 top-10 -z-10 h-96 w-96 rounded-full bg-sky-100/30 blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-4xl mx-auto space-y-12">
        
        {/* Top Header Logo */}
        <div className="text-center space-y-2">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-1 border border-slate-200 shadow-sm mb-2">
            <Image
              src="/logo.png"
              alt="RMA Logo"
              width={44}
              height={44}
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Portal de Gestão RMA</h1>
          <p className="text-sm text-slate-500 max-w-sm mx-auto font-light">Acesse com segurança a área restrita do seu condomínio.</p>
        </div>

        {/* Centered Login Card */}
        <div className="max-w-md mx-auto w-full">
          <div className="bg-white border border-slate-200/80 rounded-2xl shadow-xl shadow-blue-900/5 p-8 relative overflow-hidden">
            
            {success ? (
              <div className="space-y-6 py-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-900 border border-blue-100">
                  <Lock className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">Conexão Estabelecida!</h3>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                    Você está sendo redirecionado para a Área Logada Segura da RMA Solutions...
                  </p>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-900 rounded-full animate-[loading_1.5s_ease-in-out_infinite]" style={{ width: "60%" }} />
                </div>
              </div>
            ) : (
              <>
                {/* Tab Selectors */}
                <div className="grid grid-cols-2 gap-1 bg-slate-100 p-1.5 rounded-xl mb-6">
                  <button
                    onClick={() => setActiveTab("morador")}
                    className={cn(
                      "py-2 text-xs font-bold rounded-lg transition-all",
                      activeTab === "morador"
                        ? "bg-white text-blue-950 shadow-sm"
                        : "text-slate-500 hover:text-slate-900"
                    )}
                  >
                    Sou Morador
                  </button>
                  <button
                    onClick={() => setActiveTab("sindico")}
                    className={cn(
                      "py-2 text-xs font-bold rounded-lg transition-all",
                      activeTab === "sindico"
                        ? "bg-white text-blue-950 shadow-sm"
                        : "text-slate-500 hover:text-slate-900"
                    )}
                  >
                    Sou Síndico
                  </button>
                </div>

                {/* Form */}
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
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label htmlFor="user-pass" className="text-xs font-bold text-slate-700">
                        Senha de Acesso
                      </label>
                      <Link href="#recuperar" className="text-[11px] font-semibold text-blue-600 hover:underline">
                        Esqueceu a senha?
                      </Link>
                    </div>
                    <div className="relative">
                      <input
                        id="user-pass"
                        type={showPassword ? "text" : "password"}
                        required
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-650 focus:outline-none"
                      >
                        {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-350 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 text-xs font-medium text-slate-600 select-none">
                      Lembrar minhas credenciais neste computador
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-950 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-sky-600 disabled:opacity-75 disabled:cursor-not-allowed mt-2 transition-all"
                  >
                    {loading ? (
                      <>
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Autenticando...</span>
                      </>
                    ) : (
                      <>
                        <Lock className="h-4 w-4 text-sky-400" />
                        <span>Conectar com Segurança</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Secure Badge */}
                <div className="flex items-center justify-center gap-2 mt-6 text-[10px] text-slate-400 border-t border-slate-100 pt-4">
                  <ShieldAlert className="h-3.5 w-3.5 text-blue-600" />
                  <span>Conexão SSL criptografada ponta a ponta (AES-256)</span>
                </div>
              </>
            )}

          </div>

          <div className="text-center mt-4">
            <span className="text-xs text-slate-500 font-light">Problemas ao acessar? </span>
            <Link href="/layout-b/fale-conosco" className="text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors">
              Fale Conosco
            </Link>
          </div>
        </div>

        {/* Guides placed horizontally below the login form (Structural change) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-200/60 max-w-3xl mx-auto text-left">
          
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 space-y-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-900 font-extrabold text-xs">1</div>
            <h3 className="text-xs font-bold text-slate-900">Segunda Via de Boleto</h3>
            <p className="text-[11px] text-slate-500 font-light leading-normal">Emita e efetue o pagamento da cota condominial imediatamente pelo QR Code Pix.</p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-4 space-y-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-900 font-extrabold text-xs">2</div>
            <h3 className="text-xs font-bold text-slate-900">Pastas de Prestação</h3>
            <p className="text-[11px] text-slate-500 font-light leading-normal">Consulte pastas de relatórios financeiros mensais arquivadas de forma auditável.</p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-4 space-y-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-900 font-extrabold text-xs">3</div>
            <h3 className="text-xs font-bold text-slate-900">Reservas e Atas</h3>
            <p className="text-[11px] text-slate-500 font-light leading-normal">Agendamentos de áreas comuns e atas de assembleias condominiais 24/7.</p>
          </div>

        </div>

        <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex items-center justify-center gap-3 text-slate-800 max-w-md mx-auto">
          <UserCheck className="h-5 w-5 text-blue-600 shrink-0" />
          <p className="text-[11px] font-light text-slate-600 leading-normal text-center">
            **Primeiro Acesso?** Caso seja seu primeiro login, utilize o código de condomínio presente no seu boleto ou fale com seu assessor.
          </p>
        </div>

      </div>
    </div>
  );
}
