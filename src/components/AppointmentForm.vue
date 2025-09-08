<template>
  <div class="card card-glass p-4" data-aos="fade-up">
    <form @submit.prevent="submit">
      <div class="mb-3">
        <label class="form-label">Patient Name</label>
        <input v-model="form.patientName" class="form-control" required />
      </div>

      <div class="row g-2 mb-3">
        <div class="col">
          <label class="form-label">Phone</label>
          <input v-model="form.phone" class="form-control" required />
        </div>
        <div class="col">
          <label class="form-label">Email</label>
          <input type="email" v-model="form.email" class="form-control" required />
        </div>
      </div>

      <div class="row g-2 mb-3">
        <div class="col">
          <label class="form-label">Date</label>
          <input type="date" v-model="form.date" class="form-control" required />
        </div>
        <div class="col">
          <label class="form-label">Time</label>
          <select v-model="form.time" class="form-select" required>
            <option v-for="slot in slots" :key="slot" :value="slot">{{ slot }}</option>
          </select>
        </div>
      </div>

      <div class="d-grid">
        <button class="btn btn-accent" type="submit">Confirm Appointment</button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: 'AppointmentForm',
  props: { doctor: { type: Object, required: true }, onConfirm: { type: Function, required: true } },
  setup(props) {
    const form = reactive({
      patientName: '',
      phone: '',
      email: '',
      date: '',
      time: props.doctor.slots && props.doctor.slots.length ? props.doctor.slots[0] : ''
    });

    const slots = props.doctor.slots || [];

    const submit = () => {
      if (!form.patientName || !form.phone || !form.email || !form.date || !form.time) {
        return alert('Please fill all fields');
      }
      const appointment = {
        id: Date.now(),
        doctorId: props.doctor.id,
        patientName: form.patientName,
        phone: form.phone,
        email: form.email,
        date: form.date,
        time: form.time
      };
      props.onConfirm(appointment);
    };

    return { form, submit, slots };
  }
};
</script>
