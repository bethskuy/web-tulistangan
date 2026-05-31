<template>
  <!-- Layout utama dengan sistem kolom flexbox dan background dasar pekat -->
  <q-layout
    view="lHh Lpr lFf"
    style="background-color: #020617; display: flex; flex-direction: column; min-height: 100vh"
  >
    <!-- NAVBAR PREMIUM -->
    <q-header class="bg-white border-b border-slate-100 text-slate-900" flat>
      <q-toolbar class="max-w-7xl mx-auto h-24 px-4 row justify-between items-center no-wrap">
        <!-- SISI KIRI: Logo Branding Bethsbot -->
        <div class="row items-center col justify-start">
          <img
            src="logo-bethsbot.png"
            alt="Bethsbot Logo"
            class="custom-main-logo cursor-pointer transition-transform hover:scale-102"
            @click="navigateTo('/')"
          />
        </div>

        <!-- SISI TENGAH: Menu Navigasi Berjejer (Tetap Presisi di Tengah) -->
        <div class="gt-sm row items-center gap-xl text-subtitle2 text-weight-bold text-slate-600">
          <button
            @click="navigateTo('/')"
            style="background: none; border: none"
            class="text-blue-600 cursor-pointer hover:text-blue-700"
          >
            Home
          </button>
          <button
            @click="openDialog('about')"
            style="background: none; border: none"
            class="cursor-pointer hover:text-blue-600 transition"
          >
            About
          </button>
          <button
            @click="openDialog('terms')"
            style="background: none; border: none"
            class="cursor-pointer hover:text-blue-600 transition"
          >
            Terms
          </button>
          <button
            @click="openDialog('privacy')"
            style="background: none; border: none"
            class="cursor-pointer hover:text-blue-600 transition"
          >
            Privacy
          </button>
        </div>

        <!-- SISI KANAN: Tombol Aksi & Mobile Menu -->
        <div class="row items-center col justify-end gap-sm">
          <q-btn
            label="Mulai Nulis"
            color="blue-6"
            unelevated
            class="gt-sm text-weight-bold text-capitalize cursor-pointer"
            style="border-radius: 12px; padding: 10px 24px"
            @click="goToWorkspace"
          />

          <button
            class="lt-md mobile-menu-btn cursor-pointer"
            style="background: none; border: none; padding: 8px"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#334155"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>

            <!-- Dropdown Menu Mobile Premium Dark Glassmorphism -->
            <q-menu
              auto-close
              style="
                background: linear-gradient(135deg, #0f172a, #1e293b) !important;
                border: 1px solid rgba(34, 211, 238, 0.3) !important;
                border-radius: 16px !important;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5) !important;
              "
            >
              <q-list class="min-w-[200px] py-2 font-medium">
                <q-item
                  clickable
                  @click="navigateTo('/')"
                  class="custom-mobile-item active-theme-item"
                >
                  <q-item-section>Home</q-item-section>
                </q-item>
                <q-item clickable @click="openDialog('about')" class="custom-mobile-item">
                  <q-item-section>About</q-item-section>
                </q-item>
                <q-item clickable @click="openDialog('terms')" class="custom-mobile-item">
                  <q-item-section>Terms</q-item-section>
                </q-item>
                <q-item clickable @click="openDialog('privacy')" class="custom-mobile-item">
                  <q-item-section>Privacy</q-item-section>
                </q-item>

                <q-separator dark class="q-my-sm opacity-20" />

                <q-item clickable @click="goToWorkspace" class="mobile-btn-nulis text-weight-bold">
                  <q-item-section class="text-center">🚀 Mulai Nulis</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </button>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container style="flex-grow: 1; display: flex; flex-direction: column">
      <router-view style="flex-grow: 1" />
    </q-page-container>

    <footer class="main-footer">
      <div class="max-w-7xl mx-auto px-4 footer-container">
        <div class="footer-section footer-left">
          <a href="https://instagram.com/bethsphtr_" target="_blank" class="instagram-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <path d="M17.5 6.5h.01"></path>
            </svg>
            <span>@bethsphtr_</span>
          </a>
        </div>

        <div class="footer-section footer-center">
          &copy; 2026 <span class="text-weight-bold text-slate-700">bethsbot.id</span>. Solusi
          Mahasiswa Mager Indonesia.
        </div>

        <div class="footer-section footer-right">
          🔑 Made by <span class="dev-name">Refqy Obeth Sudiarman Sipahutar</span>
        </div>
      </div>
    </footer>

    <q-dialog v-model="dialog.show" backdrop-filter="blur(16px)">
      <q-card
        style="
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(30, 41, 59, 0.7));
          border: 1px solid rgba(34, 211, 238, 0.2);
          box-shadow:
            0 25px 50px -12px rgba(0, 0, 0, 0.7),
            0 0 40px rgba(34, 211, 238, 0.05);
          color: #ffffff;
          padding: 12px;
          max-width: 550px;
          width: 100%;
          border-radius: 24px;
        "
      >
        <q-card-section class="row items-center q-pb-none justify-between">
          <div
            style="
              font-size: 18px;
              font-weight: 800;
              color: #ffffff;
              letter-spacing: -0.01em;
              display: flex;
              align-items: center;
              gap: 8px;
            "
          >
            {{ dialog.title }}
          </div>
          <q-btn
            icon="close"
            flat
            round
            dense
            v-close-popup
            style="
              color: #94a3b8;
              background-color: rgba(255, 255, 255, 0.05);
              border-radius: 50%;
              padding: 4px;
            "
            class="close-btn-hover"
          />
        </q-card-section>

        <q-card-section
          style="
            font-size: 14px;
            color: #cbd5e1;
            line-height: 1.7;
            max-height: 60vh;
            overflow-y: auto;
            padding-top: 16px;
            white-space: pre-line;
          "
        >
          {{ dialog.content }}
        </q-card-section>

        <q-card-actions align="right" class="q-pt-md q-pb-xs">
          <q-btn
            label="Paham, Gaskeun! 🚀"
            color="cyan-5"
            text-color="slate-950"
            unelevated
            v-close-popup
            class="text-weight-bold text-capitalize"
            style="border-radius: 12px; padding: 8px 24px; font-size: 13px"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const dialog = reactive({
  show: false,
  title: '',
  content: '',
})

