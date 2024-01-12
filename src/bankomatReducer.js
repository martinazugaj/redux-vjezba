export default function bankomatReducer(state = { money: 10000 }, action) {
  switch (action.type) {
    case "INC":
      return {
        money: state.money + 2000,
      };
    case "DEC":
      return {
        money: state.money - Number(action.value),
      };
    case "RESET":
      return {
        money: 10000,
      };
    default:
      return state;
  }
}
