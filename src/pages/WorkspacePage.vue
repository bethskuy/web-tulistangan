<template>
  <div class="workspace-wrapper">
    <header class="navbar-premium">
      <div class="nav-brand" @click="backToHome">
        <div class="back-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </div>
        <span class="brand-text">Bethsbot <span class="text-cyan">Workspace</span></span>
      </div>
      <div class="nav-actions">
        <button class="btn-download-premium" @click="downloadImage">
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
            class="btn-icon"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span class="btn-label">Download JPG</span>
        </button>
      </div>
    </header>

    <div class="main-dashboard">
      <aside class="side-panel">
        <q-scroll-area v-if="!isMobile" class="full-height px-md">
          <div class="q-py-md">
            <template v-if="true"></template>

            <div class="glass-card">
              <div class="card-label">⚙️ Kertas &amp; Gaya Font</div>
              <div class="row q-col-gutter-sm">
                <div class="col-6">
                  <div class="input-field-group">
                    <label>Pilih Model Font (Koleksi Lu)</label>
                    <select v-model="state.activeFont" @change="loadAndRenderFont">
                      <option value="A Casual Handwritten Pen">
                        ✏️ A Casual Handwritten Pen (Recommended) ⭐
                      </option>
                      <option value="Edoms Handwriting Normal">✏️ Edoms Handwriting Normal</option>
                      <option value="Kempton Demo Handwriting">✏️ Kempton Demo Handwriting</option>
                      <option value="QE Braden Hill">✏️ QE Braden Hill</option>
                      <option value="QE Dave Mergens">✏️ QE Dave Mergens</option>
                      <option value="QE David Reid">✏️ QE David Reid</option>
                      <option value="QE Sam Roberts 2">✏️ QE Sam Roberts 2</option>
                      <option value="QE Tony Flores">✏️ QE Tony Flores</option>
                    </select>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-field-group">
                    <label>Pilih Jenis Kertas Buku</label>
                    <select v-model="state.activePaper" @change="loadPaperTemplate">
                      <option value="hvs_polos">📄 Kertas HVS Putih Polos ✨</option>
                      <option value="buku 1">📖 Koleksi Buku Rumah 1</option>
                      <option value="buku 2">📖 Koleksi Buku Rumah 2</option>
                      <option value="buku 3">📖 Koleksi Buku Rumah 3</option>
                      <option value="buku 4">📖 Koleksi Buku Rumah 4</option>
                      <option value="buku 5">📖 Koleksi Buku Rumah 5</option>
                      <option value="buku 6">📖 Koleksi Buku Rumah 6</option>
                      <option value="buku 7">📖 Koleksi Buku Rumah 7</option>
                      <option value="buku 8">📖 Koleksi Buku Rumah 8</option>
                      <option value="kertas 1">📄 Custom Kertas Rumah 1</option>
                      <option value="kertas 2">📄 Custom Kertas Rumah 2</option>
                      <option value="custom_upload">📸 Upload Foto Baru Manual...</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="row q-mt-sm" v-if="state.activePaper === 'custom_upload'">
                <div class="col-12">
                  <div class="input-field-group">
                    <label for="paper-uploader-desktop" class="custom-file-upload">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        style="margin-right: 6px"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                      </svg>
                      {{ state.uploadedPaperName || 'Browse Foto Kertas Lain Lu' }}
                    </label>
                    <input
                      id="paper-uploader-desktop"
                      type="file"
                      accept="image/*"
                      @change="handleCustomPaperUpload"
                      style="display: none"
                    />
                  </div>
                </div>
              </div>

              <div class="row q-col-gutter-sm q-mt-xs">
                <div class="col-6">
                  <div class="input-field-group">
                    <label>Pilihan Warna Tinta</label>
                    <select v-model="state.inkColorHex" @change="renderCanvas">
                      <option value="#0f172a">⚫ Hitam Pekat Gel</option>
                      <option value="#1d4ed8">🔵 Biru Standard Sekolah</option>
                      <option value="#2563eb">🔷 Biru Muda Pulpen</option>
                      <option value="#dc2626">🔴 Merah Koreksi Guru</option>
                    </select>
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-field-group">
                    <label>Hari &amp; Tanggal Tugas</label>
                    <input
                      type="date"
                      v-model="state.tanggalSelect"
                      @change="formatAndRenderDate"
                      class="calendar-input"
                    />
                  </div>
                </div>
              </div>

              <q-separator dark class="q-my-md opacity-20" />

              <div class="card-label" style="color: #a7f3d0">📐 Kalibrasi Baris Materi Utama</div>
              <div class="row q-col-gutter-sm">
                <div class="col-6">
                  <div class="input-field-group">
                    <label>Ukuran Huruf Teks ({{ state.fontSize }}px)</label>
                    <input
                      type="range"
                      min="15"
                      max="40"
                      v-model.number="state.fontSize"
                      @input="renderCanvas"
                      class="custom-slider"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-field-group">
                    <label>Jarak Garis Buku ({{ state.lineHeight }}px)</label>
                    <input
                      type="range"
                      min="20"
                      max="60"
                      v-model.number="state.lineHeight"
                      @input="renderCanvas"
                      class="custom-slider"
                    />
                  </div>
                </div>
              </div>
              <div class="row q-col-gutter-sm q-mt-xs">
                <div class="col-6">
                  <div class="input-field-group">
                    <label>Margin Kiri Huruf ({{ state.paddingLeft }}px)</label>
                    <input
                      type="range"
                      min="10"
                      max="250"
                      v-model.number="state.paddingLeft"
                      @input="renderCanvas"
                      class="custom-slider"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-field-group">
                    <label>Awal Baris 1 Materi ({{ state.startLinesY }}px)</label>
                    <input
                      type="range"
                      min="50"
                      max="400"
                      v-model.number="state.startLinesY"
                      @input="renderCanvas"
                      class="custom-slider"
                    />
                  </div>
                </div>
              </div>

              <q-separator dark class="q-my-md opacity-20" />

              <div class="card-label" style="color: #fef08a">📐 Kalibrasi Jarak Identitas Atas</div>
              <div class="row q-col-gutter-sm">
                <div class="col-6">
                  <div class="input-field-group">
                    <label>Tinggi Blok Identitas Y ({{ state.headerStartY }}px)</label>
                    <input
                      type="range"
                      min="10"
                      max="200"
                      v-model.number="state.headerStartY"
                      @input="renderCanvas"
                      class="custom-slider-yellow"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-field-group">
                    <label>Geser Kanan Identitas X ({{ state.headerStartX }}px)</label>
                    <input
                      type="range"
                      min="10"
                      max="250"
                      v-model.number="state.headerStartX"
                      @input="renderCanvas"
                      class="custom-slider-yellow"
                    />
                  </div>
                </div>
              </div>
              <div class="row q-mt-xs">
                <div class="col-12">
                  <div class="input-field-group">
                    <label>Renggang Jarak Antar Identitas ({{ state.headerLineGap }}px)</label>
                    <input
                      type="range"
                      min="10"
                      max="50"
                      v-model.number="state.headerLineGap"
                      @input="renderCanvas"
                      class="custom-slider-yellow"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="glass-card q-mt-md">
              <div class="card-label">👤 Identitas Atas (Sejajar Tanggal)</div>
              <div class="row q-col-gutter-sm">
                <div class="col-6">
                  <div class="input-field-group">
                    <label>Nama Anda</label>
                    <input
                      type="text"
                      v-model="state.nama"
                      placeholder="Contoh: Defnilayz"
                      @input="renderCanvas"
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-field-group">
                    <label>Kelas / NIM / Instansi</label>
                    <input
                      type="text"
                      v-model="state.nim"
                      placeholder="Contoh: XII MIPA 2"
                      @input="renderCanvas"
                    />
                  </div>
                </div>
              </div>
              <div class="input-field-group q-mt-sm">
                <label>Jurusan / Mata Pelajaran</label>
                <input
                  type="text"
                  v-model="state.jurusan"
                  placeholder="Contoh: Bahasa Indonesia"
                  @input="renderCanvas"
                />
              </div>
            </div>

            <div class="glass-card q-mt-md flex-column" style="min-height: 350px">
              <div class="row justify-between items-center q-mb-sm">
                <div class="card-label q-mb-none">📝 Teks Materi Tugas</div>
                <button class="text-red-4 btn-text-only" @click="clearText">Hapus Semua</button>
              </div>
              <textarea
                v-model="state.content"
                placeholder="Tulis kata kata disini..."
                @input="renderCanvas"
                class="flex-grow"
              ></textarea>
            </div>
          </div>
        </q-scroll-area>

        <div v-else class="mobile-form-wrapper px-md">
          <div class="glass-card q-mt-md">
            <div class="card-label">⚙️ Kertas &amp; Gaya Font</div>
            <div class="row q-col-gutter-sm">
              <div class="col-6">
                <div class="input-field-group">
                  <label>Pilih Model Font</label>
                  <select v-model="state.activeFont" @change="loadAndRenderFont">
                    <option value="A Casual Handwritten Pen">✏️ A Casual Handwritten Pen ⭐</option>
                    <option value="Edoms Handwriting Normal">✏️ Edoms Handwriting Normal</option>
                    <option value="Kempton Demo Handwriting">✏️ Kempton Demo Handwriting</option>
                    <option value="QE Braden Hill">✏️ QE Braden Hill</option>
                    <option value="QE Dave Mergens">✏️ QE Dave Mergens</option>
                    <option value="QE David Reid">✏️ QE David Reid</option>
                    <option value="QE Sam Roberts 2">✏️ QE Sam Roberts 2</option>
                    <option value="QE Tony Flores">✏️ QE Tony Flores</option>
                  </select>
                </div>
              </div>
              <div class="col-6">
                <div class="input-field-group">
                  <label>Jenis Kertas</label>
                  <select v-model="state.activePaper" @change="loadPaperTemplate">
                    <option value="hvs_polos">📄 HVS Putih Polos ✨</option>
                    <option value="buku 1">📖 Buku Rumah 1</option>
                    <option value="buku 2">📖 Buku Rumah 2</option>
                    <option value="buku 3">📖 Buku Rumah 3</option>
                    <option value="buku 4">📖 Buku Rumah 4</option>
                    <option value="buku 5">📖 Buku Rumah 5</option>
                    <option value="buku 6">📖 Buku Rumah 6</option>
                    <option value="buku 7">📖 Buku Rumah 7</option>
                    <option value="buku 8">📖 Buku Rumah 8</option>
                    <option value="kertas 1">📄 Kertas Rumah 1</option>
                    <option value="kertas 2">📄 Kertas Rumah 2</option>
                    <option value="custom_upload">📸 Upload Manual...</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row q-mt-sm" v-if="state.activePaper === 'custom_upload'">
              <div class="col-12">
                <div class="input-field-group">
                  <label for="paper-uploader-mobile" class="custom-file-upload">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      style="margin-right: 6px"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                    {{ state.uploadedPaperName || 'Browse Foto Kertas' }}
                  </label>
                  <input
                    id="paper-uploader-mobile"
                    type="file"
                    accept="image/*"
                    @change="handleCustomPaperUpload"
                    style="display: none"
                  />
                </div>
              </div>
            </div>

            <div class="row q-col-gutter-sm q-mt-xs">
              <div class="col-6">
                <div class="input-field-group">
                  <label>Warna Tinta</label>
                  <select v-model="state.inkColorHex" @change="renderCanvas">
                    <option value="#0f172a">⚫ Hitam Gel</option>
                    <option value="#1d4ed8">🔵 Biru Sekolah</option>
                    <option value="#2563eb">🔷 Biru Muda</option>
                    <option value="#dc2626">🔴 Merah Koreksi</option>
                  </select>
                </div>
              </div>
              <div class="col-6">
                <div class="input-field-group">
                  <label>Tanggal Tugas</label>
                  <input
                    type="date"
                    v-model="state.tanggalSelect"
                    @change="formatAndRenderDate"
                    class="calendar-input"
                  />
                </div>
              </div>
            </div>

            <q-separator dark class="q-my-md opacity-20" />

            <div class="card-label" style="color: #a7f3d0">📐 Kalibrasi Materi</div>
            <div class="row q-col-gutter-sm">
              <div class="col-6">
                <div class="input-field-group">
                  <label>Ukuran Huruf ({{ state.fontSize }}px)</label>
                  <input
                    type="range"
                    min="15"
                    max="40"
                    v-model.number="state.fontSize"
                    @input="renderCanvas"
                    class="custom-slider"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="input-field-group">
                  <label>Jarak Garis ({{ state.lineHeight }}px)</label>
                  <input
                    type="range"
                    min="20"
                    max="60"
                    v-model.number="state.lineHeight"
                    @input="renderCanvas"
                    class="custom-slider"
                  />
                </div>
              </div>
            </div>
            <div class="row q-col-gutter-sm q-mt-xs">
              <div class="col-6">
                <div class="input-field-group">
                  <label>Margin Kiri ({{ state.paddingLeft }}px)</label>
                  <input
                    type="range"
                    min="10"
                    max="250"
                    v-model.number="state.paddingLeft"
                    @input="renderCanvas"
                    class="custom-slider"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="input-field-group">
                  <label>Awal Baris ({{ state.startLinesY }}px)</label>
                  <input
                    type="range"
                    min="50"
                    max="400"
                    v-model.number="state.startLinesY"
                    @input="renderCanvas"
                    class="custom-slider"
                  />
                </div>
              </div>
            </div>

            <q-separator dark class="q-my-md opacity-20" />

            <div class="card-label" style="color: #fef08a">📐 Kalibrasi Identitas</div>
            <div class="row q-col-gutter-sm">
              <div class="col-6">
                <div class="input-field-group">
                  <label>Posisi Y ({{ state.headerStartY }}px)</label>
                  <input
                    type="range"
                    min="10"
                    max="200"
                    v-model.number="state.headerStartY"
                    @input="renderCanvas"
                    class="custom-slider-yellow"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="input-field-group">
                  <label>Posisi X ({{ state.headerStartX }}px)</label>
                  <input
                    type="range"
                    min="10"
                    max="250"
                    v-model.number="state.headerStartX"
                    @input="renderCanvas"
                    class="custom-slider-yellow"
                  />
                </div>
              </div>
            </div>
            <div class="row q-mt-xs">
              <div class="col-12">
                <div class="input-field-group">
                  <label>Jarak Antar Baris Identitas ({{ state.headerLineGap }}px)</label>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    v-model.number="state.headerLineGap"
                    @input="renderCanvas"
                    class="custom-slider-yellow"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="glass-card q-mt-md">
            <div class="card-label">👤 Identitas Atas</div>
            <div class="row q-col-gutter-sm">
              <div class="col-6">
                <div class="input-field-group">
                  <label>Nama Anda</label>
                  <input
                    type="text"
                    v-model="state.nama"
                    placeholder="Contoh: Defnilayz"
                    @input="renderCanvas"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="input-field-group">
                  <label>Kelas / NIM</label>
                  <input
                    type="text"
                    v-model="state.nim"
                    placeholder="Contoh: XII MIPA 2"
                    @input="renderCanvas"
                  />
                </div>
              </div>
            </div>
            <div class="input-field-group q-mt-sm">
              <label>Jurusan / Mata Pelajaran</label>
              <input
                type="text"
                v-model="state.jurusan"
                placeholder="Contoh: Bahasa Indonesia"
                @input="renderCanvas"
              />
            </div>
          </div>

          <div class="glass-card q-mt-md flex-column">
            <div class="row justify-between items-center q-mb-sm">
              <div class="card-label q-mb-none">📝 Teks Materi Tugas</div>
              <button class="text-red-4 btn-text-only" @click="clearText">Hapus Semua</button>
            </div>
            <textarea
              v-model="state.content"
              placeholder="Tulis kata kata disini..."
              @input="renderCanvas"
              class="mobile-textarea"
            ></textarea>
          </div>
        </div>
      </aside>

      <main class="preview-area">
        <div class="canvas-viewport" ref="canvasViewport">
          <div
            class="canvas-container"
            ref="canvasContainer"
            :style="{
              transform: `scale(${canvasScale})`,
              transformOrigin: 'top center',
            }"
          >
            <canvas ref="folioCanvas"></canvas>
          </div>
          <div class="canvas-spacer" :style="{ marginTop: canvasSpacerOffset + 'px' }"></div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// ── Refs ──────────────────────────────────────────────────────────────────
