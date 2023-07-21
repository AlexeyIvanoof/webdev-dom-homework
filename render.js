export const renderPage = () => {
    const pageElement = document.getElementById("container");
    const commentHtml =
    ` <div class="container">
    <ul id="container" class="comments">
      <li class="comment" data-likeNumb="3" data-comment-text=" <Это будет первый комментарий на этой странице
(Глеб Фокин)">
        <div class="comment-header">
          <div>Глеб Фокин</div>
          <div id="date">12.02.22 12:18</div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            Это будет первый комментарий на этой странице
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span id="likes-counter" class="likes-counter">3</span>
            <button id="likebutton" class="like-button"></button>
          </div>
        </div>
        <div>
          <button id="delete-button" class="delete-button">Удалить комментарий</button>
        </div>
      </li>
      <li class="comment" data-likeNumb="75" data-comment-text="< Мне нравится как оформлена эта страница! ❤
(Варвара Н.)">
        <div class="comment-header">
          <div>Варвара Н.</div>
          <div>13.02.22 19:22</div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            Мне нравится как оформлена эта страница! ❤
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">75</span>
            <button id="likebutton-active-like" class="like-button -active-like"></button>
          </div>
        </div>
        <div>
          <button id="delete-button" class="delete-button">Удалить комментарий</button>
        </div>
      </li>
    </ul>
`

    pageElement.innerHTML = commentHtml;
}