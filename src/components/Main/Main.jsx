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
import Swal from "sweetalert2";

const Main = ({id}) => {

    const apiKEY = '?api_key=8bf1809d-0d2a-456e-aa8f-29069d90323a';
    const apiURL = 'https://unit-3-project-api-0a5620414506.herokuapp.com';

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
    const [deleteComment, setDeleteComment] = useState()
    const [error, setError] = useState(false)

    useEffect(() => {
        
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
                console.log(error)
            }
        }

        FetchDefaultVideo()

    }, [id, newCommentArr, deleteComment])

    return (
        <>
        {error && <Navigate to='/404' /> }
        <main>
            <FeaturedVideo 
            poster={featured}
            />
            <div className="main__wrapper--desktop"> 
                <aside className="main__wrapper--left"> 
                    <FeaturedVideoInfo 
                    title={title}
                    channel={channel}
                    timestamp={timestamp}
                    description={description}
                    likes={likes}
                    views={views}
                    counter={counter} 
                    />
                    <Form 
                    id={id}
                    setnewCommentArr={setnewCommentArr}
                    />
                    <div className='comments'>
                        {comment.map((comment) => {

                            const onClick = () => {
                                //ALERT BEFORE USER CAN DELETE COMMENTS//
                                Swal.fire({
                                    title: "Continue deleting this comment?",
                                    icon: 'question',
                                    iconColor: '#D22D2D',
                                    showDenyButton: true,
                                    confirmButtonText: "YES",
                                    confirmButtonColor: "#0095FF",
                                    denyButtonText: "CANCEL",
                                    denyButtonColor: "#0095FF",
                                    allowOutsideClick: false,
                        
                                }).then((result) => {

                                    if (result.isConfirmed) {

                                        const deleteComment = async () => {
                                            try {
                                                const response = await axios.delete(`${apiURL}/videos/${id}/comments/${comment.id}${apiKEY}`);
                                                setDeleteComment(response)
                    
                                            } catch (error) {
                                                console.log(error)
                                            }
                                        }

                                        deleteComment();

                                        Swal.fire({
                                            title: "Deleted!",
                                            icon: "success",
                                            iconColor: '#0095FF',
                                            confirmButtonColor: "#0095FF"
                                          });
                                        
                                    } else if (result.isDenied) {
                                        return {}
                                    }
                                  });
                            }
                        return (
                            <div className="comment">
                                <CommentsList 
                                key={comment.id}
                                name={comment.name}
                                date={new Date(comment.timestamp).toLocaleDateString()}
                                comment={comment.comment}
                                click={onClick}
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