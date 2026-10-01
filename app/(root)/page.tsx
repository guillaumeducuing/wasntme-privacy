import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { pickLang } from "@/lib/content";

// "/" → la langue préférée du navigateur parmi en, fr, es (anglais par défaut)
export default async function Root() {
  const acceptLanguage = (await headers()).get("accept-language");
  redirect(`/${pickLang(acceptLanguage)}`);
}
