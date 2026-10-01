import Link from "next/link";
import { notFound } from "next/navigation";
import { Mascot } from "../Mascot";
import { CONTACT_EMAIL, CONTENT, LANGS, LAST_UPDATED, isLang } from "@/lib/content";

export default async function PrivacyPage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = CONTENT[lang];
  const updated = LAST_UPDATED.toLocaleDateString(lang, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  });

  return (
    <>
      <header className="top">
        <div className="brand">
          <Mascot />
          <span className="brand-name">WasntMe</span>
        </div>
        <nav className="langs" aria-label={t.languages}>
          {LANGS.map(l => (
            <Link
              key={l}
              href={`/${l}`}
              hrefLang={l}
              lang={l}
              aria-current={l === lang ? "page" : undefined}
            >
              {l.toUpperCase()}
              <span className="sr-only"> · {CONTENT[l].langName}</span>
            </Link>
          ))}
        </nav>
      </header>

      <main className="page">
        <section className="hero">
          <div>
            <h1>{t.title}</h1>
            <p className="meta">
              {t.updated} · {updated}
            </p>
          </div>
          <span className="sticker">100% local</span>
        </section>

        <p className="intro">{t.intro}</p>

        <section className="card summary">
          <Mascot size={88} whistle />
          <div>
            <h2 className="eyebrow">{t.summaryTitle}</h2>
            <p>
              <strong>{t.summaryStrong}</strong> {t.summaryRest}
            </p>
          </div>
        </section>

        <section>
          <h2>{t.accessTitle}</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  {t.columns.map(c => (
                    <th key={c} scope="col">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.rows.map(row => (
                  <tr key={row.data}>
                    <th scope="row" data-label={t.columns[0]}>{row.data}</th>
                    <td data-label={t.columns[1]}>{row.why}</td>
                    <td data-label={t.columns[2]}>{row.where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note">{t.accessNote}</p>
        </section>

        <section>
          <h2>{t.neverTitle}</h2>
          <ul className="never">
            {t.never.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{t.deleteTitle}</h2>
          <p>{t.deleteText}</p>
        </section>

        {CONTACT_EMAIL && (
          <section>
            <h2>{t.contactTitle}</h2>
            <p>
              {t.contactText} <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </section>
        )}
      </main>

      <footer className="foot">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
        {t.footer}
      </footer>
    </>
  );
}
