export interface Capabilities {
    certified: boolean
    control: {
        mindimlevel: number
        maxlumen: number
    }
    streaming: {
        renderer: boolean
        proxy: boolean
    }
}

export interface Config {
    archetype: string
    direction: string
    function: string
    startup: {
        mode: string
        configured: string
    }
}

export interface LightState {
    alert: string
    bri: number
    mode: string
    on: boolean
    reachable: boolean
}

export interface Swupdate {
    state: string
    lastintall: string
}

export default class Light {
    id: number
    capabilities: Capabilities
    config: Config
    manufacturername: string
    modelid: string
    name: string
    productid: string
    productname: string
    state: LightState
    swconfigid: string
    swupdate: Swupdate
    swversion: string
    type: string
    uniqueid: string
}
