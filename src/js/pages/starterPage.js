import { pages } from "./PagesController.js";

export default {
    html() {
        return /*html*/`
            <main class="w-full h-dvh bg-start flex justify-center items-center flex-col gap-20">
            <div class="sm:w-2/4  w-full relative">
                <img src="./imgs/start/titulo-effect.svg" alt="" class="absolute w-3/12 title-effect">
                <img src="./imgs/start/titulo-effect2.svg" alt="" class="absolute w-3/12 title-effect right-0 animate-little-bounce">
                <img src="./imgs/start/titulo.svg" alt="">
                <p>Por: Anthony Passos e Beatriz Calado</p>
            </div>
            <div class="sm:w-2/12 w-6/12 relative">
                <img src="./imgs/start/start-button-effect.svg" alt="" class="absolute w-6/12 animate-little-spin" style="top: -30%; left: -40%;">
                <img src="./imgs/start/start-button-effect2.svg" alt="" class="absolute w-5/12 animate-little-ping" style="right: -40%;">
                <img src="./imgs/start/start-button.svg" alt="" class="hover:cursor-pointer animate-pulse w-max" id="startBtn">
                <img src="./imgs/start/start-button-line.svg" alt="" class="absolute">
            </main>
        `
    },
    
    init() {
        document.getElementById("startBtn").addEventListener("click", e => {
            document.body.innerHTML = pages.contents.quiz.html();
            pages.contents.quiz.init();
        })
    }
}