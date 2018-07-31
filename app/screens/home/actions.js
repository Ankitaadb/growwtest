import { api } from '../../appConfig/API/api'
import { SAVE_IMAGES, SAVE_SELECTED_IMAGE, RESET_IMAGES, SAVE_AUTH_CODE } from './constants';


export const authorize = () => dispatch => {
  var params = {
    client_id: 'b3bec-32f01-0bb70-01516-746e4-07701',
    client_secret: 'ebc13-fa923-aa560-3b393-53956-9d42d',
    code: 'test',
    grant_type: 'client_credentials',
  };

  var formBody = [];
for (var property in params) {
  var encodedKey = encodeURIComponent(property);
  var encodedValue = encodeURIComponent(params[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");
  api({
    absoluteUrl: 'https://api.shutterstock.com/v2/oauth/access_token',
    method: 'POST',
    data: formBody,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    }
  })
    .then(data => {
      dispatch({
        type: SAVE_AUTH_CODE,
        authCode: data.access_token
      });
    })
    .catch(() => {
      dispatch({
        type: SAVE_AUTH_CODE,
        authCode: ''
      });
    });
};

export const fetchImages = (keyword, pageNumber, authCode) => dispatch => {
  api({
    absoluteUrl: 'https://api.shutterstock.com/v2/images/search?query=' + keyword + '&page=' + pageNumber,
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + authCode,
    }
  })
    .then(data => {
      if (data.data) {
        dispatch({
          type: SAVE_IMAGES,
          images: data.data
        });
      }
    })
    .catch(() => {
      dispatch({
        type: SAVE_IMAGES,
        images: []
      });
    });
};

export const saveSelectedImage = selectedImage => dispatch => {
  dispatch({
    type: SAVE_SELECTED_IMAGE,
    selectedImage
  });
}

export const resetImages = () => dispatch => {
  dispatch({
    type: RESET_IMAGES
  });
}