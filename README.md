# CNC Machining Calculator

[![Python Tests](https://github.com/lilu1626/cnc-machining-calculator/actions/workflows/python-app.yml/badge.svg)](https://github.com/lilu1626/cnc-machining-calculator/actions/workflows/python-app.yml)
[![GitHub Pages](https://github.com/lilu1626/cnc-machining-calculator/actions/workflows/pages.yml/badge.svg)](https://github.com/lilu1626/cnc-machining-calculator/actions/workflows/pages.yml)
[![Python](https://img.shields.io/badge/Python-3.12-blue)](https://www.python.org/)
[![HTML](https://img.shields.io/badge/Web-HTML%2FCSS%2FJavaScript-orange)](https://developer.mozilla.org/)

Engineering calculators for CNC machining parameters, developed as a practical engineering tool and portfolio project.

## 🚀 Live Demo
Try the calculator directly in your browser:
👉 **https://lilu1626.github.io/cnc-machining-calculator/**

---

## Overview

The **CNC Machining Calculator** is a web-based and Python-based engineering tool for calculating common CNC machining parameters.

The project combines practical machining knowledge with software development to provide simple, transparent, and reusable engineering calculations.

It is designed for machining engineers, manufacturing engineers, CNC programmers, machinists, and anyone working with CNC machining processes.

---

## Features

The calculator currently supports:

* Spindle Speed
* Feed Rate
* Feed per Tooth
* Cutting Speed
* Material Removal Rate (MRR)
* Drilling Parameters

Each calculation is implemented as a reusable Python function and is also available through the web interface.

---

## Engineering Calculations

### 1. Spindle Speed

Calculates spindle speed from cutting speed and tool/workpiece diameter.

**Formula:**

```text
n = (1000 × Vc) / (π × D)
```

Where:

* `n` = Spindle speed (RPM)
* `Vc` = Cutting speed (m/min)
* `D` = Diameter (mm)

---

### 2. Feed Rate

Calculates milling feed rate from feed per tooth, number of teeth, and spindle speed.

**Formula:**

```text
F = fz × z × n
```

Where:

* `F` = Feed rate (mm/min)
* `fz` = Feed per tooth (mm/tooth)
* `z` = Number of cutting teeth
* `n` = Spindle speed (RPM)

---

### 3. Feed per Tooth

Calculates feed per tooth from feed rate, number of teeth, and spindle speed.

**Formula:**

```text
fz = F / (z × n)
```

Where:

* `fz` = Feed per tooth (mm/tooth)
* `F` = Feed rate (mm/min)
* `z` = Number of cutting teeth
* `n` = Spindle speed (RPM)

---

### 4. Cutting Speed

Calculates cutting speed from diameter and spindle speed.

**Formula:**

```text
Vc = (π × D × n) / 1000
```

Where:

* `Vc` = Cutting speed (m/min)
* `D` = Diameter (mm)
* `n` = Spindle speed (RPM)

---

### 5. Material Removal Rate

Calculates Material Removal Rate for milling.

**Formula:**

```text
MRR = ae × ap × F
```

Where:

* `MRR` = Material Removal Rate (mm³/min)
* `ae` = Width of cut (mm)
* `ap` = Depth of cut (mm)
* `F` = Feed rate (mm/min)

---

### 6. Drilling Parameters

The drilling calculator provides:

* Spindle speed
* Feed rate

Spindle speed is calculated using:

```text
n = (1000 × Vc) / (π × D)
```

Drilling feed rate is calculated using:

```text
F = fr × n
```

Where:

* `n` = Spindle speed (RPM)
* `Vc` = Cutting speed (m/min)
* `D` = Drill diameter (mm)
* `fr` = Feed per revolution (mm/rev)
* `F` = Feed rate (mm/min)

---

## Project Structure

```text
cnc-machining-calculator
│
├── README.md
│
├── calculator
│   ├── __init__.py
│   ├── spindle_speed.py
│   ├── feed_rate.py
│   ├── cutting_speed.py
│   ├── mrr.py
│   ├── feed_per_tooth.py
│   └── drilling.py
│
├── tests
│   ├── test_spindle_speed.py
│   ├── test_feed_rate.py
│   ├── test_cutting_speed.py
│   ├── test_mrr.py
│   ├── test_feed_per_tooth.py
│   └── test_drilling.py
│
├── web
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── .github
    └── workflows
        ├── python-app.yml
        └── pages.yml
```

---

## Technology Stack

### Engineering & Calculation

* Python 3.12
* Mathematical calculation functions
* Modular Python structure

### Testing

* pytest
* Automated unit testing
* Input validation testing

### Web

* HTML5
* CSS3
* JavaScript

### Development & Deployment

* GitHub
* GitHub Actions
* GitHub Pages

---

## Testing

The Python calculation modules are tested using `pytest`.

The test suite covers calculation accuracy and input validation.

Example:

```bash
pytest
```

GitHub Actions automatically runs the test suite when changes are pushed to the `main` branch.

This helps ensure that changes to the engineering calculation functions do not introduce unexpected errors.

---

## GitHub Pages Deployment

The web calculator is automatically deployed through GitHub Actions.

The deployment workflow publishes the contents of the `web` directory to GitHub Pages.

**Live Application:**

https://lilu1626.github.io/cnc-machining-calculator/

---

## Engineering Validation

The formulas used in this project are based on commonly used CNC machining relationships.

However, calculated values should be treated as engineering reference values.

Actual machining parameters should be validated according to factors such as:

* Workpiece material
* Cutting tool material and geometry
* Tool diameter
* Machine capability
* Machine rigidity
* Workholding conditions
* Depth of cut
* Width of cut
* Coolant conditions
* Tool manufacturer recommendations
* Machining process requirements

The calculator does not replace machine, tooling, or process-specific engineering judgment.

---

## Future Development

Planned improvements include:

* Reset buttons for individual calculators
* Improved input validation and error feedback
* Additional CNC turning calculations
* Additional drilling calculations
* Unit conversion tools
* More machining parameter calculations
* Expanded automated test coverage
* Additional engineering reference tools
* Improved mobile interface
* Additional documentation and examples

---

## Project Purpose

This project is part of my ongoing exploration of the intersection between:

* Mechanical Engineering
* CNC Machining
* Manufacturing Engineering
* Process Development
* Engineering Software
* Python
* Automation
* AI-assisted Engineering

The goal is to combine practical manufacturing experience with software development to create useful engineering tools.

---

## About Me

I am a **Machining Development Engineer** with more than 10 years of experience in advanced manufacturing, CNC machining, repair technologies, process development, machine integration, tooling and fixture development, and manufacturing engineering.

My technical interests include:

* CNC machining
* Machining process development
* CNC machine integration
* Manufacturing automation
* Engineering software
* Advanced manufacturing
* AI applications in engineering

---

## Connect

**Personal Website**
https://lilu1626.github.io/mywebsite_LiLu/

**LinkedIn**
https://www.linkedin.com/in/lu-li-29b464163/

**GitHub**
https://github.com/lilu1626

---

## Disclaimer

This project is provided for engineering reference, education, and software development purposes.

Machining parameters should always be verified against the specific machine, tooling, material, workholding conditions, and manufacturer recommendations before being used in an actual machining process.

---

**Developed by Li Lu**
Machining Development Engineer | Mechanical Engineering | CNC Machining
