// (POST: /bill-pay/billing-details)
const BillPay = {
  "Billing_Address_same_as_working_address": true,
  "division": "string",
  "Group_invoice_by": "string",
  "VMS_worker_name": "string",
  "vms_id": "string",
  "invoice_content": "string",
  "expense_invoices": "string",
  "approvers": "string",
  "sow": "string",
  "activate_timesheets": true,
  "allow_to_submit_timesheets_on_the_portal": true,
  "timesheet_instructions": "string",
  "allow_to_submit_expenses_on_the_portal": true,
  "currency": "string",
  "label_bill_rate_as": "string",
  "billable_rates": "string",
  "overtime_exempt": true,
  "recurrent_expenses": "string",
  "default_discount": "string",
  "apply_discount_to_invoice": true,
  "net_bill": "string",
  "net_overtime": "string",
  "net_double_time": "string",
  "bill_rate": 0
}

// (POST: /add_candidate/create)
const AddCandidate = {
  "first_name": "string",
  "last_name": "string",
  "legal_name": "string",
  "suffix": "string",
  "email": "user@example.com",
  "address": "string",
  "city": "string",
  "state": "string",
  "pin_code": 2147483647,
  "country": "string",
  "home": "string",
  "mobile": "string",
  "work": "string",
  "ext": "string",
  "home_fax": "string",
  "Pay_rate": "string",
  "Bill_rate": "string"

}


// (POST: /add_candidate_and_send_credentails)
const AddCandidateAndSendCredentials = {
  "first_name": "string",
  "last_name": "string",
  "legal_name": "string",
  "suffix": "string",
  "email": "user@example.com",
  "address": "string",
  "city": "string",
  "state": "string",
  "pin_code": 2147483647,
  "country": "string",
  "home": "string",
  "mobile": "string",
  "work": "string",
  "ext": "string",
  "home_fax": "string",
  "Pay_rate": "string",
  "Bill_rate": "string"
}

// POST ('/pay-approval/approval-details')
const payApproval = {
  "start_date": "2023-11-03",
  "end_date": "2023-11-03",
  "job_diva_job_number": "string",
  "job_title": "string",
  "job_company": "string",
  "hire_history": "string",
  "employment_category": "string",
  "payment_frequency": "string",
  "currency": "string",
  "payable_rates": "string",
  "manage_stipends": "string",
  "overtime_exempt": true,
  "per_diem": "string",
  "other_expenses": "string",
  "outside_commission": "string",
  "fixed_costs": "string",
  "payroll_profile_id": 2147483647,
  "pay_rate": 0
}


// POST ('/ogin_user')

const LoginUser = {
  "email": "user@example.com",
  "password": "string"
}
