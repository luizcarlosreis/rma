"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoImg from "../../public/logo.png";
import { Menu, X, Lock, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/servicos" },
    { name: "Fale Conosco", href: "/fale-conosco" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 p-1 shadow-sm border border-slate-100">
              <Image
                src={logoImg}
                alt="Logo RMA Solutions"
                width={44}
                height={44}
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-extrabold tracking-tight text-slate-900">RMA</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-600">Solutions</span>
              </div>
              <span className="hidden text-[10px] font-medium leading-none text-slate-500 sm:block">
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
                    "text-sm font-medium transition-colors hover:text-rose-600 relative py-1",
                    isActive 
                      ? "text-slate-950 font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-rose-600 after:rounded-full" 
                      : "text-slate-600"
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
              href="/cliente"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-sm ring-1 ring-slate-900 transition-all duration-300 hover:bg-rose-600 hover:ring-rose-600 hover:shadow-rose-100 hover:scale-[1.02]"
              aria-label="Acessar Área do Cliente"
            >
              <Lock className="h-4 w-4 text-rose-500 transition-colors group-hover:text-white" />
              <span>Área do Cliente</span>
            </Link>
          </div>

          {/* Mobile Layout Actions (Immediate CTA access for mobile + hamburger) */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Small Quick-CTA for Mobile: Directly accessible without menu! */}
            <Link
              href="/cliente"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-slate-950 p-2 text-white transition-all hover:bg-rose-600"
              title="Área do Cliente"
              aria-label="Acessar Área do Cliente"
            >
              <Lock className="h-4 w-4 text-rose-500" />
              <span className="text-xs font-bold pr-1">Área do Cliente</span>
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none"
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
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-slate-200/50 bg-white",
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
                    ? "bg-slate-50 text-rose-600 font-semibold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-rose-600"
                )}
              >
                {item.name}
              </Link>
            );
          })}
          
          {/* Mobile Menu Hidden Link (only visible when client is very small < 640px) */}
          <div className="pt-4 sm:hidden">
            <Link
              href="/cliente"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 py-3 text-center text-sm font-bold text-white transition-all hover:bg-rose-600"
            >
              <Lock className="h-4 w-4 text-rose-500" />
              <span>Área do Cliente</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
