def calculate_mrr(width_of_cut, depth_of_cut, feed_rate):
    """
    Calculate Material Removal Rate (MRR) for CNC milling.

    Parameters:
        width_of_cut (float): Width of cut in mm.
        depth_of_cut (float): Depth of cut in mm.
        feed_rate (float): Feed rate in mm/min.

    Returns:
        float: Material Removal Rate in mm^3/min.
    """

    if width_of_cut <= 0:
        raise ValueError("Width of cut must be greater than zero.")

    if depth_of_cut <= 0:
        raise ValueError("Depth of cut must be greater than zero.")

    if feed_rate <= 0:
        raise ValueError("Feed rate must be greater than zero.")

    mrr = width_of_cut * depth_of_cut * feed_rate

    return mrr


if __name__ == "__main__":
    width_of_cut = 10
    depth_of_cut = 2
    feed_rate = 320

    mrr = calculate_mrr(
        width_of_cut,
        depth_of_cut,
        feed_rate
    )

    print(f"Width of Cut: {width_of_cut} mm")
    print(f"Depth of Cut: {depth_of_cut} mm")
    print(f"Feed Rate: {feed_rate} mm/min")
    print(f"Material Removal Rate: {mrr:.0f} mm^3/min")
