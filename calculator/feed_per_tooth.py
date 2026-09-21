def calculate_feed_per_tooth(feed_rate, number_of_teeth, spindle_speed):
    """
    Calculate feed per tooth for CNC milling.

    Parameters:
        feed_rate (float): Feed rate in mm/min.
        number_of_teeth (int): Number of cutting teeth.
        spindle_speed (float): Spindle speed in RPM.

    Returns:
        float: Feed per tooth in mm/tooth.
    """

    if feed_rate <= 0:
        raise ValueError("Feed rate must be greater than zero.")

    if number_of_teeth <= 0:
        raise ValueError("Number of teeth must be greater than zero.")

    if spindle_speed <= 0:
        raise ValueError("Spindle speed must be greater than zero.")

    feed_per_tooth = feed_rate / (number_of_teeth * spindle_speed)

    return feed_per_tooth


if __name__ == "__main__":
    feed_rate = 320
    number_of_teeth = 4
    spindle_speed = 800

    feed_per_tooth = calculate_feed_per_tooth(
        feed_rate,
        number_of_teeth,
        spindle_speed
    )

    print(f"Feed Rate: {feed_rate} mm/min")
    print(f"Number of Teeth: {number_of_teeth}")
    print(f"Spindle Speed: {spindle_speed} RPM")
    print(f"Feed per Tooth: {feed_per_tooth:.3f} mm/tooth")
