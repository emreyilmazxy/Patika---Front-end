import "./styles/main.scss";
import { initNavbar } from "./ts/navbar";
import { initHero } from "./ts/hero";
import { initStats } from "./ts/stats";
import { initClasses } from "./ts/classes";
import { initBMI } from "./ts/bmi";
import { initContact } from "./ts/contact";
import { initForm } from "./ts/form";
import { initProducts } from "./ts/products";
import { initTrainers } from "./ts/trainers";
import { initReviews } from "./ts/reviews";

// Initialize all modules
document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initHero();
    initStats();
    initClasses();
    initBMI();
    initContact();
    initForm();
    initProducts();
    initTrainers();
    initReviews();
});