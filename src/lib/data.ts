export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  location: string;
  availability: 'Available Today' | 'Next Available Tomorrow';
  avatar: string;
  dataAiHint: string;
};

export const doctors: Doctor[] = [
  { id: '1', name: 'Dr. Anjali Sharma', specialty: 'Cardiologist', location: 'Apollo Hospital, Delhi', availability: 'Available Today', avatar: 'https://placehold.co/100x100.png', dataAiHint: 'female doctor' },
  { id: '2', name: 'Dr. Vikram Singh', specialty: 'Neurologist', location: 'Fortis Hospital, Mumbai', availability: 'Available Today', avatar: 'https://placehold.co/100x100.png', dataAiHint: 'male doctor' },
  { id: '3', name: 'Dr. Priya Desai', specialty: 'Dermatologist', location: 'Max Healthcare, Bangalore', availability: 'Next Available Tomorrow', avatar: 'https://placehold.co/100x100.png', dataAiHint: 'female doctor portrait' },
  { id: '4', name: 'Dr. Rohan Mehra', specialty: 'Pediatrician', location: 'Artemis Hospital, Gurgaon', availability: 'Available Today', avatar: 'https://placehold.co/100x100.png', dataAiHint: 'male doctor portrait' },
  { id: '5', name: 'Dr. Sunita Patel', specialty: 'Gynecologist', location: 'Cloudnine Hospital, Pune', availability: 'Next Available Tomorrow', avatar: 'https://placehold.co/100x100.png', dataAiHint: 'doctor smiling' },
  { id: '6', name: 'Dr. Sameer Gupta', specialty: 'Orthopedic Surgeon', location: 'Medanta, Lucknow', availability: 'Available Today', avatar: 'https://placehold.co/100x100.png', dataAiHint: 'indian doctor' },
];

export type DiagnosticCenter = {
  id: string;
  name: string;
  location: string;
  tests: string[];
  logo: string;
  dataAiHint: string;
};

export const diagnosticCenters: DiagnosticCenter[] = [
  { id: '1', name: 'Dr. Lal PathLabs', location: 'Koramangala, Bangalore', tests: ['Blood Test', 'Urine Test', 'MRI Scan'], logo: 'https://placehold.co/200x200.png', dataAiHint: 'laboratory building' },
  { id: '2', name: 'Metropolis Healthcare', location: 'Andheri, Mumbai', tests: ['CT Scan', 'X-Ray', 'ECG'], logo: 'https://placehold.co/200x200.png', dataAiHint: 'modern building' },
  { id: '3', name: 'SRL Diagnostics', location: 'Connaught Place, Delhi', tests: ['Ultrasound', 'Thyroid Test', 'Vitamin D Test'], logo: 'https://placehold.co/200x200.png', dataAiHint: 'clinic exterior' },
];

export type Hospital = {
  id: string;
  name: string;
  location: string;
  facilities: string[];
  image: string;
  dataAiHint: string;
};

export const hospitals: Hospital[] = [
  { id: '1', name: 'Apollo Hospital', location: 'Sarita Vihar, Delhi', facilities: ['24/7 Emergency', 'ICU', 'Pharmacy'], image: 'https://placehold.co/400x250.png', dataAiHint: 'hospital building' },
  { id: '2', name: 'Fortis Hospital', location: 'Mulund, Mumbai', facilities: ['Multi-specialty', 'Ambulance Service', 'In-patient Care'], image: 'https://placehold.co/400x250.png', dataAiHint: 'modern hospital' },
  { id: '3', name: 'Manipal Hospital', location: 'Old Airport Road, Bangalore', facilities: ['Robotic Surgery', 'Cancer Care', 'Pediatrics'], image: 'https://placehold.co/400x250.png', dataAiHint: 'clinic building' },
];

export type Appointment = {
  id: string;
  doctor: string;
  specialty: string;
  date: string;
  time: string;
  type: 'Virtual' | 'In-Person';
};

export const appointments: Appointment[] = [
  { id: '1', doctor: 'Dr. Anjali Sharma', specialty: 'Cardiologist', date: '2024-08-15', time: '10:00 AM', type: 'Virtual' },
  { id: '2', doctor: 'Dr. Rohan Mehra', specialty: 'Pediatrician', date: '2024-08-16', time: '02:30 PM', type: 'In-Person' },
];

export type HealthRecord = {
  id: string;
  name: string;
  type: 'Prescription' | 'Test Report';
  date: string;
};

export const healthRecords: HealthRecord[] = [
  { id: '1', name: 'Dr. Vikram - Consultation.pdf', type: 'Prescription', date: '2024-07-20' },
  { id: '2', name: 'Complete Blood Count.pdf', type: 'Test Report', date: '2024-07-22' },
  { id: '3', name: 'Dr. Anjali - Follow-up.pdf', type: 'Prescription', date: '2024-07-28' },
];
