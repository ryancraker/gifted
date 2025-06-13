// @ts-ignore


const gifApi = axios.create({
  baseURL: 'api.giphy.com/v1/gifs/search',
  params: {
    api_key: 'ZVB1pWO81bCqoBkMaGAPnAjud1UhACoS',
    rating: 'pg'
  },
  timeout: 8000,
  withCredentials: true
})




class GiftService {

  async gifSearch(userInput) {
    const response = await gifApi.get(`q=${userInput}`)
    console.log("GOT GIF SEARCH RESULTS", userInput);

  }


}



export const giftService = new GiftService()