function showInputError(input, message) {
input.classList.add("input-error");

const errorMessage =
    input.closest(".input-group").querySelector(".input-error-message");

errorMessage.textContent = message;

}

function clearInputError(input) {
input.classList.remove("input-error");

const errorMessage =
    input.closest(".input-group").querySelector(".input-error-message");

errorMessage.textContent = "";

}

function validateRequired(input, message = "This field is required.") {
const value = input.value.trim();

if (value === "") {
    showInputError(input, message);
    return false;
}

clearInputError(input);
return true;

}

function validatePositive(input, message) {
const value = Number(input.value.trim());

if (value <= 0) {
    showInputError(input, message);
    return false;
}

clearInputError(input);
return true;

}

/* ==================================================
Spindle Speed Calculator
================================================== */

function calculateSpindleSpeed() {
const diameterInput =
document.getElementById("diameter");

const cuttingSpeedInput =
    document.getElementById("cuttingSpeed");

const result =
    document.getElementById("spindleResult");


clearInputError(diameterInput);
clearInputError(cuttingSpeedInput);


let valid = true;


if (!validateRequired(diameterInput)) {
    valid = false;
}

if (!validateRequired(cuttingSpeedInput)) {
    valid = false;
}

if (!valid) {
    result.textContent = "—";
    return;
}


if (!validatePositive(
    diameterInput,
    "Diameter must be greater than 0."
)) {
    valid = false;
}


if (!validatePositive(
    cuttingSpeedInput,
    "Cutting speed must be greater than 0."
)) {
    valid = false;
}


if (!valid) {
    result.textContent = "—";
    return;
}


const diameter =
    Number(diameterInput.value.trim());

const cuttingSpeed =
    Number(cuttingSpeedInput.value.trim());


const spindleSpeed =
    (1000 * cuttingSpeed) /
    (Math.PI * diameter);


result.textContent =
    `${spindleSpeed.toFixed(0)} RPM`;

}

/* ==================================================
Feed Rate Calculator
================================================== */

function calculateFeedRate() {
const feedPerToothInput =
document.getElementById("feedRatePerTooth");

const numberOfTeethInput =
    document.getElementById("feedRateNumberOfTeeth");

const spindleSpeedInput =
    document.getElementById("feedRateSpindleSpeed");

const result =
    document.getElementById("feedResult");


clearInputError(feedPerToothInput);
clearInputError(numberOfTeethInput);
clearInputError(spindleSpeedInput);


let valid = true;


if (!validateRequired(feedPerToothInput)) {
    valid = false;
}

if (!validateRequired(numberOfTeethInput)) {
    valid = false;
}

if (!validateRequired(spindleSpeedInput)) {
    valid = false;
}


if (!valid) {
    result.textContent = "—";
    return;
}


if (!validatePositive(
    feedPerToothInput,
    "Feed per tooth must be greater than 0."
)) {
    valid = false;
}


if (!validatePositive(
    numberOfTeethInput,
    "Number of teeth must be greater than 0."
)) {
    valid = false;
}


if (!validatePositive(
    spindleSpeedInput,
    "Spindle speed must be greater than 0."
)) {
    valid = false;
}


if (!valid) {
    result.textContent = "—";
    return;
}


const feedPerTooth =
    Number(feedPerToothInput.value.trim());

const numberOfTeeth =
    Number(numberOfTeethInput.value.trim());

const spindleSpeed =
    Number(spindleSpeedInput.value.trim());


const feedRate =
    feedPerTooth *
    numberOfTeeth *
    spindleSpeed;


result.textContent =
    `${feedRate.toFixed(0)} mm/min`;

}

/* ==================================================
Feed per Tooth Calculator
================================================== */

