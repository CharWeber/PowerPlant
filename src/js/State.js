
  export const storeState = () => {
    let currentState = {};
    return (stateChangeFunction = (state) => state) => {
      // similar to the Feed VARfunction
      const newState = stateChangeFunction(currentState);
      currentState = { ...newState };
      return newState;
    };
  };
  
  export const stateControl = storeState();
  
  export const changeState = (prop) => {
    return (value) => {
      return (state) => ({
        ...state,
        [prop]: (state[prop] || 0) + value,
      });
    };
  };
  export const changeState2 = (prop, prop2) => {
    return (value) => {
      return (state) => ({
        ...state,
        [prop]: (state[prop] || 0) + value,
        [prop2]: (state[prop2] || 0) + value,
      });
    };
  };
  export const resetAllState = (prop, prop2, prop3) => {
      return (state) => ({
        ...state,
        [prop]: 0,
        [prop2]: 0,
        [prop3]: 0,
      });
  };