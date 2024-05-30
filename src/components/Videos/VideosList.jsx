import Videos from "./Videos";
import videosArr from '../../data/video-details.json';
import { useState } from "react";

const VideosList = ({setFeatured, setTitle, setChannel, setTimestamp, setDescription, setComment, setLikes, setViews}) => {

    const [videos, setVideos] = useState(videosArr.slice(1));

    return (
        <section className="videos">
            <h2 className="videos__title">NEXT VIDEOS</h2>
            {videos.map((data, index) => {

                const onClick = () => {
                    setFeatured(data.image)
                    setTitle(data.title)
                    setChannel(data.channel)
                    setTimestamp(data.timestamp)
                    setDescription(data.description)
                    setLikes(data.likes)
                    setViews(data.likes)
                    setComment(data.comments)
                }

                return (
                    <Videos 
                    id={data.id}
                    thumbnail={data.image}
                    name={data.channel}
                    title={data.title}
                    onclick={onClick}
                    />
                )
            })
            }
        </section>
    )
}

export default VideosList;