<template>
  <div class="container py-5">
    <h2 class="fw-bold mb-4" data-aos="fade-down">Doctor Dashboard</h2>
    <div v-if="appointments.length" class="table-responsive" data-aos="fade-up">
      <table class="table table-hover align-middle">
        <thead class="table-dark">
          <tr>
            <th>Patient</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(a, index) in appointments" :key="index">
            <td>{{ a.name }}</td>
            <td>{{ a.email }}</td>
            <td>{{ a.phone }}</td>
            <td>{{ a.doctor.name }}</td>
            <td>{{ a.date }}</td>
            <td>{{ a.time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else class="text-primary">No appointments booked yet.</p>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return { appointments: [] };
  },
  mounted() {
    this.appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  },
};
</script>
