function logOut() {
    localStorage.setItem("count", "0")
    window.location.pathname = `index.html`
}

function result_page() {
    window.location.pathname = "../result/result.html";
}

var courseName = localStorage.getItem("coursename")
var subject = localStorage.getItem("subject")
document.getElementsByClassName("heading")[0].innerHTML = `${courseName} (${subject} Subjects)`;



// Real Quiz Work Start Now

var quiz_obj = [
    [
        {
            question: "What do you understand by HTML?",
            opt1: "HTML describes the structure of a webpage",
            opt2: "HTML is the standard markup language mainly used to create web pages",
            opt3: "HTML consists of a set of elements that helps the browser how to view the content",
            opt4: "All of the above",
            answer: "All of the above",
        },
        {
            question: "Who is the father of HTML?",
            opt1: "Rasmus Lerdorf",
            opt2: "Tim Berners-Lee",
            opt3: "Brendan Eich",
            opt4: "Sergey Brin",
            answer: "Tim Berners-Lee",
        },
        {
            question: "HTML stands for ___",
            opt1: "HyperText Markup Language",
            opt2: "HyperText Machine Language",
            opt3: "HyperText Marking Language",
            opt4: "HighText Marking Language",
            answer: "HyperText Markup Language",
        },
        {
            question: "Which is used to read an HTML page and render it?",
            opt1: "Web server",
            opt2: "Web network",
            opt3: "Web browser",
            opt4: "Web matrix",
            answer: "Web browser",
        },
        {
            question: "Which tag is used for inserting the largest heading in HTML?",
            opt1: "head",
            opt2: "h1",
            opt3: "h6",
            opt4: "heading",
            answer: "h1",
        },
        {
            question: "Which is used to create Web Pages ?",
            opt1: "C++",
            opt2: "Java",
            opt3: "HTML",
            opt4: "JVM",
            answer: "HTML",
        },
        {
            question: "HTML is a set of markup ___.",
            opt1: "tags",
            opt2: "sets",
            opt3: "attributes",
            opt4: "none of the above",
            answer: "tags",
        },
        {
            question: "HTML tags are used to describe document ___.",
            opt1: "definition",
            opt2: "content",
            opt3: "language",
            opt4: "model",
            answer: "content",
        },
        {
            question: "HTML program is saved using ___ extension.",
            opt1: ".htmn",
            opt2: ".html",
            opt3: ".htnl",
            opt4: ".htxl",
            answer: ".html",
        },
        {
            question: "HTML program can be read and rendered by ___.",
            opt1: "Compiler",
            opt2: "Server",
            opt3: "Web Browser",
            opt4: "Interpreter",
            answer: "Web Browser",
        }],
    [
        // CSS
    ],
    [
        // Javascript
    ],
]
var count = 1;
score = 0;
score_match = "";
var selected_input_value = "";
var index_number = "";
function input_selected() {
    selected_input_value = document.getElementsByName("options");
    for (i = 0; i < 4; i++) {
        if (selected_input_value[i].checked) {
            score_match = i;
            document.getElementsByClassName("next_btn")[0].removeAttribute("disabled")
        }
    }
}
window.onload = function () {
    var checkingCount = localStorage.getItem("count")
    if (checkingCount === "0") {
        window.location.pathname = `index.html`
    }
    setTimeout(function () {
        document.getElementsByClassName("loader")[0].style.height = "auto"
        document.getElementsByTagName("body")[0].children[0].children[0].classList.add("hidden");
        document.getElementsByTagName("body")[0].children[1].classList.remove("hidden");
        document.getElementsByTagName("body")[0].children[2].classList.remove("hidden");
    }, 1000)
}
function next_btn() {
    if (quiz_obj[index_number][count].question === quiz_obj[index_number].slice(-1)[0].question) {
        if (selected_input_value[score_match].value === quiz_obj[index_number][count - 1].answer) {
            score = score + 1;
        }
        document.getElementsByClassName("next_btn")[0].innerHTML = "Submit";
        document.getElementsByClassName("next_btn")[0].setAttribute("onclick", "result()")
    }
    document.getElementsByClassName("question_count")[0].innerHTML = `Question ${count + 1} of ${quiz_obj[index_number].length} :`;
    document.getElementsByClassName("question")[0].innerHTML = quiz_obj[index_number][count].question;
    document.getElementsByClassName("opt_div")[0].innerHTML = quiz_obj[index_number][count].opt1;
    document.getElementsByClassName("opt_div")[1].innerHTML = quiz_obj[index_number][count].opt2;
    document.getElementsByClassName("opt_div")[2].innerHTML = quiz_obj[index_number][count].opt3;
    document.getElementsByClassName("opt_div")[3].innerHTML = quiz_obj[index_number][count].opt4;
    document.getElementById(`opt1`).value = quiz_obj[index_number][count].opt1;
    document.getElementById(`opt2`).value = quiz_obj[index_number][count].opt2;
    document.getElementById(`opt3`).value = quiz_obj[index_number][count].opt3;
    document.getElementById(`opt4`).value = quiz_obj[index_number][count].opt4;
    document.getElementsByClassName("next_btn")[0].setAttribute("disabled", "")
    selected_input_value[4].setAttribute("checked", "")
    selected_input_value[4].removeAttribute("checked")
    selected_input_value = "";
    count = count + 1;
}

