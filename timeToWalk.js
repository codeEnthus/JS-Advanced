function timeToWalk(footsteps, footstepSize, speed) {
    let distance = (footsteps * footstepSize);
    let speedForMetersInSec = speed / 3.6;

    let rest = Math.floor(distance / 500);
    let time = distance / speedForMetersInSec + rest * 60;


    let hours = Math.floor(time / 3600);
    let mins = Math.floor(time / 60);
    let secs = Math.ceil(time % 60);
    console.log(`${hours < 10 ? 0 : ''}${hours}:${mins < 10 ? 0 : ''}${mins}:${secs < 10 ? 0 : ''}${secs} `)
}