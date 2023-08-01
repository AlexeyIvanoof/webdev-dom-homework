/*/export function formatDate() {
    formatDate = (date) => {
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
}/*/


/*/export const formatDateToRu = (date) => {
  let data = date.getDate();
    let month = date.getMonth();
    let hour = date.getHours();
  
    if (data < 10) {
      data = "0" + data;
    }
    if (month < 10) {
      month = "0" + (month + 1);
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}/${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
  };

export const formatDateToUs = (date) => {
    return `${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}-${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
  };
/*/
 