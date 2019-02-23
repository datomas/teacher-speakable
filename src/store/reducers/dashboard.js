export default (state = { test: 1 }, { type, id, paylod }) => {
  switch (type) {
    case "TEST":
      return state;
    default:
      return state;
  }
};
