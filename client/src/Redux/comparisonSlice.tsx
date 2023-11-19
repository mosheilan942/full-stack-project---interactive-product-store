import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
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
        addProductToComparison: (state, action: PayloadAction<ProductType>) => {

            state.comparison?.push(action.payload)
        },
        
        incrementToComparison: (state, action: PayloadAction<ProductType>) => {
            if (state.comparison) {
                const indextoproduct = state.comparison.findIndex((item) => item._id === action.payload._id)
                if ( indextoproduct < 0 ){
                    state.comparison?.push(action.payload)
                }
            }else{
                state.comparison = [action.payload]
            }

    
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