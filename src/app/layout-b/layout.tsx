import NavbarB from "@/components/navbar-b";
import FooterB from "@/components/footer-b";
import LayoutSwitcher from "@/components/layout-switcher";

export default function LayoutB({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800 selection:bg-blue-600 selection:text-white scroll-smooth">
      <NavbarB />
      <main className="flex-grow">
        {children}
      </main>
      <FooterB />
      <LayoutSwitcher />
    </div>
  );
}