function calculateFeedPerTooth() {
const feedRateInput =
document.getElementById("fptFeedRate");

const numberOfTeethInput =
    document.getElementById("fptNumberOfTeeth");

const spindleSpeedInput =
    document.getElementById("fptSpindleSpeed");

const result =
    document.getElementById("feedPerToothResult");


clearInputError(feedRateInput);
clearInputError(numberOfTeethInput);
clearInputError(spindleSpeedInput);


let valid = true;


if (!validateRequired(feedRateInput)) {
    valid = false;
}

if (!validateRequired(numberOfTeethInput)) {
    valid = false;
}

if (!validateRequired(spindleSpeedInput)) {
    valid = false;
}


if (!valid) {
    result.textContent = "—";
    return;
}


if (!validatePositive(
    feedRateInput,
    "Feed rate must be greater than 0."
)) {
    valid = false;
}


if (!validatePositive(
    numberOfTeethInput,
    "Number of teeth must be greater than 0."
)) {
    valid = false;
}


if (!validatePositive(
    spindleSpeedInput,
    "Spindle speed must be greater than 0."
)) {
    valid = false;
}


if (!valid) {
    result.textContent = "—";
    return;
}


const feedRate =
    Number(feedRateInput.value.trim());

const numberOfTeeth =
    Number(numberOfTeethInput.value.trim());

const spindleSpeed =
    Number(spindleSpeedInput.value.trim());


const feedPerTooth =
    feedRate /
    (numberOfTeeth * spindleSpeed);


result.textContent =
    `${feedPerTooth.toFixed(3)} mm/tooth`;

}

/* ==================================================
Cutting Speed Calculator
================================================== */

function calculateCuttingSpeed() {
const diameterInput =
document.getElementById("cuttingDiameter");

const spindleSpeedInput =
    document.getElementById("cuttingSpindleSpeed");

const result =
    document.getElementById("cuttingResult");


clearInputError(diameterInput);
clearInputError(spindleSpeedInput);


let valid = true;


if (!validateRequired(diameterInput)) {
    valid = false;
}

if (!validateRequired(spindleSpeedInput)) {
    valid = false;
}


if (!valid) {
    result.textContent = "—";
    return;
}


if (!validatePositive(
    diameterInput,
    "Diameter must be greater than 0."
)) {
    valid = false;
}


if (!validatePositive(
    spindleSpeedInput,
    "Spindle speed must be greater than 0."
)) {
    valid = false;
}


if (!valid) {
    result.textContent = "—";
    return;
}


const diameter =
    Number(diameterInput.value.trim());

const spindleSpeed =
    Number(spindleSpeedInput.value.trim());


const cuttingSpeed =
    (Math.PI * diameter * spindleSpeed) /
    1000;


result.textContent =
    `${cuttingSpeed.toFixed(1)} m/min`;

}

/* ==================================================
Material Removal Rate Calculator
================================================== */

function calculateMRR() {
const widthOfCutInput =
document.getElementById("widthOfCut");

const depthOfCutInput =
    document.getElementById("depthOfCut");

const feedRateInput =
    document.getElementById("mrrFeedRate");

const result =
    document.getElementById("mrrResult");


clearInputError(widthOfCutInput);
clearInputError(depthOfCutInput);
clearInputError(feedRateInput);


let valid = true;


if (!validateRequired(widthOfCutInput)) {
    valid = false;
}

if (!validateRequired(depthOfCutInput)) {
    valid = false;
}

if (!validateRequired(feedRateInput)) {
    valid = false;
}


if (!valid) {
    result.textContent = "—";
    return;
}


if (!validatePositive(
    widthOfCutInput,
    "Width of cut must be greater than 0."
)) {
    valid = false;
}


if (!validatePositive(
    depthOfCutInput,
    "Depth of cut must be greater than 0."
)) {
    valid = false;
}


if (!validatePositive(
    feedRateInput,
    "Feed rate must be greater than 0."
)) {
    valid = false;
}


if (!valid) {
    result.textContent = "—";
    return;
}


const widthOfCut =
    Number(widthOfCutInput.value.trim());

const depthOfCut =
    Number(depthOfCutInput.value.trim());

const feedRate =
    Number(feedRateInput.value.trim());


const mrr =
    widthOfCut *
    depthOfCut *
    feedRate;


result.textContent =
    `${mrr.toFixed(0)} mm³/min`;

}

/* ==================================================
Drilling Parameters Calculator
================================================== */

