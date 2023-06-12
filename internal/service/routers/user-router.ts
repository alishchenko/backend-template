import { Router } from 'express'

import * as users from '@/handlers'

const userRouter = Router()

userRouter.route('/')
  .get(users.listUsers) 
  .post(users.createUser) 
  
userRouter.route('/:id')
  .get(users.getUserById) 
  .delete(users.deleteUserById)
  .patch(users.updateUserById) 

export { userRouter }