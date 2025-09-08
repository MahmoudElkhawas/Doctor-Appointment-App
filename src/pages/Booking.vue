<template>
  <div class="container py-5" v-if="doctor">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow border-0">
          <img :src="doctor.photo" class="card-img-top" :alt="doctor.name" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ doctor.name }}</h5>
            <p class="text-primary">{{ doctor.specialty }}</p>
            <p class="text-muted">{{ doctor.location }}</p>

            <form @submit.prevent="bookAppointment">
                <input v-model="form.name" type="text" class="form-control mb-2" placeholder="Your Name" required />
                <input v-model="form.phone" type="text" class="form-control mb-2" placeholder="Phone Number" required />
                <input v-model="form.email" type="email" class="form-control mb-2" placeholder="Email Address" required />
                <input v-model="form.date" type="date" class="form-control mb-2" required />

            <select v-model="form.time" class="form-control mb-3" required>
            <option value="" disabled>Select a time</option>
            <option v-for="slot in doctor.availableSlots" :key="slot" :value="slot">
              {{ slot }}
            </option>
            </select>

                <button class="btn btn-primary w-100" type="submit">Confirm Appointment</button>
            </form>


            <div v-if="success" class="alert alert-success mt-3">
              Appointment booked successfully!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-center py-5">
    <h4>Doctor not found</h4>
  </div>
</template>

<script>
export default {
  name: "Booking",
  props: ["id"],
  data() {
    return {
      doctor: null,
      form: { name: "", phone: "", email: "", date: "", time: "" },
      success: false,
    };
  },
  mounted() {
    const allDoctors = JSON.parse(localStorage.getItem("doctors")) || [];
    this.doctor = allDoctors.find((d) => d.id == this.id);
  },
  methods: {
    bookAppointment() {
      const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
      appointments.push({ ...this.form, doctor: this.doctor });
      localStorage.setItem("appointments", JSON.stringify(appointments));
      this.success = true;
      this.form = { name: "", phone: "", email: "", date: "", time: "" };
    },
  },
};
</script>
