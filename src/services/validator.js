export function validation(value, type) {
  let isValid = true;
  let errorMessage = '';

  if (type.required && isValid) {
    isValid = value !== '';
    errorMessage = 'Обязательно для заполнения';
  } 

  if (type.minLength && isValid) {
    isValid = value.length >= type.minLength && isValid
    errorMessage = `Минимальная длина ${type.minLength} символов`
  }

  if (type.URL && isValid) {
    function is_url(value)
     {
        const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
      
        if (regexp.test(value)) {
          return true;
        } else {
            return false;
        }
      }
      isValid = is_url(value) && isValid
      errorMessage = `Неверный URL (пример: http://www.example.com или www.example.com)`
  }

  if (isValid || !type) {
    errorMessage = '';
  }

  return { isValid, errorMessage };
}
