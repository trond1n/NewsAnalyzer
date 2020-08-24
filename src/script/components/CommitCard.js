
export default class CommitCard {
    create(name, email, date, message, avatar) {
        const template = `
      <li class="history__item">
            <p class="history__item_date">${date}</p>
           <div class="history__item_user-info">
                <img src="${avatar}" alt="фото автора коммита" class="history__item_avatar"/>
               <div class="history__item_user-contacts">
                   <h3 class="history__item_name">${name}</h3>
                   <p class="history__item_email">${email}</p>
               </div>
           </div>
            <p class="history__item_description">${message}</p>
      </li>
    `;
        return template;
    }
}

