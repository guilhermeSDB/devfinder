import { Space_Mono } from "next/font/google";
import "./globals.css";

const space_mono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "devfinder - Encontre perfis de desenvolvedores no GitHub",
  description:
    "Encontre facilmente perfis de desenvolvedores no GitHub com o devfinder, um aplicativo em NextJS desenvolvido para ajudar você a encontrar os talentos certos para o seu projeto. Pesquise por habilidades, localização e muito mais!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${space_mono.className} flex min-h-screen w-screen flex-col items-center justify-center bg-white text-black transition-colors duration-75 dark:bg-[#141C2F] dark:text-zinc-50`}
      >
        <main className="w-full max-w-screen-md px-6 md:p-6">{children}</main>
      </body>
    </html>
  );
}