const contentData = {
  about: `Bethsbot adalah aplikasi "Bot Nulis Online" yang diciptakan khusus untuk membantu para mahasiswa yang mager atau seringkali dihadapkan dengan tugas tulis tangan manual yang melelahkan.\n\nDengan memanfaatkan teknologi HTML5 Canvas, Bethsbot mampu mengubah ketikan teks digital biasa menjadi visual kertas bergaris yang estetik lengkap dengan gaya tulisan tangan yang natural dalam hitungan detik. Selesaikan tugas kuliah lu tanpa ribet beli kertas dan pulpen!`,
  terms: `1. Layanan Bethsbot disediakan secara 100% gratis untuk tujuan produktivitas edukasi mahasiswa.\n\n2. Pengguna bertanggung jawab penuh atas segala konsekuensi akademis yang timbul dari pengerjaan atau penggunaan hasil gambar bot ini di kampus masing-masing.\n\n3. Dilarang keras meretas, merusak, atau menyalahgunakan infrastruktur sistem keamanan Bethsbot.`,
  privacy: `1. Seluruh teks tugas, nama, dan NIM yang lu ketikkan di panel input Bethsbot diproses murni secara lokal (Client-Side) langsung di dalam browser lu.\n\n2. Bethsbot tidak menyimpan, merekam, ataupun mengirimkan data teks tugas lu ke server database luar mana pun.\n\n3. File gambar tugas yang lu unduh (.JPG) di-generate secara instan tanpa ada campur tangan perantara pihak ketiga.`,
}

