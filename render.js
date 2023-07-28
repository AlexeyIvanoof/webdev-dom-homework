
import { initEventListeners } from "./main.js";
import { comments } from "./main.js";
import { initDeleteButtonsListeners } from "./main.js";
import { postComments } from "./app.js";
// рендер страницы после авторизайии
export const renderPage = () => {
    const pageElement = document.getElementById("container");
    const commentsHtml = comments.map((comment, index)=>{
      return`<li  class="comment"  data-likeNumb="${ comment.likes}"  data-comment-text="<${comment.text}
(${comment.author.name})">
      <div class="comment-header">
        <div>${comment.author.name}</div>
        <div>${comment.date}</div>
      </div>
      <div class="comment-body">
        <div class="comment-text">
          ${comment.text}
        </div>
      </div>
      <div class="comment-footer">
        <div class="likes">
          <span class="likes-counter">${comment.likes}</span>
          <button class="like-button"></button>
        </div>
      </div>
      <div>
        <button data-index="${index}" class="delete-button">Удалить комментарий</button>
      </div>
    </li>`
    })
    .join("");
    const addHtml =
    `<div id="add-form" class="add-form">
    <input
      id="add-form-name"
      type="text"
      class="add-form-name"
      placeholder="Введите ваше имя"
    />
    <textarea
      id="add-form-text"
      type="textarea"
      class="add-form-text"
      placeholder="Введите ваш коментарий"
      rows="4"
    ></textarea>
    <div class="add-form-row">
      <button id="add-form-button" class="add-form-button">Написать</button>
    </div>`


    initDeleteButtonsListeners();
    initEventListeners();  

    pageElement.innerHTML = commentsHtml+addHtml ;
  }


const buttonElement = document.getElementById("add-form-button");
const inputNameElement = document.getElementById("add-form-name");
const commentsElement = document.getElementById("add-form-text");
const loadComments =  document.getElementById("load");
const loadComment =  document.getElementById("add-form");


/*///рендер поля ввода коментария
export const renderInputComment = (pageElements) => {
   pageElements = document.getElementById("input-comment");
     const inputHtml = 
    `<div id="add-form" class="add-form">
    <input
      id="add-form-name"
      type="text"
      class="add-form-name"
      placeholder="Введите ваше имя"
    />
    <textarea
      id="add-form-text"
      type="textarea"
      class="add-form-text"
      placeholder="Введите ваш коментарий"
      rows="4"
    ></textarea>
    <div class="add-form-row">
      <button id="add-form-button" class="add-form-button">Написать</button>
    </div>`;
}
pageElements.innerHTML = inputHtml;/*/


export function userComment () {
loader.textContent = "";
buttonElement.addEventListener("click", () => {
  if (inputNameElement.value === "" || commentsElement.value === "") {
    return false;
  };
// ответ от сервера (метод POST)
  loadComment.style.display = "none"; 
  loader.textContent = "...Добавляем комментарий";
  postComments({
    nam:inputNameElement.value,
    text: commentsElement.value, 
    date: `${formatDate(myDate)}`})
    .then(() => {
     return getFetchPromise();
    })

    .then((data) => {
      loadComment.style.display = "block";
      loader.textContent = "";
      inputNameElement.value = "";
      commentsElement.value = "";
    })
    .catch((error) => {
      loadComment.style.display = "block";
      loader.textContent = "";
      if(error.message){
        error.message ===("Введите не мение трех символов!");
        Swal.fire({
        icon:"error",
        title:"Неверный формат ввода данных",
        text: "Введите не мение трех символов!"
      })
      }else{
      Swal.fire({
        icon:"error",
        title:"Упс",
        text: "Сервер перегружен!"
      })} 
      console.warn(error);
    });


})
}

/*/import { initEventListeners } from "./main.js";
import { comments } from "./main.js";
import { renderСomments } from "./main.js";
export const renderPage = () => {
  const pageElement = document.getElementById("container");
  const commentsHtml = comments
    .map(
      (comment, index) => `
      <li class="comment" data-likeNumb="${comment.likes}" data-comment-text="${comment.text} (${comment.author.name})">
        <div class="comment-header">
          <div>${comment.author.name}</div>
          <div>${comment.date}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            ${comment.text}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likes}</span>
            <button class="like-button"></button>
          </div>
        </div>
        <div>
          <button data-index="${index}" class="delete-button">Удалить комментарий</button>
        </div>
      </li>`
    )
    .join("");
    
  const addHtml = `
    <div id="add-form" class="add-form">
      <input
        id="add-form-name"
        type="text"
        class="add-form-name"
        placeholder="Введите ваше имя"
      />
      <textarea
        id="add-form-text"
        type="textarea"
        class="add-form-text"
        placeholder="Введите ваш коментарий"
        rows="4"
      ></textarea>
      <div class="add-form-row">
        <button id="add-form-button" class="add-form-button">Написать</button>
      </div>
    </div>`;

  pageElement.innerHTML = commentsHtml + addHtml;

  const deleteButtonsElements = document.querySelectorAll(".delete-button");

  for (const deleteButtonElement of deleteButtonsElements) {
    deleteButtonElement.addEventListener("click", (event) => {
      event.stopPropagation();
      const index = deleteButtonElement.dataset.index;
      comments.splice(index, 1);
      renderСomments();
      renderPage();
    });
  }
  
  initEventListeners();
};

export function userComment() {
  loader.textContent = "";
}/*/