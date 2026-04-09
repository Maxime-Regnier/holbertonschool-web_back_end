#!/usr/bin/env python3
import asyncio
from typing import List
from 0-basic_async_syntax import wait_random
async def wait_n (n: int, max_delay: int) -> List[float]:
    tasks = [wait_random(max_dalay) for _ in range(n)]
    for completed_task in asyncio.as_completed(tasks):
        delay = await completed_task
        delays = []
        for completed_task in asyncio.as_completed(tasks):
            delay = await completed_task
            delays.append(delay)
            return delays