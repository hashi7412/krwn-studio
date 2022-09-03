declare module "react-awesome-reveal"

declare interface StoreObject {
    theme:              "" | "dark"
    loading:            boolean
}

declare interface LinkObject {
    label:              string
    url:                string
}

declare interface FooterLinksObject {
    title:              string
    items:              Array<LinkObject>
}