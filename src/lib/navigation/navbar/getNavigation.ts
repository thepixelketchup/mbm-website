import {NavigationDoc} from "@/lib/navigation/navbar/nav-types";
import {navQuery} from "@/lib/navigation/navbar/nav-query";
import {client} from "@/lib/sanity.client";

export async function getNavigation(): Promise<NavigationDoc> {
    return client.fetch(navQuery)
}
