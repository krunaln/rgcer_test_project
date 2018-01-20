
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC4YDwgEmrtaXkMu8aVfK4ZGkW2U2kgVi8",
    authDomain: "rgcer-48afc.firebaseapp.com",
    databaseURL: "https://rgcer-48afc.firebaseio.com",
    projectId: "rgcer-48afc",
    storageBucket: "rgcer-48afc.appspot.com",
    messagingSenderId: "498406814073"
  };
  firebase.initializeApp(config);

//Calculate Date
var timeStamp = new Date();
var timeStamp = timeStamp.getDate() + '/' + timeStamp.getMonth()+1 + '/' + timeStamp.getFullYear();


// Reference question collection
var questionEntries = firebase.database().ref('Questions');

// Listen for form submit
document.getElementById('add-question').addEventListener('submit', submitForm);

// Clear the form on load.
document.getElementById('add-question').reset();


// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var question = $('#question').val();
  var option1 = $('#option1').val();
  var option2 = $('#option2').val();
  var option3 = $('#option3').val();
  var option4 = $('#option4').val();
  var correct = $('input[name=options]:checked').val();
  var weight = $('#weight').val();
var

  // Save message    call to function
  saveTodatabase(question,option1,option2,option3,option4,correct,weight);

  // Clear the form on form submit.
  document.getElementById('add-question').reset();

  //hide details Pane
    $("#list-details").hide();
}


// Save message to firebase   function defination
function saveTodatabase(question,option1,option2,option3,option4,correct,weight) {
  var newquestionEntries = questionEntries.child().push();
  newquestionEntries.set({
    question: question,
    option1: option1,
    option2: option2,
    option3: option3,
    option4: option4,
    correct: correct,
    weight: weight,
    timeStamp: timeStamp
  });

  //show toast if everything goes right.
  var snackbarContainer = document.querySelector('#demo-toast-example');
  var data = {message: 'Question Added to database'};
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
}
$("#addquestion").click(function(){
    $("#addQuestion").show();
    $("#showQuestion").hide();
});

$("#showquestion").click(function(){
    $("#addQuestion").hide();
    $("#showQuestion").show();
});




function init() {
    $("#showQuestion").hide();

}

questionEntries.on('value', function(snapshot) {
    userDict = snapshot.val();

var block= document.getElementById('block');
var block1= document.getElementById('block1');

    for (i=Object.keys(userDict).length-1; i>=0; i--){

        if(userDict[Object.keys(userDict)[i]].timeStamp == timeStamp){
            console.log(timeStamp);

            var question = userDict[Object.keys(userDict)[i]].question;
            var option1 = userDict[Object.keys(userDict)[i]].option1;
            var option2 = userDict[Object.keys(userDict)[i]].option2;
            var option3 = userDict[Object.keys(userDict)[i]].option3;
            var option4 = userDict[Object.keys(userDict)[i]].option4;
            var correct = userDict[Object.keys(userDict)[i]].correct;
            var weight = userDict[Object.keys(userDict)[i]].weight;

       block.innerHTML += '<div><li id="listcard" class="mdl-list__item"><span class="mdl-list__item-primary-content">'+question+'</span><span class="mdl-list__item-secondary-action"><label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1"><input type="checkbox" id="list-checkbox-1" class="mdl-checkbox__input" checked /></label></span></li></div><div id="list-details" class="list-detailsclass"><p><span>A:</span>'+option1+'</p><p><span>B:</span>'+option2+'</p><p><span>C:</span>'+option3+'</p><p><span>D:</span>'+option4+'</p><p><span>Correct Answer:</span>'+correct+'</p><p><span>Weight:</span>'+weight+'</p></div>'
    }else {

        var question = userDict[Object.keys(userDict)[i]].question;
        var option1 = userDict[Object.keys(userDict)[i]].option1;
        var option2 = userDict[Object.keys(userDict)[i]].option2;
        var option3 = userDict[Object.keys(userDict)[i]].option3;
        var option4 = userDict[Object.keys(userDict)[i]].option4;
        var correct = userDict[Object.keys(userDict)[i]].correct;
        var weight = userDict[Object.keys(userDict)[i]].weight;

        block1.innerHTML += '<div><li id="listcard'+i+'" class="mdl-list__item"><span class="mdl-list__item-primary-content">'+question+'</span><span class="mdl-list__item-secondary-action"><label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1"><input type="checkbox" id="list-checkbox-1" class="mdl-checkbox__input" checked /></label></span></li></div><div id="list-details'+i+'" class="list-detailsclass"><p><span>A:</span>'+option1+'</p><p><span>B:</span>'+option2+'</p><p><span>C:</span>'+option3+'</p><p><span>D:</span>'+option4+'</p><p><span>Correct Answer:</span>'+correct+'</p><p><span>Weight:</span>'+weight+'</p></div>'
    }

}



});
