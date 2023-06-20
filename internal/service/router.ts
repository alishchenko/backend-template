import { Router } from 'express'

import { userRouter } from '@/routes'

const router = Router()

router.use('/users', userRouter)

export { router }
