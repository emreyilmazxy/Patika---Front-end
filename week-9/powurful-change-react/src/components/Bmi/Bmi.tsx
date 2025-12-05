import { useState, useEffect, useRef } from "react";
import "./Bmi.scss";

const Bmi = () => {
    const [height, setHeight] = useState<string>("");
    const [weight, setWeight] = useState<string>("");
    const imgWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (height && weight) {
            const h = parseFloat(height) / 100;
            const w = parseFloat(weight);
            const bmi = w / (h * h);

            let position: string;
            if (bmi < 18.5) {
                position = "5%";
            } else if (bmi < 25) {
                position = "30%";
            } else if (bmi < 30) {
                position = "55%";
            } else {
                position = "80%";
            }

            if (imgWrapperRef.current) {
                imgWrapperRef.current.style.setProperty("--after-right", position);
            }
        }
    }, [height, weight]);

    return (
        <section id="bmi" className="bmi">
            <div className="container">
                <div className="bmi__content-wrapper">
                    <div className="bmi__content">
                        <h2 className="bmi__title">BMI Calculator</h2>

                        <p className="bmi__description">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere libero adipisci,
                            quisquam consectetur eius, natus iusto quos laudantium eum dolorem molestias aperiam at iste animi modi
                            ullam? Molestias, illum dicta.
                        </p>
                        <p className="bmi__description">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere libero adipisci,
                            quisquam consectetur eius, natus iusto quos laudantium eum dolorem molestias aperiam at iste animi modi
                            ullam? Molestias, illum dicta.
                        </p>

                        <form className="bmi__input-group" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="number"
                                id="height"
                                placeholder="your height"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            />
                            <label htmlFor="height">cm</label>

                            <input
                                type="number"
                                id="weight"
                                placeholder="your weight"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                            <label htmlFor="weight">kg</label>
                        </form>
                    </div>
                </div>

                <div className="bmi__img-wrapper" ref={imgWrapperRef}>
                    <p className="bmi__img-wrapper-title">Your BMI</p>
                    <img src="/images/bmi-index.jpg" className="bmi__img" alt="bmi image" />
                </div>
            </div>
        </section>
    );
};

export default Bmi;
