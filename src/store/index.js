import { reactive, computed } from 'vue';
const STORAGE_KEY = 'doctor-app-v2';

function initialData(){
  return {
   doctors: [
  {
    id: 1,
    name: "Dr. Ayman Salah",
    specialty: "Cardiologist",
    location: "Cairo",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    slots: ["09:00", "10:00", "14:00"]
  },
  {
    id: 2,
    name: "Dr. Nour Hassan",
    specialty: "Dermatologist",
    location: "Giza",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    slots: ["11:00", "13:00", "16:00"]
  },
  {
    id: 3,
    name: "Dr. Omar Ali",
    specialty: "Dentist",
    location: "Alexandria",
    photo: "https://randomuser.me/api/portraits/men/85.jpg",
    slots: ["09:30", "12:00", "15:00"]
  },
  {
    id: 4,
    name: "Dr. Sara Kamal",
    specialty: "Pediatrician",
    location: "Cairo",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    slots: ["10:00", "12:30", "17:00"]
  },
  {
    id: 5,
    name: "Dr. Hossam Tarek",
    specialty: "Neurologist",
    location: "Cairo",
    photo: "https://randomuser.me/api/portraits/men/77.jpg",
    slots: ["09:00", "11:00", "14:30"]
  },
  {
    id: 6,
    name: "Dr. Mona Adel",
    specialty: "Psychologist",
    location: "Giza",
    photo: "https://randomuser.me/api/portraits/women/21.jpg",
    slots: ["10:00", "13:00", "15:30"]
  },
  {
    id: 7,
    name: "Dr. Ahmed Khaled",
    specialty: "Orthopedic",
    location: "Alexandria",
    photo: "https://randomuser.me/api/portraits/men/12.jpg",
    slots: ["09:00", "12:00", "16:00"]
  }
]
}
}

function load(){
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialData();
    const parsed = JSON.parse(raw);
    return {
      doctors: parsed.doctors || initialData().doctors,
      appointments: parsed.appointments || []
    };
  } catch(e){
    return initialData();
  }
}

function save(state){
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    doctors: state.doctors,
    appointments: state.appointments
  }));
}

export function useStore(){
  const state = reactive(load());

  const addAppointment = (appt) => {
    state.appointments.push(appt);
    save(state);
  };

  const removeAppointment = (id) => {
    const idx = state.appointments.findIndex(a => a.id === id);
    if (idx !== -1) {
      state.appointments.splice(idx,1);
      save(state);
    }
  };

  const getDoctorById = (id) => state.doctors.find(d => d.id === Number(id));

  const appointmentsByDoctor = (doctorId) => state.appointments.filter(a => a.doctorId === Number(doctorId));

  const allDoctors = computed(() => state.doctors);
  const allAppointments = computed(() => state.appointments);

  return { state, allDoctors, allAppointments, addAppointment, removeAppointment, getDoctorById, appointmentsByDoctor };
}
