startApp();

const themes = {
    light: {
        '--form-background': '#FFFFFF',
        '--form-title': '#252EFF',
        '--input-border': '#6066FF',
        '--input-border-focused': '#000000',
        '--input-text': '#000000',
        '--button-text-focused': '#FFFFFF',
        '--button-focused': '#000000',
        '--login-button': '#252EFF',
        '--register-button': '#8B54FF',
        '--sign-in-button': '#6066FF',
    },

    dark: {
        '--form-background': '#121212',
        '--form-title': '#FFFFFF',
        '--input-border': '#BB86FC',
        '--input-border-focused': '#FFFFFF',
        '--input-text': '#FFFFFF',
        '--button-text-focused': '#000000',
        '--button-focused': '#FFFFFF',
        '--login-button': '#BB86FC',
        '--register-button': '#6200EE',
        '--sign-in-button': '#3700B3',
    },

    setDarkMode() {
        const root = document.querySelector(':root');

        Object.entries(this.dark).forEach((variable) => {
            root.style.setProperty(variable[0], variable[1]);
        });
    },

    setLightMode() {
        const root = document.querySelector(':root');

        Object.entries(this.light).forEach((variable) => {
            root.style.setProperty(variable[0], variable[1]);
        });
    }
};


document.themes = themes;


function startApp() {
    const app = document.querySelector('#app');

    app.appendChild(renderRegisterForm());
}

function renderRegisterForm() {
    const form = document.createElement('form');
    form.classList.add('form', 'form--register');

    form.innerHTML = 
        `<h2 class="form__title">Register</h2>

        <div class="form__item-block">
            <label class="form__item">
                <input type="text" class="form__item-input form__item-input--register" placeholder="Full Name">
            </label>

            <label class="form__item">
                <input type="email" class="form__item-input form__item-input--register" placeholder="Email">
            </label>

            <label class="form__item">
                <input type="tel" class="form__item-input form__item-input--register" placeholder="Phone">
            </label>

            <label class="form__item">
                <input type="password" class="form__item-input form__item-input--register" placeholder="Password">
            </label>

            <label class="form__item">
                <input type="password" class="form__item-input form__item-input--register" placeholder="Confirm Password">
            </label>
        </div>

        <div class="form__button-block">
            <button type="submit" class="form__button form__button--register">Register</button>
            <button type="button" class="form__button form__button--sign-in">Have account? Sign in</button>
        </div>`;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
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
                <input type="text" class="form__item-input form__item-input--login" placeholder="Username">
            </label>

            <label class="form__item">
                <input type="password" class="form__item-input form__item-input--login" placeholder="Password">
            </label>
        </div>

        <div class="form__button-block form__button-block--login">
            <button type="submit" class="form__button form__button--login">Login</button>
        </div>`;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    return form;
}
