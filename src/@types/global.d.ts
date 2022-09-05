declare module "react-awesome-reveal"
declare module "three"
declare module "three/examples/jsm/controls/OrbitControls"
declare module "three/examples/jsm/loaders/GLTFLoader"

declare module "*.png"
declare module "*.gif"
declare module "*.gltf"

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