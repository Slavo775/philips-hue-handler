# philips-hue-handler
This little project allow connect and handle to philips hue bridge.

#run
`npm run start` or `yarn start`

#Hue test access key for my bridge
`22Z4LRQ8Q-0DGM3kTEgUUyDki00d5NV6GzU5VxWh`

#init hue bridge
First of all you need initializing hue bridge.
`await initBridge('https://bridgeUrl/', 'bridgeApiKey'`
This method returns Map of lights and groups.
All data from Hue is stored in model HuePropsModel
