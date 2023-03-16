import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchItems, addItem, updateItem, deleteItem } from './cartAPI';

const initialState = {
  items: [],
  status: 'idle',
};


export const fetchItemsAsync = createAsyncThunk(
  'cart/fetchItems',
  async () => {
    const response = await fetchItems();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const addItemAsync = createAsyncThunk(
  'cart/addItem',
  async (item) => {
    const { id, title, brand, price, thumbnail } = item;
    const response = await addItem({ id, title, brand, price, thumbnail, quantity:1 });
    return response.data;
  }
);

export const deleteItemAsync = createAsyncThunk(
  'cart/deleteItem',
  async (id) => {
    await deleteItem(id);
    return id;
  }
);

export const updateItemAsync = createAsyncThunk(
  'cart/updateItem',
  async ({id, change}) => {
    const response = await updateItem(id, change);
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(addItemAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
      })
      .addCase(deleteItemAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item => item.id === action.payload);
        state.items.splice(index, 1);
      })
      .addCase(updateItemAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item => item.id === action.payload.id);
        state.items.splice(index, 1, action.payload);
      });
  },
});

// export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;
