import { Router } from 'express';
import * as users from './handlers';
const router = Router();


router.route('/users')
  .get(users.ListUsers) 
  .post(users.CreateUser); 
router.route('/users/:id')
  .get(users.GetUserById) 
  .delete(users.DeleteUserById)
  .patch(users.UpdateUserById); 

export { router };