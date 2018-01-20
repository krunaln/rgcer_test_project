const functions = require('firebase-functions');


var admin = require("firebase-admin");
// Fetch the service account key JSON file contents
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: 'rgcer-48afc',
    clientEmail: 'firebase-adminsdk-mu8ub@rgcer-48afc.iam.gserviceaccount.com',
    privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCu2Jn0MysFSjhn\noo08ODeVjNROHyka4cxHH0Vwt9IVtbhcLOgZWLbqC2c44zIx/QJ71GRJTSwV06Ch\nX9IJMWvrxAtJC3652N9Xtp9ctogbZvjyXPRp2oqUMZSm+jNBrb6XkuNBS3rPSehb\nW/eGz0pHTeEZDWFLMmmp1DoeaFklsdkIvIFa/dEaa7yU+4zpGaoOYuFc23Ka0dsu\nkCqfH8rS15tt+Y4h11mI+AjqQP2CWdBN1QANV42OeKKx6t8H5T8I2wivaYg0R+qk\nmyShjBZGE/OWaCaeLPCAnYHsrU4AQb6mf+sB3hsTcHdirVqns9rNCkcYlj5V5gqD\nvPJsURx5AgMBAAECggEAOw7VnasE3oIN4E+DJjKU79JESejzkO1w+xsAcQzeDNA3\nKAdRFHKnQhG8+XWgWEsuIhaBE1NaTzsO2ENN5iYH3nh3GWKlGPA8rFt2o7HR8nOL\nJg4oznJveZPvsqDzXD1sEbWfRkhRAKBluCotxx7QZ5pSLIyc7vHlx+P0B55Wckj6\nxrclZ4DBdgTB/1LfNP8I8AQtwH2aVMJUcLmzH1F/oW8D+oDHZIumlLGnTnRn8S0K\nRZyz2Yfbxenc5Qx2yXidkWbQiOnjCV9HBZoVFqpymnPdgLDPd7EgI27dDLcBeGpS\n3+IWn8hyja5co2uU4OOfLB1AFt0pX80KqlZ0CCHtGwKBgQDv/weVRYvsRjBVJ9lB\n7iQzANzOhww2S/dqisxRw5+/ZzYMxPNSqGeolKFowH+l/kvYzkUhajRA3kAGCZSl\niJX+JNl3q9E2zHd0EZrMs0yFFknIWSWpslhL0mZVWoxv10NEMwYuk+FdxtTlA0GS\nY+acNwhIa7D5p9+MI2Ppf4bhdwKBgQC6gWVDhyEC6r7tmo+uo84eArEu72vIMHoa\nv6s3W4BtRPaO5C4dNL30CWmENFQgepnHGrr+mtxqozcU9COBDdgzfitlefco8Zjk\nAvOLh3G8saM1T7mLNw0ztIYkq9jyAv7ApVeyDsNwTm4biwjPE6WN1GlMlDynTCS6\nzwIX+DLtjwKBgQDOtltRtxVN7Sa0Mh5vKy8Cvztwp+Fc4xG4MtTJmDWAJuXnGbx6\n9ZJTIbHlB+jqkJ3Dn+brYQ6g0M1UZewiqAKJZDPrX5JUIMjCsGck6Up/VzM13ZMT\nFwn2RMLfwZ40trS5iTlJ5RW4MAovNx7DeEipRL1do2RLpMxnaBQmijEjAQKBgAQ0\nCFk2QWs0aSsnsZdI/8szWlTpdm9jkEzsBurPeBx+UmQ0BkoIN0O5tpQRLdgxiyeu\nlYpJaTBKD2K8gdRVwIqgjE/UKNrWXxC8dEqvucN76Wa5LkBR9E03A1LuQIxrvtwO\nneRYatUsH1UllAQ+uBtzLxBXwuouUCGZqr1pjZRHAoGALYSFEhKVgNQGpgFRnb3E\n50wTXZ6XQFjl7J+B1On9wWaXMKwA9OfSDQIW0Yz+wmBZhMYY4Rkse+TG6ouXxjDX\ncPMYJ3+KW5AmwRU6KMFn3E3dQrbHf08QMJmOUH5O4PDblUusOCb2XIE8xX6mgjKO\nSHxex9XAPlsHyfgIdBUj7yo=\n-----END PRIVATE KEY-----\n'
  }),
  databaseURL: "https://rgcer-48afc.firebaseio.com"
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {




    //fetching data from user
     var question1 = request.body.questions.q1;
     var question2 = request.body.questions.q2;
     var question3 = request.body.questions.q3;
     var question4 = request.body.questions.q4;
     var question5 = request.body.questions.q5;

     var option1 = request.body.user_options.o1;
     var option2 = request.body.user_options.o2;
     var option3 = request.body.user_options.o3;
     var option4 = request.body.user_options.o4;
     var option5 = request.body.user_options.o5;

    //init database
    var db = admin.database();

    var ref = db.ref("Questions").child(question3);
    ref.once("value", function(snapshot) {
        if (option3==snapshot.child(snapshot.val().correct).val()) {
            globalScore += 1;
        }
    });


    response.send("globalScore.toString()");


 });
