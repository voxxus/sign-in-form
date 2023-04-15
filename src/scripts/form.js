export function renderRegisterForm() {
  const form = document.createElement('form');
  form.classList.add('form', 'form--register');

  form.innerHTML =
    `<h2 class="form__title">Register</h2>

    <div class="form__item-block">
      <label class="form__item">
        <input
          type="text"
          class="form__item-input form__item-input--register"
          name="fullName"
          placeholder="Full Name"
        >
        <div class="form__item-error">ss</div>
      </label>

      <label class="form__item">
        <input
          type="email"
          class="form__item-input form__item-input--register"
          name="email"
          placeholder="Email"
        >
        <div class="form__item-error">ss</div>
      </label>

      <label class="form__item">
        <input
          type="tel"
          class="form__item-input form__item-input--register"
          name="phoneNumber"
          placeholder="Phone"
        >
        <div class="form__item-error">ss</div>
      </label>

      <label class="form__item">
        <input
          type="password"
          class="form__item-input form__item-input--register"
          name="password"
          placeholder="Password"
        >
        <div class="form__item-error">ss</div>
      </label>

      <label class="form__item">
        <input
          type="password"
          class="form__item-input form__item-input--register"
          name="passwordConfirm"
          placeholder="Confirm Password"
        >
        <div class="form__item-error">ss</div>
      </label>
    </div>

    <div class="form__button-block">
      <button type="submit" class="form__button form__button--register">Register</button>
      <button type="button" class="form__button form__button--sign-in">Have account? Sign in</button>
    </div>`;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm();
  });

  form.querySelector('.form__button--sign-in').addEventListener('click', () => {
    const app = document.querySelector('#app');

    app.innerHTML = '';

    app.appendChild(renderLoginForm());
  });

  return form;
}

function renderLoginForm() {
  const form = document.createElement('form');
  form.classList.add('form', 'form--login');

  form.innerHTML =
    `<h2 class="form__title">Login</h2>

    <div class="form__item-block">
      <label class="form__item">
        <input
          type="text"
          class="form__item-input form__item-input--login"
          name="username"
          placeholder="Username"
        >
        <div class="form__item-error">ss</div>
      </label>

      <label class="form__item">
        <input
          type="password"
          class="form__item-input form__item-input--login"
          name="password"
          placeholder="Password"
        >
        <div class="form__item-error">ss</div>
      </label>
    </div>

    <div class="form__button-block form__button-block--login">
      <button type="submit" class="form__button form__button--login">Login</button>
    </div>`;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm();
  });

  return form;
}

function submitForm() {
  const inputs = document.querySelectorAll('.form__item-input');
  const form = {};

  inputs.forEach((input) => {
    form[input.name] = input.value;
  });

  console.log(form);
}
