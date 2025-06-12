import { Identity } from './Auth/Identity.js'
import { Gift } from './models/GiftModel.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'



class ObservableAppState extends EventEmitter {

  /** @type {Identity} */
  identity = null

  /** @type {Gift[]} */
  sandboxGifts = []

}

export const AppState = createObservableProxy(new ObservableAppState()) 