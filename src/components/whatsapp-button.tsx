"use client";

import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <a
      href="https://wa.me/551148038006"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#22c35e] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 active:scale-95 animate-bounce-subtle"
      id="whatsapp-floating-button"
    >
      {/* Pulse effect */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none -z-10" />
      
      {/* WhatsApp SVG Icon */}
      <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.42 9.86-9.864.001-2.637-1.03-5.115-2.905-6.99C16.553 1.876 14.076.845 11.441.845 6.008.845 1.585 5.26 1.581 10.697c-.001 1.709.447 3.378 1.299 4.873l-.993 3.624 3.76-.987zm11.567-7.28c-.313-.156-1.854-.915-2.141-1.018-.287-.104-.497-.156-.707.156-.21.312-.813 1.018-.996 1.225-.183.208-.365.234-.678.078-.313-.156-1.32-.486-2.514-1.55-1.082-.965-1.813-2.158-2.025-2.522-.21-.365-.022-.562.134-.717.14-.14.313-.365.47-.547.157-.182.21-.312.313-.52.103-.209.052-.39-.026-.547-.079-.156-.708-1.705-.97-2.33-.255-.612-.513-.529-.706-.539-.183-.01-.39-.01-.597-.01-.207 0-.544.078-.83.39-.286.312-1.096 1.069-1.096 2.604 0 1.536 1.117 3.023 1.272 3.23.156.209 2.197 3.355 5.323 4.704.743.32 1.323.511 1.776.654.747.238 1.428.205 1.966.125.6-.089 1.854-.757 2.115-1.457.26-.7.26-1.3.183-1.428-.078-.128-.287-.208-.6-.364z" />
      </svg>
    </a>
  );
}
