<template>
  <nav class="navbar navbar-expand-lg shadow-sm">
    <div class="container">
      <router-link class="navbar-brand fw-bold" to="/">⛨ MediConnect</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav me-3">
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/doctors">Doctors</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/appointments">My Appointments</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/dashboard">Dashboard</router-link></li>
        </ul>

        <button class="btn btn-outline-secondary" @click="toggleDark()">
          {{ isDark ? "🌙 Dark" : "☀️ Light" }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  selector: 'body',
  attribute: 'class',
  valueDark: 'dark-mode',
  valueLight: '',
})

const toggleDark = useToggle(isDark)
</script>
