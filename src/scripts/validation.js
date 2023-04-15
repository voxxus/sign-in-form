export function validateInputField(value, element) {
  const validationResult = { name: element.name };

  if (!value) return { ...validationResult, isValid: false, error: 'This field is required' };

  if (element.type === 'email') {
    return { ...validationResult, ...validateEmail(value) };
  }

  if (element.type === 'tel') {
    return { ...validationResult, ...validatePhoneNumber(value) };
  }

  if (element.type === 'password') {
    return { ...validationResult, ...validatePassword(value) };
  }

  return { ...validationResult, isValid: true, error: null };
}

function validateEmail(value) {
  //eslint-disable-next-line
  const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isValid = value.match(emailRegExp);

  return {
    isValid,
    error: isValid ? null : 'Incorrect email format',
  };
}

function validatePhoneNumber(number) {
  const phoneNumberRegExp = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

  const isValid = number.match(phoneNumberRegExp);

  return {
    isValid,
    error: isValid ? null : 'Incorrect phone number format',
  };
}

function validatePassword(password) {
  if (password.length < 5) return { isValid: false, error: 'Password must be longer than 5 characters'};

  return { isValid: true, error: null };
}

export function validateConfirmPassword(password, passwordConfirm) {
  return password === passwordConfirm;
}
