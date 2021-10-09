import SeeMoreBtn  from "./SeeMoreBtn"
import arrow from '../assets/news-img-01.png'
import newsImg3 from '../assets/news-img-03.png'
import newsImg4 from '../assets/news-img-04.png'
import newsImg5 from '../assets/news-img-05.png'
import newsOject1 from '../assets/news-object-01.png'
import newsOject2 from '../assets/news-object-02.png'
import newsOject3 from '../assets/news-object-03.png'
import newsOject4 from '../assets/news-object-04.png'
import newsOject5 from '../assets/news-object-05.png'


const Issue =()=>{






    return(
        <div className="issue">
            <div className=" issue__container">
                    <h2 className="issue__heading">Happened’s issue</h2>
                    <p className="issue__desc">모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
                    <div className="issue__button">
                            <SeeMoreBtn/>
                    </div>
                    <div className="issue__list">
                        <div className="issue__item orange">
                            <p className="issue__item--big--heading">whpn
issue
</p>                    
                            <img className="issue__item--arrow" src={arrow} alt='arrow'/>
            <img className="issue__object--3" src={newsOject3} alt='newsObject'/>

                        </div>
                        <div className="issue__item">
                            <div className="issue__item--heading">b brand</div>
                            <div className="issue__item--img">
                                <img src={newsImg3} alt='newsImage'/>
                            </div>
                            <img className="issue__object--4" src={newsOject4} alt='newsObject'/>

                        </div>
                        <div className="issue__item">
                            <div className="issue__item--heading">b brand</div>
                            <div className="issue__item--img">
                                <img src={newsImg3} alt='newsImage'/>
                            </div>
                        </div>
                        <div className="issue__item">
                            <div className="issue__item--heading orange">b brand</div>
                            <div className="issue__item--img">
                                <img src={newsImg4} alt='newsImage'/>
                            </div>
                        </div>
                        <div className="issue__item">
                            <div className="issue__item--heading">b brand</div>
                            <div className="issue__item--img">
                                <img src={newsImg5} alt='newsImage'/>
                            </div>
                            <img className="issue__object--5" src={newsOject5} alt='newsObject'/>

                        </div>
                    </div>
            </div>
            <img className="issue__object--1" src={newsOject1} alt='newsObject'/>
            <img className="issue__object--2" src={newsOject2} alt='newsObject'/>

        </div>
    )
}


export default Issue