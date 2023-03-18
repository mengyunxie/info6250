const state = {
  username: "",
  storedWord: "",
  updatedWord: ""
};

state.clear = function() {
  state.username = "";
  state.storedWord = "";
  state.updatedWord = "";
};

export default state;