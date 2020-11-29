import axios, { AxiosInstance } from 'axios'

let bridgeUrl = ''
let userName = ''
let baseApiUrl = `/api/:username`
export let namedRoutes: { base: string; lights: Record<string, string> }
export let baseApi: AxiosInstance

/**
 *
 * @param url
 * @param userNameLocal
 */
export const initAxios = async (url: string | undefined, userNameLocal: string | undefined): Promise<void> => {
    if (bridgeUrl === '' && !url) throw new Error('Bridge url is undefined!')
    if (userName === '' && !userNameLocal) throw new Error('Bridge username is undefined!')

    bridgeUrl = bridgeUrl === '' ? url : bridgeUrl
    userName = userName === '' ? userNameLocal : userName
    baseApiUrl = await baseApiUrl.replace(':username', userName)
    baseApi = axios.create({
        baseURL: bridgeUrl,
        withCredentials: false,
    })
    namedRoutes = {
        base: baseApiUrl,
        lights: {
            base: `${baseApiUrl}/lights`,
            new: `${baseApiUrl}/lights/new`,
            specific: `${baseApiUrl}/lights/:id`,
            state: `${baseApiUrl}/lights/:id/state`,
        },
    }
}

export const checkAxios = (): void => {
    console.log(bridgeUrl)
    console.log(userName)
}
