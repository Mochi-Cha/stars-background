const starsCount = 500;
let centerX = window.innerWidth / 2;
let centerY = window.innerHeight * 1; // The center is below the horizon
let mouseX = window.innerWidth / 2; // Initial mouse x-position
let mouseY = window.innerHeight / 2; // Initial mouse y-position
let isMouseDown = false; // Track whether the mouse button is down
let zoom = 1; // Initial zoom level

window.addEventListener('mousedown', () => {
  isMouseDown = true;
});

window.addEventListener('mouseup', () => {
  isMouseDown = false;
});

window.addEventListener('mousemove', (event) => {
  if (isMouseDown) {
    centerX += event.clientX - mouseX; // Adjust the center of rotation based on the mouse movement
    centerY += event.clientY - mouseY;
  }
  mouseX = event.clientX;
  mouseY = event.clientY;
});

for (let i = 0; i < starsCount; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.backgroundColor = 'white';
  star.style.opacity = Math.random();
  let angle = Math.random() * 2 * Math.PI; // Random initial angle
  let distance = Math.random() * centerY; // Random initial distance from the center
  const moveStar = () => {
    distance *= zoom; // Adjust the distance from the center based on the zoom level
    star.style.left = `${centerX + distance * Math.cos(angle)}px`;
    star.style.top = `${centerY + distance * Math.sin(angle)}px`;
    angle += (mouseX / window.innerWidth - 0.5) / 100; // Use the mouse's x-position to control the rotation speed and direction
    requestAnimationFrame(moveStar);
  };
  moveStar();
  document.body.appendChild(star);
}


