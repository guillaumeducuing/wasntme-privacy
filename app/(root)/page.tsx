import { LANGS, CONTENT } from "@/lib/content";
import { LangRedirect } from "./LangRedirect";

// "/" → la langue du navigateur parmi en, fr, es (anglais par défaut).
// Site statique : la redirection se fait dans le navigateur, avec des liens
// pour le cas où JavaScript est désactivé.
export default function Root() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 24 }}>
      <LangRedirect />
      <noscript>
        <meta httpEquiv="refresh" content="0; url=./en/" />
      </noscript>
      <p>
        {LANGS.map((l, i) => (
          <span key={l}>
            {i > 0 && " · "}
            <a href={`./${l}/`} hrefLang={l}>{CONTENT[l].langName}</a>
          </span>
        ))}
      </p>
    </main>
  );
}
