<template>
  <div class="card card-glass p-4" data-aos="fade-up">
    <form @submit.prevent="send">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input v-model="name" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" v-model="email" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Message</label>
        <textarea v-model="message" rows="4" class="form-control" required></textarea>
      </div>
      <div class="d-grid">
        <button class="btn btn-accent" type="submit">Send Message</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const name = ref(''); const email = ref(''); const message = ref('');
    const send = () => {
      if (!name.value || !email.value || !message.value) return alert('Please fill all fields');
      alert('Message sent. Thank you!');
      name.value = email.value = message.value = '';
    };
    return { name, email, message, send };
  }
};
</script>
