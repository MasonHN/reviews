import React from 'react';
import StarRating from './StarRating.jsx'


const Review = (props) => {
  //pass the star rating in as the invocation of the StarRating function in StarRating.jsx
  //pass the UUID in as an argument when you invoke the StarRating function
  
  const ten = props.reviewData.slice(((props.page * 10) - 10), (props.page * 10));
  return (

    ten.map((review, index) => {
      return (
        <>
        <div class= {`container product-review ${'a' + index}`}>
          <span class="reviewer-name" >{review.customerName}</span>
          <span class="date" >{review.date}</span>
          <br></br>
          <span><StarRating starsAwarded={review.starRating}/></span>
          <br></br>
          <span class="review-title" >{review.reviewTitle}</span>
          <br></br>
          <span class="review" >{review.review}</span>
        </div>
      </>
      );
    })
  );
};
  

  // return (
  //   <>
  //     {/* {mappedReviews} */}
  //   </>
  // );


export default Review;


/*
You'll need to put this into the mapped reviews once you figure out how you're going to do the stars
        <span class="star-icon pull-left">::before</span>
        <span class="star-icon pull-left">::before</span>
        <span class="star-icon pull-left">::before</span>
        <span class="star-icon pull-left">::before</span>
        <span class="star-icon pull-left">::before</span>
*/