
function calculateSpindleSpeed() {
    const diameterInput = document.getElementById("diameter");
    const cuttingSpeedInput = document.getElementById("cuttingSpeed");
    const result = document.getElementById("spindleResult");
    
    const diameter = parseFloat(diameterInput.value);
    const cuttingSpeed = parseFloat(cuttingSpeedInput.value);

    if (diameterInput.value === "" || cuttingSpeedInput.value === "") {
        result.textContent = "Please enter all required values.";
        return;
    }

    if (diameter <= 0) {
        result.textContent = "Diameter must be greater than 0.";
        return;
    }

    if (cuttingSpeed <= 0) {
        result.textContent = "Cutting speed must be greater than 0.";
        return;
    }

    const spindleSpeed =
        (1000 * cuttingSpeed) / (Math.PI * diameter);

    result.textContent =
        `${spindleSpeed.toFixed(0)} RPM`;
}


function calculateFeedRate() {
    const feedPerToothInput =
        document.getElementById("feedRatePerTooth");

    const numberOfTeethInput =
        document.getElementById("feedRateNumberOfTeeth");

    const spindleSpeedInput =
        document.getElementById("feedRateSpindleSpeed");

    const result =
        document.getElementById("feedResult");

    const feedPerTooth =
        parseFloat(feedPerToothInput.value);

    const numberOfTeeth =
        parseFloat(numberOfTeethInput.value);

    const spindleSpeed =
        parseFloat(spindleSpeedInput.value);

    if (
        !Number.isFinite(feedPerTooth) ||
        !Number.isFinite(numberOfTeeth) ||
        !Number.isFinite(spindleSpeed)
    ) {
        result.textContent =
            "Please enter all required values.";
        return;
    }

    if (feedPerTooth <= 0) {
        result.textContent =
            "Feed per tooth must be greater than 0.";
        return;
    }

    if (numberOfTeeth <= 0) {
        result.textContent =
            "Number of teeth must be greater than 0.";
        return;
    }

    if (spindleSpeed <= 0) {
        result.textContent =
            "Spindle speed must be greater than 0.";
        return;
    }

    const feedRate =
        feedPerTooth * numberOfTeeth * spindleSpeed;

    result.textContent =
        `${feedRate.toFixed(0)} mm/min`;
}


function calculateFeedPerTooth() {
    const feedRateInput =
        document.getElementById("fptFeedRate");

    const numberOfTeethInput =
        document.getElementById("fptNumberOfTeeth");

    const spindleSpeedInput =
        document.getElementById("fptSpindleSpeed");

    const result =
        document.getElementById("feedPerToothResult");

    const feedRate =
        parseFloat(feedRateInput.value);

    const numberOfTeeth =
        parseFloat(numberOfTeethInput.value);

    const spindleSpeed =
        parseFloat(spindleSpeedInput.value);

    if (
        !Number.isFinite(feedRate) ||
        !Number.isFinite(numberOfTeeth) ||
        !Number.isFinite(spindleSpeed)
    ) {
        result.textContent =
            "Please enter all required values.";
        return;
    }

    if (feedRate <= 0) {
        result.textContent =
            "Feed rate must be greater than 0.";
        return;
    }

    if (numberOfTeeth <= 0) {
        result.textContent =
            "Number of teeth must be greater than 0.";
        return;
    }

    if (spindleSpeed <= 0) {
        result.textContent =
            "Spindle speed must be greater than 0.";
        return;
    }

    const feedPerTooth =
        feedRate / (numberOfTeeth * spindleSpeed);

    result.textContent =
        `${feedPerTooth.toFixed(3)} mm/tooth`;
}


function calculateCuttingSpeed() {
    const diameterInput =
        document.getElementById("cuttingDiameter");

    const spindleSpeedInput =
        document.getElementById("cuttingSpindleSpeed");

    const result =
        document.getElementById("cuttingResult");

    const diameter =
        parseFloat(diameterInput.value);

    const spindleSpeed =
        parseFloat(spindleSpeedInput.value);

    if (
        !Number.isFinite(diameter) ||
        !Number.isFinite(spindleSpeed)
    ) {
        result.textContent =
            "Please enter all required values.";
        return;
    }

    if (diameter <= 0) {
        result.textContent =
            "Diameter must be greater than 0.";
        return;
    }

    if (spindleSpeed <= 0) {
        result.textContent =
            "Spindle speed must be greater than 0.";
        return;
    }

    const cuttingSpeed =
        (Math.PI * diameter * spindleSpeed) / 1000;

    result.textContent =
        `${cuttingSpeed.toFixed(1)} m/min`;
}


function calculateMRR() {
    const widthOfCutInput =
        document.getElementById("widthOfCut");

    const depthOfCutInput =
        document.getElementById("depthOfCut");

    const feedRateInput =
        document.getElementById("mrrFeedRate");

    const result =
        document.getElementById("mrrResult");

    const widthOfCut =
        parseFloat(widthOfCutInput.value);

    const depthOfCut =
        parseFloat(depthOfCutInput.value);

    const feedRate =
        parseFloat(feedRateInput.value);

    if (
        !Number.isFinite(widthOfCut) ||
        !Number.isFinite(depthOfCut) ||
        !Number.isFinite(feedRate)
    ) {
        result.textContent =
            "Please enter all required values.";
        return;
    }

    if (widthOfCut <= 0) {
        result.textContent =
            "Width of cut must be greater than 0.";
        return;
    }

    if (depthOfCut <= 0) {
        result.textContent =
            "Depth of cut must be greater than 0.";
        return;
    }

    if (feedRate <= 0) {
        result.textContent =
            "Feed rate must be greater than 0.";
        return;
    }

    const mrr =
        widthOfCut * depthOfCut * feedRate;

    result.textContent =
        `${mrr.toFixed(0)} mm³/min`;
}


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

    const diameter =
        parseFloat(diameterInput.value);

    const cuttingSpeed =
        parseFloat(cuttingSpeedInput.value);

    const feedPerRevolution =
        parseFloat(feedPerRevolutionInput.value);

    if (
        !Number.isFinite(diameter) ||
        !Number.isFinite(cuttingSpeed) ||
        !Number.isFinite(feedPerRevolution)
    ) {
        spindleResult.textContent =
            "Please enter all required values.";

        feedResult.textContent =
            "Please enter all required values.";

        return;
    }

    if (diameter <= 0) {
        spindleResult.textContent =
            "Drill diameter must be greater than 0.";

        feedResult.textContent =
            "Check drill diameter.";

        return;
    }

    if (cuttingSpeed <= 0) {
        spindleResult.textContent =
            "Cutting speed must be greater than 0.";

        feedResult.textContent =
            "Check cutting speed.";

        return;
    }

    if (feedPerRevolution <= 0) {
        spindleResult.textContent =
            "Check input values.";

        feedResult.textContent =
            "Feed per revolution must be greater than 0.";

        return;
    }

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