const folioCanvas = ref(null)
const canvasViewport = ref(null)
const canvasContainer = ref(null)
const paperImageElement = ref(null)

// ── Responsive state ──────────────────────────────────────────────────────
const isMobile = ref(false)
const canvasScale = ref(1)
const canvasSpacerOffset = ref(0)

// ── Canvas dimensions ─────────────────────────────────────────────────────
const CANVAS_W = 800
const CANVAS_H = 1100

// ── Persistent state ──────────────────────────────────────────────────────
const saved = JSON.parse(localStorage.getItem('bethsbot_v18_state')) || {}

const state = reactive({
  activeFont: saved.activeFont || 'A Casual Handwritten Pen',
  activePaper: saved.activePaper || 'buku 2',
  inkColorHex: saved.inkColorHex || '#0f172a',
  tanggalSelect: saved.tanggalSelect || '',
  tanggalFormatted: saved.tanggalFormatted || '',
  nama: saved.nama || '',
  nim: saved.nim || '',
  jurusan: saved.jurusan || '',
  content: saved.content || 'sfsdfsdfsdfsd',
  fontSize: saved.fontSize || 20,
  lineHeight: saved.lineHeight || 30,
  paddingLeft: saved.paddingLeft || 124,
  startLinesY: saved.startLinesY || 168,
  headerStartY: saved.headerStartY || 45,
  headerStartX: saved.headerStartX || 55,
  headerLineGap: saved.headerLineGap || 18,
  uploadedPaperName: saved.uploadedPaperName || '',
})

