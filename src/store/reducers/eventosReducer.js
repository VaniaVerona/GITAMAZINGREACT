import {createReducer} from "@reduxjs/toolkit";
import eventosActions from "../actions/eventosActions";

const initialState= []

const eventosReducer= createReducer(initialState, (builder)=>{
    return builder.addCase(eventosActions.get_eventos.fulfilled, (state, action)=>{
        
        return action.payload;
    });
});

export default eventosReducer;