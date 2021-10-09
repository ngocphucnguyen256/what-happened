import SeeMoreBtn  from "./SeeMoreBtn"
import arrow from '../assets/news-img-01.png'
import newsImg2 from '../assets/news-img-03.png'


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
                        </div>
                        <div className="issue__item">
                            <div className="issue__item--heading">b brand</div>
                            <div className="issue__item--img">
                                <img src={newsImg2} alt='newsImage'/>
                            </div>
                        </div>
                        <div className="issue__item">
                            <div className="issue__item--heading">b brand</div>
                            <div className="issue__item--img">
                                <img src={newsImg2} alt='newsImage'/>
                            </div>
                        </div>
                        <div className="issue__item">
                            <div className="issue__item--heading orange">b brand</div>
                            <div className="issue__item--img">
                                <img src={newsImg2} alt='newsImage'/>
                            </div>
                        </div>
                        <div className="issue__item">
                            <div className="issue__item--heading">b brand</div>
                            <div className="issue__item--img">
                                <img src={newsImg2} alt='newsImage'/>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default Issue