
import heartIcon from '../assets/hearticon.png'




const ProductCard =(props)=>{
    console.log(props.img)





    return(
        <div className="productcard">
            <img className="productcard__img" src={props.img} alt="Product Card"/>
            <p className="productcard__title">[what happen] How to create </p>
            <div className="productcard__bottom">
              <p className="productcard__price">{props.price}</p>
                <div className="productcard__bottom--right">
                    <img className="productcard__bottom--icon" src={heartIcon} alt="heartIcon"/>
                    <p  className="productcard__heartcount">{props.heartCount}</p>
                </div>
            </div>
        </div>
    )
}


export default ProductCard