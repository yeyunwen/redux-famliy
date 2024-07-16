// @ts-check

export const actionType = {
  SET_STUDENTS: Symbol("SET_STUDENTS"),
  SET_IS_FETCHING: Symbol("SET_IS_FETCHING"),
};

export const createSetStudentsAction = (students) => {
  return {
    type: actionType.SET_STUDENTS,
    payload: students,
  };
};

export const createSetIsFetchingAction = (isFetching) => {
  return {
    type: actionType.SET_IS_FETCHING,
    payload: isFetching,
  };
};
export const createFetchStudentsAction = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(createSetStudentsAction(["张三", "李四", "王五"]));
        resolve(null);
      }, 1000);
    });
  };
};
