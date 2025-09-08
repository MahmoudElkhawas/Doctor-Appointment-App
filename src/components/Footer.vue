<template>
  <footer class="footer mt-auto py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4">
          <h4 class="fw-bold text-primary">MediConnect</h4>
          <p class="small">
            MediCare is your trusted platform to find doctors, book appointments,
            and manage your healthcare with ease.
          </p>
        </div>

        <div class="col-md-4 mb-4">
          <h5 class="fw-bold">MediConnect</h5>
          <ul class="list-unstyled">
            <li><router-link to="/" class="footer-link">Home</router-link></li>
            <li><router-link to="/doctors" class="footer-link">Doctors</router-link></li>
            <li><router-link to="/appointments" class="footer-link">My Appointments</router-link></li>
            <li><router-link to="/contact" class="footer-link">Contact</router-link></li>
          </ul>
        </div>
        <div class="col-md-4 mb-4">
          <h5 class="fw-bold">Contact</h5>
          <p class="small mb-1">
            <i class="fas fa-envelope me-2 text-primary"></i>
            support@medicare.com
          </p>
          <p class="small mb-3">
            <i class="fas fa-phone me-2 text-primary"></i>
            +20 100 123 4567
          </p>
          <div>
            <a href="https://www.linkedin.com" target="_blank" class="me-3 social-link">
              <i class="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://github.com" target="_blank" class="me-3 social-link">
              <i class="fab fa-github fa-lg"></i>
            </a>
            <a href="mailto:support@medicare.com" class="social-link">
              <i class="fas fa-envelope fa-lg"></i>
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div class="text-center">
        <p class="mb-0 small">&copy; 2025 MediConnect. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--footer-bg);
  color: var(--text);
}
.footer-link {
  color: var(--text);
  text-decoration: none;
  display: block;
  margin: 5px 0;
  transition: color 0.3s;
}
.footer-link:hover {
  color: var(--primary);
}
.social-link {
  color: var(--text);
  transition: color 0.3s;
}
.social-link:hover {
  color: var(--primary);
}
</style>
