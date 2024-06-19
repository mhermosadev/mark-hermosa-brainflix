import './Main.scss';
import FeaturedVideo from "../FeaturedVideo/FeaturedVideo";
import FeaturedVideoInfo from "../FeaturedVideo/FeaturedVideoInfo"
import Form from "../Form/Form";
import CommentsList from '../Comments/CommentsList';
import VideosList from "../Videos/VideosList";
import axios from 'axios';  
import { useState } from "react";
import { useEffect } from "react";  
import { Navigate } from "react-router-dom";

const Main = ({id}) => {

    const [featured, setFeatured] = useState();
    const [title, setTitle] = useState();
    const [channel, setChannel] = useState();
    const [timestamp, setTimestamp] = useState();
    const [description, setDescription] = useState();
    const [likes, setLikes] = useState();
    const [views, setViews] = useState();
    const [counter, setCounter] = useState();
    const [comment, setComment] = useState([]);
    const [newCommentArr, setnewCommentArr] = useState()
    const [error, setError] = useState(false)
    

    useEffect(() => {
        const apiKEY = '?api_key=8bf1809d-0d2a-456e-aa8f-29069d90323a';
        const apiURL = 'https://unit-3-project-api-0a5620414506.herokuapp.com';

        const FetchDefaultVideo = async () => {

            try {
                const response = await axios.get(`${apiURL}/videos/${id}${apiKEY}`);
                const defaultVideo = response.data
                setError(false)
                setFeatured(defaultVideo.image)
                setTitle(defaultVideo.title)
                setChannel(defaultVideo.channel)
                setTimestamp(new Date(defaultVideo.timestamp).toLocaleDateString())
                setDescription(defaultVideo.description)
                setLikes(defaultVideo.likes)
                setViews(defaultVideo.views)
                setCounter(defaultVideo.comments.length)
                setComment(defaultVideo.comments.sort((a, b) => b.timestamp - a.timestamp))
            } catch (error) {
                setError(true)
            }
        }

        FetchDefaultVideo()

    }, [id, newCommentArr])



    return (
        <>
        {error && <Navigate to='ERROR' /> }
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
                    counter={counter} />

                    <Form 
                    id={id}
                    setnewCommentArr={setnewCommentArr}
                    />

                    <div className='comments'>
                        {comment.map((comment) => {
                        return (
                            <div className="comment">
                                <CommentsList 
                                key={comment.id}
                                name={comment.name}
                                date={new Date(comment.timestamp).toLocaleDateString()}
                                comment={comment.comment}
                                />
                            </div>
                        )
                    })}
                    </div>
                </aside>
            
                <aside className="main__wrapper--right" >
                    <VideosList 
                    id={id}
                    />  
                </aside>
            </div>
        </main>
        </>
    )
       
   }
   
   export default Main;
