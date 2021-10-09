import SeeMoreBtn  from "./SeeMoreBtn"
import video from '../assets/video.png'
import videoObject1 from '../assets/video-object-01.png'
import videoObject2 from '../assets/video-object-02.png'
import videoObject3 from '../assets/video-object-03.png'
import videoObject4 from '../assets/video-object-04.png'
import videoObject5 from '../assets/video-object-05.png'
import videoObject6 from '../assets/video-object-06.png'
import videoObject7 from '../assets/video-object-07.png'
import videoObject8 from '../assets/video-object-08.png'
import videoObject9 from '../assets/video-object-09.png'

const Video =()=>{






    return(
        <div className="video">
            <div className="video__container">
                    <h2 className="video__heading">what happened</h2>
                    <p className="video__desc">How to create mobile-optimized videos in minutes. Not a designer, 
every team makes a lot of videos Can be trimmed. Take the first </p>
                    <div className="video__button">
                        <SeeMoreBtn/>
                    </div>
                    <img className="video__img"  src={video} alt="video"/>
            </div>
            <img className="video__object--1" src={videoObject1} alt="videoobject"/>
            <img className="video__object--2" src={videoObject2} alt="videoobject"/>
            <img className="video__object--3" src={videoObject3} alt="videoobject"/>
            <img className="video__object--4" src={videoObject4} alt="videoobject"/>
            <img className="video__object--5" src={videoObject5} alt="videoobject"/>
            <img className="video__object--6" src={videoObject6} alt="videoobject"/>
            <img className="video__object--7" src={videoObject7} alt="videoobject"/>
            <img className="video__object--8" src={videoObject8} alt="videoobject"/>
            <img className="video__object--9" src={videoObject9} alt="videoobject"/>
        </div>
    )
}


export default Video