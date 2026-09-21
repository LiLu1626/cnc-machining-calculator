import math

def calculate_spindle_speed(cutting_speed, diameter):
"""
Calculate spindle speed for CNC machining.

```
Parameters:
    cutting_speed (float): Cutting speed in m/min.
    diameter (float): Tool or workpiece diameter in mm.

Returns:
    float: Spindle speed in RPM.
"""

if cutting_speed <= 0:
    raise ValueError("Cutting speed must be greater than zero.")

if diameter <= 0:
    raise ValueError("Diameter must be greater than zero.")

spindle_speed = (1000 * cutting_speed) / (math.pi * diameter)

return spindle_speed
```

if **name** == "**main**":
diameter = 100
cutting_speed = 150

```
rpm = calculate_spindle_speed(cutting_speed, diameter)

print(f"Diameter: {diameter} mm")
print(f"Cutting Speed: {cutting_speed} m/min")
print(f"Spindle Speed: {rpm:.0f} RPM")
```
