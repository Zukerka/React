import { useState, useEffect } from 'react';
import './Card.css'

const Card = () => {

    const [comment, setComment] = useState([]);

    useEffect(() => {

        const fetchComment = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments')
            const data = await response.json()
            setComment(data);
        }

        fetchComment();
    }, [])

    return (
        <div>
            {comment.map((comment) => {

                return (
                    <div className='card' key={comment.id}>
                        <div>
                            <span className='comment-header'> {comment.id} </span>
                            <span className='comment-header'> {comment.email}</span>
                        </div>
                        <div>...{comment.body}</div>
                    </div>)
            })}
        </div>
    )
}

export default Card; 