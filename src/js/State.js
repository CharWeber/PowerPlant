export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = (state) => state) => {
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

export const changeStateString = (prop) => {
  return (string) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || "") + string,
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
export const resetAllState = (prop, prop2, prop3, prop4) => {
  return (state) => ({
    ...state,
    [prop]: "",
    [prop2]: 0,
    [prop3]: 0,
    [prop4]: 0,
  });
};
