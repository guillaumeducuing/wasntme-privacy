import localFont from "next/font/local";

// Mêmes polices que l'extension (variables, licence OFL)
export const display = localFont({
  src: "./fonts/bricolage-grotesque.woff2",
  weight: "200 800",
  variable: "--font-display",
  display: "swap"
});

export const mono = localFont({
  src: "./fonts/jetbrains-mono.woff2",
  weight: "100 800",
  variable: "--font-mono",
  display: "swap"
});
