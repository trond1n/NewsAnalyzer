//шаблон карточки для коммита
export default class CommitCard {
  create(date, urlToImage, name, mail, message, urlToCommit) {
    const template = `
      <li class="history__item">
        <a href="${urlToCommit}" class="histoty__url" target="_blank">
        <div class="history__card">
            <p class="history__item_date">${date}</p>
           <div class="history__item_user-info">
                <img src="${urlToImage}" alt="фото автора коммита" class="history__item_avatar"/>
               <div class="history__item_user-contacts">
                   <h3 class="history__item_name">${name}</h3>
                   <p class="history__item_email">${mail}</p>
               </div>
           </div>
            <p class="history__item_description">${message}</p>
        </div>
        </a>
      </li>
    `;
    return template;
  }
}
