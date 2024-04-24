export const components = {
    start: /*html*/`
        <main class="w-full h-dvh bg-start flex justify-center items-center flex-col gap-20">
        <div class="sm:w-2/4  w-full relative">
            <img src="./imgs/start/titulo-effect.svg" alt="" class="absolute w-3/12 title-effect">
            <img src="./imgs/start/titulo-effect2.svg" alt="" class="absolute w-3/12 title-effect right-0 animate-little-bounce">
            <img src="./imgs/start/titulo.svg" alt="">
        </div>
        <div class="sm:w-2/12 w-6/12 relative">
            <img src="./imgs/start/start-button-effect.svg" alt="" class="absolute w-6/12 animate-little-spin" style="top: -30%; left: -40%;">
            <img src="./imgs/start/start-button-effect2.svg" alt="" class="absolute w-5/12 animate-little-ping" style="right: -40%;">
            <img src="./imgs/start/start-button.svg" alt="" class="hover:cursor-pointer animate-pulse w-max">
            <img src="./imgs/start/start-button-line.svg" alt="" class="absolute">
         </main>
    `,
    quiz: /*html*/`
        <main class="w-full h-dvh bg-large bg-cover flex sm:justify-center items-center flex-col caveat-font p-10 gap-20 sm:gap-40">
            <h1 class="sm:text-7xl text-5xl sm:w-4/6">Quando você se depara com uma situação nova e desafiadora, qual é a sua reação inicial?</h1>
            <ul class="text-4xl sm:text-5xl flex flex-col gap-5">
                <li class="flex justify-center gap-5">
                    <input type="radio" name="options" id="" class="w-7">
                    <label>Fico empolgado e ansioso para explorar todas as possibilidades.</label>
                </li>
                <li class="flex justify-center gap-5">
                    <input type="radio" name="options" id="" class="w-7">
                    <label>Fico empolgado e ansioso para explorar todas as possibilidades.</label>
                </li>
                <li class="flex justify-center gap-5">
                    <input type="radio" name="options" id="" class="w-7">
                    <label>Fico empolgado e ansioso para explorar todas as possibilidades.</label>
                </li>
                <li class="flex justify-center gap-5">
                    <input type="radio" name="options" id="" class="w-7">
                    <label>Fico empolgado e ansioso para explorar todas as possibilidades.</label>
                </li>
            </ul>
            <div class="flex gap-20">
                <button class="text-5xl"><-</button>
                <button class="text-5xl">-></button>
            </div>
        </main>
    `,
    result: /*html*/`
        <main class="w-full h-full bg-large bg-contain flex items-center flex-col caveat-font p-10 gap-20 sm:gap-12 overflow-y-scroll">
            <div class="flex flex-col items-center">
                <h2 class="sm:text-7xl">Você é: Secante Inversa Hiperbólica</h1>
                <h2 class="text-6xl">(Harmonioso Conciliador )</h2>
            </div>
            <img src="./imgs/funcs/secinv.svg" alt="" class="w-2/12">
            <p class="text-5xl w-4/6">Essa personalidade é pacífica, diplomática e sempre busca o equilíbrio e a harmonia nas relações. Como a secante inversa hiperbólica que descreve um crescimento inicial lento seguido de um aumento rápido, eles são capazes de encontrar soluções criativas e satisfatórias para conflitos e desafios interpessoais.</p>
            <h3 class="text-6xl">Personagens Secante Inversa</h3>
            <ul class="w-4/6 h-96 flex gap-10">
                <li class="w-4/12 h-full flex flex-col items-center text-4xl">
                    <div class="w-7/12 h-4/6 bg-black rounded-3xl flex relative overflow-auto">
                        <img src="https://static.wikia.nocookie.net/avatar/images/c/c1/Iroh_smiling.png" alt="" class="w-full">
                    </div>
                    <span>Tio Iroh</span>
                    <span class="text-2xl">Avatar: O Último Dobrador de Ar</span>
                </li>
                <li class="w-4/12 h-full flex flex-col items-center text-4xl">
                    <div class="w-7/12 h-4/6 bg-black rounded-3xl flex relative overflow-auto">
                        <img src="https://static.wikia.nocookie.net/avatar/images/c/c1/Iroh_smiling.png" alt="" class="w-full">
                    </div>
                    <span>Tio Iroh</span>
                    <span class="text-2xl">Avatar: O Último Dobrador de Ar</span>
                </li>
                <li class="w-4/12 h-full flex flex-col items-center text-4xl">
                    <div class="w-7/12 h-4/6 bg-black rounded-3xl flex relative overflow-auto">
                        <img src="https://static.wikia.nocookie.net/avatar/images/c/c1/Iroh_smiling.png" alt="" class="w-full">
                    </div>
                    <span>Tio Iroh</span>
                    <span class="text-2xl">Avatar: O Último Dobrador de Ar</span>
                </li>
            </ul>
        </main>
    `
}