import {NavigationDoc} from "@/lib/navigation/nav-types";
import {navQuery} from "@/lib/navigation/nav-query";
import {client} from "@/lib/sanity.client";

export async function getNavigation(): Promise<NavigationDoc> {
    return client.fetch(navQuery)
}
