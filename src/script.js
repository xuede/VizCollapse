const config = {
  speed: 50, // pixels per second
  timeStep: 16, // ms
  pathLength: 100,
  detectorY: 100,
  epsilon: 0.1,
};

const photon = document.getElementById('photon');
let position = 0;

function movePhoton() {
  position += (config.speed * config.timeStep) / 1000;
  photon.style.top = `${position}px`;

  if (Math.abs(position - config.detectorY) < config.epsilon) {
    detectorActivated();
  }

  if (position < config.pathLength) {
    setTimeout(movePhoton, config.timeStep);
  }
}

function detectorActivated() {
  document.getElementById('detector').style.backgroundColor = 'yellow';
}

movePhoton();
