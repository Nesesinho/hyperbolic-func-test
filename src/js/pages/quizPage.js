import { questions } from "../data/questions.js";

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

        for (const el of questionObj.answers) {
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
                console.log(this.data.answers)
            })

            li.appendChild(radio);
            li.appendChild(label);

            document.getElementById("answers").appendChild(li)
        }
    },
    
    checkBtn() {
        if (this.data.answers.length > this.data.question) {
            document.getElementById("next").classList.remove("hidden");
        } else {
            document.getElementById("next").classList.add("hidden");
        }

        if (this.data.question !== 0) {
            console.log("back")
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
            this.loadQuestion(questions[this.data.question])
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