// ── Paper presets ─────────────────────────────────────────────────────────
const paperPresetsMap = {
  hvs_polos: {
    fontSize: 24,
    lineHeight: 32,
    paddingLeft: 60,
    startLinesY: 130,
    headerStartY: 30,
    headerStartX: 40,
    headerLineGap: 24,
  },
  'buku 1': {
    fontSize: 22,
    lineHeight: 31,
    paddingLeft: 85,
    startLinesY: 155,
    headerStartY: 30,
    headerStartX: 40,
    headerLineGap: 24,
  },
  'buku 2': {
    fontSize: 20,
    lineHeight: 30,
    paddingLeft: 124,
    startLinesY: 168,
    headerStartY: 45,
    headerStartX: 55,
    headerLineGap: 18,
  },
  'buku 3': {
    fontSize: 23,
    lineHeight: 33,
    paddingLeft: 95,
    startLinesY: 160,
    headerStartY: 35,
    headerStartX: 45,
    headerLineGap: 22,
  },
  'buku 4': {
    fontSize: 21,
    lineHeight: 29,
    paddingLeft: 90,
    startLinesY: 145,
    headerStartY: 30,
    headerStartX: 40,
    headerLineGap: 20,
  },
  'buku 5': {
    fontSize: 22,
    lineHeight: 32,
    paddingLeft: 110,
    startLinesY: 170,
    headerStartY: 40,
    headerStartX: 50,
    headerLineGap: 24,
  },
  'buku 6': {
    fontSize: 20,
    lineHeight: 28,
    paddingLeft: 80,
    startLinesY: 150,
    headerStartY: 30,
    headerStartX: 45,
    headerLineGap: 20,
  },
  'buku 7': {
    fontSize: 24,
    lineHeight: 34,
    paddingLeft: 115,
    startLinesY: 175,
    headerStartY: 45,
    headerStartX: 60,
    headerLineGap: 25,
  },
  'buku 8': {
    fontSize: 22,
    lineHeight: 30,
    paddingLeft: 90,
    startLinesY: 155,
    headerStartY: 35,
    headerStartX: 40,
    headerLineGap: 22,
  },
  'kertas 1': {
    fontSize: 23,
    lineHeight: 32,
    paddingLeft: 100,
    startLinesY: 165,
    headerStartY: 35,
    headerStartX: 50,
    headerLineGap: 22,
  },
  'kertas 2': {
    fontSize: 22,
    lineHeight: 31,
    paddingLeft: 95,
    startLinesY: 158,
    headerStartY: 30,
    headerStartX: 45,
    headerLineGap: 21,
  },
}

