import pytest

from calculator.feed_rate import calculate_feed_rate


def test_calculate_feed_rate():
    result = calculate_feed_rate(0.10, 4, 800)

    assert result == pytest.approx(320.0)


def test_feed_rate_rejects_zero_feed_per_tooth():
    with pytest.raises(ValueError):
        calculate_feed_rate(0, 4, 800)


def test_feed_rate_rejects_zero_number_of_teeth():
    with pytest.raises(ValueError):
        calculate_feed_rate(0.10, 0, 800)


def test_feed_rate_rejects_zero_spindle_speed():
    with pytest.raises(ValueError):
        calculate_feed_rate(0.10, 4, 0)
