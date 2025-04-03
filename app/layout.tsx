import "./globals.css";
import { font } from "./fonts";
import Providers from "@/Providers";
// app/layout.tsx
export const metadata = {
  title: "Next E Commerce Admin App",
  description: "This is Next E Commerce Admin App",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
