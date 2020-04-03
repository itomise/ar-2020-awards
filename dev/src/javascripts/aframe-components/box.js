
export default function() {
  AFRAME.registerComponent('threejsthing', { // eslint-disable-line
    shema: {
      color: {
        default: '#000000'
      }
    },
    update: function() {
      var material = new THREE.MeshBasicMaterial({
        color: this.data.color,
        wireframe: false
      })
      var geometry = new THREE.BoxGeometry(1, 1, 1)

      this.el.setObject3D('mesh', new THREE.Mesh(geometry, material))
    },
    remove: function() {
      this.el.removeObject3D('mesh')
    }
  })
}
