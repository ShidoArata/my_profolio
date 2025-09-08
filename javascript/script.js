// ================ start nav menu ======================

let showen = false;

function show_menu() {
	let menu = document.getElementById('nav');
	if (showen) {
		menu.style.display = 'none';
		showen = false;
	}else{
		menu.style.display = 'flex';
		showen = true;
	}
}


// ================ end nav menu ======================

// ================ start services quations ======================
function nextStep(step) {
	document.querySelectorAll('.step').forEach(s => s.classList.add('d-none'));
	document.getElementById('step-' + step).classList.remove('d-none');
}

function prevStep(step) {
	nextStep(step);
}

function finish_app() {
	let data = {
		name: document.getElementById('appName').value,
		type: document.getElementById('appType').value,
		features: document.getElementById('features').value.split(',').map(f => f.trim()),
		theme: document.getElementById('theme').value,
		database: document.getElementById('database').value,
		Platform: document.getElementById('Platform').value
	};

	add_log(data);

	let summary = `
    The name of the app is ${data.name}.<br>
    The type is ${data.type}.<br>
    The theme is ${data.theme}.<br>
    The database is ${data.database}.<br>
    The features are: ${data.features.join(",")}.
    The Platform is ${data.Platform}.<br>
	`;

	document.getElementById('modalContent').innerHTML = summary;

	// show modal
	let resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
	resultModal.show();
}

function sendEmail() {
	let email = document.getElementById("userEmail").value;
	if (email.trim() === "") {
		alert("Please enter your email.");
		return;
	}
	alert("Thank you! The result will be sent to " + email + " later.");
	location.reload(); // Reload the page after submission
}


function finish_game() {
	let data = {
		name: document.getElementById('gameName').value,
		type: document.getElementById('gameType').value,
		features: document.getElementById('features').value.split(',').map(f => f.trim()),
		theme: document.getElementById('theme').value,
		graphics: document.getElementById('graphics').value,
		Platform: document.getElementById('Platform').value
	};

	add_log(data);

	let summary = `
    The name of the game is ${data.name}.<br>
    The type is ${data.type}.<br>
    The theme is ${data.theme}.<br>
    The graphics is ${data.graphics}.<br>
    The features are: ${data.features.join(", ")}.
    The Platform is ${data.Platform}.<br>
	`;

	document.getElementById('modalContent').innerHTML = summary;

	// show modal
	let resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
	resultModal.show();
}
// ================ end services quations ======================




// =========================start= set up wen page ==============

function setup() {
	var file = JSON.parse(localStorage.WebTheme);
	document.getElementById("theme").setAttribute("href", file);

}


// =========================end= set up wen page ==============




// =========================start= chooce theme ==============


function change_theme(file) {
	localStorage.WebTheme = JSON.stringify(file);
	document.getElementById("theme").setAttribute("href", file);
}

// =========================end= chooce theme ==============



// =========================start= الذي يتنقل بين services ==============
document.getElementById("serviceSelect").addEventListener("change", function () {
	let url = this.value;
	if (url) {
		window.location.href = url; // tp to the page
	}
});
// =========================end= الذي يتنقل بين services ==============






// =========================start= contact modal  ==============

let modal = document.getElementById("myModal");
let openBtn = document.getElementById("openmodal");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = () => modal.style.display = "flex";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }
// =========================end= contact modal ==============







// ===================== start local storage for user info ===================



function main() {
	if (localStorage.sign != undefined) {
		window.location.href = "HTML/home/home.html";
	}

}

function signin() {
	let user = {
		name: document.getElementById('name').value,
		username: document.getElementById('username').value,
		password: document.getElementById('password').value,
		phone: document.getElementById('phone').value,
		email: document.getElementById('email').value
	};
	localStorage.sign = JSON.stringify(user);// to confirme from json to local storage
}


// ===================== end local storage for user info ===================




//====================== start logs script ====================

function add_log(params) {
	if (localStorage.logs == undefined) {
		localStorage.logs = JSON.stringify([]);
	}
	saves = [];
	saves = JSON.parse(localStorage.logs);
	saves.push(params);
	localStorage.logs = JSON.stringify(saves);
}

function show_logs() {
	var logs = document.getElementById("add_logs");
	if (localStorage.logs == undefined) {
		localStorage.logs = JSON.stringify([]);
	}
	var saves = JSON.parse(localStorage.logs);

	logs.innerHTML = "";

	if (saves.length === 0) {
		logs.innerHTML = "<div class='b-box'><p>No logs saved yet.</p></div>";
		return;
	}

	saves.forEach(
		Log => {
			logs.innerHTML += `
			<div class="b-box">
	        	<p>
				 	The name of the app is ${Log.name}.<br>
					The type is ${Log.type}.<br>
					The theme is ${Log.theme}.<br>
					The database is ${Log.database}.<br>
					The features are: ${Log.features.join(",")}.<br>
					The Platform is ${Log.Platform}.<br>
				</p>
	    	</div>
			`;
		});
}

//====================== end logs script ====================


