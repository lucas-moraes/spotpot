const INITIAL_STATE = {
  token: [],
};

export default function favorite(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TOKEN':
      return {token: [action.title]};
    default:
      return state;
  }
}