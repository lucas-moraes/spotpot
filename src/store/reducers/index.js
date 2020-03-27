const INITIAL_STATE = {
  token: [],
  date: [],
};

export default function favorite(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TOKEN':
      return {token: [action.token], date: [action.date] };
    default:
      return state;
  }
}