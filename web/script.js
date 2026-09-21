* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #f4f6f8;
    color: #1f2933;
    line-height: 1.6;
}


/* =========================
   Header
========================= */

header {
    text-align: center;
    padding: 60px 20px 45px;
    background: #ffffff;
    border-bottom: 1px solid #e1e5e9;
}

header h1 {
    font-size: 38px;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin-bottom: 10px;
}

header p {
    color: #667085;
    font-size: 16px;
}


/* =========================
   Calculator Layout
========================= */

main {
    width: min(1100px, 92%);
    margin: 45px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
}


/* =========================
   Calculator Card
========================= */

.calculator-card {
    background: #ffffff;
    padding: 32px;
    border-radius: 14px;
    border: 1px solid #e1e5e9;
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.05);

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.calculator-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.calculator-card h2 {
    font-size: 23px;
    font-weight: 700;
    margin-bottom: 25px;
}


/* =========================
   Input Groups
========================= */

.input-group {
    margin-bottom: 18px;
}

.input-group label {
    display: block;
    margin-bottom: 7px;
    font-size: 14px;
    font-weight: 600;
    color: #344054;
}

.input-group input {
    width: 100%;
    padding: 13px 14px;

    border: 1px solid #cbd2d9;
    border-radius: 8px;

    background: #ffffff;
    color: #1f2933;

    font-size: 16px;

    outline: none;

    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;
}

.input-group input:hover {
    border-color: #98a2b3;
}

.input-group input:focus {
    border-color: #344054;

    box-shadow:
        0 0 0 3px rgba(52, 64, 84, 0.08);
}


/* Remove number input arrows */

.input-group input::-webkit-outer-spin-button,
.input-group input::-webkit-inner-spin-button {
    margin: 0;
}


/* =========================
   Calculate Button
========================= */

button {
    width: 100%;

    padding: 13px;

    border: none;
    border-radius: 8px;

    background: #1f2933;
    color: #ffffff;

    font-size: 16px;
    font-weight: 600;

    cursor: pointer;

    transition:
        transform 0.2s ease,
        background 0.2s ease,
        box-shadow 0.2s ease;
}

button:hover {
    background: #111827;

    transform: translateY(-1px);

    box-shadow:
        0 4px 10px rgba(0, 0, 0, 0.15);
}

button:active {
    transform: translateY(0);
}


/* =========================
   Result
========================= */

.result {
    margin-top: 18px;

    padding: 15px 16px;

    background: #f4f6f8;

    border: 1px solid #e4e7ec;

    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 10px;
}

.result span {
    font-size: 14px;
    color: #667085;
}

.result strong {
    font-size: 18px;
    font-weight: 700;
    color: #1f2933;
}


/* =========================
   Footer
========================= */

footer {
    text-align: center;

    padding: 30px 20px 45px;

    color: #667085;

    font-size: 14px;
}


/* =========================
   Mobile
========================= */

@media (max-width: 700px) {

    header {
        padding: 40px 20px 30px;
    }

    header h1 {
        font-size: 30px;
    }

    header p {
        font-size: 15px;
    }

    main {
        width: 92%;

        margin-top: 30px;

        grid-template-columns: 1fr;

        gap: 20px;
    }

    .calculator-card {
        padding: 24px;
    }

    .calculator-card h2 {
        font-size: 21px;
    }

    .result {
        padding: 14px;
    }
}
