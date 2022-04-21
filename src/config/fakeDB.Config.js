export const saveToLocalStorage = (storeData) => {
  try {
    const jsonFormatData = JSON.stringify(storeData);
    localStorage.setItem("store_Data", jsonFormatData);
  } catch (error) {
    console.log("localstorageError: ", error);
  }
};

const getLocalStorageData = () => {
  try {
    const jsonFormatData = localStorage.getItem("storeData");
    return jsonFormatData === null ? undefined : JSON.parse(jsonFormatData);
  } catch (error) {
    console.log(error);
  }
};

//calling function and saving into a variable for exporting to add into the store
const parsistedData = getLocalStorageData();

export { parsistedData };
