import Customer from "../models/Testing/Customer.js";

export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.aggregate( [
      {$addFields: {"attributes._id": "$_id" }},
      {$addFields: {"attributes.id": "$id" }}, 

      {$replaceRoot: { newRoot: "$attributes" }}
   ] );
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postImportCustomers = async (req, res) => {
  try {

    const resp = await Customer.insertMany(req.body);

    res.status(200).json(resp);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postCustomers = async (req, res) => {
  try {
    
    const {
      firstName,
      lastName,
      email,
      location,
      phoneNumber,
      address1,
      city,
      zip,
    } = req.body;

    const newCustomer = new Customer({
      id:Math.random(),
      firstName,
      lastName,
      email,
      location,
      phoneNumber,
      address1,
      city,
      zip,
    });

    const savedCustomer = await newCustomer.save();

    res.status(201).json(savedCustomer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};