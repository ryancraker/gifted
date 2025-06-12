import { AppState } from "../AppState.js";
import { Identity } from "../Auth/Identity.js";
Identity
import { sandBoxService } from "../services/SandboxService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class SandboxController {
  constructor() {
    console.log("SANDBOX CONTROLLER IS HERE!");
    AppState.on('identity', this.getGiftData)
    AppState.on('sandboxGifts', this.drawMyGifts)
  }

  async getGiftData() {
    try {
      await sandBoxService.getGiftData()
    } catch (error) {
      console.error("FAILED TO GET GIFT DATA", error);
      Pop.error(error, "COULD NOT GET GIFTS")
    }
  }
  drawMyGifts() {
    let giftContent = ''
    AppState.sandboxGifts.forEach(gift => giftContent += gift.giftTemplate)
    setHTML('gift-list', giftContent)

  }

  async openGift(giftId) {
    try {
      await sandBoxService.openGift(giftId)
    } catch (error) {
      console.error('Gift did not open', error)
    }
  }


  async createGift(formData) {
    try {
      await sandBoxService.createGift(formData)
    } catch (error) {
      console.error('Failed to create new gift', error)
    }
  }
}