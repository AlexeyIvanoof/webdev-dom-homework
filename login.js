import {login, setToken, token} from "./app.js"
 
export const renderLogin = () => {
    const appElement = document.getElementById("app");
    const loginHtml = 
    `<div class="container">
    <div class="add-form">
        <h3>Форма входа</h3>
        <input
        id="login-input"
          type="text"
          class="text-enter"
          placeholder="Введите логин"
         />
         <input
         id="password-input"
           type="text"
           class="text-enter"
           placeholder="Введите пароль"
          />
          <div class="add-form-enter">
            <button id="login-button" class="add-form-button">Войти</button>
          </div>
          <a class="reg-enter" href="reg.html">Регистрация</a>
    </div>
</div>`;

appElement.innerHTML = loginHtml;

const buttonElement = document.getElementById("login-button");
const loginInputElemtnt = document.getElementById("login-input");
const passwordInputElement = document.getElementById("password-input");


buttonElement.addEventListener("click", () => {
login({
    login:loginInputElemtnt.value,
    password:passwordInputElement.value,
}).then((responseData) => {
    console.log(responseData);
    console.log(token);
    setToken(responseData.user.token);
    console.log(token);
});
});
}