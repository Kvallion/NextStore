import { Image as ShopifyImage, Product as ShopifyProduct } from "@framework/schema";

export interface Image extends ShopifyImage {
    url: string;
}

export interface Product extends Omit<ShopifyProduct, "title" | "images"> {
    name: string;
    path: string;
    slug: string;
    images: Image[];
}
