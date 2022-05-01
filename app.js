var btntranslate = document.querySelector("#btn-translate")
var txtinput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

// var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text

}

function errorHandler(error) {
    console.log("error occured".error)
    alert("something wrong with the server! try again after some time")
}



function clickHandler() {
    //   outputDiv.innerText=txtinput.value + "hahahah" ; 
    var inputTEXT = txtinput.value;



    fetch(getTranslationURL(inputTEXT))
        .then(Response => Response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText
        })
        .catch(errorHandler)
};
btntranslate.addEventListener("click", clickHandler)












// https://eloquentjavascript.net/Eloquent_JavaScript.pdf