const fontFilesMap = {
  'A Casual Handwritten Pen': 'A.Casual.Handwritten.Pen.Noncommercial.ttf',
  'Edoms Handwriting Normal': 'EDOMHN__.ttf',
  'Kempton Demo Handwriting': 'KemptonDemoHandwritting.ttf',
  'QE Braden Hill': 'QEBradenHill.ttf',
  'QE Dave Mergens': 'QEDaveMergens.ttf',
  'QE David Reid': 'QEDavidReid.ttf',
  'QE Sam Roberts 2': 'QESamRoberts2.ttf',
  'QE Tony Flores': 'QETonyFlores.ttf',
}

watch(state, (v) => localStorage.setItem('bethsbot_v18_state', JSON.stringify(v)), { deep: true })

const updateLayout = () => {
  isMobile.value = window.innerWidth <= 1024
  const vp = canvasViewport.value
  if (!vp) return

  const available = vp.clientWidth - 32
  if (available < CANVAS_W) {
    const scale = available / CANVAS_W
    canvasScale.value = scale
    canvasSpacerOffset.value = -(CANVAS_H - CANVAS_H * scale)
  } else {
    canvasScale.value = 1
    canvasSpacerOffset.value = 0
  }
}

const backToHome = () => router.push('/')
const clearText = () => {
  state.content = ''
  renderCanvas()
}

