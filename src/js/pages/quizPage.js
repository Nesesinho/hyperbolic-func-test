import { funcs } from "../data/funcs.js";
import { questions } from "../data/questions.js";
import { pages } from "./PagesController.js";

export default {
    data: {
        answers: [],
        question: 0
    },

    html() {
        return /*html*/`
            <main class="w-full h-dvh bg-large xl:bg-cover bg-contain flex sm:justify-around items-center flex-col caveat-font p-10">
                <section class="flex flex-col items-center sm:w-4/6 h-5/6">
                    <h1 class="sm:text-5xl 2xl:text-7xl text-3xl" id="question"></h1>
                    <ul class="text-1xl sm:text-4xl 2xl:text-5xl flex flex-col gap-5 my-auto" id="answers">
                    </ul>
                </section>
                <div class="flex gap-20" id="btns">
                </div>
            </main>
        `
    },
    
    loadQuestion(questionObj) {
        document.getElementById("question").innerHTML = questionObj.question
        document.getElementById("answers").innerHTML = "";

        this.checkBtn();

        for (const el of this.shuffleArray(questionObj.answers)) {
            const li = document.createElement("li");
            li.className = "flex gap-5";

            const radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", "options");
            radio.className = "w-7"

            if (this.data.answers[this.data.question] === el.option) {
                radio.checked = true;
            }

            const label = document.createElement("label");
            label.innerHTML = el.response;

            radio.addEventListener("change", () => {
                this.data.answers[this.data.question] = el.option
                this.checkBtn();
            })

            li.appendChild(radio);
            li.appendChild(label);

            document.getElementById("answers").appendChild(li)
        }
    },

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    },
    
    calcResult() {
        let contagem = {};
        let maxFrequencia = 0;

        // Contagem de frequência de cada letra
        this.data.answers.forEach(letra => {
            contagem[letra] = (contagem[letra] || 0) + 1;
            maxFrequencia = Math.max(maxFrequencia, contagem[letra]);
        });

        // Encontrando as letras com a frequência máxima
        let maisFrequentes = [];
        for (let letra in contagem) {
            if (contagem[letra] === maxFrequencia) {
                maisFrequentes.push(letra);
            }
        }

        const alvo = maisFrequentes[1] ? maisFrequentes[0] + maisFrequentes[1] : maisFrequentes[0];
        let arrayLetras = ["a", "b", "c", "d", "ab", "ad", "bc", "cd"];

        let indice = -1;

        for (let i = 0; i < arrayLetras.length; i++) {
            // Verifica se todas as letras em 'alvo' estão presentes em 'arrayLetras[i]'
            if (alvo.split('').every(letra => arrayLetras[i].includes(letra))) {
                indice = i;
                break;
            }
        }

        // Se o conjunto de letras não foi encontrado, retorna o índice da primeira letra
        if (indice === -1) {
            for (let i = 0; i < arrayLetras.length; i++) {
                if (alvo[0].includes(arrayLetras[i])) {
                    indice = i;
                    break;
                }
            }
        }

        return indice
    },

    checkBtn() {
        if (this.data.answers.length > this.data.question) {
            document.getElementById("next").classList.remove("hidden");
        } else {
            document.getElementById("next").classList.add("hidden");
        }

        if (this.data.question !== 0) {
            document.getElementById("back").classList.remove("hidden");
        } else {
            document.getElementById("back").classList.add("hidden");
        }
    },

    addBtns() {
        const nextBtn = document.createElement("button");
        const backBtn = document.createElement("button");

        nextBtn.className = "text-5xl hidden";
        backBtn.className = "text-5xl hidden";

        nextBtn.id = "next";
        backBtn.id = "back";

        nextBtn.innerHTML = "->";
        backBtn.innerHTML = "<-";

        nextBtn.addEventListener("click", e => {
            this.data.question++
            if (this.data.answers.length === questions.length) {
                document.body.innerHTML = pages.contents.result.html();
                pages.contents.result.init(this.calcResult());
                return
            } else {
                this.loadQuestion(questions[this.data.question])
            }
        })

        backBtn.addEventListener("click", e => {
            this.data.question--
            this.loadQuestion(questions[this.data.question])
        })

        document.getElementById("btns").appendChild(backBtn);
        document.getElementById("btns").appendChild(nextBtn);
    },

    init() {
        this.addBtns()
        this.loadQuestion(questions[0])
    }
}