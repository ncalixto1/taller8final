import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
  {
    id: Number,
    accountNum: String,
    interactiveServicesId: Number,
    name: String,
    businessName: String,
    installDate: String,
    monitoringCompany: String,
    monitoringPlan: String,
    mmr: Number,
    dealerNumber: Number,
    credit: Number,
    salesRep: String,
    adtSerialMan: Number,
    docuSignEnvelope: Boolean,
    tags: String,
    installed: Boolean,
    equipmentTotalPoints: Number,
    equipmentCost: Number,
    equipmentCharge: Number,
    paymentsTotal: Number,
    paymentsCleared: Number,
    paymentsUncleared: Number,
    activation: Number,
    billingType: String,
    equipmentChargeFromInstallAppointment: Number,
    equipmentCostFromInstallAppointment: Number,
    addressComplete: String,
    emergencyContacts: String,
    bankAccountNumber: Number,
    bankRoutingNumber: Number,
    creationUser: String,
    abortCode: String,
    installTech: String,
    cancelled: Boolean,
    cancellationReason: String,
    cancelled: Boolean,
    docuSignEnvelope: Boolean,
  },
  { timestamps: Boolean }
);

const Customer = mongoose.model("StCustomer", CustomerSchema);
export default Customer;
