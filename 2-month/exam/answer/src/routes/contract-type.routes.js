import { Router } from "express"
import {
   createContractType,
   deleteContractType,
   getAllContractTypes,
   getContractTypeById,
   updateContractType
} from "../controller/contract-type.controller.js";
export const contractTypeRoutes = Router();

contractTypeRoutes
   .get('/all', getAllContractTypes)
   .get('/:typeId', getContractTypeById)
   .post('/add', createContractType)
   .put('/update/:typeId', updateContractType)
   .delete('/remove/:typeId', deleteContractType)
