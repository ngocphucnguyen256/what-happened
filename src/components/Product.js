import producticon1 from '../assets/producticon-01.png'
import producticon2 from '../assets/producticon-02.png'
import producticon3 from '../assets/producticon-03.png'
import product1 from '../assets/best-image-01.png'
import product2 from '../assets/best-image-02.png'
import product3 from '../assets/best-image-03.png'
import goIcon from '../assets/go-icon.png'

const Product =()=>{






    return(
        <div className="product">
            <div className="container product__container">
                    <h2 className="product__heading">best product</h2>
                    <p className="product__desc">How to create mobile-optimized videos in minutes. Not a designer, 
                    every team makes a lot of videos Can be trimmed. Take the first </p>
                    <div className="product__list">
                        <div className="product__item">
                            <img className="product__item--icon" src={producticon1} alt="Producticon"/>
                            <img className="product__item--img" src={product1} alt="pro_1"/>
                            <div className="product__item--desc">
                                <p>How to create mobile-optimized</p>
                                <img className="product__item--desc--icon" src={goIcon} alt="go"/>
                            </div>
                        </div>
                        <div className="product__item">
                            <img className="product__item--icon" src={producticon2} alt="Producticon"/>
                            <img className="product__item--img" src={product2} alt="pro_1"/>
                            <div className="product__item--desc">
                                <p>How to create mobile-optimized</p>
                                <img className="product__item--desc--icon" src={goIcon} alt="go"/>
                            </div>
                        </div>
                        <div className="product__item">
                            <img className="product__item--icon" src={producticon3} alt="Producticon"/>
                            <img className="product__item--img" src={product3} alt="pro_1"/>
                            <div className="product__item--desc">
                                <p>How to create mobile-optimized</p>
                                <img className="product__item--desc--icon" src={goIcon} alt="go"/>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default Product