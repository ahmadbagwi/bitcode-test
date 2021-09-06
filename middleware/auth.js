/* eslint-disable */
// const auth = (context) => {
//   console.log(context.store.getters['users/isLogin']);
// }

// 
export default function({ store, redirect }) {
  // const state = JSON.parse(window.localStorage.getItem('vuex'));
  if(!store.state.user.loggedIn){
    return redirect('/')
  }
}
