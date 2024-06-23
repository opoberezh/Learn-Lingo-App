export const selectTeachers = (state) => state.teachers.items;
export const selectAllTeachers = (state) => state.teachers.allItems; 
export const selectIsLoading = (state) => state.teachers.isLoading;
export const selectError = (state) => state.teachers.error;
export const selectTotalCount = (state) => state.teachers.totalCount;
