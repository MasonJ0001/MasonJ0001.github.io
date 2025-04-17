window.onload = function() {
    class Question {
        // #question;
        // #option1;
        // #option2;
        // #option3;
        // #answer;
        optionArray = [];
        constructor(question, option1, option2, option3, answer) {
            this.question = question;
            this.option1 = option1;
            this.option2 = option2;
            this.option3 = option3;
            this.answer = answer;
        }

        shuffleOptions() {

        }
    }

    question1 = new Question("What shape is wombat poop?", "Sphere", "Heart", "Diamond", "Cube");
    question2 = new Question("Which of these animals has three hearts and blue blood?", "Squid", "Vampire bat", "Spider", "Octopus");
    question3 = new Question("Which of these items is technically a berry?", "Strawberry", "Raspberry", "Grape", "Banana");
    question4 = new Question("Which of these can hold their breath the longest?", "Dolphin", "Orca", "Otter", "Sloth");
    question5 = new Question("What can you not do ", "", "", "", "");
    question6 = new Question("", "", "", "", "");
    question7 = new Question("", "", "", "", "");
    question8 = new Question("", "", "", "", "");
    question9 = new Question("", "", "", "", "");
    question10 = new Question("", "", "", "", "");

    console.log(question1);

    function displayQuestion(question) {
        // Question
        questions = document.createElement("h3");
        questions.innerHTML = question.question;

        // Option 1
        option1 = document.createElement("input");
        option1.setAttribute("type", "radio"); 
        option1.setAttribute("id", "option1");
        label1 = document.createElement('label');
        label1.setAttribute("id", "label1");
        label1.setAttribute("for", "option1");
        label1.innerHTML = question.option1;

        // Option 2
        option2 = document.createElement("input");
        option2.setAttribute("type", "radio"); 
        option2.setAttribute("id", "option2");
        label2 = document.createElement('label');
        label2.setAttribute("id", "label2");
        label2.setAttribute("for", "option2");
        label2.innerHTML = question.option2;

        // Option 3
        option3 = document.createElement("input");
        option3.setAttribute("type", "radio"); 
        option3.setAttribute("id", "option3");
        label3 = document.createElement('label');
        label3.setAttribute("id", "label3");
        label3.setAttribute("for", "option3");
        label3.innerHTML = question.option3;

        // Option 4
        answer = document.createElement("input");
        answer.setAttribute("type", "radio"); 
        answer.setAttribute("id", "answer");
        label4 = document.createElement('label');
        label4.setAttribute("id", "label4");
        label4.setAttribute("for", "answer");
        label4.innerHTML = question.answer;

        document.getElementById("questions").appendChild(questions);

        document.getElementById("questions").appendChild(option1);
        document.getElementById("questions").appendChild(label1);
        document.getElementById("questions").appendChild(document.createElement('br'));

        document.getElementById("questions").appendChild(option2);
        document.getElementById("questions").appendChild(label2);
        document.getElementById("questions").appendChild(document.createElement('br'));

        document.getElementById("questions").appendChild(option3);
        document.getElementById("questions").appendChild(label3); 
        document.getElementById("questions").appendChild(document.createElement('br'));

        document.getElementById("questions").appendChild(answer);
        document.getElementById("questions").appendChild(label4);
        document.getElementById("questions").appendChild(document.createElement('br'));

        document.getElementById("questions").appendChild(document.createElement('br'));
        document.getElementById("questions").appendChild(document.createElement('br'));
    }

    displayQuestion(question1);
    displayQuestion(question2);
    displayQuestion(question3);
    displayQuestion(question4);



}