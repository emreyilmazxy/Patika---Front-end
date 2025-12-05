import "./Trainers.scss";

const trainersData = [
    { name: "Jane Doe", role: "Cardio Trainer", image: "/images/trainer1.jpg" },
    { name: "John Wick", role: "Strength Coach", image: "/images/trainer2.jpg" },
    { name: "Emily Rose", role: "Yoga Trainer", image: "/images/trainer3.jpg" },
];

const Trainers = () => {
    return (
        <section id="trainers" className="trainers">
            <div className="container">
                <h2 className="trainers__title section-title">Our best trainers</h2>
                <p className="trainers__subtitle text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis placeat,
                    totam laboriosam ut culpa impedit quis, dolores ipsum maxime minus ea inventore
                    consectetur est amet eum quia ipsam porro fugiat?
                </p>

                <div className="trainers__cards-wrapper">
                    {trainersData.map((trainer, index) => (
                        <div className="trainers__card" key={index}>
                            <div className="trainers__card-border"></div>
                            <div className="trainers__img-wrapper">
                                <img src={trainer.image} alt={trainer.name} />
                            </div>
                            <div className="trainers__info">
                                <h3 className="trainers__name">{trainer.name}</h3>
                                <p className="trainers__role">{trainer.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trainers;
