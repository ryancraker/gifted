import { AuthController } from "./Auth/AuthController.js"
import { GiftController } from "./controllers/GiftController.js"
import { SandboxController } from "./controllers/SandboxController.js"





class App {

  authController = new AuthController()

  giftController = new GiftController()

  sandBoxController = new SandboxController()
}




window['app'] = new App()


