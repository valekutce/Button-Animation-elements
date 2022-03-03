const btn = document.querySelector('.fancy-button');
const circlesNr = 100;

btn.addEventListener('click', generateCircles);

function generateCircles() {
	for(let i = 0; i<circlesNr; i++) {
		setTimeout(() => {
			const scale = 0.8 + Math.random() * 0.5;				
			const translateX = -250 + Math.random() * 500;	
			const translateY = -250 + Math.random() * 500;

			const circle = document.createElement('div');
			circle.classList.add('circle');
			circle.style.opacity = 1;
			circle.style.transform = `
				translate(0px, 0px)
				scale(${scale})
			`;

			setTimeout(() => {
				circle.style.transform = `
					translate(${translateX}px, ${translateY}px)
					scale(0)
				`;

				circle.style.opacity = 0;
			}, 10);

			if(Math.random() < 0.5) {
				circle.classList.add('full');
			}

			btn.appendChild(circle);

			setTimeout(() => {
				circle.remove()
			}, 2000);
			
		}, 5 * i)
	}
}