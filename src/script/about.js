import "../pages/about.css";


import {
    GIT_USER,
    GIT_REPO,
    GIT_COMMITS_PER_PAGE,
    COMMITS_SLIDER,
    COMMITS,
    COMMITS_CONTAINER
} from "../script/constants/constants.js"

import GithubApi from "../script/modules/githubapi.js";
import CommitCardList from "../script/components/commitcardlist.js";
import CommitCard from "../script/components/commitcard.js"

(function () {
    const GITHUB_API = new GithubApi(
        GIT_USER,
        GIT_REPO,
        GIT_COMMITS_PER_PAGE
    );
    GITHUB_API.getCommits();

    const COMMIT_CARD = new CommitCard();

    const COMMITCARD_LIST = new CommitCardList(
        COMMITS_CONTAINER,
        COMMITS_SLIDER,
        GITHUB_API,
        COMMIT_CARD,
        COMMITS,
    )
    COMMITCARD_LIST.getCommits();
})();