import { Router } from 'express'
import * as users from './handlers'

const router = Router()

// FIXME: it think creating subrouters for each main endpoint will be good idea
// check usof for examples

router.route('/users')
  .get(users.ListUsers) 
  .post(users.CreateUser) 
  
router.route('/users/:id')
  .get(users.GetUserById) 
  .delete(users.DeleteUserById)
  .patch(users.UpdateUserById) 

export { router }