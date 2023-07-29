const commentsURL = "https://wedev-api.sky.pro/api/v2/aleksey-ivanov/comments"  
const userURL =  "https://wedev-api.sky.pro/api/user"
const userLoginURL = "https://wedev-api.sky.pro/api/user/login"
const deleteCommentURL = "https://wedev-api.sky.pro/api/v2/aleksey-ivanov/comments/:id" 

export let token;
export const setToken = (newToken) =>{
  token = newToken
};
export let name;
export let setLoginName = (newName) =>{
  return name = newName;
};

export function deleteComment({id}) {
  return fetch(deleteCommentURL +id, {
    method: "DELETE",
    headers:{
      Authorization: `Bearer ${token}`},
   }).then((response) => {
     response.json()
    });
};

export function getComments() {
    return fetch(commentsURL, {
        method: "GET",
      })
      .then((response) => {
      return response.json()
      })
};
export function postComments({nam,text,date}){
    return fetch(commentsURL, {
        method: "POST",
        headers:{
        Authorization: `Bearer ${token}`},
        body: JSON.stringify({
          name: nam,
          text: text,
          date: date,
        })
      }) 
        .then((response) => {
          if (response.status === 500) {
            throw ("Сервер перегружен!")
          }
          if(response.status === 400){
            throw new Error("Введите не мение трех символов!") 
          }
          return response.json();
        })      
};
export function login({login, password}){
  return fetch(userLoginURL, {
      method: "POST",
      body: JSON.stringify({
       login,
       password,
      })
    }) 
    .then((response) => {
      console.log(response)
        if (response.status === 400) {
          throw new Error ("неверный логин или пароль")
        }
        return response.json();
      })
      .catch((error) => {
        console.log(error.message)
        if(error.message){
          Swal.fire({
          icon:"error",
          title:"Упс!",
          text: "неверный логин или пароль!"
        })
        }
      })     
};

export function regUsers({login, password,name}){
  return fetch(userURL, {
      method: "POST",
      body: JSON.stringify({
       login,
       password,
       name,

      })
    }) 
      .then((response) => {
        if (response.status === 500) {
          throw ("Сервер перегружен!")
        }
        if(response.status === 400){
          throw new Error("Введите не мение трех символов!") 
        }
        return response.json();
      })      
};