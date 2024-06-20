import {useReducer, useContext, createContext} from 'react'
import {questionsList} from '../Model/question'

const Context = createContext();

export function useGlobalState(){
    return useContext(Context);
}

export const GlobalProvider = ({children}) =>{
    return (
        <Context.Provider value={{
            questionsList,
        }}>
            {children}
        </Context.Provider>
    )
}