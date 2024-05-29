import FeaturedVideo from "../FeaturedVideo/FeaturedVideo";
import FeaturedVideoInfo from "../FeaturedVideoInfo/FeaturedVideoInfo"
import Form from "../Form/Form";
import CommentsList from "../Comments/CommentsList";
import VideosList from "../Videos/VideosList";
import videoArr from '../../data/video-details.json';
import { useState } from "react";

const Main = () => {

   const [featured, setfeatured] = useState(videoArr[0])
   console.log(featured)

    return (
        <>
        <main>
            <FeaturedVideo 
            poster={featured.image}/>
            <FeaturedVideoInfo 
            title={featured.title} 
            channel={featured.channel} 
            date={new Date(featured.timestamp).toLocaleDateString()}
            views={featured.views} 
            likes={featured.likes} 
            description={featured.description}
            counter={featured.comments.length}
            />
            
            <Form />
            <CommentsList/>
            <VideosList />
        </main>
        </>
     
    )
       
   }
   
   export default Main;