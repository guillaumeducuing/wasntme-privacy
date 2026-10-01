"use client";

import { useEffect } from "react";
import { pickLang } from "@/lib/content";

export function LangRedirect() {
  useEffect(() => {
    window.location.replace(`./${pickLang(navigator.languages)}/`);
  }, []);
  return null;
}
