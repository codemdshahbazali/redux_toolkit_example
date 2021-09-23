import { createAsyncThunk } from '@reduxjs/toolkit';

export const counterApiData = createAsyncThunk(
  'counter/counterApiData',
  async () => {
    try {
      const response = await fetch(
        'https://fakestoreapi.com/products/categories'
      );
      const data = await response.json();
      return data;
    } catch (e) {
      throw new Error(e.message);
    }
  }
);
