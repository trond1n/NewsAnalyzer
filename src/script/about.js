//импорты
import "../pages/about.css";

import {
    githubUser,
    githubRepo,
    commitsLimit,
    commitsContainer,
} from "../script/constants/constants.js";

import GithubApi from "../script/modules/GithubApi.js";
import CommitCardList from "../script/components/CommitCardList.js";
import CommitCard from "../script/components/CommitCard.js";

//переменные
const githubApi = new GithubApi(githubUser, githubRepo, commitsLimit);
const commitCard = new CommitCard();
const commitCardList = new CommitCardList(commitsContainer, githubApi, commitCard);

//методы
commitCardList.getCommits();
githubApi.getCommits();
