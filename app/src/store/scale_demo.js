
const TWEEN = require('@tweenjs/tween.js')

export function getRandomArbitrary (min, max) {
    return Math.random() * (max - min) + min
}

export class ScaleDemoGenerator {
    constructor (store, interval = 500) {
        this.store = store
        this.interval = interval
        this.intervalID = null

        this.setup()
    }

    setup () {
        console.log('ScaleDemoGenerator setup')
        this.tween = new TWEEN.Tween({ weight: 0.0 })
        this.tween.to({ weight: 42.42 }, 3000)
        this.tween.easing(TWEEN.Easing.Quadratic.InOut)
        this.tween.onStart(() => {
            console.log('this', this)
            this.store.commit('setScaleStable', false)
        })
        this.tween.onComplete(() => {
            this.store.commit('setScaleStable', true)
            const duration = getRandomArbitrary(1000, 5000)
            const targetWeight = getRandomArbitrary(-0.5, 42.42)
            this.tween.to({ weight: targetWeight }, duration)
        })
        this.tween.onUpdate((object) => {
            // console.log('TWEEN onUpdate', object)
            this.store.commit('setTotalWeight', object.weight)
        })
    }

    start () {
        console.log('ScaleDemoGenerator start')
        this.intervalID = setInterval(() => {
            console.log('ScaleDemoGenerator tween update')
            TWEEN.update()
        }, this.interval)
        this.tween.start()
        return this
    }

    stop () {
        console.log('ScaleDemoGenerator stop')
        this.tween.stop()
        clearInterval(this.intervalID)
    }
}

export default ScaleDemoGenerator
