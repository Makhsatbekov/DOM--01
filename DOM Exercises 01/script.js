window.onload = function() {
  check = (word) => {
    if (word.length > 8) {
      word = '<span style="background:yellow;">' + word + '</span>';
    } else {
      word;
    }
    return word;
  }

  var str = document.querySelector("p").innerText;
  var newt = str.trim().split(' ').map(check).join(' ');
  document.querySelector("p").innerHTML = newt;

}
const paragraph = document.querySelector("p");
paragraph.innerHTML = paragraph.innerHTML.split(/\.[^.<]/).join("<br>");
paragraph.innerText = paragraph.innerText.split('').map((string) => {
    if (string === "?") {
        return string = "🤔";
    } else if (string === "!") {
        return string = "😮";
    } else {
        return string
    }
}).join("");
const stringCount = paragraph.innerText.split(' ').length;
const stringCountElem = document.createElement('div');
stringCountElem.innerText = `Word count: ${stringCount}`;
document.body.insertBefore(stringCountElem, paragraph);
var div = document.getElementById('Link');
var link = document.createElement('a');
link.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html';
link.title = 'This is a link';
link.appendChild(document.createTextNode('Source Link'));
div.appendChild(link);