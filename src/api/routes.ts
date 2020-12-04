import axios from 'axios'

export const namedRoutes = {
    lights: {
        base: `/lights`,
        new: `/lights/new`,
        specific: `/lights/:id`,
        state: `/lights/:id/state`,
    },
}

export const baseApi = axios.create({
    baseURL: `${process.env.HUE_BRIDGE_URL}` + `api/${process.env.HUE_API_KEY}`,
    withCredentials: false,
})
