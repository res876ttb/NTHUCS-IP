// mainState.js
//  Main states.

// ============================================
// import

// ============================================
// functions

// ============================================
// constants
const initMainState = {
}

// ============================================
// reducer
export function main(state=initMainState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

// ============================================
// action
export function setMainState(type, obj) {
  return {
    type: type,
    obj: obj,
  };
}