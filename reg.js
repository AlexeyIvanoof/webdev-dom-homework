/*/import {regUsers, setToken, token} from "./app.js"

export const renderRegistr = () => {
    const regElement = document.getElementById("reg");
    const regHtml = 
    `<div class="container">
    <div class="add-form">
        <h3>Форма регистрации</h3>
        <input
        id="name_input"
          type="text"
          class="text-enter"
          placeholder="Введите имя"
         />
         <input
         id="login_input"
           type="text"
           class="text-enter"
           placeholder="Введите логин"
          />
          <input
          id="password_input"
            type="text"
            class="text-enter"
            placeholder="Введите пароль"
           />
          <div class="add-form-enter">
            <button id="reg-button" class="add-form-button">Зарегистрироваться</button>
          </div>
          <a class="reg-enter" href="login.html">Войти</a>
    </div>
</div>`;

regElement.innerHTML = regHtml;

const buttonElement = document.getElementById("reg-button");
const loginInputElemtnt = document.getElementById("login_input");
const passwordInputElement = document.getElementById("password_input");
const nameInputElement =  document.getElementById("name_input");

buttonElement.addEventListener("click", () => {
  console.log("!")
  regUsers({
    regUsers:loginInputElemtnt.value,
    password:passwordInputElement.value,
    name:nameInputElement.value,
}).then((responseData) => {
    console.log(responseData);
    console.log(token);
    setToken(responseData.user.token);
    console.log(token);
});
});
}/*/