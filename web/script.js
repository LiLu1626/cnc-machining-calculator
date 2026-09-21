function calculateSpindleSpeed() {
    const diameterInput = document.getElementById("diameter");
    const cuttingSpeedInput = document.getElementById("cuttingSpeed");
    const result = document.getElementById("spindleResult");

    const diameterValue = diameterInput.value.trim();
    const cuttingSpeedValue = cuttingSpeedInput.value.trim();

    if (diameterValue === "" || cuttingSpeedValue === "") {
        result.textContent = "Please enter all required values.";
        return;
    }

    const diameter = Number(diameterValue);
    const cuttingSpeed = Number(cuttingSpeedValue);

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

    const feedPerToothValue =
        feedPerToothInput.value.trim();

    const numberOfTeethValue =
        numberOfTeethInput.value.trim();

    const spindleSpeedValue =
        spindleSpeedInput.value.trim();

    if (
        feedPerToothValue === "" ||
        numberOfTeethValue === "" ||
        spindleSpeedValue === ""
    ) {
        result.textContent =
            "Please enter all required values.";
        return;
    }

    const feedPerTooth = Number(feedPerToothValue);
    const numberOfTeeth = Number(numberOfTeethValue);
    const spindleSpeed = Number(spindleSpeedValue);

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

    const feedRateValue =
        feedRateInput.value.trim();

    const numberOfTeethValue =
        numberOfTeethInput.value.trim();

    const spindleSpeedValue =
        spindleSpeedInput.value.trim();

    if (
        feedRateValue === "" ||
        numberOfTeethValue === "" ||
        spindleSpeedValue === ""
    ) {
        result.textContent =
            "Please enter all required values.";
        return;
    }

    const feedRate = Number(feedRateValue);
    const numberOfTeeth = Number(numberOfTeethValue);
    const spindleSpeed = Number(spindleSpeedValue);

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

    const diameterValue =
        diameterInput.value.trim();

    const spindleSpeedValue =
        spindleSpeedInput.value.trim();

    if (
        diameterValue === "" ||
        spindleSpeedValue === ""
    ) {
        result.textContent =
            "Please enter all required values.";
        return;
    }

    const diameter = Number(diameterValue);
    const spindleSpeed = Number(spindleSpeedValue);

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

    const widthValue =
        widthOfCutInput.value.trim();

    const depthValue =
        depthOfCutInput.value.trim();

    const feedRateValue =
        feedRateInput.value.trim();

    if (
        widthValue === "" ||
        depthValue === "" ||
        feedRateValue === ""
    ) {
        result.textContent =
            "Please enter all required values.";
        return;
    }

    const widthOfCut = Number(widthValue);
    const depthOfCut = Number(depthValue);
    const feedRate = Number(feedRateValue);

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

    const diameterValue =
        diameterInput.value.trim();

    const cuttingSpeedValue =
        cuttingSpeedInput.value.trim();

    const feedPerRevolutionValue =
        feedPerRevolutionInput.value.trim();

    if (
        diameterValue === "" ||
        cuttingSpeedValue === "" ||
        feedPerRevolutionValue === ""
    ) {
        spindleResult.textContent =
            "Please enter all required values.";

        feedResult.textContent =
            "Please enter all required values.";

        return;
    }

    const diameter = Number(diameterValue);
    const cuttingSpeed = Number(cuttingSpeedValue);
    const feedPerRevolution =
        Number(feedPerRevolutionValue);

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

function resetSpindleSpeed() {
    document.getElementById("diameter").value = "";
    document.getElementById("cuttingSpeed").value = "";
    document.getElementById("spindleResult").textContent = "—";
}


function resetFeedRate() {
    document.getElementById("feedRatePerTooth").value = "";
    document.getElementById("feedRateNumberOfTeeth").value = "";
    document.getElementById("feedRateSpindleSpeed").value = "";
    document.getElementById("feedResult").textContent = "—";
}


function resetFeedPerTooth() {
    document.getElementById("fptFeedRate").value = "";
    document.getElementById("fptNumberOfTeeth").value = "";
    document.getElementById("fptSpindleSpeed").value = "";
    document.getElementById("feedPerToothResult").textContent = "—";
}


function resetCuttingSpeed() {
    document.getElementById("cuttingDiameter").value = "";
    document.getElementById("cuttingSpindleSpeed").value = "";
    document.getElementById("cuttingResult").textContent = "—";
}


function resetMRR() {
    document.getElementById("widthOfCut").value = "";
    document.getElementById("depthOfCut").value = "";
    document.getElementById("mrrFeedRate").value = "";
    document.getElementById("mrrResult").textContent = "—";
}


function resetDrilling() {
    document.getElementById("drillDiameter").value = "";
    document.getElementById("drillCuttingSpeed").value = "";
    document.getElementById("drillFeedPerRevolution").value = "";

    document.getElementById("drillSpindleResult").textContent = "—";
    document.getElementById("drillFeedResult").textContent = "—";
}
