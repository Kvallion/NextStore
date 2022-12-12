import styles from "../styles/Home.module.css";
import { InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/product/getAllProducts";

export async function getStaticProps() {
    const products = await getAllProducts();
    return {
        props: {
            products: products,
        },
        revalidate: 4 * 60 * 60,
    };
}

export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div className={styles.container}>
            {/* {products.map((prod) => (
                <div key={prod}>{prod}</div>
            ))} */}
            {JSON.stringify(products)}
        </div>
    );
}
