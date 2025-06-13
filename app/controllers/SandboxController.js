import { AppState } from "../AppState.js";
import { Identity } from "../Auth/Identity.js";
Identity
import { sandBoxService } from "../services/SandboxService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
getFormData
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


  async createGift() {
    event.preventDefault()
    const formElem = event.target
    const sentGift = getFormData(formElem)
    try {
      sandBoxService.createGift(sentGift)
    } catch (error) {
      console.error("Failed to create a new Gift", error);
    }
  }
}