const loadPaperTemplate = () => {
  const preset = paperPresetsMap[state.activePaper]
  if (preset) Object.assign(state, preset)

  if (state.activePaper === 'hvs_polos') {
    paperImageElement.value = null
    renderCanvas()
    return
  }
  if (state.activePaper === 'custom_upload') {
    if (!state.uploadedPaperName) paperImageElement.value = null
    renderCanvas()
    return
  }

  const img = new Image()
  img.onload = () => {
    paperImageElement.value = img
    renderCanvas()
  }
  img.src = new URL(`../assets/images/papers/${state.activePaper}.png`, import.meta.url).href
}

const handleCustomPaperUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return
  state.uploadedPaperName = file.name
  const reader = new FileReader()
  reader.onload = (e) => {
    const img = new Image()
    img.onload = () => {
      paperImageElement.value = img
      renderCanvas()
    }
    img.src = e.target.result
  }
  reader.readAsDataURL(file)
}

const formatAndRenderDate = () => {
  if (!state.tanggalSelect) {
    state.tanggalFormatted = ''
    renderCanvas()
    return
  }
  state.tanggalFormatted = new Date(state.tanggalSelect).toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  renderCanvas()
}

const loadAndRenderFont = async () => {
  const fileName = fontFilesMap[state.activeFont]
  if (!fileName) {
    renderCanvas()
    return
  }
  try {
    const url = new URL(`../assets/fonts/${fileName}`, import.meta.url).href
    const face = new FontFace(state.activeFont, `url(${url})`)
    document.fonts.add(await face.load())
    // eslint-disable-next-line no-unused-vars
  } catch (_) {
    /* fallback */
  }
  renderCanvas()
}

