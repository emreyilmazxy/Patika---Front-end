import { useState } from "react";
import "./Classes.scss";

type ClassType = "yoga" | "group" | "solo" | "stretching";

interface ClassContent {
    title: string;
    description: string;
    schedule: string[];
    image: string;
}

const classesData: Record<ClassType, ClassContent> = {
    yoga: {
        title: "Why are your Yoga",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, quos, quia voluptatem quibusdam voluptate quae quidem voluptatibus quas. Quae, quasi. Quisquam, quod. Quisquam, quod. Quisquam, quod. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, saepe.",
        schedule: [
            "Saturday-Sunday: 10:00 AM - 11:00 AM",
            "Monday-Wednesday: 06:00 PM - 07:00 PM",
            "Thursday-Friday: 08:00 AM - 09:00 AM"
        ],
        image: "/images/yoga.jpg"
    },
    group: {
        title: "Why are your Group Training",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, quos, quia voluptatem quibusdam voluptate quae quidem voluptatibus quas.",
        schedule: [
            "Monday-Friday: 09:00 AM - 10:00 AM",
            "Saturday: 11:00 AM - 12:00 PM"
        ],
        image: "/images/group.webp"
    },
    solo: {
        title: "Why are your Solo Training",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, quos, quia voluptatem.",
        schedule: [
            "Any day: Flexible timing",
            "Personal trainer available"
        ],
        image: "/images/solo.jpg"
    },
    stretching: {
        title: "Why are your Stretching",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, quos.",
        schedule: [
            "Daily: 07:00 AM - 08:00 AM",
            "Evening: 06:00 PM - 07:00 PM"
        ],
        image: "/images/stret.webp"
    }
};

const Classes = () => {
    const [activeClass, setActiveClass] = useState<ClassType>("yoga");

    const currentClass = classesData[activeClass];

    return (
        <section id="classes" className="classes">
            <div className="container">
                <h2 className="classes__title section-title">OUR Classes</h2>

                <p className="classes__description text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                    distinctio quasi eos hic vero esse. Vitae eligendi itaque repellat saepe.
                </p>

                <div className="classes__buttons-wrapper">
                    <button
                        className={`btn-secondary-down ${activeClass === "yoga" ? "btn-secondary-down--active" : ""}`}
                        onClick={() => setActiveClass("yoga")}
                    >
                        Yoga
                    </button>
                    <button
                        className={`btn-secondary-down ${activeClass === "group" ? "btn-secondary-down--active" : ""}`}
                        onClick={() => setActiveClass("group")}
                    >
                        Group
                    </button>
                    <button
                        className={`btn-secondary-down ${activeClass === "solo" ? "btn-secondary-down--active" : ""}`}
                        onClick={() => setActiveClass("solo")}
                    >
                        Solo
                    </button>
                    <button
                        className={`btn-secondary-down ${activeClass === "stretching" ? "btn-secondary-down--active" : ""}`}
                        onClick={() => setActiveClass("stretching")}
                    >
                        Stretching
                    </button>
                </div>

                <div className="classes__content classes__active">
                    <div className="classes__content-wrapper">
                        <div className="classes__text">
                            <h3 className="classes__content-title">{currentClass.title}</h3>
                            <p className="classes__content-description">{currentClass.description}</p>

                            <h3 className="classes__content-title">When comes {activeClass.charAt(0).toUpperCase() + activeClass.slice(1)} your Time.</h3>
                            <p className="classes__content-description--flex">
                                {currentClass.schedule.map((time, index) => (
                                    <span key={index}>{time}</span>
                                ))}
                            </p>
                        </div>
                    </div>

                    <div className="classes__img-wrapper">
                        <img src={currentClass.image} alt={`${activeClass} class`} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Classes;
