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
    console.log('main')
  }

}

document.addEventListener('DOMContentLoaded', () => {
  new Main()
})
