// app/layout.tsx
import "./globals.css";
import ClientThemeWrapper from "./components/ClientThemeWrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Adeeb | Portfolio",
  description: "Personal portfolio with smooth scrolling and dark/light mode using Zustand",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // ✅ suppressHydrationWarning avoids mismatch warnings for client-rendered attributes
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-700">
        {/* ✅ Wrap all UI inside the client-side wrapper */}
        <ClientThemeWrapper>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ClientThemeWrapper>
      </body>
    </html>
  );
}
