import React, { createContext, useReducer } from 'react';

export const GlobalContext = createContext();

const initialState = {
  planets: [],
  spaceships: [],
  vehicles: [],
  loading: true
}

const reducer = (state, action) => {
  const {type, payload} = action;

  switch(type) {
    case 'SET_PLANETS':
      return {
        ...state,
        planets: payload,
        loading: false
      };
      case 'SET_SPACESHIPS':
        return {
          ...state,
          spaceships: payload,
          loading: false
        };
        case 'SET_VEHICLES':
          return {
            ...state,
            vehicles: payload,
            loading: false
          };
          case 'SET_LOADING':
          return {
            ...state,
            loading: true
          };
      default:
      return state;
  }
}

export const AppGlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  )
}