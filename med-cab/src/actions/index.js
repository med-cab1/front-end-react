import axiosWithAuth from "../components/axiosWithAuth";
import history from "../components/history";


export const USER_REGISTER_START = "USER_RREGISTER_START";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";
export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const ADD_REC_SUCCESS = "ADD_REC_SUCCESS";
export const ADD_REC_FAIL = "ADD_REC_FAIL";
export const USER_ADD_REC_SUCCESS = "USER_ADD_REC_SUCCESS";
export const USER_ADD_REC_FAIL = "USER_ADD_REC_FAIL";
export const FETCH_RECOMMENDATION_SUCCESS = "FETCH_RECOMMENDATION_SUCCESS";
export const FETCH_TRUCKS_SUCCESS = "FETCH_TRUCKS_SUCCESS";
export const FETCH_PREDICTION_SUCCESS ="FETCH_PREDICTION_SUCCESS";

export const userRegister = user => dispath => {
  dispath({ type: USER_REGISTER_START });
  console.log(user);

  axiosWithAuth()
    .post("/api/auth/register", {
      username: user.username,
      password: user.password
    })
    .then(res => {
      console.log(res.data);
      dispath({ type: USER_REGISTER_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.token);
      history.push("/login");
    })
    .catch(err => {
      dispath({
        type: USER_REGISTER_FAIL,
        payload: "All fields must be filled out"
      });
    });
};

export const userLogin = user => dispath => {
  dispath({ type: USER_LOGIN_START });

  axiosWithAuth()
    .post("/api/auth/login", {
      username: user.username,
      password: user.password
    })
    .then(res => {
      console.log(res.data);
      dispath({ type: USER_LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.token);
      history.push("/user/userform");
    })
    .catch(err => {
      dispath({
        type: USER_LOGIN_FAIL,
        payload: "Invalid username or password"
      });
    });
};

export const addRec = rec => dispatch => {
  axiosWithAuth()
    .post(`/api/users/cannabis/prediction`, rec.selectedCheckboxes)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_REC_SUCCESS, payload: res.data });
      history.push("/user/dashboard");
    })
    .catch(err => {
      console.log(err.message);
      dispatch({
        type: ADD_REC_FAIL,
        payload: "Error getting recommendations"
      });
    });
  };

 



export const fetchCanabisRecommendations = (url) => dispatch => {
  axiosWithAuth()
    .get(url)
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_RECOMMENDATION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

