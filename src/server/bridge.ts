import { Router } from 'express'
import { getBaseInformation } from '../bridge'
import axios from 'axios'

const bridgeRouter = Router()

bridgeRouter.get('/', async (req, res) => {
    const { lights, groups, bridgeConfig } = await getBaseInformation()
    res.status(200).send({ lights: [...lights], groups: [...groups], bridgeConfig })
})

export default bridgeRouter
