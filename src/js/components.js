const components = {
    start: /*html*/`
        <main class="w-full h-full bg-start flex justify-center items-center flex-col gap-20">
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
        <main class="w-full h-full bg-large flex sm:justify-center items-center flex-col caveat-font p-10 gap-20 sm:gap-40">
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
    `
}