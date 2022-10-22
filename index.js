let options = {
    method: "Get"
};
let checkwithString;
let timer = 0;
let sbmtBtn = document.getElementById("submitBtn");
let rstBtn = document.getElementById("resetBtn");
let timerparaEle = document.getElementById("timer");
let paraToType = document.getElementById("quoteDisplay");
let resultpara = document.getElementById("result");
let intervalid;
rstBtn.onclick = function() {
    clearInterval(intervalid);
    fectchRandomQuote();
};
sbmtBtn.onclick = function() {
    let userEnteredText = document.getElementById("quoteInput").value;
    if (userEnteredText === checkwithString) {
        clearInterval(intervalid);
        resultpara.textContent = "You have Entered correct Sentence";
    } else {
        resultpara.textContent = "You have Entered incorrect Sentence";
    }
}

function RandomTextGenerated(content) {
    timer = 0;
    document.getElementById("bootrapSpinner").classList.add("d-none");
    let spnele = document.createElement("span");
    timerparaEle.textContent = timer;
    spnele.classList.add("seconds");
    timerparaEle.appendChild(spnele);
    spnele.textContent = " Seconds";
    checkwithString = content;
    paraToType.textContent = content;
    intervalid = setInterval(function() {
        timer += 1;
        let spnele = document.createElement("span");
        timerparaEle.textContent = timer;
        spnele.classList.add("seconds");
        timerparaEle.appendChild(spnele);
        spnele.textContent = " Seconds";
    }, 1000);
}

function fectchRandomQuote() {
    document.getElementById("bootrapSpinner").classList.remove("d-none");
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let {
                content
            } = jsonData;
            RandomTextGenerated(content);
        });
}
fectchRandomQuote();