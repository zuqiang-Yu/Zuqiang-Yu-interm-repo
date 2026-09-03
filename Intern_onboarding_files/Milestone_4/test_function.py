import pytest
from function import calculate_discount


def test_standard_discount():
    assert calculate_discount(100, 20) == 80.0

def test_zero_discount():
    assert calculate_discount(100, 0) == 100.0

def test_full_discount():
    assert calculate_discount(100, 100) == 0.0

def test_decimal_price():
    assert calculate_discount(99.99, 10) == 89.99

def test_negative_price_raises_error():
    with pytest.raises(ValueError):
        calculate_discount(-50, 10)

def test_discount_over_100_raises_error():
    with pytest.raises(ValueError):
        calculate_discount(100, 110)