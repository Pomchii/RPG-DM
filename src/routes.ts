import { Router } from "express";
import { createUserController } from "./controllers/CreateUser";
import { findDndClassController } from "./controllers/FindDndClass";
import { listDndClassesController } from "./controllers/ListDnDClasses";
import { listUserController } from "./controllers/ListUser";
import { loginUserController } from "./controllers/LoginUser";
import { updateUserController } from "./controllers/UpdateUser";
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