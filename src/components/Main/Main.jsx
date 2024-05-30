import FeaturedVideo from "../FeaturedVideo/FeaturedVideo";
import FeaturedVideoInfo from "../FeaturedVideo/FeaturedVideoInfo"
import Form from "../Form/Form";
import Comments from '../Comments/CommentsList';
import VideosList from "../Videos/VideosList";
import videoArr from '../../data/video-details.json';
import { useState } from "react";
import commentArr from '../../data/video-details.json';

const Main = () => {

    const [featured, setFeatured] = useState(videoArr[0].image)
    const [title, setTitle] = useState(videoArr[0].title)
    const [channel, setChannel] = useState(videoArr[0].channel)
    const [timestamp, setTimestamp] = useState(new Date(videoArr[0].timestamp).toLocaleDateString())
    const [description, setDescription] = useState(videoArr[0].description)
    const [likes, setLikes] = useState(videoArr[0].likes)
    const [views, setViews] = useState(videoArr[0].views)
    const [comment, setComment] = useState(videoArr[0].comments)

    console.log(views)

    return (
        <>
        <main>
            <FeaturedVideo 
            poster={featured}/>

            <div className="main__wrapper--desktop">
                <aside className="main__wrapper--left">
                    <FeaturedVideoInfo 
                    title={title}
                    channel={channel}
                    timestamp={timestamp}
                    description={description}
                    likes={likes}
                    views={views}
                    />
                    <Form />
    
                    {
                    comment.map((data, index,) => {
                        return (
                            <div className="comments">
                                <Comments 
                                id={data.id}
                                name={data.name}
                                date={data.timestamp}
                                comment={data.comment}
                                />
                            </div>
                           
                        )
                    })
                    }
                </aside>
            
                <aside className="main__wrapper--right" >
                    <VideosList 
                    setFeatured={setFeatured}
                    setTitle={setTitle}
                    setChannel={setChannel}
                    setTimestamp={setTimestamp}
                    setDescription={setDescription}
                    setLikes={setLikes}
                    setViews={setViews}
                    setComment={setComment}

                    />  
                </aside>
            </div>
        </main>
        </>
    )
       
   }
   
   export default Main;