import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Doctors from "../pages/Doctors.vue";
import Booking from "../pages/Booking.vue";
import MyAppointments from "../pages/MyAppointments.vue";
import Contact from "../pages/Contact.vue";
import Dashboard from "../pages/DoctorDashboard.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/doctors", name: "Doctors", component: Doctors },
  {
    path: "/booking/:id",
    name: "Booking",
    component: Booking,
    props: true,
  },
  { path: "/appointments", name: "MyAppointments", component: MyAppointments },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
