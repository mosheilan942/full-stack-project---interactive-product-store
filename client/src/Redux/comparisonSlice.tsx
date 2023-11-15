import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getAllProduct } from '../api/cartFuncApi';
import { ProductType } from '../types/ProductTypes';



export interface Comparison {
    comparisonIndex: number;
    comparison: ProductType[] | null
}

const initialState: Comparison = {
    comparisonIndex: 5,
    comparison: null
}

export const comparisonSlice = createSlice({
    name: 'comparison',
    initialState,
    reducers: {
        addProductToComparison: (state, action: PayloadAction<any>) => {

            state.comparison?.push(action.payload)
            console.log(state.comparison);
        },
        
        incrementToComparison: (state,) => {
            state.comparisonIndex += 1
        },
        lessToComparison: (state,) => {
            if (state.comparisonIndex > 0) {
                state.comparisonIndex -= 1
            }

        },
    },
})

// Action creators are generated for each case reducer function
export const {  incrementToComparison, addProductToComparison, lessToComparison } = comparisonSlice.actions

export default comparisonSlice.reducer