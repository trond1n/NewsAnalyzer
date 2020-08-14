import { getFormatedDateForCards } from "../utils/DateFormater.js"
import sliderSettings from "../utils/SliderSettings.js";

export default class CommitCardList {
  constructor(
    commitContainer,
    sliderContainer,
    githubApi,
    commitCard,
    sliderSection,
    error
  ) {
    this.commitContainer = commitContainer;
    this.sliderContainer = sliderContainer;
    this.githubApi = githubApi;
    this.commitCard = commitCard;
    this.sliderSection = sliderSection
    this.error = error;
  }

  addCommits(commitTemplate) {
    this.sliderContainer.insertAdjacentHTML("afterbegin", commitTemplate);
  }

  getCommits() {
    this.githubApi.getCommits()
      .then((res) => {
        for (let array of res) {
          const commitTemplate = this.commitCard.create(
            getFormatedDateForCards(array.commit.committer.date),
            array.author.avatar_url,
            array.commit.author.name,
            array.commit.author.email,
            array.commit.message,
            array.html_url
          );
          this.addCommits(commitTemplate);
        }
        sliderSettings();
      })
      .catch((error) => {
        this.errorOn();
        console.log(`Ошибка: ${error.message}`);
      })
  }
}