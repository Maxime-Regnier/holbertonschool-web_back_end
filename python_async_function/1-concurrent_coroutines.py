#!/usr/bin/env python3
import asyncio
from typing import List
<<<<<<< HEAD
wait_random = __import__ ('0-basic_async_syntax').wait_random
async def wait_n (n: int, max_delay: int) -> List[float]:
=======
wait_random = __import__('0-basic_async_syntax').wait_random
async def wait_n(n: int, max_delay: int) -> List[float]:
>>>>>>> a41202b (fix(async-function): correct wait_n implementation in exercise 1)
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = []
    for completed_task in asyncio.as_completed(tasks):
        delay = await completed_task
        delays.append(delay)
    return sorted(delays)