import logo from '../assets/logo.png';

const Nav =()=>{






    return(
        <div className="nav">
            <div className="nav__container">
                <div className="nav__logo"> <a href="/"><img src={logo} alt="logo"/></a></div>
                <ul className="nav__list">
                        <li className="nav__item"><a href="/">Introduction</a></li>
                        <li className="nav__item"><a href="/">solution</a></li>
                        <li className="nav__item"><a href="/">rate plan</a></li>
                        <li className="nav__item nav__login"><a href="/">login</a></li>
                        <li className="nav__item"><a href="/">apply for free use</a></li>
                </ul>
            </div>
        </div>
    )
}


export default Nav