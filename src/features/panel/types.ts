export interface ElevatorPassport {
  buildingName: string;
  address: string;
  managerName: string;
  phone: string;
  stops: number;
  capacity: string;
  motorModel: string;
  controllerModel: string;
  standardStatus: "valid" | "expiring_soon" | "expired";
  standardExpiryDate: string;
  insurancePolicyNumber: string;
  insuranceExpiryDate: string;
  nextServiceDate: string;
}

export interface OrderProductItem {
  name: string;
  partNumber: string;
  brand: string;
  quantity: number;
  unitPrice: number;
  slug?: string;
  image?: string;
}

export interface PanelOrder {
  id: string;
  orderNumber: string;
  date: string;
  status: "processing" | "shipped" | "delivered" | "proforma";
  statusLabel: string;
  totalAmount: number;
  paymentStatus: "paid" | "pending" | "official_invoice";
  shippingCompany?: string;
  trackingCode?: string;
  destinationAddress: string;
  items: OrderProductItem[];
}

export interface PanelServiceLog {
  id: string;
  serviceTitle: string;
  type: "monthly" | "emergency" | "standard";
  technicianName: string;
  technicianLicense: string;
  technicianPhone: string;
  date: string;
  time: string;
  status: "completed" | "scheduled";
  checklistScore: string;
  motorRoomStatus: string;
  shaftStatus: string;
  cabinStatus: string;
  notes: string;
  signedByManager: boolean;
}

export interface PanelTicket {
  id: string;
  subject: string;
  department: string;
  status: "open" | "answered" | "closed";
  updatedAt: string;
}

export interface PanelData {
  passport: ElevatorPassport;
  metrics: {
    activeOrders: number;
    openTickets: number;
    daysToNextService: number;
  };
  recentOrders: PanelOrder[];
  recentServices: PanelServiceLog[];
  recentTickets: PanelTicket[];
}