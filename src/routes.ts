import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { findDndClassController } from "./useCases/FindDndClass";
import { listDndClassesController } from "./useCases/ListDnDClasses";
import { listUserController } from "./useCases/ListUser";
import { loginUserController } from "./useCases/LoginUser";
import { updateUserController } from "./useCases/UpdateUser";
import { checkAuth } from "./middlewares/checkAuth";

const router = Router();

//users-routes
router.post('/users/register', (request, response) => {
  return createUserController.execute(request, response);
});

router.post('/login', (request, response) => {
  return loginUserController.execute(request, response);
});

router.put('/users/:userId', checkAuth, (request, response) => {
  return updateUserController.execute(request, response);
});

router.get('/users/:userId', (request, response) => {
  return listUserController.execute(request, response);
});

//classes-routes
router.get('/classes', (request, response) => {
  return listDndClassesController.execute(request, response);
});

router.get('/classes/:className', (request, response) => {
  return findDndClassController.execute(request, response);
});


export {router}