import pytest

from calculator.cutting_speed import calculate_cutting_speed


def test_calculate_cutting_speed():
    result = calculate_cutting_speed(100, 800)

    assert result == pytest.approx(251.3274, rel=1e-3)


def test_cutting_speed_rejects_zero_diameter():
    with pytest.raises(ValueError):
        calculate_cutting_speed(0, 800)


def test_cutting_speed_rejects_zero_spindle_speed():
    with pytest.raises(ValueError):
        calculate_cutting_speed(100, 0)
