"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NavbarB() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Início", href: "/layout-b" },
    { name: "Serviços", href: "/layout-b/servicos" },
    { name: "Fale Conosco", href: "/layout-b/fale-conosco" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          
          {/* Logo Section */}
          <Link href="/layout-b" className="flex items-center gap-3 transition-opacity hover:opacity-90">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 p-1 shadow-inner border border-slate-800">
              <Image
                src="/logo.png"
                alt="Logo RMA Solutions"
                width={44}
                height={44}
                priority
                className="object-contain filter brightness-110"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-extrabold tracking-tight text-white">RMA</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Solutions</span>
              </div>
              <span className="hidden text-[10px] font-medium leading-none text-slate-400 sm:block">
                Assessoria Contábil & Trabalhista
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-cyan-400 relative py-1",
                    isActive 
                      ? "text-white font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-cyan-400 after:rounded-full" 
                      : "text-slate-300"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Button: Área do Cliente */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/layout-b/cliente"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 border border-slate-800 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 hover:scale-[1.02]"
              aria-label="Acessar Área do Cliente"
            >
              <Lock className="h-4 w-4 text-cyan-400 transition-colors group-hover:text-slate-950" />
              <span>Área do Cliente</span>
            </Link>
          </div>

          {/* Mobile Layout Actions (Immediate CTA access for mobile + hamburger) */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Small Quick-CTA for Mobile */}
            <Link
              href="/layout-b/cliente"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-slate-900 border border-slate-800 p-2 text-white transition-all hover:bg-cyan-500 hover:text-slate-950"
              title="Área do Cliente"
              aria-label="Acessar Área do Cliente"
            >
              <Lock className="h-4 w-4 text-cyan-400" />
              <span className="text-xs font-bold pr-1">Área do Cliente</span>
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-300 hover:bg-slate-900 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menu principal</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-slate-800 bg-slate-950",
          isOpen ? "max-h-72 opacity-100 visible" : "max-h-0 opacity-0 invisible"
        )}
        id="mobile-menu"
      >
        <div className="space-y-1.5 px-4 pb-6 pt-3">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                  isActive
                    ? "bg-slate-900 text-cyan-400 font-semibold"
                    : "text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
                )}
              >
                {item.name}
              </Link>
            );
          })}
          
          {/* Mobile Menu Hidden Link */}
          <div className="pt-4 sm:hidden">
            <Link
              href="/layout-b/cliente"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 border border-slate-800 py-3 text-center text-sm font-bold text-white transition-all hover:bg-cyan-500 hover:text-slate-950"
            >
              <Lock className="h-4 w-4 text-cyan-400" />
              <span>Área do Cliente</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
