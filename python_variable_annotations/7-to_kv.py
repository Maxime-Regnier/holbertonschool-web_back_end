#!/usr/bin/env python3
"""Module that contains the to_kv function"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Returns a tuple with string k and the square of v as float"""
    return (k, v ** 2)