// ── Canvas rendering engine (FIXED LABEL OTOMATIS DIHAPUS) ─────────────────
const renderCanvas = () => {
  const canvas = folioCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  canvas.width = CANVAS_W
  canvas.height = CANVAS_H

  if (state.activePaper === 'hvs_polos') {
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H)
  } else if (paperImageElement.value) {
    ctx.drawImage(paperImageElement.value, 0, 0, CANVAS_W, CANVAS_H)
  } else {
    ctx.fillStyle = '#1e293b'
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H)
    return
  }

  ctx.fillStyle = state.inkColorHex
  ctx.font = `${state.fontSize - 3}px "${state.activeFont}"`
  ctx.textBaseline = 'top'

  let hY = state.headerStartY

  // FIXED: String statis label otomatis ("Nama :", "Kelas/NIM:", "Mapel/Jur:") dihapus total dari ctx.fillText
  if (state.nama) {
    ctx.fillText(state.nama, state.headerStartX, hY)
    hY += state.headerLineGap
  }
  if (state.nim) {
    ctx.fillText(state.nim, state.headerStartX, hY)
    hY += state.headerLineGap
  }
  if (state.jurusan) {
    ctx.fillText(state.jurusan, state.headerStartX, hY)
  }

  if (state.tanggalFormatted) {
    const dX = CANVAS_W - ctx.measureText(state.tanggalFormatted).width - state.headerStartX
    ctx.fillText(state.tanggalFormatted, dX, state.headerStartY)
  }

  ctx.font = `${state.fontSize}px "${state.activeFont}"`
  ctx.textBaseline = 'alphabetic'

  let currentY = state.startLinesY + state.lineHeight * 0.85
  const maxWidth = CANVAS_W - state.paddingLeft - 50

  if (!state.content) return

  state.content.split('\n').forEach((para) => {
    if (para.trim() === '') {
      currentY += state.lineHeight
      return
    }

    let currentLine = ''
    for (const word of para.split(' ')) {
      const testLine = currentLine + (currentLine ? ' ' : '') + word
      if (ctx.measureText(testLine).width <= maxWidth) {
        currentLine = testLine
      } else {
        if (ctx.measureText(word).width > maxWidth) {
          for (const char of word) {
            if (ctx.measureText(currentLine + char).width <= maxWidth) {
              currentLine += char
            } else {
              ctx.fillText(currentLine, state.paddingLeft + 15, currentY)
              currentY += state.lineHeight
              currentLine = char
            }
          }
        } else {
          if (currentLine) {
            ctx.fillText(currentLine, state.paddingLeft + 15, currentY)
            currentY += state.lineHeight
          }
          currentLine = word
        }
      }
    }
    if (currentLine) {
      ctx.fillText(currentLine, state.paddingLeft + 15, currentY)
      currentY += state.lineHeight
    }
  })
}

