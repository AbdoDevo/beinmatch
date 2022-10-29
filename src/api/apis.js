export const fetchMatch = async (matchId) => {
  try {
    const response = await fetch(
      `https://beinmatch-9653c-default-rtdb.firebaseio.com/beinmatch/${matchId}.json`
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};


export const getMatchPage = async (url) => {
  return fetch('https://beinmatch.ma/home/live/11806/1/ريال_بيتيس_vs_أتلتيكو_مدريد'

)
  .then((response) => {
    return response.text();
  })
};
