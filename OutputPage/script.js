let userInput = document.getElementById("input-box");
let mic = document.getElementById('mic');
let send = document.getElementById('send');

send.addEventListener('click', ()=> {
    console.log(userInput.value);
    console.log("hello");
})

mic.addEventListener('click', () => {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.onresult = function(event) {
        console.log(event);
        userInput.value = event.results[0][0].transcript;
    }
    recognition.start();
})