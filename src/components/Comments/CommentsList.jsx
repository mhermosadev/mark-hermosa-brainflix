import Comments from "./Comments";
import commentArr from '../../data/video-details.json';
import { useState } from "react";

const CommentsList = () => {

    const [comments, setComments] = useState(commentArr[0].comments);

    console.log(comments)

    return (
        <div className="comments">
            {
             comments.map((data, index) => {
                return (
                    <Comments
                    id={data.id}
                    name={data.name}
                    date={new Date(data.timestamp).toLocaleDateString()} 
                    comment={data.comment}/>
                )
            })
            }
        </div>
    )
}

export default CommentsList;