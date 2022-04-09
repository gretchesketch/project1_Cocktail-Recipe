const img = document.querySelector('.img');
const cycleImages = [
    './images/bluedrink.jpg', './images/greendrink.jpg', './images/pinkdrink.jpg', './images/orangedrink.jpg'
];
// carousel
async function cycle() {
  img.src = cycleImages[0];
  await new Promise(r => setTimeout(r, 2000));
  img.src = cycleImages[1];
  await new Promise(r => setTimeout(r, 2000));
  img.src = cycleImages[2];
  await new Promise(r => setTimeout(r, 2000));
  img.src = cycleImages[3];
  await new Promise(r => setTimeout(r, 2000));
  cycle();
}
cycle();