const downloadImage = () => {
  const canvas = folioCanvas.value
  if (!canvas) return
  const a = document.createElement('a')
  a.href = canvas.toDataURL('image/jpeg', 0.95)
  a.download = `Tugas-Bethsbot-Presisi-${Date.now()}.jpg`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

onMounted(() => {
  updateLayout()
  loadAndRenderFont()
  loadPaperTemplate()
  window.addEventListener('resize', updateLayout)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateLayout)
})
</script>

<style scoped>
/* ============================================================
   BASE LAYOUT
   ============================================================ */
.workspace-wrapper {
  background: #020617;
  color: #ffffff;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* ============================================================
   NAVBAR
   ============================================================ */
.navbar-premium {
  height: 75px;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  z-index: 20;
  flex-shrink: 0;
}
.nav-brand {
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
}
.back-circle {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  transition: all 0.2s ease;
}
.nav-brand:hover .back-circle {
  background: #22d3ee;
  color: #020617;
  transform: scale(1.05);
}
.brand-text {
  font-weight: 850;
  font-size: 22px;
  color: white;
  letter-spacing: -0.02em;
}
.text-cyan {
  color: #22d3ee;
}
.btn-download-premium {
  background: #22d3ee;
  color: #020617;
  border: none;
  font-weight: 800;
  padding: 10px 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
}
.btn-download-premium:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(34, 211, 238, 0.3);
}
.btn-icon {
  margin-right: 8px;
}

