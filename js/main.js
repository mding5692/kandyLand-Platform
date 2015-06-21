// Login Page
// correct username = admin, correct password = password
var correctUser = "admin";
var correctPass = "password";

/*
	Login function; if username and password fields are filled, moves to another page
	else prints an alert telling you to enter the password and username.
 */
function login() {
	
	var username = $('#user').val();
	var password = $('#pass').val();

	//alert(username);
	//alert(password);

	if ( username === correctUser && password == correctPass )  {
		window.location.replace("./lobby.html");
	} else {
		alert("Username and/or Password is not correct");
	}
}

// Lecture page
/* The text stored as chat right now */
var chatDisplayText = [];
var chatDisplay = $("#chatMessageText");


/*
	Enters text from the chatbox to be displayed
 */
function enterText() {
	var chatMessage = $("#chatbox").val();
	chatDisplayText.push(chatMessage);
	chatDisplay.innerText = chatDisplayText;
}


// alerts the right username and password
$(document).ready(function() {
	// gets the pathname and alerts messages depending on page
	var pathname = window.location.pathname;
	if (pathname === '/C:/Users/Ding/Desktop/kandyLand/login.html') {
	alert("The username is admin and the password is password");
	} else if (pathname === 'C:/Users/Ding/Desktop/kandyLand/lecture.html') {
		chatDisplay.innerText = chatDisplayText;
	}
});
