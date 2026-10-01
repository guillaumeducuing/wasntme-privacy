// Layout minimal de "/", qui redirige aussitôt vers /en, /fr ou /es
export default function RootRedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
