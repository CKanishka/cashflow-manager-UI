export const FACEBOOK_AUTH_LINK = 'https://localhost:5000/auth/facebook';
export const GOOGLE_AUTH_LINK = 'https://localhost:5000/auth/google';
export const BASE_URL = 'http://ec2-52-66-210-39.ap-south-1.compute.amazonaws.com:8081';

export const PaymentModes = [
  { label: 'Cash', value: 'CASH' },
  { label: 'Debit Card', value: 'DEBIT_CARD' },
  { label: 'Credit Card', value: 'CREDIT_CARD' },
  { label: 'UPI', value: 'UPI' },
];

export const PaymentModeLabelMap = {
  'CASH':'Cash',
  'DEBIT_CARD':'Debit Card',
  'CREDIT_CARD':'Credit Card',
  'UPI':'UPI'
}

export const PaymentStatuses = [
  { label: 'Paid', value: 'PAID' },
  { label: 'Not Paid', value: 'NOT_PAID' },
];

export const PaymentStatusLabelMap = {
  'PAID': 'Paid',
  'NOT_PAID': 'Not Paid',
};

export const Categories = [
  { label: 'Sales', value: 'SALES' },
  { label: 'Purchase', value: 'PURCHASE' },
  { label: 'Employee', value: 'EMPLOYEE' },
  { label: 'Tax', value: 'TAX' },
  { label: 'Asset Liquidation', value: 'ASSET_LIQUIDATION' },
];

export const DefaultTransaction = {
  userId: '2e107775-2b0d-4e24-af6c-8766c042fb09',
  amount: 0,
  time: Date.now(),
  paymentStatus: '',
  paymentMode: '',
  category: '',
  entityId: '',
  remarks: '',
};

export const DefaultEntity = {
  userId:'2e107775-2b0d-4e24-af6c-8766c042fb09',
  name: '',
  address: '',
  contact: '',
}