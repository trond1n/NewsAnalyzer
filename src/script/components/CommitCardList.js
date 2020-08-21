import DateConverter from '../utils/DateConverter.js';
import sliderSettings from "../utils/SliderSettings.js";

export default class CommitCardList {
    constructor(
        commitsContainer,
        githubApi,
        historyItem,
    ) {
        this.commitsContainer = commitsContainer;
        this.githubApi = githubApi;
        this.historyItem = historyItem;
    }

    addCommits(commitCard) {
        this.commitsContainer.insertAdjacentHTML("afterbegin", commitCard);
    }

    getCommits() {
        this.githubApi.getCommits()
            .then((res) => {
                for (let array of res) {
                    const commitCard = this.historyItem.create(
                        array.commit.author.name,
                        array.commit.author.email,
                        DateConverter.сardDateConverter(array.commit.author.date),
                        array.commit.message,
                        array.author.avatar_url,
                    );
                    this.addCommits(commitCard);
                }
                sliderSettings();
            })
            .catch((error) => {
                this.errorOn();
                console.log(`Ошибка: ${error.message}`);
            });
    }
}