import { AppState } from "../AppState.js";
import { Identity } from "../Auth/Identity.js";
import { Gift } from "../models/GiftModel.js";
import { api } from "../utils/Axios.js";



class SandboxService {
  constructor() {
    console.log("SANDBOX SERVICE IS HERE!");
  }

  async getGiftData() {
    const response = await api.get('api/gifts')
    const giftData = response.data.map(pojo => new Gift(pojo))
    AppState.sandboxGifts = giftData
    console.log('GIFT DATA HERE', giftData);
  }

  async openGift(giftId) {
    const openGiftIndex = AppState.sandboxGifts.findIndex(gift => gift.id == giftId)
    const giftToOpen = AppState.sandboxGifts[openGiftIndex]
    giftToOpen.opened = true
    const response = await api.put(`api/gifts/${giftId}`, giftToOpen)
    console.log(response.data)
    const openedGift = new Gift(response.data)
    AppState.sandboxGifts.splice(openGiftIndex, 1, openedGift)
  }

  async createGift(formData) {
    const response = await api.post('api/gifts', formData)
    console.log('CREATED GIFT WOOOO', response.data);
    const newGift = new Gift(response.data)
    AppState.sandboxGifts.push(newGift)
  }
}



export const sandBoxService = new SandboxService