import { getI18n } from "@/locales/server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();
  return {
    title: t("metadata.title"),
    description: t(
      "metadata.description"
    ),
  };
}
