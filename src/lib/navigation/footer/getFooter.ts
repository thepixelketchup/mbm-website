import {footerQuery} from "@/lib/navigation/footer/footer-query";
import {client} from "@/lib/sanity.client";

export type FooterData = Awaited<ReturnType<typeof getFooter>>

export async function getFooter() {
    return client.fetch(footerQuery)
}