
// const TWEEN = require('@tweenjs/tween.js')
//
// function getRandomArbitrary (min, max) {
//     return Math.random() * (max - min) + min
// }
//
// class ScaleDemoGenerator {
//     constructor (store, interval = 500) {
//         this.store = store
//         this.interval = interval
//         this.intervalID = null
//
//         this.setup()
//     }
//
//     setup () {
//         this.tween = new TWEEN.Tween({ weight: 0.0 })
//         this.tween.to({ weight: 42.42 }, 3000)
//         this.tween.easing(TWEEN.Easing.Quadratic.InOut)
//         this.tween.onStart(function () {
//             this.store.commit('localconfig/setScaleStable', false)
//         })
//         this.tween.onComplete(function () {
//             this.store.commit('localconfig/setScaleStable', true)
//             const duration = getRandomArbitrary(1000, 5000)
//             const targetWeight = getRandomArbitrary(-0.5, 42.42)
//             this.tween.to({ weight: targetWeight }, duration)
//         })
//         this.tween.onUpdate(function (object) {
//             this.store.commit('localconfig/setTotalWeight', object.weight)
//         })
//     }
//
//     start () {
//         this.intervalID = setInterval(() => {
//             TWEEN.update()
//         }, this.interval)
//     }
//
//     stop () {
//         clearInterval(this.intervalID)
//     }
// }
//
// export default ScaleDemoGenerator
