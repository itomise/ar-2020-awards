import box from './aframe-components/box'

if (module.hot) {
  module.hot.accept(console.error)
  // HMRに失敗した時に強制リロードする
  module.hot.dispose(() => {
    window.location.reload()
  });
}

box()

console.log('sl')
