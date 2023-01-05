import { getConfig } from "@framework/api/config";
import getAllProducts from "@framework/product/getAllProducts";
import { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
    const config = getConfig();
    const products = await getAllProducts(config);
    return {
        props: {
            products: products,
        },
        revalidate: 4 * 60 * 60,
    };
}

export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div>
            {/* {products.map((prod) => (
                <div key={prod}>{prod}</div>
            ))} */}
            {JSON.stringify(products)}
        </div>
    );
}
