import { ApiConfig } from "@common/types/api";
import { Product } from "@common/types/product";
import { ProductConnection } from "@framework/schema";
import { getAllProductsQuery, normalizeProduct } from "@framework/utils";

async function getAllProducts(config: ApiConfig): Promise<Product[]> {
    const data = await config.fetch<{ products: ProductConnection }>({
        url: config.apiUrl,
        query: getAllProductsQuery,
    });
    const products = data.products.edges.map(({ node }) => normalizeProduct(node)) ?? [];
    return products;
}

export default getAllProducts;
