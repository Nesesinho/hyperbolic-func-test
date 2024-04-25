export default {
    html() {
        return /*html*/`
            <main class="w-full h-full bg-large bg-contain flex items-center flex-col caveat-font p-4 gap-10 md:gap-12 overflow-y-scroll">
                <div class="flex flex-col items-center">
                    <h1 class="md:text-7xl text-4xl mb-3">Resultado</h1>
                    <h2 class="md:text-7xl text-3xl">Secante Inversa Hiperbólica</h1>
                    <h2 class="md:text-6xl text-2xl">(Harmonioso Conciliador )</h2>
                </div>
                <img src="./imgs/funcs/secinv.svg" alt="" class="md:w-2/12 w-8/12">
                <p class="md:text-5xl text-xl w-4/6">Essa personalidade é pacífica, diplomática e sempre busca o equilíbrio e a harmonia nas relações. Como a secante inversa hiperbólica que descreve um crescimento inicial lento seguido de um aumento rápido, eles são capazes de encontrar soluções criativas e satisfatórias para conflitos e desafios interpessoais.</p>
                <h3 class="md:text-6xl text-3xl">Personagens Secante Inversa</h3>
                <ul class="w-4/6 lg:h-72 flex gap-10 flex-col lg:flex-wrap my-10">
                    <li class="lg:w-4/12 w-full h-full flex flex-col items-center text-4xl">
                        <div class="w-7/12 max-w-60 h-4/6 max-h-60 bg-black rounded-3xl flex relative overflow-auto">
                            <img src="https://static.wikia.nocookie.net/avatar/images/c/c1/Iroh_smiling.png" alt="" class="w-full">
                        </div>
                        <span>Tio Iroh</span>
                        <span class="text-2xl">Avatar: O Último Dobrador de Ar</span>
                    </li>
                    <li class="lg:w-4/12 w-full h-full flex flex-col items-center text-4xl">
                        <div class="w-7/12 max-w-60 h-4/6 max-h-60 bg-black rounded-3xl flex relative overflow-auto">
                            <img src="https://static.wikia.nocookie.net/avatar/images/c/c1/Iroh_smiling.png" alt="" class="w-full">
                        </div>
                        <span>Tio Iroh</span>
                        <span class="text-2xl">Avatar: O Último Dobrador de Ar</span>
                    </li>
                    <li class="lg:w-4/12 w-full h-full flex flex-col items-center text-4xl">
                        <div class="w-7/12 max-w-60 h-4/6 max-h-60 bg-black rounded-3xl flex relative overflow-auto">
                            <img src="https://static.wikia.nocookie.net/avatar/images/c/c1/Iroh_smiling.png" alt="" class="w-full">
                        </div>
                        <span>Tio Iroh</span>
                        <span class="text-2xl">Avatar: O Último Dobrador de Ar</span>
                    </li>
                </ul>
            </main>
        `
    },

    loadResult(resultObj) {

    },
    
    init() {}
}