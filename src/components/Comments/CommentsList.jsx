import './CommentsList.scss';
import Avatar from "../Avatar/Avatar"


const CommentsList = ({name, date, comment, click, incrementor, counter}) => {

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
                <div className='comment__wrapper--comment'>
                    <div className='comment__wrapper--like'>
                        <div onClick={incrementor} className='comment__icon--like'></div>
                        <p className='comment__text--counter'>{counter}</p>
                    </div>
                    <div onClick={click} className="comment__icon--delete"></div>
                </div>
            </div>
        </div>
        </>
    )
    
}

export default CommentsList