function startClassification()
{
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ixEH6R6Zt/model.json" , modelReady);
}

function modelReady()
{
    console.log("Model Initialize");
    classifier.classify(gotResults);
}

function gotResults(error , results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}
