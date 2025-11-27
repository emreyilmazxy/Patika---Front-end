import { showContent } from "./functions/showContent";
// catch  clicked button function

document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;

    const clickedButton = target.closest("button") as HTMLButtonElement | null;

    if (clickedButton) {
        showContent(clickedButton);
    }
});
