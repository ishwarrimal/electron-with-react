import { put, takeLatest, all } from "redux-saga/effects";

function* fetchWeatherDetails() {
  const json = yield fetch(
    "https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=53c11976204e6cfd8fb802db342e8f88"
  ).then(response => response.json());
  yield put({ type: "POPULATE_STORE_DATA", json: json });
}

function* apiCallWatcher() {
  yield takeLatest("MAKE_API_CALL", fetchWeatherDetails);
}
export default function* rootSaga() {
  yield all([apiCallWatcher()]);
}
