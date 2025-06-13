// @ts-ignore


const gifApi = axios.create({
  baseURL: 'https://api.giphy.com',
  params: {
    api_key: 'ZVB1pWO81bCqoBkMaGAPnAjud1UhACoS',
    rating: 'pg'
  },
  timeout: 8000,
})




class GiftService {

  async gifSearch(userInput) {
    const searchRoute = 'v1/gifs/search'
    const response = await gifApi.get(searchRoute, { params: { q: userInput } })
    console.log("GOT GIF SEARCH RESULTS", userInput);

  }


}



export const giftService = new GiftService()