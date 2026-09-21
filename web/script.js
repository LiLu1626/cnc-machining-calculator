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
        feedPerToothInput.value === "" ||
        numberOfTeethInput.value === "" ||
        spindleSpeedInput.value === ""
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
    const feedRate = parseFloat(
        document.getElementById("fptFeedRate").value
    );

    const numberOfTeeth = parseFloat(
        document.getElementById("fptNumberOfTeeth").value
    );

    const spindleSpeed = parseFloat(
        document.getElementById("fptSpindleSpeed").value
    );

    if (
        feedRate <= 0 ||
        numberOfTeeth <= 0 ||
        spindleSpeed <= 0
    ) {
        document.getElementById("feedPerToothResult").textContent =
            "Enter valid values";
        return;
    }

    const feedPerTooth =
        feedRate / (numberOfTeeth * spindleSpeed);

    document.getElementById("feedPerToothResult").textContent =
        `${feedPerTooth.toFixed(3)} mm/tooth`;
}


function calculateCuttingSpeed() {
    const diameter = parseFloat(
        document.getElementById("cuttingDiameter").value
    );

    const spindleSpeed = parseFloat(
        document.getElementById("cuttingSpindleSpeed").value
    );

    if (diameter <= 0 || spindleSpeed <= 0) {
        document.getElementById("cuttingResult").textContent =
            "Enter valid values";
        return;
    }

    const cuttingSpeed =
        (Math.PI * diameter * spindleSpeed) / 1000;

    document.getElementById("cuttingResult").textContent =
        `${cuttingSpeed.toFixed(1)} m/min`;
}


function calculateMRR() {
    const widthOfCut = parseFloat(
        document.getElementById("widthOfCut").value
    );

    const depthOfCut = parseFloat(
        document.getElementById("depthOfCut").value
    );

    const feedRate = parseFloat(
        document.getElementById("mrrFeedRate").value
    );

    if (
        widthOfCut <= 0 ||
        depthOfCut <= 0 ||
        feedRate <= 0
    ) {
        document.getElementById("mrrResult").textContent =
            "Enter valid values";
        return;
    }

    const mrr =
        widthOfCut * depthOfCut * feedRate;

    document.getElementById("mrrResult").textContent =
        `${mrr.toFixed(0)} mm³/min`;
}


function calculateDrillingParameters() {
    const diameter = parseFloat(
        document.getElementById("drillDiameter").value
    );

    const cuttingSpeed = parseFloat(
        document.getElementById("drillCuttingSpeed").value
    );

    const feedPerRevolution = parseFloat(
        document.getElementById("drillFeedPerRevolution").value
    );

    if (
        diameter <= 0 ||
        cuttingSpeed <= 0 ||
        feedPerRevolution <= 0
    ) {
        document.getElementById("drillSpindleResult").textContent =
            "Enter valid values";

        document.getElementById("drillFeedResult").textContent =
            "Enter valid values";

        return;
    }

    const spindleSpeed =
        (1000 * cuttingSpeed) / (Math.PI * diameter);

    const feedRate =
        feedPerRevolution * spindleSpeed;

    document.getElementById("drillSpindleResult").textContent =
        `${spindleSpeed.toFixed(0)} RPM`;

    document.getElementById("drillFeedResult").textContent =
        `${feedRate.toFixed(0)} mm/min`;
}
