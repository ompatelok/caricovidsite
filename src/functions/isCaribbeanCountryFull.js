import { countryList } from "../data/fullCountryList.js";

export default (arr) => {
  return countryList.includes(arr[1]) || countryList.includes(arr[0]);
};
