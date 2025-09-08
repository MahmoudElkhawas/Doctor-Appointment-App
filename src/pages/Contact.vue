<template>
  <div class="container py-5">
    <h2 class="fw-bold mb-4 text-center" data-aos="fade-down">Contact Us</h2>
    <div class="row g-4">
      <div class="col-md-6" data-aos="fade-right">
        <img class="im" src="https://st2.depositphotos.com/3905143/9033/i/450/depositphotos_90334716-stock-photo-doctor-touching-contact-us-sign.jpg" alt="Contact">
      </div>
      <div class="col-md-6" data-aos="fade-left">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <form @submit.prevent="sendMessage">
              <div class="mb-3">
                <input v-model="form.name" type="text" class="form-control" placeholder="Your Name" required />
              </div>
              <div class="mb-3">
                <input v-model="form.email" type="email" class="form-control" placeholder="Your Email" required />
              </div>
              <div class="mb-3">
                <textarea v-model="form.message" rows="4" class="form-control" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-100">Send</button>
            </form>
            <div v-if="success" class="alert alert-success mt-3">
              Message sent successfully! 📩
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .im{
    border-radius: 10px;
  }


</style>
<script>
export default {
  name: "Contact",
  data() {
    return {
      form: { name: "", email: "", message: "" },
      success: false,
    };
  },
  methods: {
    sendMessage() {
      console.log("Message:", this.form);
      this.success = true;
      this.form = { name: "", email: "", message: "" };
    },
  },
};
</script>
