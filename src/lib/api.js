import axiosInstance from "./axios";

const getBooks = async (query, page = 1) => {
  try {
    const res = await axiosInstance.get("/search.json", {
      params: {
        q: query,
        page: page,
      },
    });

    if (res.data && res.data.docs) {
      return res.data.docs;
    }
    return [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getBooks;
