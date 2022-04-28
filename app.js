var btntranslate= document.querySelector("#btn-translate")
var txtinput =document.querySelector("#txt-input")
var outputDiv =document.querySelector("#output")

function clickHandler() {
    outputDiv.innerText = txtinput.value + " hahahaha";

};
btntranslate.addEventListener("click",clickHandler)
