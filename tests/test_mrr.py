import pytest

from calculator.mrr import calculate_mrr


def test_calculate_mrr():
    result = calculate_mrr(10, 2, 320)

    assert result == pytest.approx(6400.0)


def test_mrr_rejects_zero_width_of_cut():
    with pytest.raises(ValueError):
        calculate_mrr(0, 2, 320)


def test_mrr_rejects_zero_depth_of_cut():
    with pytest.raises(ValueError):
        calculate_mrr(10, 0, 320)


def test_mrr_rejects_zero_feed_rate():
    with pytest.raises(ValueError):
        calculate_mrr(10, 2, 0)
