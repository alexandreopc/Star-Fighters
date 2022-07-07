import axios from "axios";

async function getUserData(user: string) {
  let userData = await axios.get(`https://api.github.com/users/${user}/repos`);
  return userData.data;
}

async function getBattleResult(firstUser: string, secondUser: string) {
  let firstResultCount = 0;
  let firstUserData = await getUserData(firstUser);
  firstUserData.forEach((repository: {}) => {
    firstResultCount += repository["stargazers_count"];
  });

  let secondResultCount = 0;
  let secondUserData = await getUserData(secondUser);
  secondUserData.forEach((repository: {}) => {
    secondResultCount += repository["stargazers_count"];
  });

  let winner: string;
  let loser: string;
  let draw: boolean = false;

  const result: { winner: string; loser: string; draw: boolean } = {
    winner,
    loser,
    draw,
  };

  if (firstResultCount > secondResultCount) {
    winner = firstUser;
    loser = secondUser;
  } else if (secondResultCount > firstResultCount) {
    winner = secondUser;
    loser = firstUser;
  } else {
    winner = null;
    loser = null;
    draw = true;
  }

  return {
    winner,
    loser,
    draw,
  };
}

export const rankingServices = { getBattleResult };
