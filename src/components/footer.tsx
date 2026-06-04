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
                <a
                  href="https://wa.me/551148038006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                >
                  <svg
                    className="h-4 w-4 text-rose-500 shrink-0 fill-current transition-colors group-hover:text-[#25D366]"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.42 9.86-9.864.001-2.637-1.03-5.115-2.905-6.99C16.553 1.876 14.076.845 11.441.845 6.008.845 1.585 5.26 1.581 10.697c-.001 1.709.447 3.378 1.299 4.873l-.993 3.624 3.76-.987zm11.567-7.28c-.313-.156-1.854-.915-2.141-1.018-.287-.104-.497-.156-.707.156-.21.312-.813 1.018-.996 1.225-.183.208-.365.234-.678.078-.313-.156-1.32-.486-2.514-1.55-1.082-.965-1.813-2.158-2.025-2.522-.21-.365-.022-.562.134-.717.14-.14.313-.365.47-.547.157-.182.21-.312.313-.52.103-.209.052-.39-.026-.547-.079-.156-.708-1.705-.97-2.33-.255-.612-.513-.529-.706-.539-.183-.01-.39-.01-.597-.01-.207 0-.544.078-.83.39-.286.312-1.096 1.069-1.096 2.604 0 1.536 1.117 3.023 1.272 3.23.156.209 2.197 3.355 5.323 4.704.743.32 1.323.511 1.776.654.747.238 1.428.205 1.966.125.6-.089 1.854-.757 2.115-1.457.26-.7.26-1.3.183-1.428-.078-.128-.287-.208-.6-.364z" />
                  </svg>
                  <span>WhatsApp: (11) 4803-8006</span>
                </a>
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
