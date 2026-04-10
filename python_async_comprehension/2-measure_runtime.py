#!/usr/bin/env python3
"""Measure runtime for parallel async comprehensions."""

import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Return the runtime of four async comprehensions in parallel."""

    start_time = time.perf_counter()
    measure = [async_comprehension() for _ in range(4)]
    await asyncio.gather(*measure)
    end_time = time.perf_counter()
    return end_time - start_time
