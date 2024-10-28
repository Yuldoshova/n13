import { Router } from "express"
import {
   createCustomer,
   deleteCustomer,
   getAllCustomers,
   getAllDebtorCustomers,
   getCustomerById,
   updateCustomer
} from "../controller/customer.controller.js";
export const customerRoutes = Router();

customerRoutes
   .get('/all', getAllCustomers)
   .get('/:customerId', getCustomerById)
   .post('/add', createCustomer)
   .put('/update/:customerId', updateCustomer)
   .delete('/remove/:customerId', deleteCustomer)
   .get('/debtor-customers', getAllDebtorCustomers);
