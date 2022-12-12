import { ProductConnection } from "@framework/schema";
import { fetchApi, normalizeProduct, getAllProductsQuery } from "@framework/utils";
import { Product } from "@common/types/product";

const getAllProducts = async (): Promise<Product[]> => {
    const data = await fetchApi<{ products: ProductConnection }>({
        query: getAllProductsQuery,
    });
    const products = data.products.edges.map(({ node }) => normalizeProduct(node)) ?? [];
    return products;
};

export default getAllProducts;
