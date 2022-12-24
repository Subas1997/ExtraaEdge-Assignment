import { put, select, takeLatest } from "redux-saga/effects";
import { USER_STORE_CONSTANTS } from "../helpers/store.constants";
import { selectUsers } from "./user.selector";
import { setUserData, setUsers } from "./user.slice";

function* setUsersFn(action) {
  try {
    yield put(setUsers(action.payload));
    return true;
  } catch (error) {
    return false;
  }
}
function* setUserDataFn(action) {
  try {
    yield put(setUserData(action.payload));
    return true;
  } catch (error) {
    return false;
  }
}

function* deleteUserFn(action) {
  try {
    const users = yield select(selectUsers);
    const userId = action.payload;
    yield put(setUsers(users.filter((user) => user.id !== userId)));
    return true;
  } catch (error) {
    return false;
  }
}

function* editUserFn(action) {
  try {
    const users = yield select(selectUsers);
    const updateUser = action.payload;
    yield put(
      setUsers(
        users.map((user) => (user.id === updateUser.id ? updateUser : user))
      )
    );
    return true;
  } catch (error) {
    return false;
  }
}

export default function* userSaga() {
  yield takeLatest(USER_STORE_CONSTANTS.GET_USERS, setUsersFn);
  yield takeLatest(USER_STORE_CONSTANTS.SET_USER_DATA, setUserDataFn);
  yield takeLatest(USER_STORE_CONSTANTS.DELETE_USER, deleteUserFn);
  yield takeLatest(USER_STORE_CONSTANTS.EDIT_USER, editUserFn);
}
