export enum bridgeErrorCode {
    UNEXPECTED = 0,
    LIGHTS_AND_GROUPS_NOT_FOUND = 1,
}

const errorMessages: Record<bridgeErrorCode, string> = {
    [bridgeErrorCode.UNEXPECTED]: 'Unknown hue bridge error',
    [bridgeErrorCode.LIGHTS_AND_GROUPS_NOT_FOUND]: 'Lights or Groups not found!',
}
export class GeneralBridgeError extends Error {
    constructor(public errorCode: bridgeErrorCode) {
        super()
    }

    get errorMessage() {
        return errorMessages[this.errorCode]
    }
}
