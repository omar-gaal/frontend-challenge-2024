


import ProductCard from "./ProductCard";

const FeaturedProducts = ({ products }) => {
    return (
        <section className="product-section py-16">
            <h2 className="text-3xl text-center font-bold mb-8"> Featured Products</h2>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.slice(0, 6).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
