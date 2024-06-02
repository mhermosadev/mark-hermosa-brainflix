import FeaturedVideoInfoDom from './FeaturedVideoInfoDom';
import videoInfo from '../../data/video-details.json'
import { useState } from "react";

const FeaturedVideoInfo = ({title, channel, timestamp, description, likes, views, counter}) => {

const [info, setInfo] = useState(videoInfo[0])

    return (
        <FeaturedVideoInfoDom 
            title={title} 
            channel={channel} 
            date={new Date(timestamp).toLocaleDateString()}
            views={views} 
            likes={likes} 
            description={description}
            counter={counter}
        />
    )
} 

export default FeaturedVideoInfo