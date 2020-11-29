import Light, { Capabilities, Config, LightState, Swupdate } from './models/Light'

export interface LightFromApi {
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

export const lightsToClass = async (lights: { [id: number]: LightFromApi }): Promise<Map<number, Light>> => {
    const lightModels = new Map<number, Light>()
    Object.keys(lights).forEach((key) => {
        const light = lights[+key]
        lightToClass(light, +key).then((light) => lightModels.set(+key, light))
    })
    return lightModels
}

const lightToClass = async (light: LightFromApi, id: number): Promise<Light> => {
    const lightModel = new Light()
    lightModel.id = id
    lightModel.capabilities = light.capabilities
    lightModel.config = light.config
    lightModel.manufacturername = light.manufacturername
    lightModel.modelid = light.modelid
    lightModel.name = light.name
    lightModel.productid = light.productid
    lightModel.productname = light.productname
    lightModel.state = light.state
    lightModel.swconfigid = light.swconfigid
    lightModel.swupdate = light.swupdate
    lightModel.swversion = light.swversion
    lightModel.type = light.type
    lightModel.uniqueid = light.uniqueid

    return lightModel
}
