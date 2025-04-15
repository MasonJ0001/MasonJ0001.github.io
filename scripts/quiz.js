window.onload = function() {
    class Question {
        #question;
        #option1;
        #option2;
        #option3;
        #answer;
        optionArray = [];
        constructor(question, option1, option2, option3, answer) {
            this.#question = question;
            this.#option1 = option1;
            this.#option2 = option2;
            this.#option3 = option3;
            this.#answer = answer;
        }

        shuffleOptions() {

        }
    }

    question1 = new Question("What shape is wombat poop?", "Sphere", "Heart", "Diamond", "Cube");

    console.log(question1)

    function displayQuestion(question) {
        document.createElement()
    }




}