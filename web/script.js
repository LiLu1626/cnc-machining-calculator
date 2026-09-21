function calculateSpindleSpeed() {
    const diameter = parseFloat(
        document.getElementById("diameter").value
    );

    const cuttingSpeed = parseFloat(
        document.getElementById("cuttingSpeed").value
    );

    if (diameter <= 0 || cuttingSpeed <= 0) {
        document.getElementById("spindleResult").textContent =
            "Enter valid values";
        return;
    }

    const spindleSpeed =
        (1000 * cuttingSpeed) / (Math.PI * diameter);

    document.getElementById("spindleResult").textContent =
        `${spindleSpeed.toFixed(0)} RPM`;
}


function calculateFeedRate() {
    const feedPerTooth = parseFloat(
        document.getElementById("feedPerTooth").value
    );

    const numberOfTeeth = parseFloat(
        document.getElementById("numberOfTeeth").value
    );

    const spindleSpeed = parseFloat(
        document.getElementById("feedSpindleSpeed").value
    );

    if (
        feedPerTooth <= 0 ||
        numberOfTeeth <= 0 ||
        spindleSpeed <= 0
    ) {
        document.getElementById("feedResult").textContent =
            "Enter valid values";
        return;
    }

    const feedRate =
        feedPerTooth * numberOfTeeth * spindleSpeed;

    document.getElementById("feedResult").textContent =
        `${feedRate.toFixed(0)} mm/min`;
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
