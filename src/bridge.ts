import { baseApi, namedRoutes } from './api/routes'
import { lightsToClass } from './lights'
import { groupsToClass } from './groups'
import Light from './models/Light'
import Group from './models/Group'
import { plainToClass } from 'class-transformer'
import BridgeConfig from './models/BridgeConfig'

export const getBaseInformation = async () => {
    const { data } = await baseApi.get('/')

    let lightsModels: Map<number, Light> = new Map<number, Light>()
    let groupModels: Map<number, Group> = new Map<number, Group>()
    if (data.lights) {
        lightsModels = await lightsToClass(data.lights)
    }
    if (data.groups) {
        groupModels = await groupsToClass(data.groups, lightsModels)
    }
    const bridgeConfig = await plainToClass(BridgeConfig, data.config)
    return { lights: lightsModels, groups: groupModels, bridgeConfig }
}
