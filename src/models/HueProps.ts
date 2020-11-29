import Light from './Light'
import Group from './Group'

export default class HueProps {
    lights: Map<number, Light>
    groups: Map<number, Group>
}