function continueBtn(quiz_name, index) {

    window.onblur = function () {
        window.location.pathname = "../home/home.html"
    }

    var timer_min = 29;
    var timer_sec = 60;
    setInterval(function () {
        if (timer_min === 0 && timer_sec === 0) {
            localStorage.setItem("score", score);
            window.location.pathname = "result/result.html";
            timer_sec = timer_sec + 1;
        } else if (timer_sec === 0) {
            timer_sec = 60;
            timer_min = timer_min - 1;
        }
        timer_sec = timer_sec - 1;
        document.getElementsByClassName("timer")[0].innerHTML = timer_min + ":" + timer_sec;
    }, 1000)
    index_number = index;
    document.getElementsByTagName("body")[0].children[1].classList.add("hidden")
    document.getElementsByTagName("body")[0].children[2].classList.add("hidden")
    document.getElementsByTagName("body")[0].children[3].classList.remove("hidden")
    document.getElementsByClassName("quiz_start_box")[0].innerHTML = `
    <div class="quiz_header">
    <span class="header_span">
        <h1 class="quiz_heading">${quiz_name} Quiz</h1>
        <h4 class="question_count">Question ${count} of ${quiz_obj[index_number].length} :</h4>
        <h5 class="question">${quiz_obj[index_number][0].question}</h5>
    </span>
    <span class="timer"></span>
</div>
<div onchange="input_selected()" class="options_input">
    <label class="label_for_inputs" for="opt1">
        <input value="${quiz_obj[index_number][0].opt1}" type="radio" name="options" id="opt1">
        <p class="opt_div">${quiz_obj[index_number][0].opt1}</p>
    </label>
    <label class="label_for_inputs" for="opt2">
        <input value="${quiz_obj[index_number][0].opt2}" type="radio" name="options" id="opt2">
        <p class="opt_div">${quiz_obj[index_number][0].opt2}</p>
    </label>
    <label class="label_for_inputs" for="opt3">
        <input value="${quiz_obj[index_number][0].opt3}" type="radio" name="options" id="opt3">
        <p class="opt_div">${quiz_obj[index_number][0].opt3}</p>
    </label>
    <label class="label_for_inputs" for="opt4">
        <input value="${quiz_obj[index_number][0].opt4}" type="radio" name="options" id="opt4">
        <p class="opt_div">${quiz_obj[index_number][0].opt4}</p>
    </label>
</div>
<button disabled onclick="adding_score();next_btn()" class="next_btn">Next</button>
<input value="script" type="radio" class="hidden" name="options" id="opt5">
    `
}

function adding_score() {
    if (selected_input_value[score_match].value === quiz_obj[index_number][count - 1].answer) {
        score = score + 1;
    }
}

function result() {
    localStorage.setItem("score", score);
    window.location.pathname = "result/result.html";
}

