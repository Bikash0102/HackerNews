
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const PostDetail = () => {
  const [postDetails, setPostDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  
  useEffect(() => {

    
   
    const fetchPostDetails = async () => {
      try {
        const response = await fetch(`http://hn.algolia.com/api/v1/items/${id}`);
        const data = await response.json();
        setPostDetails(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post details:', error);
        setLoading(false);
      }
    };

    fetchPostDetails();
   
  }, [id]);

  if (loading) {
    return <div  className='h-30 text-center text-2xl mt-3 p-4  rounded-full bg-red-500 '>Loading...</div>;
  }

  if (!postDetails) {
    return <div>Error loading post details</div>;
  }

  return (
    <div className='h-screen w-full flex-row bg-neutral-50 '>
      <div  className="text-center  p-4 bg-red-600 h-22">
      <h1 className='text-2xl'>{postDetails.title}</h1>
      <p className='text-2xl' >Points: {postDetails.points}</p>
      </div>
      <div className='p-4'>
      
      <ul className='text-left' >
        <li><h2 className='text-2xl decoration-4'>Comments :</h2></li>
        {postDetails.children && postDetails.children.map(comment => (
          <li key={comment.id} className='border border-gray-500 text-left mt-3 p-4 rounded-br-lg decoration-2 bg-orange-500 '>
            {comment.text}
          </li>
        ))}
        {postDetails.children && postDetails.children.length === 0 && <li>No comments.</li>}
      </ul>
      </div>
    </div>
  );
};

export default PostDetail;
