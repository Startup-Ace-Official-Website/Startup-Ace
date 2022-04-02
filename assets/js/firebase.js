const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
firebase.initializeApp(firebaseConfig);
//console.log(firebase.auth());
// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    
    var name = getElementVal("name");
    var email = getElementVal("email");
    
    saveMessages(name, email);
    document.querySelector('.al').style.display = 'block';
    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, email) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name: name,
        email: email,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};