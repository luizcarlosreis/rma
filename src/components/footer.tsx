import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-400">
      
      {/* Background visual element */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.05),transparent_350px)] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          
          {/* Brand Column (5 columns) */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 p-1 shadow-inner backdrop-blur-sm">
                <Image
                  src="/logo.png"
                  alt="RMA Solutions Logo"
                  width={36}
                  height={36}
                  className="brightness-0 invert object-contain"
                />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white">
                RMA <span className="text-rose-500">Solutions</span>
              </span>
            </div>
            
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              **RMA - Assessoria Contábil e Trabalhista a Condomínios**. Elevando a gestão condominial a novos patamares de modernidade, transparência e segurança jurídica.
            </p>

            <div className="flex flex-col space-y-3.5 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-rose-500 shrink-0" />
                <span className="text-slate-300">(11) 4803-8005 / 8006</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-rose-500 shrink-0" />
                <span className="text-slate-300">contato@rmasolutions.com.br</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column (3 columns) */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Navegação</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Início", href: "/" },
                { name: "Serviços", href: "/servicos" },
                { name: "Fale Conosco", href: "/fale-conosco" },
                { name: "Área do Cliente", href: "/cliente" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 hover:text-white transition-colors"
                  >
                    <ChevronRight className="h-3 w-3 text-rose-500 transition-transform group-hover:translate-x-1" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Focus (4 columns) */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Diferenciais</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Nossa assessoria atua preventivamente nas esferas trabalhista, contábil e fiscal de condomínios. Garantimos que sua prestação de contas seja clara, auditada e disponível digitalmente.
            </p>
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4 text-xs leading-normal">
              <span className="font-semibold text-rose-500 block mb-1">Garantia de Segurança</span>
              Todos os processos são geridos por contadores especialistas com certificação CRC ativo.
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-10 border-slate-900" />

        {/* Mandatory Address & Phones Footer Bar */}
        <div className="flex flex-col items-center justify-between gap-6 text-center text-xs md:flex-row md:text-left">
          
          <div className="flex flex-col space-y-2 max-w-3xl">
            {/* Mandatory Address text block styled premiumly */}
            <div className="flex items-start gap-2.5 text-slate-300">
              <MapPin className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Rua Sete de Setembro, 235 – 1º andar – sala 16 – Centro de Guarulhos-SP - CEP 07011-020 | Fones: (11) 4803-8005 / 8006
              </p>
            </div>
            
            <p className="text-slate-500 text-[11px] pl-6">
              © {currentYear} RMA Solutions - Assessoria Contábil e Trabalhista a Condomínios LTDA. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex gap-4 text-slate-500 text-[11px]">
            <Link href="/politica-de-privacidade" className="hover:text-slate-300 transition-colors">Políticas</Link>
            <span>•</span>
            <Link href="/termos-de-uso" className="hover:text-slate-300 transition-colors">Termos</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
