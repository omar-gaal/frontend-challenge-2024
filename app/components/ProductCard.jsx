import Link from "next/link";
import Image from 'next/image'

const ProductCard = ({ product }) => {
    return (

      
        <div className="product-card border p-4 rounded-lg shadow-md hover:shadow-lig">
             <Link href={`/product-page/${product.id}`}> 


                <Image
                src={product.image}
                alt={product.title}                 
                className="w-full h-56 object-cover mb-4" 
                 width={500}  
                height={500}  
                />            
        
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-xl font-bold text-blue-600">${product.price}</p>
            </Link>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">
              Add to Cart
             </button>
        </div>
    )
}


export default ProductCard;
