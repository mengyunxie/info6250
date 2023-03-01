const state = {
  username: "",
  storedWord: ""
};

state.clear = function() {
  state.username = "";
  state.storedWord = "";
};

export default state;