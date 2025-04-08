import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstance";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

// add product
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (newProduct, { rejectWithValue }) => {
    try {
      let res = await apiInstance.post("/.json", newProduct);
      console.log(res);
      return { ...newProduct, id: res.data.name };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// get product
export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (_, { rejectWithValue }) => {
    try {
      let res = await apiInstance.get("/.json");
      console.log(res.data);
      return Object.keys(res.data).map((key) => ({
        id: key,
        ...res.data[key],
      }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delete
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      await apiInstance.delete(`/${id}.json`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// update
export const updateProduct1 = createAsyncThunk(
  "products/updateProduct1",
  async (product, { rejectWithValue }) => {
    try {
      let obj = {
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.category,
      };
      await apiInstance.put(`/${product.id}.json`, obj);
      return product;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // add data
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // get data
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // delete data
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      })
      // update data
      .addCase(updateProduct1.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct1.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter((product) => {
          let { id, title, dsc, price } = action.payload;
          if (product.id == id) {
            product.title = title;
            product.price = price;
            product.image = image;
            product.category = category;
          }
          return product;
        });
      })
      .addCase(updateProduct1.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default productSlice.reducer;
