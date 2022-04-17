var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("text_box").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("text_box").innerHTML = content;
    if(content=="take my selƒie") {
        console.log("taking selfie");

    speak();
    }

}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "TAKING SELFIE IN 5 SECONDS GET READY"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}

function save() {
    link=document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}

Webcam.set({
    width: 360,
    height: 200,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(functon(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id = "selfie_image" src = "'+data_uri+'">';
    })
}
