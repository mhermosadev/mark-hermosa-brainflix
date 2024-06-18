import Avatar from "../Avatar/Avatar"
import './CommentsList.scss';

const Comments = ({name, date, comment}) => {
    return (
        <>
        <div className="comment__wrapper">
            <Avatar 
            classname='comment__avatar user__avatar user__avatar--graybg'/>
            <div className="comment__wrapper--text">
                <div className='comment__wrapper--name-date'>
                    <p className="comment__text comment__text--name">{name}</p>
                    <p className="comment__text comment__text--date">{date}</p>
                </div>
                <div className='comment__wrapper--comment'>
                    <p className="comment__text comment__text--comment">{comment}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Comments;