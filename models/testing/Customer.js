import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
  {
    type: String,
    id: {
      type: Number,
      unique: true
    },
    attributes: {
      fname: String,
      lname: String,
      spouse: String,
      address1: String,
      address2: String,
      city: String,
      state: String,
      zip: String,
      sale_date: String,
      original_install_start_time: Date,
      contact_time: String,
      cross_street: String,
      credit_tracking: String,
      county: String,
      email: String,
      sellto_company_unique_id: String,
      business_name: String,
      business_contact: String,
      account_type: String,
      payment_received: Boolean,
      service_maintenance: Boolean,
      service_pulse: Boolean,
      service_tellular: Boolean,
      service_aarp: Boolean,
      fund_noc_date: String,
      is_starred: Boolean,
      timezone: String,
      latitude: Number,
      longitude: Number,
      adc_lead_id: Number,
      lang: String,
      adt_nape_serial_number: Number,
      analytics_type: String,
      analytics_id: String,
      record_type: String,
      home_ownership: String,
      primary_phone: String,
      work_phone: String,
      cell_phone: String,
      other_phone: String,
    },
  },
  { timestamps: Boolean }
);

const Customer = mongoose.model("Customer", CustomerSchema);
export default Customer;
