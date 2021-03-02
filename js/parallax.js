let bg = document.querySelector('.parallax-bg-2');
window.addEventListener('mousemove', function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
});
let bg2 = document.querySelector('.parallax-bg-1');
window.addEventListener('mousemove', function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg2.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});