import { funcs } from "../data/funcs.js";

export default {
    html() {
        return /*html*/`
            <main class="w-full h-full bg-large bg-contain flex items-center flex-col caveat-font p-4 gap-10 md:gap-12 overflow-y-scroll">
            </main>
        `
    },

    loadResult(resultObj) {
        document.querySelector("main").innerHTML = /*html*/`
            <div class="flex flex-col items-center">
                <h1 class="md:text-7xl text-4xl mb-3">Resultado</h1>
                <h2 class="md:text-7xl text-3xl">${resultObj.name}</h1>
                <h2 class="md:text-6xl text-2xl">(${resultObj.type})</h2>
            </div>
            <img src="${resultObj.imgUrl}" alt="" class="md:w-2/12 w-8/12">
            <p class="md:text-5xl text-xl w-4/6">${resultObj.desc}</p>
            <h3 class="md:text-6xl text-3xl">Personagens ${resultObj.name}</h3>
            <ul class="w-4/6 lg:h-72 flex flex-col lg:flex-wrap my-10" id="charList">
            </ul>
        `

        resultObj.characters.forEach(element => {
            document.getElementById("charList").innerHTML += /*html*/`
                <li class="lg:w-4/12 w-full h-full flex flex-col items-center text-4xl">
                    <div class="w-7/12 max-w-60 h-4/6 max-h-60 bg-black rounded-3xl flex relative overflow-auto">
                        <img src="${element.imgUrl}" alt="" class="w-full">
                    </div>
                    <span>${element.name}</span>
                    <span class="text-2xl">${element.origin}</span>
                </li>
            `
        });
    },
    
    init() {
        this.loadResult(funcs[0]);
    }
}