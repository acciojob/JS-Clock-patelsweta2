//your code here
function updateClock() {
	const now = new Date();

	const hours = now.getHours()%12;
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();

	const hourHand = document.querySelector('.hour-hand');
	const minHand = document.querySelector('.min-hand');
	const secondHand = document.querySelector('.second-hand');

	const hourRotation = (360/12) * (hours+minutes/60);
	const minRotation = (360/60) * (minutes + seconds/60) ;
	const secondRotation = (360/60) * seconds;

	hourHand.style.transform = `rotate(${hourRotation}deg)`;
	minHand.style.transform = `rotate(${minRotation}deg)`;
	secondHand.style.transform = `rotate(${secondRotation}deg)`;
	
}
setInterval(updateClock, 1000);
updateClock();