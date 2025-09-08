<template>
  <div class="container py-5">
    <div class="section-box text-center mb-5" data-aos="fade-down">
      <h2 class="fw-bold">Meet Our Doctors</h2>
      <p class="text-muted">
        Choose from our experienced and trusted specialists
      </p>
    </div>

    <div class="row mb-4 justify-content-center">
      <div class="col-md-6">
        <input
          v-model="search"
          type="text"
          class="form-control form-control-lg"
          placeholder="Search by name or specialty..."
          data-aos="fade-up"
        />
      </div>
    </div>
    <div class="row g-4">
      <div
        v-for="doc in filteredDoctors"
        :key="doc.id"
        class="col-md-4 col-lg-3"
        data-aos="zoom-in"
      >
        <div class="card doctor-card h-100 shadow-sm border-0 text-center p-3">
          <img :src="doc.photo" class="doctor-img mx-auto mt-3" :alt="doc.name" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ doc.name }}</h5>
            <p class="text-primary mb-1">{{ doc.specialty }}</p>
            <p class="text-muted small">{{ doc.location }}</p>
            <router-link
              :to="{ name: 'Booking', params: { id: doc.id } }"
              class="btn btn-primary btn-sm mt-2"
            >
              Book Appointment
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Doctors",
  data() {
    return {
      search: "",
      doctors: [
        {
          id: 1,
          name: "Dr. Sarah Johnson",
          specialty: "Cardiologist",
          location: "Cairo, Egypt",
          photo:
            "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
          availableSlots: ["10:00 AM", "11:30 AM", "2:00 PM", "4:00 PM"],  
        },
        {
          id: 2,
          name: "Dr. Ahmed Mostafa",
          specialty: "Dentist",
          location: "Alexandria, Egypt",
          photo:
            "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80",
          availableSlots: ["10:00 AM", "11:30 AM", "2:00 PM", "4:00 PM"],  
        },
        {
          id: 3,
          name: "Dr. Mona Ali",
          specialty: "Dentist",
          location: "Giza, Egypt",
          photo:
            "https://t3.ftcdn.net/jpg/05/04/25/70/360_F_504257032_jBtwqNdvdMN9Xm6aDT0hcvtxDXPZErrn.jpg",
          availableSlots: ["10:00 AM", "11:30 AM", "2:00 PM", "4:00 PM"],  
        },
        {
          id: 4,
          name: "Dr. Omar Hassan",
          specialty: "Pediatrician",
          location: "Cairo, Egypt",
          photo:
            "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80",
          availableSlots: ["10:00 AM", "11:30 AM", "2:00 PM", "4:00 PM"],  
        },
      ],
    };
  },
  computed: {
    filteredDoctors() {
      return this.doctors.filter((doc) =>
        (doc.name + doc.specialty)
          .toLowerCase()
          .includes(this.search.toLowerCase())
      );
    },
  },
  mounted() {
    localStorage.setItem("doctors", JSON.stringify(this.doctors));
  },
};
</script>

<style scoped>
.doctor-card {
  transition: transform 0.3s, box-shadow 0.3s;
  border-radius: 15px;
}
.doctor-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}
.doctor-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--primary);
}
</style>
