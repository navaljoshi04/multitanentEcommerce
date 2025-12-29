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
            console.log("item aaya", item);
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
        incrementQty:(state,action)=>{
            const {id}= action.payload;
            const item= state.items.find((i)=>i.id == id);
            if(item) item.qty +=1; 
        },
        decrementQty:(state,action)=>{
            const {id}= action.payload;
            const item= state.items.find((i)=>i.id == id);
            if(item && item.qty>1) {
                item.qty-=1;
            }
        },
        clearQty:(state)=>{
            state.items=[];
        }
    }
});

export const {addToCart, updateQty,incrementQty, decrementQty,removeFromCart, clearQty}=cartSlice.actions;

export default cartSlice.reducer;