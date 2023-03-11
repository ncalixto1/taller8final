import Customer from "../../../models/securitytrax/Customer.js"

export const getCustomers = async (req, res) => {
  try {
    
    const customers = await Customer.find();

    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json("Nope");
  }
};