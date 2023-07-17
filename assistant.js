export function formatDate() {
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
}
