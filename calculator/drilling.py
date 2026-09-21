import math


def calculate_drilling_speed(cutting_speed, diameter):
    """
    Calculate spindle speed for drilling.

    Parameters:
        cutting_speed (float): Cutting speed in m/min.
        diameter (float): Drill diameter in mm.

    Returns:
        float: Spindle speed in RPM.
    """

    if cutting_speed <= 0:
        raise ValueError("Cutting speed must be greater than zero.")

    if diameter <= 0:
        raise ValueError("Drill diameter must be greater than zero.")

    spindle_speed = (1000 * cutting_speed) / (math.pi * diameter)

    return spindle_speed


def calculate_drilling_feed(feed_per_revolution, spindle_speed):
    """
    Calculate drilling feed rate.

    Parameters:
        feed_per_revolution (float): Feed per revolution in mm/rev.
        spindle_speed (float): Spindle speed in RPM.

    Returns:
        float: Feed rate in mm/min.
    """

    if feed_per_revolution <= 0:
        raise ValueError("Feed per revolution must be greater than zero.")

    if spindle_speed <= 0:
        raise ValueError("Spindle speed must be greater than zero.")

    feed_rate = feed_per_revolution * spindle_speed

    return feed_rate


if __name__ == "__main__":
    diameter = 20
    cutting_speed = 25
    feed_per_revolution = 0.20

    spindle_speed = calculate_drilling_speed(
        cutting_speed,
        diameter
    )

    feed_rate = calculate_drilling_feed(
        feed_per_revolution,
        spindle_speed
    )

    print(f"Drill Diameter: {diameter} mm")
    print(f"Cutting Speed: {cutting_speed} m/min")
    print(f"Spindle Speed: {spindle_speed:.0f} RPM")
    print(f"Feed per Revolution: {feed_per_revolution} mm/rev")
    print(f"Feed Rate: {feed_rate:.0f} mm/min")
