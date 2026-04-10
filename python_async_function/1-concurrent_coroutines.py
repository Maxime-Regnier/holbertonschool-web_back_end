#!/usr/bin/env python3
"""Module for executing multiple coroutines concurrently."""

import asyncio
from typing import List
<<<<<<< HEAD
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn wait_random n times and return delays in ascending order."""

=======
wait_random = __import__ ('0-basic_async_syntax').wait_random
async def wait_n (n: int, max_delay: int) -> List[float]:
>>>>>>> parent of a2c9e9c (fix(async-function): correct wait_n implementation in exercise 1)
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = []
    for completed_task in asyncio.as_completed(tasks):
        delay = await completed_task
        delays.append(delay)
    return sorted(delays)
