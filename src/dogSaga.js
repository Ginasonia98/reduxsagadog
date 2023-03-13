import { call, put, takeEvery } from "redux-saga/effects";
import { getDogsSuccess } from "./dogState";

function* workgetDogsFetch() {
  const dogs = yield call(() => fetch("https://api.thedogapi.com/v1/breeds"));
  const formattedDogs = yield dogs.json();
  for (let data of formattedDogs) {
    console.log(data.reference_image_id);
    if (data.reference_image_id) {
      const imageData = yield call(() =>
        fetch(`https://api.thedogapi.com/v1/images/${data.reference_image_id}`)
      );
      const image = yield imageData.json();
      data.image_url = image.url;
    }
  }
  const formattedDogsShortened = formattedDogs.slice(0, 100);
  yield put(getDogsSuccess(formattedDogsShortened));
}

function* dogSaga() {
  yield takeEvery("dogs/getDogsFetch", workgetDogsFetch);
}

export default dogSaga;
