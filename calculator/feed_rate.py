def calculate_feed_rate(feed_per_tooth, number_of_teeth, spindle_speed):
    """
    Calculate CNC milling feed rate.

    Parameters:
        feed_per_tooth (float): Feed per tooth in mm/tooth.
        number_of_teeth (int): Number of cutting teeth.
        spindle_speed (float): Spindle speed in RPM.

    Returns:
        float: Feed rate in mm/min.
    """

    if feed_per_tooth <= 0:
        raise ValueError("Feed per tooth must be greater than zero.")

    if number_of_teeth <= 0:
        raise ValueError("Number of teeth must be greater than zero.")

    if spindle_speed <= 0:
        raise ValueError("Spindle speed must be greater than zero.")

    feed_rate = feed_per_tooth * number_of_teeth * spindle_speed

    return feed_rate


if __name__ == "__main__":
    feed_per_tooth = 0.10
    number_of_teeth = 4
    spindle_speed = 800

    feed_rate = calculate_feed_rate(
        feed_per_tooth,
        number_of_teeth,
        spindle_speed
    )

    print(f"Feed per Tooth: {feed_per_tooth} mm/tooth")
    print(f"Number of Teeth: {number_of_teeth}")
    print(f"Spindle Speed: {spindle_speed} RPM")
    print(f"Feed Rate: {feed_rate:.0f} mm/min")
