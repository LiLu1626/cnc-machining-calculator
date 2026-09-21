import pytest

from calculator.drilling import (
    calculate_drilling_speed,
    calculate_drilling_feed,
)


def test_calculate_drilling_speed():
    result = calculate_drilling_speed(25, 20)

    assert result == pytest.approx(397.887, rel=1e-3)


def test_drilling_speed_rejects_zero_cutting_speed():
    with pytest.raises(ValueError):
        calculate_drilling_speed(0, 20)


def test_drilling_speed_rejects_zero_diameter():
    with pytest.raises(ValueError):
        calculate_drilling_speed(25, 0)


def test_calculate_drilling_feed():
    result = calculate_drilling_feed(0.20, 400)

    assert result == pytest.approx(80.0)


def test_drilling_feed_rejects_zero_feed_per_revolution():
    with pytest.raises(ValueError):
        calculate_drilling_feed(0, 400)


def test_drilling_feed_rejects_zero_spindle_speed():
    with pytest.raises(ValueError):
        calculate_drilling_feed(0.20, 0)
