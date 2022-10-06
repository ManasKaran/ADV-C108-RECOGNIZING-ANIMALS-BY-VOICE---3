dog_voice = 0
cat_voice = 0
document.getElementById("dog_voice").innerHTML = "Detected dog - " + dog_voice
document.getElementById("cat_voice").innerHTML = "Detected cat - " + cat_voice

function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/YYWlgW8Gp/model.json", modelReady);
}

function modelReady() {

    classifier.classify(gotResults);

}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_color_r = Math.floor(Math.random() * 255);
        random_color_g = Math.floor(Math.random() * 255);
        random_color_b = Math.floor(Math.random() * 255);

        document.getElementById("voice_detected").innerHTML = "Detected voice is of: " + results[0].label;
        document.getElementById("voice_detected").style.color = "rgb(" + random_color_r + "," + random_color_g + "," + random_color_b + ")";

    }
    img1 = document.getElementById("ear_img");

    voice_label = results[0].label;

    if (voice_label == "Barking") {
        img1.src = "dog.jpg"
        dog_voice = dog_voice + 1
        document.getElementById("dog_voice").innerHTML="Detected dog - " + dog_voice

    } else if (voice_label == "Meowing") {
        img1.src = "cat.jpg"
        cat_voice = cat_voice + 1
        document.getElementById("cat_voice").innerHTML="Detected cat - " + cat_voice
    } else {
        img1.src = "ear.png"
    }
}

