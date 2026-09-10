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

export interface PanelOrder {
  id: string;
  orderNumber: string;
  partName: string;
  partNumber: string;
  amount: number;
  date: string;
  status: "processing" | "shipped" | "delivered";
  trackingCode?: string;
}

export interface PanelServiceLog {
  id: string;
  serviceTitle: string;
  technicianName: string;
  date: string;
  status: "completed" | "scheduled";
  checklistScore: string;
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