/* const selectAPI = async (subreddit) => {
   const objectResponse = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
   const objectJson = await objectResponse.json();
   return objectJson;
} */

const selectAPI = (subreddit) => (
   fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((response) => (
         response
            .json()
            .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
      ))
)

export default selectAPI;