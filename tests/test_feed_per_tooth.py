import pytest

from calculator.feed_per_tooth import calculate_feed_per_tooth


def test_calculate_feed_per_tooth():
    result = calculate_feed_per_tooth(320, 4, 800)

    assert result == pytest.approx(0.10)


def test_feed_per_tooth_rejects_zero_feed_rate():
    with pytest.raises(ValueError):
        calculate_feed_per_tooth(0, 4, 800)


def test_feed_per_tooth_rejects_zero_number_of_teeth():
    with pytest.raises(ValueError):
        calculate_feed_per_tooth(320, 0, 800)


def test_feed_per_tooth_rejects_zero_spindle_speed():
    with pytest.raises(ValueError):
        calculate_feed_per_tooth(320, 4, 0)
