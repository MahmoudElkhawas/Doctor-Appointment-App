<template>
  <div class="card card-glass h-100" data-aos="fade-left">
    <div class="row g-0 align-items-center">
      <div class="col-auto p-3">
        <div class="rounded-circle d-flex align-items-center justify-content-center" style="width:72px;height:72px;background:linear-gradient(90deg,#0d6efd,#6a5af9);font-weight:700;">
          {{ initials }}
        </div>
      </div>
      <div class="col">
        <div class="card-body">
          <h5 class="card-title mb-1">{{ doctor.name }}</h5>
          <p class="muted mb-2 small">{{ doctor.specialty }} • {{ doctor.location }}</p>
          <div class="mb-2">
            <small class="muted">Slots:</small>
            <div class="mt-2">
              <span v-for="(s,i) in doctor.slots" :key="i" class="badge bg-secondary me-1">{{ s }}</span>
            </div>
          </div>
          <div class="d-grid">
            <router-link :to="{ name: 'Booking', params: { id: doctor.id } }" class="btn btn-accent">Book Appointment</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoctorCard',
  props: { doctor: { type: Object, required: true } },
  computed: {
    initials() {
      return this.doctor.name.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase();
    }
  }
};
</script>
