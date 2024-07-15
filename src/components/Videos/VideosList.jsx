import Videos from "./Videos";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

const VideosList = ({id}) => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const apiKEY = '?api_key=8bf1809d-0d2a-456e-aa8f-29069d90323a';
        const apiURL = 'http://localhost:8000';
            
        const fetchVideoList = async () => {
            try {
                const response = await axios.get(`${apiURL}/videos/${apiKEY}`);
                const videoList = response.data;
                const filteredList = videoList.filter((video) => {
                    return video.id !== id;
                });
                
                setVideos(filteredList);
               
            } catch (error){    
                console.log(error)
            }
        }

        fetchVideoList(); 
        
    }, [id])

    return (
        <section className="videos">
            <h2  className="videos__title">NEXT VIDEOS</h2>
            {videos.map((data) => {

                return (

                    <Link key={data.id} className="videos__link" to={`/videoplayer/${data.id}`} >
                        <Videos
                        key={data.id} 
                        thumbnail={data.image}
                        name={data.channel}
                        title={data.title}
                        />
                    </Link>
                )
            })
            }
        </section>
    )
}

export default VideosList;