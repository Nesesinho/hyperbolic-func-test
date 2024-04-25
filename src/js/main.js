import { pages } from "./pages/PagesController.js";

document.body.innerHTML += pages.contents.result.html();
pages.contents.result.init();