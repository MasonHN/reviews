import React from 'react';


const StarRating = (props) => {
  
  const getStarRating = () => {
    let starsTotal = props.starsAwarded; 

    //if the rating is 1
    if(starsTotal < 2) {
      return (
        <>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </>
      );
    }

    //if the rating is 2
    if(starsTotal < 3) {
      return (
        <>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </>
      );
    }

    //if the rating is 3
    if(starsTotal < 4) {
      return (
        <>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </>
      );
    }

    //if the rating is 4
    if(starsTotal < 5) {
      return (
        <>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
        </>
      );
    }

    //if the rating is 5
    if(starsTotal = 5) {
      return (
        <>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </>
      );
    }
  };

  let starRatingForReview = getStarRating(); 
  


  return (
    <>
      {starRatingForReview}
    </>
  );
}

export default StarRating;
