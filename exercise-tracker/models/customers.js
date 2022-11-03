import mongoose from 'mongoose'; 

// the purpose of a schema is a layout to the data you are retriving from your data base 
/* you can be as specific as you would like with the types of infromation you are getting from 
the data or posting to your data */
const custSchema = mongoose.Schema({
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    favfood: {
      type: Array,
      required: false, 
    },
  });
  
  const Customers = mongoose.model("Customers", custSchema);
  
  export default  Customers ; 