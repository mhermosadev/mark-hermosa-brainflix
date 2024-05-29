import Videos from "./Videos";
import videosArr from '../../data/video-details.json';
import { useState } from "react";

const VideosList = () => {

    const [videos, setVideos] = useState(videosArr.slice(1));

    console.log(videos)

    return (
        <section className="videos">
            <h2 className="videos__title">NEXT VIDEOS</h2>
            {videos.map((data, index) => {

                return (
                    <Videos 
                    id={data.id}
                    thumbnail={data.image}
                    name={data.channel}
                    title={data.title}
                    />
                )
            })
            }
        </section>
    )
}

export default VideosList;