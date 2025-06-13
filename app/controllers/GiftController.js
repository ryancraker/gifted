import { AppState } from "../AppState.js";
import { giftService } from "../services/GiftService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



export class GiftController {
  constructor() {
    console.log('GIFT CONTROLLER IS HERE');
  }


  async searchGif() {
    try {
      event.preventDefault()
      console.log('GOT GIF SEARCH');
      const form = event.target
      const searchGif = form.query.value
      await giftService.gifSearch(searchGif)
    } catch (error) {
      console.error('FAILED TO SEARCH GIF', error);
      Pop.error(error, 'FAILED TO GET SEARCHES FOR GIFS')
    }
  }

}