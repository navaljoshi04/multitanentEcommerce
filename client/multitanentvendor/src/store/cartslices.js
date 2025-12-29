import { createSlice } from "@reduxjs/toolkit";


const initialState={
    items:[]
};


const cartSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const item= action.payload;
            const existingItem= state.items.find((i)=>i.id==item.id);
            if(existingItem){
                existingItem.qty += item.qty;
            }else{
                state.items.push(item);
            }
        },
        removeFromCart:(state, action)=>{
            state.items= state.items.filter((i)=>i.id !== action.payload.id);
        },
        updateQty:(state, action)=>{
            const {id, qty}=action.payload;
            const item=state.items.find((i)=>i.id == id);
            if(item) item.qty= qty;
        },
        clearQty:(state)=>{
            state.items=[];
        }
    }
});

export const {addToCart, updateQty,removeFromCart, clearQty}=cartSlice.actions;

export default cartSlice.reducer;