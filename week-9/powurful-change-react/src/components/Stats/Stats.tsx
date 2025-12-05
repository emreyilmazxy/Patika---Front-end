import "./Stats.scss";

const statsData = [
    { number: "325", text: "Course" },
    { number: "405", text: "Work Out" },
    { number: "305", text: "Working Hours" },
    { number: "705", text: "Happy Client" },
];

const Stats = () => {
    return (
        <section id="stats" className="stats">
            <div className="container">
                {statsData.map((stat, index) => (
                    <div className="stats__item" key={index}>
                        <h3 className="stats__item-number">{stat.number}</h3>
                        <p className="stats__item-text">{stat.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
