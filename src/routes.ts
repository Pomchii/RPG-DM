import { Router } from "express";
import { createUserController } from "./controllers/CreateUser";
import { findDndClassController } from "./controllers/FindDndClass";
import { listDndClassesController } from "./controllers/ListDnDClasses";
import { listUserController } from "./controllers/ListUser";

const router = Router();

//users-routes
router.post('/users/register', (request, response) => {
  return createUserController.execute(request, response);
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