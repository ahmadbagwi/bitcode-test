export const state = () => ({
  user: {},
  token: '',
  loggedIn: false
});

export const mutations = {
  login(state, user) {
    state.user = user.user;
    state.token = user.token;
    state.loggedIn = true;
  },
  logout(state) {
    state.user = {};
    state.token = '';
    state.loggedIn = false;
  }
};

export const getters = {
  currentUser(state) {
    return state.user;
  },
  userToken(state) {
    return state.token;
  },
  isLogin(state) {
    return state.loggedIn;
  }
};
