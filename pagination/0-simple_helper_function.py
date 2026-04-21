#!/usr/bin/env python3
"""Module for pagination helper function"""


def index_range(page: int, page_size: int) -> tuple:
    """
        Returns a tuple of start and end indexes for pagination.

        Args:
            page: The page number (1-indexed)
            page_size: Number of items per page

        Returns:
            A tuple (start_index, end_index)
        """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