function calculateDrillingParameters() {
const diameterInput =
document.getElementById("drillDiameter");

const cuttingSpeedInput =
    document.getElementById("drillCuttingSpeed");

const feedPerRevolutionInput =
    document.getElementById("drillFeedPerRevolution");

const spindleResult =
    document.getElementById("drillSpindleResult");

const feedResult =
    document.getElementById("drillFeedResult");


clearInputError(diameterInput);
clearInputError(cuttingSpeedInput);
clearInputError(feedPerRevolutionInput);


let valid = true;


if (!validateRequired(diameterInput)) {
    valid = false;
}

if (!validateRequired(cuttingSpeedInput)) {
    valid = false;
}

if (!validateRequired(feedPerRevolutionInput)) {
    valid = false;
}


if (!valid) {
    spindleResult.textContent = "—";
    feedResult.textContent = "—";
    return;
}


if (!validatePositive(
    diameterInput,
    "Drill diameter must be greater than 0."
)) {
    valid = false;
}


if (!validatePositive(
    cuttingSpeedInput,
    "Cutting speed must be greater than 0."
)) {
    valid = false;
}


if (!validatePositive(
    feedPerRevolutionInput,
    "Feed per revolution must be greater than 0."
)) {
    valid = false;
}


if (!valid) {
    spindleResult.textContent = "—";
    feedResult.textContent = "—";
    return;
}


const diameter =
    Number(diameterInput.value.trim());

const cuttingSpeed =
    Number(cuttingSpeedInput.value.trim());

const feedPerRevolution =
    Number(feedPerRevolutionInput.value.trim());


const spindleSpeed =
    (1000 * cuttingSpeed) /
    (Math.PI * diameter);


const feedRate =
    feedPerRevolution * spindleSpeed;


spindleResult.textContent =
    `${spindleSpeed.toFixed(0)} RPM`;

feedResult.textContent =
    `${feedRate.toFixed(0)} mm/min`;

}

/* ==================================================
Reset Functions
================================================== */

function resetSpindleSpeed() {
const diameter =
document.getElementById("diameter");

const cuttingSpeed =
    document.getElementById("cuttingSpeed");

diameter.value = "";
cuttingSpeed.value = "";

clearInputError(diameter);
clearInputError(cuttingSpeed);

document.getElementById("spindleResult").textContent = "—";

}

function resetFeedRate() {
const feedPerTooth =
document.getElementById("feedRatePerTooth");

const numberOfTeeth =
    document.getElementById("feedRateNumberOfTeeth");

const spindleSpeed =
    document.getElementById("feedRateSpindleSpeed");


feedPerTooth.value = "";
numberOfTeeth.value = "";
spindleSpeed.value = "";


clearInputError(feedPerTooth);
clearInputError(numberOfTeeth);
clearInputError(spindleSpeed);


document.getElementById("feedResult").textContent = "—";

}

function resetFeedPerTooth() {
const feedRate =
document.getElementById("fptFeedRate");

const numberOfTeeth =
    document.getElementById("fptNumberOfTeeth");

const spindleSpeed =
    document.getElementById("fptSpindleSpeed");


feedRate.value = "";
numberOfTeeth.value = "";
spindleSpeed.value = "";


clearInputError(feedRate);
clearInputError(numberOfTeeth);
clearInputError(spindleSpeed);


document.getElementById("feedPerToothResult").textContent = "—";

}

function resetCuttingSpeed() {
const diameter =
document.getElementById("cuttingDiameter");

const spindleSpeed =
    document.getElementById("cuttingSpindleSpeed");


diameter.value = "";
spindleSpeed.value = "";


clearInputError(diameter);
clearInputError(spindleSpeed);


document.getElementById("cuttingResult").textContent = "—";

}

function resetMRR() {
const widthOfCut =
document.getElementById("widthOfCut");

const depthOfCut =
    document.getElementById("depthOfCut");

const feedRate =
    document.getElementById("mrrFeedRate");


widthOfCut.value = "";
depthOfCut.value = "";
feedRate.value = "";


clearInputError(widthOfCut);
clearInputError(depthOfCut);
clearInputError(feedRate);


document.getElementById("mrrResult").textContent = "—";

}

function resetDrilling() {
const diameter =
document.getElementById("drillDiameter");

const cuttingSpeed =
    document.getElementById("drillCuttingSpeed");

const feedPerRevolution =
    document.getElementById("drillFeedPerRevolution");


diameter.value = "";
cuttingSpeed.value = "";
feedPerRevolution.value = "";


clearInputError(diameter);
clearInputError(cuttingSpeed);
clearInputError(feedPerRevolution);


document.getElementById("drillSpindleResult").textContent = "—";
document.getElementById("drillFeedResult").textContent = "—";

}
