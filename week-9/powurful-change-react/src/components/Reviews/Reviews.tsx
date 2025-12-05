import "./Reviews.scss";

const reviewsData = [
    {
        name: "Diet Expert",
        role: "CFO",
        image: "/images/client1.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quos aliquam impedit quas quam modi libero nisi quod commodi velit, pariatur nihil possimus cumque natus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quis!"
    },
    {
        name: "Cardio Trainer",
        role: "CFO",
        image: "/images/client2.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quos aliquam impedit quas quam modi libero nisi quod commodi velit, pariatur nihil possimus cumque natus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quis!"
    }
];

const Reviews = () => {
    return (
        <section id="reviews" className="reviews">
            <div className="container">
                <h2 className="reviews__title section-title">review Client</h2>
                <p className="reviews__subtitle text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis placeat,
                    totam laboriosam ut culpa impedit quis, dolores ipsum maxime minus ea inventore
                    consectetur est amet eum quia ipsam porro fugiat?
                </p>

                <div className="reviews__content">
                    {reviewsData.map((review, index) => (
                        <div className="reviews__testimonials" key={index}>
                            <div className="reviews__profile-wrapper">
                                <div className="reviews__img-wrapper">
                                    <img src={review.image} alt={review.name} />
                                </div>
                                <div className="reviews__text-group">
                                    <h3 className="reviews__profession">{review.name}</h3>
                                    <p className="reviews__role">{review.role}</p>
                                </div>
                            </div>
                            <p className="reviews__text">{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
