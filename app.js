export function getComments() {
    return fetch("https://wedev-api.sky.pro/api/v1/:aleksey-ivanov/comments", {
        method: "GET"
      })
      .then((response) => {
      return response.json()
      })
}
export function postComments({nam,text,date}){
    return fetch("https://wedev-api.sky.pro/api/v1/:aleksey-ivanov/comments", {
        method: "POST",
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
}