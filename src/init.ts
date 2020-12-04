// import { initAxios, baseApi, namedRoutes, checkAxios } from './api/routes'
// import { lightsToClass } from './lights'
// import { groupsToClass } from './groups'
// import Group from './models/Group'
// import Light from './models/Light'
//
// const initBridge = async (
//     bridgeUrl: string,
//     userName: string,
// ): Promise<{ groups: Map<number, Group>; lights: Map<number, Light> }> => {
//     try {
//         await initAxios(bridgeUrl, userName)
//         checkAxios()
//         const bridgeData = await baseApi.get(namedRoutes.base)
//         if (!bridgeData) throw new Error('Bridge init fail! Try check Bridge IP or username')
//         const { data } = bridgeData
//         const lightsModel = await lightsToClass(data.lights)
//         const groupsModel = await groupsToClass(data.groups, lightsModel)
//
//         return { lights: lightsModel, groups: groupsModel }
//     } catch (e) {
//         throw e
//     }
// }
//
// export default initBridge
