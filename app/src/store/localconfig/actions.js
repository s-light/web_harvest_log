import { ScaleDemoGenerator } from '../scale_demo'

export function startScaleDemo (context) {
    console.log('action startScaleDemo')
    if (!context.state.demoHandler) {
        context.state.demoHandler = new ScaleDemoGenerator(context)
    }
    context.state.demoHandler.start()
    context.commit('setScaleUnit', 'kg')
    console.log('context.state.demoHandler', context.state.demoHandler)
    return context.state.demoHandler
}
export function stopScaleDemo (context) {
    console.log('action stopScaleDemo')
    context.state.demoHandler.stop()
}
