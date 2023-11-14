import React, { useEffect, useState } from 'react';
import Comment from './Comment';


const Reviews = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch('Comments.json')
            .then(res => res.json())
            .then(data => {
                setComments(data)
            })
    }, [])
    console.log(comments);

    return (

        <div className='space-x-5 flex'>
            {
                comments.map(comment => <Comment key={comment.name} element={comment}></Comment>)
            }
        </div>
    );
};

export default Reviews;

























// import React, { useEffect, useState } from 'react';

// const Reviews = () => {
//     const [comments, setComments] = useState([])
//     useEffect(() => {
//         fetch('../../../public/Comments.json')
//             .then(res => res.json())
//             .then(data => setComments(data))
//     }, [])
//     return (
//         <div>
//             {
//                 comments.map(comment => <Reviews key={comment.name} elements={comment}></Reviews>)
//             }
//         </div>
//     );
// };

// export default Reviews;