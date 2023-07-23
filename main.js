import{getComments} from "./app.js"
import{postComments} from "./app.js"
import{formatDate} from "./assistant.js"
import{renderLogin} from "./login.js"
import { userComment } from "./render.js"
//import{renderRegistr} from "./reg.js"
//import{renderPage} from "./render.js"




const buttonElement = document.getElementById("add-form-button");
const newCommentElement = document.getElementById("container");
const inputNameElement = document.getElementById("add-form-name");
const commentsElement = document.getElementById("add-form-text");
const loadComments =  document.getElementById("load");
const loadComment =  document.getElementById("add-form");
const loader =  document.getElementById("loader");

export const initEventListeners = () => {
  const commentElements = document.querySelectorAll(".comment");
  for (const commentElement of commentElements) {
    commentElement.addEventListener("click", () => {
      // редактирование коментария дз-11
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

//формат даты
const dateElement = document.getElementById("date");
const myDate = new Date();
formatDate();
dateElement.textContent = formatDate(myDate);


// массив данных
 export let comments = [];

// рендер функция
export const renderСomments = () => {
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
  
     newCommentElement.innerHTML = commentsHtml;

//кнопка удаления комментария
     const initDeleteButtonsListeners = () => {
     const deleteButtonsElements = document.querySelectorAll(".delete-button");

    for (const deleteButtonElement of deleteButtonsElements) {
    deleteButtonElement.addEventListener("click", (event) => {
      event.stopPropagation();
      const index = deleteButtonElement.dataset.index;
      console.log(index);
      comments.splice(index, 1);
      renderСomments();
    });
  }
};
initDeleteButtonsListeners();
initEventListeners();
};    
  renderСomments();
  
   //Авторизация
   const authorization = document.getElementById("regUser");
   authorization.addEventListener("click", () => {
    renderLogin();
   });
  

// отправляем данные на сервер (метод GET)
const getFetchPromise = () => {
getComments()
.then((responseData) => {
    loadComments.textContent = "";
    const appComments = responseData.comments.map((comment) =>{
        return{
          name: comment.author.name,
          date: new Date(comment.data),
          text: comment.text,
          likes: comment.likes,
          isLiked : false
        }
      });  
    comments = appComments;
    comments = responseData.comments;
    renderСomments()
  });

};
 getFetchPromise();

// добавление нового коментария
userComment ()
console.log("It works!");