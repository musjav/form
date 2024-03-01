// //Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// // // first make firebase cdn and import functions (ref,set, getdatabase)
import { ref, set, getDatabase, push,onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBW_0ZKWVUgB4h-sDuajGs--1w1TL88LBI",
    authDomain: "fire-base-data-base-ba3d9.firebaseapp.com",
    projectId: "fire-base-data-base-ba3d9",
    storageBucket: "fire-base-data-base-ba3d9.appspot.com",
    messagingSenderId: "483630919452",
    appId: "1:483630919452:web:a14fc38928917c667594d9",
    measurementId: "G-66EBBX1TSN"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
var inp = document.getElementById("inp");

window.add = function () {
    // var obj = {
    //     text: inp.value,
    // };
    var formData = {
        city: document.getElementById('option1').value,
        course: document.getElementById('option2').value,
        name: document.getElementById('option3').value,
        father: document.getElementById('option4').value,
        email: document.getElementById('option5').value,
       phone : document.getElementById('option6').value,
       cnic : document.getElementById('option7').value,
        fathersCnin: document.getElementById('option8').value,
        birth: document.getElementById('option9').value,
       gender : document.getElementById('option10').value,
       address : document.getElementById('option11').value,
       qualification : document.getElementById('option12').value,
       laptop : document.getElementById('option13').value
    };
    var obj = formData;
    // // // give path for going in node ...reference made for putting it in firebase data base
    obj.id = push(ref(database, "Tasks/")).key;
    var reference = ref(database, `Tasks/${obj.id}`);
    set(reference, obj);// // //bracket text send to data base 

}
function getData() {
    var reference = ref(database, "Tasks/");
    onValue(reference, function (data) {
        console.log(data.val());
    });
}
getData();

// // // for changing image selecting button after selecting
document.getElementById('fileInput').addEventListener('change', function() {
    var uploadText = document.getElementById('uploadText');
    
    if (this.files.length > 0) {
        // If a file is selected, update the label text
        uploadText.innerHTML = 'Image Selected';
    } else {
        // If no file is selected, revert to the original label text
        uploadText.innerHTML = 'Upload Your Picture';
    }
});