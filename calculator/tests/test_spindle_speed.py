import pytest

from calculator.spindle_speed import calculate_spindle_speed

def test_calculate_spindle_speed():
result = calculate_spindle_speed(100, 150)

```
assert result == pytest.approx(477.46, rel=1e-3)
```

def test_spindle_speed_rejects_zero_diameter():
with pytest.raises(ValueError):
calculate_spindle_speed(0, 150)

def test_spindle_speed_rejects_zero_cutting_speed():
with pytest.raises(ValueError):
calculate_spindle_speed(100, 0)
