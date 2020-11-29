import initBridge from './init'
import HueProps from './models/HueProps'

export const HuePropsModel: HueProps = new HueProps()

const init = async () => await initBridge('https://192.168.31.36/', '22Z4LRQ8Q-0DGM3kTEgUUyDki00d5NV6GzU5VxWh')

const appDiv = document.querySelector('#app')
appDiv.append('Funguje funguje!')

document.addEventListener(
    'DOMContentLoaded',
    async () => {
        init().then(() => {})
    },
    false,
)

export default { initBridge, HueProps: HuePropsModel }
