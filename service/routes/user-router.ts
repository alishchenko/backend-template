import { Router } from 'express'

import { userController } from '@/controllers'

const userRouter = Router()

userRouter.route('/').get(userController.listUsers).post(userController.createUser)

userRouter
  .route('/:id')
  .get(userController.getUserById)
  .delete(userController.deleteUserById)
  .patch(userController.updateUserById)

export { userRouter }
