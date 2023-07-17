const commentsURL = "https://wedev-api.sky.pro/api/v2/:aleksey-ivanov/comments"  
const userURL =  "https://wedev-api.sky.pro/api/user"

export let token;
export const setToken = (newToken) =>{
  token = newToken
}
export function getComments() {
    return fetch(commentsURL, {
        method: "GET",
        headers:{
        Authorization: `Bearer ${token}`},
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
export function login(login, password){
  return fetch(userURL, {
      method: "POST",
      body: JSON.stringify({
       login,
       password,

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