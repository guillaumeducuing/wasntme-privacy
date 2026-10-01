// Textes de la politique de confidentialité, dans les 3 langues de l'extension.
// Pour la modifier : changer le texte ici et la date LAST_UPDATED.

export const LANGS = ["en", "fr", "es"] as const;
export type Lang = (typeof LANGS)[number];

export const isLang = (value: string): value is Lang =>
  (LANGS as readonly string[]).includes(value);

export const LAST_UPDATED = new Date("2026-10-01");

// Adresse de contact affichée sur la page : variable CONTACT_EMAIL, lue au build
// (GitHub → Settings → Secrets and variables → Actions → Variables).
// Sans elle, la section Contact n'est pas affichée.
export const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "";

type Row = { data: string; why: string; where: string };

export type Content = {
  langName: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  updated: string;
  intro: string;
  summaryTitle: string;
  summaryStrong: string;
  summaryRest: string;
  accessTitle: string;
  columns: [string, string, string];
  rows: Row[];
  accessNote: string;
  neverTitle: string;
  never: string[];
  deleteTitle: string;
  deleteText: string;
  contactTitle: string;
  contactText: string;
  footer: string;
  languages: string;
};

export const CONTENT: Record<Lang, Content> = {
  en: {
    langName: "English",
    metaTitle: "Privacy Policy · WasntMe",
    metaDescription:
      "WasntMe collects no data. Everything happens locally in your browser: no server, no analytics, no tracking.",
    title: "Privacy Policy",
    updated: "Last updated",
    intro:
      "WasntMe is a Chrome extension that finds adult websites and explicit searches in your browsing history and lets you erase only those traces.",
    summaryTitle: "In short",
    summaryStrong: "WasntMe does not collect, transmit, sell or share any data.",
    summaryRest:
      "Everything happens locally, inside your browser. The extension has no server, no analytics, no tracking and makes no network requests.",
    accessTitle: "What the extension accesses, and why",
    columns: ["Data", "Why", "Where it stays"],
    rows: [
      {
        data: "Browsing history (URLs, page titles)",
        why: "To find adult websites and explicit searches, and to delete the entries you choose",
        where: "Read in memory during a scan, never stored or sent"
      },
      {
        data: "Download list",
        why: "To remove download entries coming from those websites (the files themselves are not deleted)",
        where: "Read in memory, never stored or sent"
      },
      {
        data: "Cookies, site data and cache",
        why: "To clear them only for the websites you choose to clean",
        where: "Deleted by Chrome, never read"
      },
      {
        data: "Address of the current tab",
        why: "To notice when you visit a detected website, so its cookies can be cleaned later and the badge can be updated",
        where: "The site's origin is kept in Chrome's local extension storage until you clean it"
      },
      {
        data: "Your settings (extra domains, allowlist, options)",
        why: "To remember your preferences",
        where: "Chrome's local extension storage, on your device only"
      }
    ],
    accessNote:
      "The extension also stores the date and number of traces found by the last scan, to show them on the home screen and in the icon badge.",
    neverTitle: "What the extension never does",
    never: [
      "It never sends your history, searches or any other data to a server, including ours: we have none.",
      "It never uses your data for advertising, profiling or any purpose other than the cleaning feature described above.",
      "It never sells or transfers data to third parties.",
      "It never loads or runs remote code."
    ],
    deleteTitle: "Deleting your data",
    deleteText:
      "Removing the extension from Chrome deletes everything it stored (settings and remembered website origins).",
    contactTitle: "Contact",
    contactText: "Questions about this policy:",
    footer: "100% local. Nothing leaves your browser.",
    languages: "Language"
  },

  fr: {
    langName: "Français",
    metaTitle: "Politique de confidentialité · WasntMe",
    metaDescription:
      "WasntMe ne collecte aucune donnée. Tout se passe localement dans votre navigateur : ni serveur, ni statistiques, ni pistage.",
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour",
    intro:
      "WasntMe est une extension Chrome qui repère les sites pour adultes et les recherches explicites dans votre historique de navigation, et vous permet d’effacer uniquement ces traces.",
    summaryTitle: "En résumé",
    summaryStrong: "WasntMe ne collecte, ne transmet, ne vend et ne partage aucune donnée.",
    summaryRest:
      "Tout se passe localement, dans votre navigateur. L’extension n’a ni serveur, ni statistiques, ni pistage, et n’effectue aucune requête réseau.",
    accessTitle: "Ce à quoi l’extension accède, et pourquoi",
    columns: ["Donnée", "Pourquoi", "Où elle reste"],
    rows: [
      {
        data: "Historique de navigation (adresses, titres de pages)",
        why: "Repérer les sites pour adultes et les recherches explicites, et supprimer les entrées que vous choisissez",
        where: "Lu en mémoire pendant l’analyse, jamais enregistré ni envoyé"
      },
      {
        data: "Liste des téléchargements",
        why: "Retirer les entrées venant de ces sites (les fichiers ne sont pas supprimés)",
        where: "Lue en mémoire, jamais enregistrée ni envoyée"
      },
      {
        data: "Cookies, données de site et cache",
        why: "Les effacer uniquement pour les sites que vous choisissez de nettoyer",
        where: "Supprimés par Chrome, jamais lus"
      },
      {
        data: "Adresse de l’onglet en cours",
        why: "Repérer la visite d’un site détecté, pour pouvoir effacer ses cookies plus tard et mettre à jour le badge",
        where: "L’origine du site est gardée dans le stockage local de l’extension jusqu’au nettoyage"
      },
      {
        data: "Vos réglages (domaines ajoutés, liste blanche, options)",
        why: "Mémoriser vos préférences",
        where: "Stockage local de l’extension, sur votre appareil uniquement"
      }
    ],
    accessNote:
      "L’extension garde aussi la date et le nombre de traces du dernier scan, pour les afficher sur l’écran d’accueil et dans le badge de l’icône.",
    neverTitle: "Ce que l’extension ne fait jamais",
    never: [
      "Elle n’envoie jamais votre historique, vos recherches ou toute autre donnée à un serveur, y compris le nôtre : nous n’en avons pas.",
      "Elle n’utilise jamais vos données pour de la publicité, du profilage ou tout autre usage que le nettoyage décrit ci-dessus.",
      "Elle ne vend ni ne transfère aucune donnée à des tiers.",
      "Elle ne charge ni n’exécute de code distant."
    ],
    deleteTitle: "Supprimer vos données",
    deleteText:
      "Désinstaller l’extension de Chrome supprime tout ce qu’elle a enregistré (réglages et origines de sites mémorisées).",
    contactTitle: "Contact",
    contactText: "Questions sur cette politique :",
    footer: "100 % local. Rien ne quitte votre navigateur.",
    languages: "Langue"
  },

  es: {
    langName: "Español",
    metaTitle: "Política de privacidad · WasntMe",
    metaDescription:
      "WasntMe no recopila ningún dato. Todo ocurre localmente en tu navegador: sin servidor, sin estadísticas, sin rastreo.",
    title: "Política de privacidad",
    updated: "Última actualización",
    intro:
      "WasntMe es una extensión de Chrome que detecta sitios para adultos y búsquedas explícitas en tu historial de navegación y te permite borrar solo esos rastros.",
    summaryTitle: "En resumen",
    summaryStrong: "WasntMe no recopila, transmite, vende ni comparte ningún dato.",
    summaryRest:
      "Todo ocurre localmente, dentro de tu navegador. La extensión no tiene servidor, ni estadísticas, ni rastreo, y no realiza ninguna solicitud de red.",
    accessTitle: "A qué accede la extensión y por qué",
    columns: ["Dato", "Por qué", "Dónde se queda"],
    rows: [
      {
        data: "Historial de navegación (direcciones, títulos de página)",
        why: "Detectar sitios para adultos y búsquedas explícitas, y eliminar las entradas que elijas",
        where: "Se lee en memoria durante el escaneo, nunca se guarda ni se envía"
      },
      {
        data: "Lista de descargas",
        why: "Quitar las entradas que provienen de esos sitios (los archivos no se eliminan)",
        where: "Se lee en memoria, nunca se guarda ni se envía"
      },
      {
        data: "Cookies, datos de sitios y caché",
        why: "Borrarlos solo para los sitios que elijas limpiar",
        where: "Los elimina Chrome, nunca se leen"
      },
      {
        data: "Dirección de la pestaña actual",
        why: "Detectar la visita a un sitio identificado, para poder borrar sus cookies más tarde y actualizar la insignia",
        where: "El origen del sitio se guarda en el almacenamiento local de la extensión hasta la limpieza"
      },
      {
        data: "Tus ajustes (dominios extra, lista blanca, opciones)",
        why: "Recordar tus preferencias",
        where: "Almacenamiento local de la extensión, solo en tu dispositivo"
      }
    ],
    accessNote:
      "La extensión también guarda la fecha y el número de rastros del último escaneo, para mostrarlos en la pantalla de inicio y en la insignia del icono.",
    neverTitle: "Lo que la extensión nunca hace",
    never: [
      "Nunca envía tu historial, tus búsquedas ni ningún otro dato a un servidor, tampoco al nuestro: no tenemos.",
      "Nunca usa tus datos para publicidad, elaboración de perfiles ni ningún fin distinto de la limpieza descrita arriba.",
      "Nunca vende ni transfiere datos a terceros.",
      "Nunca carga ni ejecuta código remoto."
    ],
    deleteTitle: "Eliminar tus datos",
    deleteText:
      "Desinstalar la extensión de Chrome elimina todo lo que guardó (ajustes y orígenes de sitios memorizados).",
    contactTitle: "Contacto",
    contactText: "Preguntas sobre esta política:",
    footer: "100 % local. Nada sale de tu navegador.",
    languages: "Idioma"
  }
};

// ["fr-FR", "fr", "en"] (navigator.languages) → "fr" ; anglais par défaut
export function pickLang(languages: readonly string[]): Lang {
  return languages.map(tag => tag.slice(0, 2).toLowerCase()).find(isLang) ?? "en";
}
