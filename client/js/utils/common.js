export function sortUsersByName(user1, user2) {
  const name1 = user1.firstName + ' ' + user1.lastName;
  const name2 = user2.firstName + ' ' + user2.lastName;

  if (name1 < name2) return -1;
  if (name1 > name2) return 1;
  return 0;
}

export function sortTeamsByName(team1, team2) {
  if (team1.name < team2.name) return -1;
  if (team1.name > team2.name) return 1;
  return 0;
}

export default {
  sortUsersByName: sortUsersByName,
  sortTeamsByName: sortTeamsByName
};
