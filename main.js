import{getComments} from "./app.js"
import{renderLogin} from "./login.js"
//import{renderRegistr} from "./reg.js"
//import{renderPage} from "./render.js"


const newCommentElement = document.getElementById("container");
const loadComments =  document.getElementById("load");
const loader =  document.getElementById("loader");
const buttonAuthorization = document.getElementById("regUser");

   //Авторизация
   const authorization = document.getElementById("regUser");
   authorization.addEventListener("click", () => {
    renderLogin();
    buttonAuthorization.style.display = "none"
   });
  

//формат даты
const dateElement = document.getElementById("date");
const myDate = new Date();
export const formatDate = (date) => {
  let data = date.getDate();
  let month = date.getMonth();
  let hour = date.getHours();
  let minute = date.getMinutes();

  if (data < 10) {
    data = "0" + data;
  }
  if (month < 10) {
    month = "0" + (month + 1);
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  return `${data}.${month}.${date.getFullYear().toString().substr(-2)} ${hour}:${minute}`;
};
dateElement.textContent = formatDate(myDate);

// массив данных
export let comments = [];

// рендер функция
const renderСomments = () => {
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

};    
  //renderСomments();

// отправляем данные на сервер (метод GET)
 export const getFetchPromise = () => {
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
   
   loader.textContent = "";
   