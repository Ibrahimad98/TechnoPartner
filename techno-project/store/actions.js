const localhost = "https://ritzy-donkey-production.up.railway.app";

export const fetchPost = () => {
  console.log("masuk fetch post");
  return (dispatch) => {
    return fetch(`${localhost}/users/news`)
      .then((res) => {
        if (!res.ok) throw new Error("Error fetching posts");
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        dispatch({
          type: "news/fetchNews",
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
        // dispatch(setError(error.message));
      })
      .finally(() => {
        dispatch({
          type: "isLoading",
          payload: false,
        });
      });
  };
};

export const findOneNews = (id) => {
  return (dispatch) => {
    return fetch(`${localhost}/users/news/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error finding news with id " + id);
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: "news/fetchNewsById",
          payload: data,
        });
        dispatch({
          type: "tags/tagsFetcher",
          payload: data.Tags,
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch({
          type: "isLoading",
          payload: false,
        });
      });
  };
};
