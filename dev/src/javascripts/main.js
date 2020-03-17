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
    const aScene = document.querySelector('a-scene').object3D
    console.log(aScene)
    console.log('スリー：', THREE)
    const geo = new THREE.SphereGeometry(10, 20, 20)
    const mat = new THREE.MeshNormalMaterial()
    const mesh = new THREE.Mesh(geo, mat)
    aScene.add(mesh)
    document.querySelector('canvas').addEventListener('click', () => {
      if (
        DeviceMotionEvent &&
        DeviceMotionEvent.requestPermission &&
        typeof DeviceMotionEvent.requestPermission === 'function'
      ) {
        DeviceMotionEvent.requestPermission();
        // document.body.style.display = 'none'
        document.querySelector('.test').style.backgroundColor = 'red'
      }
      if (
        DeviceOrientationEvent &&
        DeviceOrientationEvent.requestPermission &&
        typeof DeviceOrientationEvent.requestPermission === 'function'
      ) {
        DeviceOrientationEvent.requestPermission();
        document.querySelector('.test').style.backgroundColor = 'yellow'
      }
    })

  }

}

window.addEventListener('load', () => {
  new Main()
})
