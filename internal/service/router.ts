import { Router } from 'express'

import { userRouter } from '@/routers'

const router = Router()

router.use('/users', userRouter)

export { router }
