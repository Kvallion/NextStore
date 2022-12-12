import { Image, Product } from "@common/types/product";
import { ImageConnection, Product as ShopifyProduct } from "@framework/schema";

export function normalizeProductImages(imageConnection: ImageConnection): Image[] {
    const { edges } = imageConnection;
    const images = edges.map(({ node }) => ({ url: `/images/${node.originalSrc}`, ...node }));

    return images;
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
    const { title: name, handle, images, ...rest } = productNode;
    const product: Product = {
        name,
        handle: handle,
        path: `/${handle}`,
        slug: handle.replace(/^\/+|\/+$/g, ""),
        images: normalizeProductImages(images),
        ...rest,
    };
    return product;
}
