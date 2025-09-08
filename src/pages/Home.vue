<template>
  <div>
    <section class="hero d-flex align-items-center text-center text-light">
      <div class="container" data-aos="fade-up">
        <h1 class="display-3 fw-bold mb-3" style="color: white !important;">Book Your Doctor Easily</h1>
        <p class="lead mb-4">Find trusted doctors, schedule appointments, and manage your healthcare in one place.</p>
        <router-link to="/doctors" class="btn btn-primary btn-lg me-2">Find Doctors</router-link>
        <router-link to="/appointments" class="btn btn-outline-light btn-lg">My Appointments</router-link>
      </div>
    </section>

    <section  class="py-5">
      <div id="to" class="container">
        <div class="row text-center mb-5">
          <h2 class="fw-bold" data-aos="fade-down">Why Choose MediCare?</h2>
        </div>
        <div class="row g-4 text-center">
          <div class="col-md-4" data-aos="fade-up">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <i class="fas fa-user-md fa-3x text-primary mb-3"></i>
                <h5 class="fw-bold">Trusted Specialists</h5>
                <p id="to">Access top doctors across various fields.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="150">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <i class="fas fa-calendar-check fa-3x text-success mb-3"></i>
                <h5 class="fw-bold">Easy Booking</h5>
                <p id="to">Schedule your appointment in just a few clicks.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <i class="fas fa-bell fa-3x text-warning mb-3"></i>
                <h5 class="fw-bold">Smart Reminders</h5>
                <p id="to">Get timely notifications for your visits.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-5 bg-light text-dark">
      <div class="container">
        <div class="row text-center mb-5">
          <h2  class="fw-bold" data-aos="fade-down">How It Works</h2>
        </div>
        <div class="row g-4">
          <div class="col-md-4" data-aos="zoom-in">
            <div class="p-4 text-center step-card">
              <span class="step-number">1</span>
              <h5 class="mt-3">Search Doctor</h5>
              <p>Find doctors by specialty, name, or location.</p>
            </div>
          </div>
          <div class="col-md-4" data-aos="zoom-in" data-aos-delay="150">
            <div class="p-4 text-center step-card">
              <span class="step-number">2</span>
              <h5 class="mt-3">Book Appointment</h5>
              <p>Select your slot and confirm instantly.</p>
            </div>
          </div>
          <div class="col-md-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="p-4 text-center step-card">
              <span class="step-number">3</span>
              <h5 class="mt-3">Visit Doctor</h5>
              <p>Attend your appointment with peace of mind.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section  class="cta text-light text-center">
      <div class="container py-5" data-aos="fade-up">
        <h2 class="fw-bold mb-4">Ready to book your appointment?</h2>
        <router-link to="/doctors" class="btn btn-lg btn-primary fw-bold" style="color: white !important;">Get Started</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default { name: "Home" };
</script>

<style scoped>
.hero {
  min-height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
    url("https://gov-web-sing.s3.ap-southeast-1.amazonaws.com/uploads/2023/1/Wordpress-featured-images-48-1672795987342.jpg") center/cover no-repeat;
}
.step-number {
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  background: var(--primary);
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.2rem;
}

</style>
