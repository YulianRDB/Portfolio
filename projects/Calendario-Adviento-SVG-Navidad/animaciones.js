/* animacion para el reloj que muestra la hora en tiempo real */
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");

const hour = new Date().getHours() % 12;
const minute = new Date().getMinutes();


hoursElement.setAttribute("transform", `rotate(${(360 / 12) * hour})`);
minutesElement.setAttribute("transform", `rotate(${(360 / 60) * minute})`);


/* js para la bombilla */
const bulb = document.getElementById("bulb");

let lightOn = true;

bulb.addEventListener("click", () => {
    bulb.setAttribute("fill", lightOn ? "transparent" : "gold");
    lightOn = !lightOn;
});

/* js para la lampara */
const head = document.getElementById("head");
const arm1 = document.getElementById("arm1");
const arm2 = document.getElementById("arm2");
const arm3 = document.getElementById("arm3");

let arm1Rotation = -25;
let arm3Rotation = 45;

let newArm1Rotation = arm1Rotation;
let newArm3Rotation = arm3Rotation;

let isDragging = false;
let dragStartX, dragStartY;

head.addEventListener("mousedown", (e) => {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;

    newArm1Rotation = Math.max(-60, Math.min(0, arm1Rotation - dy * 0.5));
    newArm3Rotation = Math.max(-90, Math.min(90, arm3Rotation - dx * 0.8));

    arm1.setAttribute("transform", `rotate(${newArm1Rotation})`);
    arm2.setAttribute("transform", `rotate(${-newArm1Rotation * 2})`);
    arm3.setAttribute("transform", `rotate(${newArm3Rotation})`);
});

document.addEventListener("mouseup", () => {
    isDragging = false;

    arm3Rotation = newArm3Rotation;
    arm1Rotation = newArm1Rotation;
});

