<template>
  <div class="error-wrapper">
    <div class="error-container">
      <!-- GLOWING EFFECT BACKGROUND -->
      <div class="absolute-glow"></div>

      <!-- KONTEN UTAMA -->
      <div class="error-content animate-fade-in">
        <!-- ANGKA 404 CYAN NEON -->
        <h1 class="error-code">4<span class="text-cyan animate-pulse-slow">0</span>4</h1>

        <!-- JUDUL ERROR -->
        <h2 class="error-title">Halaman Hilang di Ruang Angkasa 🚀</h2>

        <!-- DESKRIPSI -->
        <p class="error-description">
          Waduh bro, sepertinya halaman yang lu cari gak ketemu atau udah dipindahkan ke dimensi
          lain. Tenang, jangan panik, lu bisa balik lagi ke markas utama Bethsbot lewat tombol di
          bawah.
        </p>

        <!-- TOMBOL BACK TO HOME -->
        <button class="btn-back-home" @click="goToHome">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="btn-icon"
          >
            <polyline points="9 10 4 15 9 20"></polyline>
            <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
          </svg>
          <span>Balik ke Markas Utama</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => {
  router.push('/')
}
</script>

<style scoped>
/* ============================================================
   MASTER WRAPPER (DARK MODE FUTURISTIK)
   ============================================================ */
.error-wrapper {
  background: #020617;
  color: #ffffff;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
}

.error-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  width: 100%;
  max-width: 600px;
  text-align: center;
  z-index: 1;
}

/* ============================================================
   GLOWING BACKGROUND EFFECT
   ============================================================ */
.absolute-glow {
  position: absolute;
  width: 300px;
  height: 300px;
  background: rgba(34, 211, 238, 0.15);
  filter: blur(80px);
  border-radius: 50%;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* ============================================================
   TYPOGRAPHY & CONTENT
   ============================================================ */
.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.error-code {
  font-size: clamp(90px, 15vw, 160px);
  font-weight: 900;
  line-height: 1;
  margin: 0;
  letter-spacing: -0.05em;
  color: #ffffff;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}

.text-cyan {
  color: #22d3ee;
  text-shadow: 0 0 40px rgba(34, 211, 238, 0.6);
}

.error-title {
  font-size: clamp(20px, 4vw, 28px);
  font-weight: 800;
  margin: 0;
  color: #f8fafc;
  letter-spacing: -0.02em;
}

.error-description {
  font-size: clamp(13px, 3vw, 15px);
  color: #94a3b8;
  line-height: 1.6;
  max-width: 480px;
  margin: 0 0 12px 0;
}

/* ============================================================
   PREMIUM BUTTON BUTTON
   ============================================================ */
.btn-back-home {
  background: #22d3ee;
  color: #020617;
  border: none;
  font-weight: 800;
  padding: 14px 28px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(34, 211, 238, 0.2);
}

.btn-back-home:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 24px rgba(34, 211, 238, 0.4);
  background: #06b6d4;
}

.btn-back-home:active {
  transform: translateY(-1px);
}

.btn-icon {
  transition: transform 0.2s ease;
}

.btn-back-home:hover .btn-icon {
  transform: translateX(-3px);
}

/* ============================================================
   ANIMATIONS
   ============================================================ */
.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-pulse-slow {
  animation: pulseGlow 3s infinite ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulseGlow {
  0%,
  100% {
    opacity: 1;
    filter: drop-shadow(0 0 15px rgba(34, 211, 238, 0.6));
  }
  50% {
    opacity: 0.8;
    filter: drop-shadow(0 0 5px rgba(34, 211, 238, 0.2));
  }
}
</style>
