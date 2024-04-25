import { pages } from "./pages/PagesController.js";

document.body.innerHTML += pages.contents.quiz.html();
pages.contents.quiz.init();