import { CONTENT_MAP } from "../content/classesContentMap";

//this function shows content according to clicked button

const contentRoot = document.querySelector(".classes__content") as HTMLElement;

export const showContent = (button: HTMLElement): void => {

    if (!button.classList.contains("btn-secondary-down--active")) {


        document.querySelectorAll(".btn-secondary-down--active")
            .forEach(btn => btn.classList.remove("btn-secondary-down--active"));


        button.classList.add("btn-secondary-down--active");
    }


    const html = CONTENT_MAP[button.id];

    if (html) {
        contentRoot.innerHTML = html;
    }
};
