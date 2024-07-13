const getRandomString = () => {
  return Math.random().toString(36).slice(2).split("").join(".");
};

const ActionTypes = {
  INIT: `@@redux/INIT${getRandomString()}`,
  PROBE_UNKNOWN_ACTION: () =>
    `@@redux/PROBE_UNKNOWN_ACTION${getRandomString()}`,
};

export default ActionTypes;
