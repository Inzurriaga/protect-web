export const personnels = (state = [], action) => {
  switch(action.type) {
    case "UPDATE_PERSONNELS":
      return action.personnels
    default:
      return state;
  }
}