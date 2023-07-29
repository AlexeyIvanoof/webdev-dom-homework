import { postComments, name} from "./app.js";
import { formatDate } from "./main.js";
import { comments } from "./main.js";
//import { formatDateToRu,formatDateToUs } from "./lib/formatDate/formatDate.js";

// рендер страницы после авторизации

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
      placeholder="${name}" value=${name} readonly
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

    pageElement.innerHTML = commentsHtml+addHtml ;

    const buttonElement = document.getElementById("add-form-button");
    let inputNameElement = document.getElementById("add-form-name");
    const commentsElement = document.getElementById("add-form-text");
    const loadComment =  document.getElementById("add-form");
    const loader =  document.getElementById("loader");
    const myDate = new Date();      


    const initEventListeners = () => {
      const commentElements = document.querySelectorAll(".comment");
      for (const commentElement of commentElements) {
        commentElement.addEventListener("click", () => {
    
    // редактирование коментария 
          let textItem = commentElement.dataset.commentText;
        if (textItem) {
        document.querySelector('#add-form-text').value = textItem;
      };
        });
    
    // активация лайка
        const likeButton = commentElement.querySelector(".like-button");
        const likesCounter = commentElement.querySelector(".likes-counter");
        const dataLikeNumb = parseInt(commentElement.getAttribute("data-likeNumb"));
    
        let liked = false;
        let likes = dataLikeNumb;
    
        if (likeButton.classList.contains("-active-like")) {
          liked = true;
        }
    
        likeButton.addEventListener("click", (event) => {
          event.stopPropagation();
          if (liked) {
            likes--;
          } else {
            likes++;
          }
          liked = !liked;
          likesCounter.textContent = likes;
          commentElement.setAttribute("data-likeNumb", likes);
          likeButton.classList.toggle("-active-like");
        });
      }
    };
    initEventListeners();
  
//кнопка удаления комментария
     const initDeleteButtonsListeners = () => {
     const deleteButtonsElements = document.querySelectorAll(".delete-button");

    for (const deleteButtonElement of deleteButtonsElements) {
    deleteButtonElement.addEventListener("click", (event) => {
      event.stopPropagation();
      const index = deleteButtonElement.dataset.index;
      console.log(index);
      comments.splice(index, 1);

      renderPage();
    });
  }
};
initDeleteButtonsListeners();
initEventListeners();

/*/const initDeleteButtonsListeners = () => {
  const deleteButtonsElements = document.querySelectorAll(".delete-button");

 for (const deleteButtonElement of deleteButtonsElements) {
 deleteButtonElement.addEventListener("click", (event) => {
   event.stopPropagation();
   const id =  deleteButtonElement.dataset.id;
   deleteComment({id}).then(() => {
     getFetchPromise();
});
 });
}
};
initDeleteButtonsListeners();
initEventListeners();/*/
 
//добавляем новый комментарий
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
    date: `${formatDate(myDate)}`
  })  
    .then(() => {
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
});
};    


