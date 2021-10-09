import ProductCard  from "./ProductCard"
import ProductData  from "./ProductDada";
import SeeMoreBtn from './SeeMoreBtn'



// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
//   }


const ProductList =()=>{






    return(
        <div className="productlist">
            <div className="container productlist__container">
                {
                    ProductData.map((item, index)=>
                        <ProductCard key={index} img={item.img} price={item.price} heartCount={item.heartCount}/>
                    )
                }
            </div>
                <div className="productlist__button">
                    <SeeMoreBtn/>
                </div>
        </div>
    )
}


export default ProductList