import Light from './Light'

export interface GroupActions {
    on: boolean
    bri: number
    alert: string
}

export interface GroupState {
    all_on: boolean
    any_on: boolean
}

export default class Group {
    id: number
    action: GroupActions
    class: string
    lights: Light[] = []
    name: string
    recycle: boolean
    state: GroupState
    type: string
}