/* ============================================================
   MAIN DASHBOARD — DESKTOP GRID
   ============================================================ */
.main-dashboard {
  display: grid;
  grid-template-columns: 460px 1fr;
  flex: 1;
  overflow: hidden;
  min-height: 0;
}

/* ============================================================
   SIDE PANEL
   ============================================================ */
.side-panel {
  background: #090e1a;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  min-height: 0;
}
.mobile-form-wrapper {
  padding-bottom: 24px;
}

/* ============================================================
   FORM ELEMENTS
   ============================================================ */
.glass-card {
  background: rgba(30, 41, 59, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 18px;
}
.card-label {
  font-size: 11px;
  font-weight: 800;
  color: #22d3ee;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}
.input-field-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.input-field-group label {
  font-size: 11px;
  font-weight: 700;
  color: #64748b;
}
.input-field-group input,
.input-field-group select,
textarea {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 10px 14px;
  color: white;
  font-size: 13px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
}
.input-field-group input:focus,
.input-field-group select:focus,
textarea:focus {
  border-color: #22d3ee;
}
.custom-file-upload {
  background: rgba(34, 211, 238, 0.1) !important;
  border: 1px dashed rgba(34, 211, 238, 0.4) !important;
  color: #22d3ee !important;
  border-radius: 10px;
  padding: 9px 12px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  max-height: 38px;
}
.custom-file-upload:hover {
  background: rgba(34, 211, 238, 0.2) !important;
  border-color: #22d3ee !important;
}
.custom-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  outline: none;
  padding: 0 !important;
  cursor: pointer;
}
.custom-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #22d3ee;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
}
.custom-slider-yellow {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  outline: none;
  padding: 0 !important;
  cursor: pointer;
}
.custom-slider-yellow::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fef08a;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(254, 240, 138, 0.5);
}
.calendar-input {
  color-scheme: dark;
  cursor: pointer;
}
textarea {
  resize: none;
  line-height: 1.6;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.flex-grow {
  flex: 1;
  min-height: 200px;
}
.mobile-textarea {
  min-height: 160px;
  width: 100%;
  resize: vertical;
  line-height: 1.6;
}
.btn-text-only {
  background: none;
  border: none;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
}

/* ============================================================
   PREVIEW AREA & CANVAS — DESKTOP
   ============================================================ */
.preview-area {
  background: #020617;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-height: 0;
}
.canvas-viewport {
  width: 100%;
  height: 100%;
  padding: 40px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.canvas-container {
  background: white;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  line-height: 0;
  width: 800px;
  flex-shrink: 0;
}

/* ============================================================
   MOBILE RESPONSIVE ≤ 1024px
   ============================================================ */
@media (max-width: 1024px) {
  .workspace-wrapper {
    height: auto;
    min-height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
  .navbar-premium {
    position: sticky;
    top: 0;
    z-index: 100;
    height: 60px;
  }
  .main-dashboard {
    display: flex;
    flex-direction: column;
    overflow: visible;
    height: auto;
    min-height: unset;
  }
  .side-panel {
    height: auto;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    overflow: visible;
  }
  .preview-area {
    height: auto;
    overflow: visible;
    padding-bottom: 40px;
    align-items: flex-start;
  }
  .canvas-viewport {
    height: auto;
    padding: 16px;
    overflow: visible;
  }
  .canvas-container {
    transform-origin: top center;
  }
}

/* ============================================================
   MOBILE KECIL ≤ 480px
   ============================================================ */
@media (max-width: 480px) {
  .navbar-premium {
    padding: 0 16px;
  }
  .brand-text {
    font-size: 16px;
  }
  .btn-download-premium {
    padding: 8px 12px;
    font-size: 12px;
  }
  .btn-icon {
    display: none;
  }
  .glass-card {
    border-radius: 14px;
    padding: 14px;
  }
}
</style>
