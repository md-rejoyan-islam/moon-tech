const checkMiddleware = (store) => (next) => (action) => {
  //   console.log("getState", store.getState());
  //   console.log("Middleware triggered:", action);
  next(action);
};

export default checkMiddleware;
