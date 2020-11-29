import Light from './models/Light'
import Group, { GroupActions, GroupState } from './models/Group'

export interface GroupFromApi {
    action: GroupActions
    class: string
    lights: string[]
    name: string
    recycle: boolean
    state: GroupState
    type: string
}

export const groupsToClass = async (
    groups: { [id: number]: GroupFromApi },
    lights: Map<number, Light>,
): Promise<Map<number, Group>> => {
    const groupModels = new Map<number, Group>()
    Object.keys(groups).forEach((key) => {
        const light = groups[+key]
        groupToClass(light, +key, lights).then((group) => groupModels.set(+key, group))
    })
    return groupModels
}

const groupToClass = async (group: GroupFromApi, id: number, lights: Map<number, Light>): Promise<Group> => {
    const groupModel = new Group()
    groupModel.id = id
    groupModel.action = group.action
    groupModel.class = group.class
    groupModel.name = group.name
    groupModel.recycle = group.recycle
    groupModel.state = group.state
    groupModel.type = group.type

    group.lights.forEach((lightId) => (groupModel.lights = [...groupModel.lights, lights.get(+lightId)]))

    return groupModel
}
