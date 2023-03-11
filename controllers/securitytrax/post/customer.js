import Customer from "../../../models/securitytrax/Customer.js";

export const postCustomers = async (req, res) => {
    try {
      
      const {
        id,
        accountNum,
        interactiveServicesId,
        name,
        businessName,
        installDate,
        monitoringCompany,
        monitoringPlan,
        mmr,
        dealerNumber,
        credit,
        salesRep,
        AdtSerialMan,
        docuSignEnvelope,
        tags,
        installed,
        equipmentTotalPoints,
        equipmentCost,
        equipmentCharge,
        paymentsTotal,
        paymentsCleared,
        paymentsUncleared,
        activation,
        billingType,
        equipmentChargeFromInstallAppointment,
        equipmentCostFromInstallAppointment,
        addressComplete,
        emergencyContacts,
        bankAccountNumber,
        bankRoutingNumber,
        creationUser,
        abortCode,
        installTech,
        cancellationReason,
        cancelled,
      } = req.body;
  
      const newCustomer = new Customer({
        id,
        accountNum,
        interactiveServicesId,
        name,
        businessName,
        installDate,
        monitoringCompany,
        monitoringPlan,
        mmr,
        dealerNumber,
        credit,
        salesRep,
        AdtSerialMan,
        docuSignEnvelope,
        tags,
        installed,
        equipmentTotalPoints,
        equipmentCost,
        equipmentCharge,
        paymentsTotal,
        paymentsCleared,
        paymentsUncleared,
        activation,
        billingType,
        equipmentChargeFromInstallAppointment,
        equipmentCostFromInstallAppointment,
        addressComplete,
        emergencyContacts,
        bankAccountNumber,
        bankRoutingNumber,
        creationUser,
        abortCode,
        installTech,
        cancelled,
        cancellationReason,
        cancelled,
        docuSignEnvelope,
      });
  
      const savedCustomer = await newCustomer.save();
  
      res.status(201).json(savedCustomer);
    } catch (err) {
      res.status(500).json({ error: err.message });
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