
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => {
  console.log('selectUser:', state.auth.user);
  return state.auth.user;
};
export const selectIsRefreshing = (state) => state.auth.isRefreshing;


export const selectTeachersCard = (state) => state.teachers.items;