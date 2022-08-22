function logOut() {
    localStorage.setItem("count", "0")
    window.location.href = `../../index.html`
}

function result_page() {
    window.location.href = "../../result/result.html";
}

var courseName = localStorage.getItem("coursename")
var subject = localStorage.getItem("subject")
document.getElementsByClassName("heading")[0].innerHTML = `${courseName} (${subject} Subjects)`;

// Real Quiz Work Start Now

var quiz_obj = [
    // HTML5 Quiz Object
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
        }
    ],
    // CCS3 Quiz Object
    [
        {
            question: "How can you created rounded corners using CSS3?",
            opt1: "border[round]: 30px;",
            opt2: "corner-effect: round;",
            opt3: "border-radius: 30px;",
            opt4: "alpha-effect: round-corner;",
            answer: "border-radius: 30px;",
        },
        {
            question: "How do you add shadow to elements in CSS3?",
            opt1: "box-shadow: 10px 10px 5px grey;",
            opt2: "shadow-right: 10px shadow-bottom: 10px;",
            opt3: "shadow-color: grey;",
            opt4: "alpha-effect[shadow]: 10px 10px 5px grey;",
            answer: "box-shadow: 10px 10px 5px grey;",
        },
        {
            question: "How to you modify a border image using CSS3?",
            opt1: "border: url(image.png);",
            opt2: "border-variable: image url(image.png);",
            opt3: "border-image: url(border.png) 30 30 round;",
            opt4: "None",
            answer: "border-image: url(border.png) 30 30 round;",
        },
        {
            question: "How to resize a background image using CSS3?",
            opt1: "background-size: 80px 60px;",
            opt2: "bg-dimensions: 80px 60px;",
            opt3: "background-proportion: 80px 60px;",
            opt4: "alpha-effect: bg-resize 80px 60px;",
            answer: "background-size: 80px 60px;",
        },
        {
            question: "How to add text shadow using CSS3?",
            opt1: "font: shadowed 5px 5px 5px grey;",
            opt2: "font-shadow: 5px 5px 5px grey;",
            opt3: "text-shadow: 5px 5px 5px grey;",
            opt4: "shadow: text 5px 5px 5px grey;",
            answer: "text-shadow: 5px 5px 5px grey;",
        },
        {
            question: "How to force a word wrap using CSS3?",
            opt1: "word-wrap: break-word;",
            opt2: "text-wrap: break-word;",
            opt3: "text-wrap: force;",
            opt4: "text-width: set;",
            answer: "word-wrap: break-word;",
        },
        {
            question: "Which of these are valid CSS3 transformation statements.",
            opt1: "matrix()",
            opt2: "modify()",
            opt3: "skip()",
            opt4: "simulate()",
            answer: "matrix()",
        },
        {
            question: "How to rotate objects using CSS3?",
            opt1: "object-rotation: 30deg;",
            opt2: "transform: rotate(30deg);",
            opt3: "rotate-object: 30deg;",
            opt4: "transform: rotate-30deg-clockwise;",
            answer: "transform: rotate(30deg);",
        },
        {
            question: "How to re-size/scale objects using CSS3?",
            opt1: "transform: scale(2,4);",
            opt2: "scale-object: 2,4;",
            opt3: "scale: (2,4);",
            opt4: "None",
            answer: "transform: scale(2,4);",
        },
        {
            question: "How to create transition effects using CSS3?",
            opt1: "transition-duration: 2s; transition-effect: width;",
            opt2: "alpha-effect: transition (width,2s);",
            opt3: "None",
            opt4: "transition: width 2s;",
            answer: "transition: width 2s;",
        },
    ],
    // Javascript Quiz Object
    [
        {
            question: "Which of the following is a server-side Java Script object?",
            opt1: "Function",
            opt2: "File",
            opt3: "FileUpload",
            opt4: "Date",
            answer: "File",
        },
        {
            question: " Java script can be used for Storing the form's contents to a database file on the server",
            opt1: "False",
            opt2: "True",
            opt3: "Niether",
            opt4: "Only in Table Form",
            answer: "False",
        },
        {
            question: "To insert a JavaScript into an HTML page, which tag is used?",
            opt1: "script=â€™javaâ€™",
            opt2: "javascript",
            opt3: "script",
            opt4: "js",
            answer: "script",
        },
        {
            question: "Which of the below is used in Java script to insert special characters?",
            opt1: "&",
            opt2: "\\",
            opt3: "-",
            opt4: "%",
            answer: "\\",
        },
        {
            question: "How does Java Script store dates in objects of Date type?",
            opt1: "The number of days since January 1st, 1900",
            opt2: "The number of seconds since January 1st, 1970",
            opt3: "The number of milliseconds since January 1st, 1970",
            opt4: "The number of picoseconds since January 1st, 1970",
            answer: "The number of milliseconds since January 1st, 1970",
        },
        {
            question: "Which is the correct way to write a JavaScript array?",
            opt1: "var txt = new Array(1:'arr',2:'kim',3:'jim')",
            opt2: "var txt = new Array:1=(' arr ')2=('kim')3=('jim')",
            opt3: "var txt = new Array('arr ','kim','jim')",
            opt4: "var txt = new Array=' arr ','kim','jim'",
            answer: "var txt = new Array('arr ','kim','jim')",
        },
        {
            question: "Which of the following is correct to write â€œHello Worldâ€ on the web page?",
            opt1: "System.out.println(â€œHello Worldâ€)",
            opt2: "print(â€œHello Worldâ€)",
            opt3: "document.write(â€œHello Worldâ€)",
            opt4: "response.write(â€œHello Worldâ€)",
            answer: "document.write(â€œHello Worldâ€)",
        },
        {
            question: "Which of the following is the tainted property of a window object in Java Script?",
            opt1: "Pathname",
            opt2: "Protocol",
            opt3: "Defaultstatus",
            opt4: "Host",
            answer: "Defaultstatus",
        },
        {
            question: "Which attribute needs to be changed to make elements invisible?",
            opt1: "visibilty",
            opt2: "visible",
            opt3: "invisibility",
            opt4: "invisibile",
            answer: "visibilty",
        },
        {
            question: "Which of the following is used to capture all click events in a window?",
            opt1: "window.captureEvents(Event.CLICK)",
            opt2: "window.routeEvents(Event.CLICK );",
            opt3: "window.handleEvents(Event.CLICK );",
            opt4: "window.routeEvents(Event.CLICK );",
            answer: "window.captureEvents(Event.CLICK)",
        },
    ],
]
var scoreList = [JSON.parse(localStorage.getItem("score"))[0], JSON.parse(localStorage.getItem("score"))[1], JSON.parse(localStorage.getItem("score"))[2]];
var count = 1;
score = 0;
score_match = "";
var selected_input_value = "";
var index_number = 0;
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
        window.location.href = `../../index.html`
    } else if (gettingCount == null) {
        var gettingCount = localStorage.setItem("count", "0")
        window.location.reload();
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

var screen_size = document.getElementsByClassName("hidden_box")[0];

function screen_change() {
    screen_size.requestFullscreen();
}

var original_screen_size = screen.availHeight;

function continueBtn(quiz_name, index) {
    document.getElementsByClassName("hidden_box")[0].style.display = "grid";
    screen_change();
    window.onblur = function () {
        window.location.href = "../home.html";
    }
    index_number = index;
    var timer_min = 29;
    var timer_sec = 60;
    setInterval(function () {
        if (localStorage.getItem("screen_size") === screen.availHeight) {
            window.location.href = "../home.html";
        }
        ""
        if (timer_min === 0 && timer_sec === 0) {
            localStorage.setItem("score", score);
            window.location.href = "../../result/result.html";
            timer_sec = timer_sec + 1;
        } else if (timer_sec === 0) {
            timer_sec = 60;
            timer_min = timer_min - 1;
        }
        timer_sec = timer_sec - 1;
        document.getElementsByClassName("timer")[0].innerHTML = timer_min + ":" + timer_sec;
    }, 1000)
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
    scoreList.splice(index_number, 1, score);
    localStorage.setItem("score", JSON.stringify(scoreList));
    localStorage.setItem("index", index_number);
    window.location.href = "../../result/result.html";
}

