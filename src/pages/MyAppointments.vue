<template>
  <div class="container py-5">
    <h2 class="fw-bold mb-4" data-aos="fade-down">My Appointments</h2>
    <div v-if="appointments.length" class="table-responsive" data-aos="fade-up">
      <table class="table table-striped align-middle">
        <thead class="table-primary">
          <tr>
            <th>Doctor</th>
            <th>Specialty</th>
            <th>Date</th>
            <th>Time</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(a, index) in appointments" :key="index">
            <td>{{ a.doctor.name }}</td>
            <td>{{ a.doctor.specialty }}</td>
            <td>{{ a.date }}</td>
            <td>{{ a.time }}</td>
            <td>
              <button @click="cancelAppointment(index)" class="btn btn-danger btn-sm">
                Cancel
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else class="text-primary">No appointments booked yet.</p>
  </div>
</template>

<script>
export default {
  name: "MyAppointments",
  data() {
    return { appointments: [] };
  },
  mounted() {
    this.appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  },
  methods: {
    cancelAppointment(index) {
      this.appointments.splice(index, 1);
      localStorage.setItem("appointments", JSON.stringify(this.appointments));
    },
  },
};
</script>
