
const TWEEN = require('@tweenjs/tween.js')

export function getRandomArbitrary (min, max) {
    return Math.random() * (max - min) + min
}

export class ScaleDemoGenerator {
    constructor (store, interval = 200) {
        this.store = store
        this.interval = interval
        this.intervalID = null
        this.tweenValueObj = {
            weight: 0
        }
        this.setup()
    }

    setup () {
        console.log('ScaleDemoGenerator setup')
        this.tweenA = this.setupTween()
        this.tweenB = this.setupTween()
        this.tweenA.chain(this.tweenB)
        this.tweenB.chain(this.tweenA)
    }

    setupTween () {
        const tweenInstance = new TWEEN.Tween(this.tweenValueObj)
        const duration = getRandomArbitrary(2000, 8000)
        const durationDelay = getRandomArbitrary(500, 2000)
        const targetWeight = getRandomArbitrary(-0.5, 42.42)
        tweenInstance.to({ weight: targetWeight }, duration)
        tweenInstance.delay(durationDelay)
        tweenInstance.easing(TWEEN.Easing.Quadratic.InOut)
        tweenInstance.onStart(() => {
            console.log('tween.onStart')
            this.store.commit('setScaleStable', false)
        })
        tweenInstance.onComplete(() => {
            console.log('ScaleDemoGenerator tween completed')
            this.store.commit('setScaleStable', true)
            // prepare next iteration
            const duration = getRandomArbitrary(3000, 15000)
            const durationDelay = getRandomArbitrary(5000, 5000)
            const targetWeight = getRandomArbitrary(-0.5, 42.42)
            tweenInstance.to({ weight: targetWeight }, duration)
            tweenInstance.delay(durationDelay)
        })
        tweenInstance.onUpdate((tweenObj) => {
            // console.log('tweenObj', tweenObj)
            if (tweenObj.weight) {
                this.store.commit('setTotalWeight', tweenObj.weight.toFixed(2))
            }
            // return tweenObj.weight.toFixed(2)
        })
        return tweenInstance
    }

    start () {
        console.log('ScaleDemoGenerator start')
        if (this.intervalID) {
            this.stop()
        }
        this.intervalID = setInterval(() => {
            // console.log('ScaleDemoGenerator tween update')
            TWEEN.update()
        }, this.interval)
        this.tweenA.start()
    }

    stop () {
        console.log('ScaleDemoGenerator stop')
        this.tweenA.stop()
        this.tweenB.stop()
        clearInterval(this.intervalID)
        this.intervalID = null
    }
}

export default ScaleDemoGenerator
