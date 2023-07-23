import Validator from './Validator.js'

Validator({
    form: "#form-id",
    isTicks: [
      Validator.isTick(["#men", "#women"]),
      Validator.isTick(["#book", "#tour", "#music","#food", "#note"]),
    ],
    selects: [
      Validator.isSelect('.form-tick')
    ],
    rules: [
      Validator.isRequire("#date"),
      Validator.isRequire("#fullname"),
      Validator.isEmail("#email"),
      Validator.isPhoneNumber("#code"),
      // Validator.isMinLength("#textarea", 5),
    ],
  });