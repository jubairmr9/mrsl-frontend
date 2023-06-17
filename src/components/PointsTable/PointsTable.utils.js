export const generatePointsTable = (result) => {
  // Filtering out games with "NA" scores
  const filteredResults = Object.values(result).filter(
    (match) => match.homeScore !== "NA" && match.awayScore !== "NA"
  );

  // Creating a dictionary to store team-wise data
  const teamsData = {};

  // Iterating over the filtered results
  filteredResults.forEach((match) => {
    const homeTeam = match.homeTeam;
    const awayTeam = match.awayTeam;
    const homeScore = match.homeScore;
    const awayScore = match.awayScore;

    // Updating home team's data
    if (!teamsData[homeTeam]) {
      teamsData[homeTeam] = {
        team: homeTeam,
        played: 0,
        win: 0,
        loss: 0,
        tie: 0,
        goalFor: 0,
        goalAgainst: 0,
        points: 0,
      };
    }
    teamsData[homeTeam].played += 1;
    teamsData[homeTeam].goalFor += Number(homeScore);
    teamsData[homeTeam].goalAgainst += Number(awayScore);

    // Updating away team's data
    if (!teamsData[awayTeam]) {
      teamsData[awayTeam] = {
        team: awayTeam,
        played: 0,
        win: 0,
        loss: 0,
        tie: 0,
        goalFor: 0,
        goalAgainst: 0,
        points: 0,
      };
    }
    teamsData[awayTeam].played += 1;
    teamsData[awayTeam].goalFor += Number(awayScore);
    teamsData[awayTeam].goalAgainst += Number(homeScore);

    // Determining the winner and updating points
    if (homeScore > awayScore) {
      teamsData[homeTeam].win += 1;
      teamsData[homeTeam].points += 3;
      teamsData[awayTeam].loss += 1;
    } else if (homeScore < awayScore) {
      teamsData[awayTeam].win += 1;
      teamsData[awayTeam].points += 3;
      teamsData[homeTeam].loss += 1;
    } else {
      teamsData[homeTeam].tie += 1;
      teamsData[homeTeam].points += 1;
      teamsData[awayTeam].tie += 1;
      teamsData[awayTeam].points += 1;
    }
  });

  // Creating the points table object
  const pointsTable = { table: {} };

  // Assigning teams' data to the points table object
  Object.values(teamsData)
    .sort((a, b) => {
      // Sort by points (highest to lowest)
      if (a.points !== b.points) {
        return b.points - a.points;
      }
      // Sort by goals scored (highest to lowest)
      if (a.goalFor !== b.goalFor) {
        return b.goalFor - a.goalFor;
      }
      // Sort by goals against (lowest to highest)
      return a.goalAgainst - b.goalAgainst;
    })
    .forEach((teamData, index) => {
      pointsTable.table[index + 1] = teamData;
    });

  return pointsTable;
};
