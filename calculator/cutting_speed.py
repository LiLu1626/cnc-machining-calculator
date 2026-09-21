import math


def calculate_cutting_speed(diameter, spindle_speed):
    """
    Calculate cutting speed for CNC machining.

    Parameters:
        diameter (float): Tool or workpiece diameter in mm.
        spindle_speed (float): Spindle speed in RPM.

    Returns:
        float: Cutting speed in m/min.
    """

    if diameter <= 0:
        raise ValueError("Diameter must be greater than zero.")

    if spindle_speed <= 0:
        raise ValueError("Spindle speed must be greater than zero.")

    cutting_speed = (math.pi * diameter * spindle_speed) / 1000

    return cutting_speed


if __name__ == "__main__":
    diameter = 100
    spindle_speed = 800

    cutting_speed = calculate_cutting_speed(
        diameter,
        spindle_speed
    )

    print(f"Diameter: {diameter} mm")
    print(f"Spindle Speed: {spindle_speed} RPM")
    print(f"Cutting Speed: {cutting_speed:.1f} m/min")
