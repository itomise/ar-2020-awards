import './modules/importPug'
import '../css/main.scss'

import load from './modules/load'

if (module.hot) {
  module.hot.accept(console.error)
  // HMRに失敗した時に強制リロードする
  module.hot.dispose(() => {
    window.location.reload()
  });
}

class Main {
  constructor() {

    this.init()
  }

  /**
   * init
  */
  init() {
    document.querySelector('canvas').addEventListener('click', () => {
      if (
        DeviceMotionEvent &&
        DeviceMotionEvent.requestPermission &&
        typeof DeviceMotionEvent.requestPermission === 'function'
      ) {
        DeviceMotionEvent.requestPermission();
      }
      if (
        DeviceOrientationEvent &&
        DeviceOrientationEvent.requestPermission &&
        typeof DeviceOrientationEvent.requestPermission === 'function'
      ) {
        DeviceOrientationEvent.requestPermission();
      }
    })
  }

}

window.addEventListener('load', () => {
  new Main()
})
