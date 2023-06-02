export const fetchData = async () => {
  // Prod
  const [resultsData, playersData, scorersData] = await Promise.all([
    fetch('https://mrsl-backend.vercel.app/results').then(response => response.json()),
    fetch('https://mrsl-backend.vercel.app/players').then(response => response.json()),
    fetch('https://mrsl-backend.vercel.app/scorers').then(response => response.json()),
  ]);

  // Local
  // const [resultsData, playersData, scorersData] = await Promise.all([
  //   fetch('http://localhost:3001/results').then(response => response.json()),
  //   fetch('http://localhost:3001/players').then(response => response.json()),
  //   fetch('http://localhost:3001/scorers').then(response => response.json()),
  // ]);

  return { results: resultsData.results, players: playersData.players, scorers: scorersData.scorers };
};