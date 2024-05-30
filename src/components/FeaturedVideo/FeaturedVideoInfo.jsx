import FeaturedVideoDom from "./FeaturedVideoDom";
import videoInfo from '../../data/video-details.json'
import { useState } from "react";

const FeaturedVideoInfo = ({title, channel, timestamp, description, likes, views}) => {

const [info, setInfo] = useState(videoInfo[0])

    return (
        <FeaturedVideoDom 
            title={title} 
            channel={channel} 
            date={new Date(timestamp).toLocaleDateString()}
            views={views} 
            likes={likes} 
            description={description}
            counter={info.comments.length}
        />
    )
} 

export default FeaturedVideoInfo