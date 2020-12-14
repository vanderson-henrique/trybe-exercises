import selectAPI from "../../services/redditAPI";

export const REQUEST_REDDIT = "REQUEST_REDDIT";
export const RECEIVE_REDDIT_SUCCESS = "RECEIVE_REDDIT_SUCCESS";
export const RECEIVE_REDDIT_FAILURE = "RECEIVE_REDDIT_FAILURE";

const requestReddit = () => ({ type: REQUEST_REDDIT });

const receiveRedditSuccess = (reddits) => ({
  type: RECEIVE_REDDIT_SUCCESS,
  reddits,
});

const receiveRedditFailure = (error) => ({
  type: RECEIVE_REDDIT_FAILURE,
  error,
});

const fetchReddit = (subreddit) => {
  return (dispatch) => {
    dispatch(requestReddit());
    return selectAPI(subreddit).then(
      (reddits) => dispatch(receiveRedditSuccess(reddits.data.children)),
      (error) => dispatch(receiveRedditFailure(error))
    );
  };
};

export default fetchReddit;
