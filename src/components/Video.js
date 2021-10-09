import SeeMoreBtn  from "./SeeMoreBtn"
import video from '../assets/video.png'

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
        </div>
    )
}


export default Video