export interface NavItem {
    label: string
    href : string
    submenu?: {label:string; href:string}[]
}
export interface NavigationDoc {
    logoUrl?: string
    items: NavItem[]
}
