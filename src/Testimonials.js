import React from 'react';


const Testimonials = () => {
    const reviews = [
        {
            name: "Sarah M.",
            initial: "M",
            rating: 5,
            review: "Working with Esther was a game-changer for us. Their expertise and dedication made the home-buying process a breeze. We couldn't be happier with our new place!"
        },
        {
            name: "Michael F.",
            initial: "L",
            rating: 5,
            review: "Wow! Esther totally rocked our home search. Thanks to her, we found our dream home in no time. Highly recommended!"
        },
        {
            name: "Grace B.",
            initial: "G",
            rating: 5,
            review: "Esther is an exceptional real estate agent who goes above and beyond to meet her clients' needs. Her dedication, knowledge, and personalized approach make her the best choice for anyone looking to buy or sell a home."
        },
    
    ]
    const displayedReviews =  reviews.map((review) => (
        <div className='review-container'>
        <div className="client-initial-heading-container">
            <h2 className='client-initial-heading'>{review.initial}</h2>
        </div>
        <div className='review-content'>
        <div className='star-rating-container'><p>&#9733; &#9733; &#9733; &#9733; &#9733;</p></div>
        <p>{review.review}</p>
        <p>
        {review.name}
        </p>
    </div>
    </div>
    ))
   
    
    console.log(reviews)
    return (
        <div className='component-container auto-height beige-bg'>
            <div className='page-title-container testimonials'>
                <h2>
                    Client Testimonials
                </h2>
            </div>
           {displayedReviews}
        </div>
    )
}

export default Testimonials;