let XO_table = document.getElementById('XOgame');
let modal = document.getElementById('modal');
let test = document.getElementById('test');
let video = document.getElementById('myVideo');
let source = document.getElementById('src');
let help = document.getElementById('help');
let banner = document.getElementById('banner');
let game = document.getElementById('game');
let x = document.getElementById('x');
let o = document.getElementById('o');

let playMode = 'player-X';
let table = [];

for (i = 1; i < 10; i++) {
	let cell_ = document.getElementById('td' + i);
	table.push(cell_);
	console.log(table);
}

for (let i = 0; i < table.length; i++) {
	table[i].onclick = function () {
		if (playMode == 'player-X') {
			table[i].value = '   X';
			table[i].style.color = '#e20000';
			table[i].disabled = true;
			game.innerHTML = ' Turn';
			x.innerHTML = '';
			o.innerHTML = 'O';
			playMode = 'player-O';
		} else if (playMode == 'player-O') {
			table[i].value = '   O';
			table[i].style.color = '#001172';
			table[i].disabled = true;
			game.innerHTML = ' Turn';
			o.innerHTML = '';
			x.innerHTML = 'X';
			playMode = 'player-X';
		}
	};
}

window.onload = function () {
	for (i = 0; i < table.length; i++) {
		table[i].value = '';
		table[i].disabled = false;
	}
};

function newGame() {
	for (i = 0; i < table.length; i++) {
		table[i].value = '';
		table[i].disabled = false;
		table[i].style.background = 'transparent';
	}
	playMode = 'player-X';
	modal.style.transform = 'scale(0)';
	XO_table.style.left = '50%';
}

function winner(num1, num2, num3) {
	for (i = 0; i < table.length; i++) {
		table[i].disabled = true;
		table[i].style.background = '#113';
	}
	test.innerHTML = 'Congratulations ' + num1.value + ' win the game';
	modal.style.transform = 'scale(1) translate(0%, 5%)';
	num1.style.background = '#f3f3f3';
	num2.style.background = '#f3f3f3';
	num3.style.background = '#f3f3f3';
	XO_table.style.left = '22%';
	XO_table.style.zIndex = '3';
	game.innerHTML = ' Game';
	x.innerHTML = 'X';
	o.innerHTML = 'O';
}

function whoWin() {
	if (
		table[0].value == table[1].value &&
		table[2].value == table[0].value &&
		table[0].value != ''
	) {
		winner(table[0], table[1], table[2]);
	} else if (
		table[3].value == table[4].value &&
		table[5].value == table[3].value &&
		table[3].value != ''
	) {
		winner(table[3], table[4], table[5]);
	} else if (
		table[6].value == table[7].value &&
		table[8].value == table[6].value &&
		table[6].value != ''
	) {
		winner(table[6], table[7], table[8]);
	} else if (
		table[0].value == table[3].value &&
		table[6].value == table[0].value &&
		table[0].value != ''
	) {
		winner(table[0], table[3], table[6]);
	} else if (
		table[1].value == table[4].value &&
		table[7].value == table[1].value &&
		table[1].value != ''
	) {
		winner(table[1], table[4], table[7]);
	} else if (
		table[2].value == table[5].value &&
		table[8].value == table[2].value &&
		table[2].value != ''
	) {
		winner(table[2], table[5], table[8]);
	} else if (
		table[0].value == table[4].value &&
		table[8].value == table[0].value &&
		table[0].value != ''
	) {
		winner(table[0], table[4], table[8]);
	} else if (
		table[2].value == table[4].value &&
		table[6].value == table[2].value &&
		table[2].value != ''
	) {
		winner(table[2], table[4], table[6]);
	} else if (
		table[0].value != '' &&
		table[1].value != '' &&
		table[2].value != '' &&
		table[3].value != '' &&
		table[4].value != '' &&
		table[5].value != '' &&
		table[6].value != '' &&
		table[7].value != '' &&
		table[8].value != ''
	) {
		test.innerHTML = 'Tie game No One Wins';
		modal.style.transform = 'scale(1) translate(0%, 5%)';
		XO_table.style.left = '22%';
		XO_table.style.zIndex = '3';
		game.innerHTML = ' Game';
		x.innerHTML = 'X';
		o.innerHTML = 'O';
	}
}

function quitGame() {
	modal.style.transform = 'scale(0)';
	XO_table.style.transform = 'scale(0)';
	source.setAttribute('src', 'video1.mp4');
	video.muted = false;
	video.load();
	video.play();
	help.style.display = 'block';
	banner.style.display = 'none';
}

function runAway() {
	help.style.bottom = Math.random() * 80 + '%';
	help.style.left = Math.random() * 80 + '%';
}
