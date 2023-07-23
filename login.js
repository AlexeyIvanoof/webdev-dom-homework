import {login, setToken, token} from "./app.js"
import {renderPage} from "./render.js"

export const renderLogin = () => {
  const pageElement = document.getElementById("container");
  //const appElement = document.getElementById("app");
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

//appElement.innerHTML = loginHtml;
pageElement.innerHTML = loginHtml;

const buttonElement = document.getElementById("login-button");
const loginInputElement = document.getElementById("login-input");
const passwordInputElement = document.getElementById("password-input");


buttonElement.addEventListener("click", () => {
  console.log("!")
login({
    login:loginInputElement.value,
    password:passwordInputElement.value,
}).then((responseData) => {
    console.log(responseData);
    console.log(token);
    setToken(responseData.user.token);
    console.log(token);
}).then(() => {
  return   renderPage()
});

});
}