import express from 'express'; 
import Customers  from '../models/customers.js'
const router = express.Router()

// we are using asyn because it takees time for the response to  come back 
router.get('/customers', async (req, res) => {
   try {
      const allCustomers = await Customers.find(); 
      res.status(200).json(allCustomers)
   }catch(err) {
      res.sendStatus(500)
   }
   
}); 
router.post('/customers', async (req, res) => {
   const customer = req.body; 

   const newCustomer = new Customers(customer); 

   try {
      await newCustomer.save(); 
      res.status(201).json(newCustomer); 
   }catch(err) {
      res.sendStatus(500)
   
   }
}); 

router.delete('/customers/:id', async (req, res) => {
   const id = req.params.id; 
   try {
      await Customers.findByIdAndDelete(id); 
      res.status(201).json('delete'); 
   }catch(err) {
      res.sendStatus(400)
   
   }
}); 
 

export default router; 