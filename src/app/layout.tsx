import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@space/components/ui/theme-provider";
import { ScrollProgress } from "@space/components/magicui/scroll-progress";
import { Navbar } from "./_components/navbar/layout";
import { poppinsRegular } from "./_components/poppins/weight-poppins";

export const metadata: Metadata = {
  title: "Portfólio - YM",
  description: "Meu portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${poppinsRegular.className}`}>
        <ScrollProgress />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
