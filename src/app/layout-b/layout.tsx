import NavbarB from "@/components/navbar-b";
import FooterB from "@/components/footer-b";
import LayoutSwitcher from "@/components/layout-switcher";

export default function LayoutB({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-400 selection:text-slate-950 scroll-smooth">
      <NavbarB />
      <main className="flex-grow">
        {children}
      </main>
      <FooterB />
      <LayoutSwitcher />
    </div>
  );
}
