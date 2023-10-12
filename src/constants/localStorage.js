export const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const searchInLocalStorage = (keys, id) => {
  for (let key of keys) {
    const data = getFromLocalStorage(key);
    if (data) {
      const anime = data.find((item) => item?.mal_id == id);
      if (anime) return anime;
    }
  }
};
