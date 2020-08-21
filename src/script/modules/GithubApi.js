export default class GithubApi {
  constructor(
    user,
    repo,
    commitsLimit
  ) {
    this.user = user;
    this.repo = repo;
    this.commitsLimit = commitsLimit;
  }

  getCommits() {
    return fetch(`https://api.github.com/repos/${this.user}/${this.repo}/commits?&per_page=${this.commitsLimit}`)
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
      )
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}