const navigateTo = (path) => {
  router.push(path)
}
const goToWorkspace = () => {
  router.push('/nulis')
}

const openDialog = (type) => {
  if (type === 'about') {
    dialog.title = 'ℹ️ Tentang Bethsbot'
    dialog.content = contentData.about
  } else if (type === 'terms') {
    dialog.title = '📜 Terms of Service'
    dialog.content = contentData.terms
  } else if (type === 'privacy') {
    dialog.title = '🔒 Privacy Policy'
    dialog.content = contentData.privacy
  }
  dialog.show = true
}
</script>

<style scoped>
.gap-xl > * + * {
  margin-left: 32px;
}

/* ==========================================================================
   DROPDOWN MOBILE DESIGN PREMIUM DARK GLASSMORMISM
   ========================================================================== */
.mobile-dropdown-premium {
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(30, 41, 59, 0.92)) !important;
  backdrop-filter: blur(12px) !important;
  border: 1px solid rgba(34, 211, 238, 0.25) !important;
  border-radius: 16px !important;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5) !important;
  padding: 6px 0;
}

.custom-mobile-item {
  font-size: 14px;
  font-weight: 700;
  color: #e2e8f0 !important;
  letter-spacing: 0.02em;
  transition: all 0.2s ease;
  margin: 3px 8px;
  border-radius: 8px;
  padding: 10px 16px;
}

.custom-mobile-item:hover {
  background: rgba(34, 211, 238, 0.15) !important;
  color: #22d3ee !important;
}

.active-theme-item {
  color: #22d3ee !important;
  background: rgba(34, 211, 238, 0.08);
}

.mobile-btn-nulis {
  background: #22d3ee !important;
  color: #020617 !important;
  margin: 6px 8px 3px 8px;
  border-radius: 10px;
  transition: all 0.2s ease;
}
.mobile-btn-nulis:hover {
  box-shadow: 0 0 15px rgba(34, 211, 238, 0.5);
}

/* ==========================================================================
   FIXED LOGO DESIGN: UP MAKSIMAL KE 110PX BIAR SUPER GEDE & JOSS!
   ========================================================================== */
.custom-main-logo {
  height: 110px !important; /* FIXED: Di-up maksimal lagi biar logo lu kelihatan sangat dominan and berkelas */
  width: auto !important;
  object-fit: contain !important;
  display: block;
  margin-left: -8px;
}

/* Hover Effect Logo */
.custom-main-logo:hover {
  transform: scale(1.02);
  transition: transform 0.2s ease;
}

/* ==========================================================================
   STYLE FOOTER DEFAULT (DESKTOP)
   ========================================================================== */
.main-footer {
  background-color: #ffffff;
  border-top: 1px solid #e2e8f0;
  color: #94a3b8;
  width: 100%;
  margin-top: auto;
  padding: 24px 0;
}
.footer-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-size: 13px;
}
.footer-section {
  display: flex;
  flex: 1;
}
.footer-left {
  justify-content: flex-start;
}
.footer-center {
  justify-content: center;
  text-align: center;
  font-size: 12px;
}
.footer-right {
  justify-content: flex-end;
  color: #64748b;
  font-weight: 600;
}
.instagram-link {
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: #64748b;
  font-weight: 600;
  transition: all 0.2s ease;
}
.instagram-link:hover {
  color: #2563eb !important;
  transform: translateY(-1px);
}
.dev-name {
  color: #2563eb;
}
.close-btn-hover:hover {
  color: #ffffff !important;
  background-color: rgba(239, 68, 68, 0.2) !important;
  transition: all 0.2s ease;
}

@media (max-width: 1023px) {
  .footer-container {
    flex-direction: column !important;
    text-align: center !important;
    gap: 12px !important;
  }
  .footer-section {
    flex: none !important;
    justify-content: center !important;
    text-align: center !important;
    width: 100% !important;
  }
}
</style>
