import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LayoutSwitcher from "@/components/layout-switcher";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <LayoutSwitcher />
    </>
  );
}

