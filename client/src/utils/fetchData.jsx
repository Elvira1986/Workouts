export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "680cbfc5f0msh1b352570382f7a4p13933bjsn1553314ae573",

    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};
// process.env.REACT_APP_RAPID_API_KEY

// how to change to x-rapidapi-key: import.meta.env.VITE_API_BASE_URL

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
