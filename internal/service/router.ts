import { Router } from 'express';
import * as users from './handlers'
const router = Router();


router.route('/users')
    .get(users.ListUsers) 
    .post(users.CreateUser) 

export {router};