export default (state = { test: 1 }, { type, id, payload }) => {
  switch (type) {
    case "TEST":
      return state;
    default:
      return state;
  }
};
