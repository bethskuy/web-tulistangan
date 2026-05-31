<template>
  <!-- BACKGROUND UTAMA -->
  <q-page
    style="
      background: linear-gradient(to bottom, #020617, #0f172a, #020617);
      color: #ffffff;
      padding-bottom: 80px;
      min-height: 100vh;
      position: relative;
      overflow-x: hidden;
    "
  >
    <!-- CANVAS SAKTI UNTUK EFEK GELOMBANG AURORA GRADIENT BERGERAK -->
    <canvas
      ref="auroraCanvas"
      style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 750px;
        z-index: 1;
        pointer-events: none;
      "
    ></canvas>

    <!-- OVERLAY GRADASI GELAP -->
    <div
      style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 750px;
        background: linear-gradient(to bottom, transparent 40%, #020617 95%);
        z-index: 2;
        pointer-events: none;
      "
    ></div>

    <!-- 1. HERO SECTION -->
    <section
      style="
        position: relative;
        z-index: 3;
        max-width: 1200px;
        margin: 0 auto;
        padding: 100px 20px 60px 20px;
        text-align: center;
      "
    >
      <div
        style="
          display: inline-block;
          padding: 6px 16px;
          border-radius: 9999px;
          background-color: rgba(34, 211, 238, 0.1);
          border: 1px solid rgba(34, 211, 238, 0.2);
          font-size: 12px;
          font-weight: bold;
          color: #22d3ee;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 32px;
          backdrop-filter: blur(4px);
        "
      >
        🚀 Solusi Mahasiswa Mager
      </div>
      <h1
        style="
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0 auto 24px auto;
          max-width: 900px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        "
      >
        Males Nulis Tugas Tangan?<br />
        Let
        <span
          style="
            background: linear-gradient(to right, #22d3ee, #3b82f6, #818cf8);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          "
          >Bethsbot</span
        >
        Do It.
      </h1>
      <p
        style="
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: #cbd5e1;
          max-width: 650px;
          margin: 0 auto 48px auto;
          line-height: 1.6;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        "
      >
        Platform otomatisasi tulisan tangan nomor #1 di Indonesia. Ubah ketikan digital menjadi
        visual kertas buku tulis asli tanpa perlu ribet beli kertas dan pulpen!
      </p>
      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
        "
      >
        <q-btn
          label="Mulai Nulis Sekarang — Gratis 🎉"
          color="cyan-5"
          text-color="slate-950"
          unelevated
          class="text-weight-bold text-capitalize cursor-pointer anim-pulse"
          style="
            border-radius: 16px;
            padding: 16px 40px;
            font-size: 16px;
            box-shadow: 0 10px 25px -5px rgba(34, 211, 238, 0.3);
          "
          @click="goToWorkspace"
        />
      </div>
    </section>

    <!-- CONTAINER UTAMA UNTUK SECTION BAWAH -->
    <div style="position: relative; z-index: 3">
      <!-- 2. STATISTIK SECTION -->
      <section
        style="
          background-color: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(12px);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 60px 20px;
          margin: 40px 0;
        "
      >
        <div
          style="
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 40px;
            text-align: center;
          "
        >
          <div
            class="hover-card"
            style="
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 20px;
              border-radius: 16px;
            "
          >
            <div style="font-size: 48px; font-weight: 800; color: #22d3ee">95%</div>
            <div style="font-size: 16px; font-weight: bold; color: #e2e8f0; margin-top: 4px">
              Menghemat Waktu Kuliah
            </div>
            <p
              style="
                font-size: 13px;
                color: #94a3b8;
                max-width: 260px;
                margin-top: 8px;
                line-height: 1.5;
              "
            >
              Sisa waktu kuliah bisa dipake buat mabar, rebahan, atau belajar kodingan project IT.
            </p>
          </div>
          <div
            class="hover-card"
            style="
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 20px;
              border-radius: 16px;
            "
          >
            <div style="font-size: 48px; font-weight: 800; color: #ffffff">0 Lembar</div>
            <div style="font-size: 16px; font-weight: bold; color: #e2e8f0; margin-top: 4px">
              Sampah Kertas & Pulpen
            </div>
            <p
              style="
                font-size: 13px;
                color: #94a3b8;
                max-width: 260px;
                margin-top: 8px;
                line-height: 1.5;
              "
            >
              Go green, bro! Gak perlu buang-buang kertas folio bergaris gara-gara salah nulis
              manual.
            </p>
          </div>
          <div
            class="hover-card"
            style="
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 20px;
              border-radius: 16px;
            "
          >
            <div style="font-size: 48px; font-weight: 800; color: #22d3ee">100%</div>
            <div style="font-size: 16px; font-weight: bold; color: #e2e8f0; margin-top: 4px">
              Aman & Sisi Client-Side
            </div>
            <p
              style="
                font-size: 13px;
                color: #94a3b8;
                max-width: 260px;
                margin-top: 8px;
                line-height: 1.5;
              "
            >
              Teks tugas diproses langsung di browser laptop/HP lu tanpa pernah disimpan di
              database.
            </p>
          </div>
        </div>
      </section>

      <!-- 3. CARA KERJA SECTION -->
      <section style="max-width: 1200px; margin: 0 auto; padding: 60px 20px; text-align: center">
        <div style="margin-bottom: 48px">
          <h2 style="font-size: 32px; font-weight: 800; color: #ffffff">
            3 Langkah Praktis Anti Pegal
          </h2>
          <p
            style="
              font-size: 14px;
              color: #94a3b8;
              max-width: 450px;
              margin: 8px auto 0 auto;
              line-height: 1.5;
            "
          >
            Cara tercepat penuhin ekspektasi dosen tanpa ngorbanin kesehatan jari-jari tangan lu.
          </p>
        </div>

        <div
          style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
          "
        >
          <div
            class="hover-card"
            style="
              background-color: rgba(15, 23, 42, 0.4);
              padding: 32px;
              border-radius: 24px;
              border: 1px solid rgba(255, 255, 255, 0.05);
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            "
          >
            <div
              style="
                width: 48px;
                height: 48px;
                border-radius: 12px;
                background-color: rgba(59, 130, 246, 0.1);
                border: 1px solid rgba(59, 130, 246, 0.2);
                color: #22d3ee;
                font-weight: bold;
                font-size: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 20px;
              "
            >
              1
            </div>
            <h4 style="font-size: 18px; font-weight: bold; color: #ffffff; margin-bottom: 8px">
              Ketik / Copas Tugas
            </h4>
            <p
              style="font-size: 13px; color: #94a3b8; line-height: 1.6; max-width: 260px; margin: 0"
            >
              Masukkan Nama, NIM, dan isi materi tugas rangkuman kuliah lu ke kolom yang udah
              disediakan di panel input.
            </p>
          </div>
          <div
            class="hover-card"
            style="
              background-color: rgba(15, 23, 42, 0.4);
              padding: 32px;
              border-radius: 24px;
              border: 1px solid rgba(255, 255, 255, 0.05);
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            "
          >
            <div
              style="
                width: 48px;
                height: 48px;
                border-radius: 12px;
                background-color: rgba(59, 130, 246, 0.1);
                border: 1px solid rgba(59, 130, 246, 0.2);
                color: #22d3ee;
                font-weight: bold;
                font-size: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 20px;
              "
            >
              2
            </div>
            <h4 style="font-size: 18px; font-weight: bold; color: #ffffff; margin-bottom: 8px">
              Sesuaikan Tinta & Ukuran
            </h4>
            <p
              style="font-size: 13px; color: #94a3b8; line-height: 1.6; max-width: 260px; margin: 0"
            >
              Pilih gaya tulisan tangan kegemaran lu, atur ukuran hurufnya, and pilih tinta warna
              hitam atau biru pulpen standard kampus.
            </p>
          </div>
          <div
            class="hover-card"
            style="
              background-color: rgba(15, 23, 42, 0.4);
              padding: 32px;
              border-radius: 24px;
              border: 1px solid rgba(255, 255, 255, 0.05);
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            "
          >
            <div
              style="
                width: 48px;
                height: 48px;
                border-radius: 12px;
                background-color: rgba(59, 130, 246, 0.1);
                border: 1px solid rgba(59, 130, 246, 0.2);
                color: #22d3ee;
                font-weight: bold;
                font-size: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 20px;
              "
            >
              3
            </div>
            <h4 style="font-size: 18px; font-weight: bold; color: #ffffff; margin-bottom: 8px">
              Download Gambar (.JPG)
            </h4>
            <p
              style="font-size: 13px; color: #94a3b8; line-height: 1.6; max-width: 260px; margin: 0"
            >
              Lihat live preview kertasnya, kalau udah dirasa pas tinggal klik tombol download.
              Gambar siap dikirim ke e-learning!
            </p>
          </div>
        </div>
      </section>

      <!-- 4. FITUR UTAMA SECTION -->
      <section style="max-width: 1200px; margin: 0 auto; padding: 60px 20px; text-align: center">
        <div style="margin-bottom: 48px">
          <h2 style="font-size: 32px; font-weight: 800; color: #ffffff">
            Kenapa Harus Pake Bethsbot?
          </h2>
          <p style="font-size: 14px; color: #94a3b8; margin-top: 8px">
            Dibuat khusus oleh anak IT demi hasil tiruan pengerjaan manual yang maksimal.
          </p>
        </div>

        <div
          style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
          "
        >
          <div
            class="hover-card"
            style="
              background-color: rgba(15, 23, 42, 0.4);
              padding: 32px;
              border-radius: 24px;
              border: 1px solid rgba(255, 255, 255, 0.05);
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            "
          >
            <div style="font-size: 32px; margin-bottom: 16px">✍️</div>
            <h3 style="font-size: 18px; font-weight: bold; color: #ffffff; margin-bottom: 8px">
              Font Super Natural
            </h3>
            <p
              style="font-size: 13px; color: #94a3b8; line-height: 1.6; max-width: 260px; margin: 0"
            >
              Menggunakan kurasi font tulisan tangan pilihan yang mirip banget dengan anatomi
              coretan tangan asli mahasiswa Indonesia. Gak bakal ketahuan dosen!
            </p>
          </div>
          <div
            class="hover-card"
            style="
              background-color: rgba(255, 255, 255, 0.05);
              padding: 32px;
              border-radius: 24px;
              border: 1px solid rgba(255, 255, 255, 0.1);
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            "
          >
            <div style="font-size: 32px; margin-bottom: 16px">📄</div>
            <h3 style="font-size: 18px; font-weight: bold; color: #ffffff; margin-bottom: 8px">
              Simulasi Garis Akurat
            </h3>
            <p
              style="font-size: 13px; color: #94a3b8; line-height: 1.6; max-width: 260px; margin: 0"
            >
              Dilengkapi dengan garis horizontal buku tulis otomatis berjarak presisi dan garis
              margin merah vertikal pembatas kiri kertas khas buku tulis asli.
            </p>
          </div>
          <div
            class="hover-card"
            style="
              background-color: rgba(15, 23, 42, 0.4);
              padding: 32px;
              border-radius: 24px;
              border: 1px solid rgba(255, 255, 255, 0.05);
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            "
          >
            <div style="font-size: 32px; margin-bottom: 16px">🔒</div>
            <h3 style="font-size: 18px; font-weight: bold; color: #ffffff; margin-bottom: 8px">
              100% Privacy Secured
            </h3>
            <p
              style="font-size: 13px; color: #94a3b8; line-height: 1.6; max-width: 260px; margin: 0"
            >
              Kami menghargai privasi data akademis lu. Aplikasi diproses murni di sisi client-side
              browser tanpa ada data tugas yang terinfeksi atau terkirim ke server luar.
            </p>
          </div>
        </div>
      </section>

      <!-- 5. VISUAL GRID KALKULATOR MAGER -->
      <section style="max-width: 900px; margin: 60px auto; padding: 0 20px; text-align: center">
        <div style="margin-bottom: 40px">
          <h2 style="font-size: 28px; font-weight: 800; color: #ffffff">
            Realita Efisiensi Mahasiswa
          </h2>
          <p style="font-size: 14px; color: #94a3b8; margin-top: 6px">
            Perbandingan mutlak sebelum dan sesudah lu kenalan sama Bethsbot.
          </p>
        </div>

        <div
          style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 24px;
            overflow: hidden;
            background-color: rgba(15, 23, 42, 0.2);
            backdrop-filter: blur(8px);
          "
        >
          <div
            style="
              padding: 40px 24px;
              border-right: 1px solid rgba(255, 255, 255, 0.08);
              background-color: rgba(239, 68, 68, 0.02);
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 24px;
            "
          >
            <div
              style="
                font-size: 16px;
                font-weight: 800;
                color: #ef4444;
                text-transform: uppercase;
                letter-spacing: 0.05em;
              "
            >
              Nulis Manual ❌
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                gap: 16px;
                font-size: 13px;
                color: #94a3b8;
                text-align: center;
                align-items: center;
              "
            >
              <p style="margin: 0; max-width: 280px; line-height: 1.4">
                🖐️ Jari kapalan, tangan kram & tremor hebat
              </p>
              <div
                style="width: 40px; height: 1px; background-color: rgba(255, 255, 255, 0.05)"
              ></div>
              <p style="margin: 0; max-width: 280px; line-height: 1.4">
                ⏰ Begadang semalaman demi nyalin 5 lembar folio
              </p>
              <div
                style="width: 40px; height: 1px; background-color: rgba(255, 255, 255, 0.05)"
              ></div>
              <p style="margin: 0; max-width: 280px; line-height: 1.4">
                💸 Duit abis boros buat beli buku tulis & pack pulpen
              </p>
            </div>
          </div>
          <div
            style="
              padding: 40px 24px;
              background-color: rgba(34, 211, 238, 0.02);
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 24px;
            "
          >
            <div
              style="
                font-size: 16px;
                font-weight: 800;
                color: #22d3ee;
                text-transform: uppercase;
                letter-spacing: 0.05em;
              "
            >
              Pake Bethsbot ✅
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                gap: 16px;
                font-size: 13px;
                color: #e2e8f0;
                text-align: center;
                align-items: center;
              "
            >
              <p style="margin: 0; max-width: 280px; line-height: 1.4; font-weight: 500">
                ✨ Tangan mulus, tinggal copas & santai
              </p>
              <div
                style="width: 40px; height: 1px; background-color: rgba(255, 255, 255, 0.05)"
              ></div>
              <p style="margin: 0; max-width: 280px; line-height: 1.4; font-weight: 500">
                ⚡ Selesai dalam 30 detik sambil rebahan mabar
              </p>
              <div
                style="width: 40px; height: 1px; background-color: rgba(255, 255, 255, 0.05)"
              ></div>
              <p style="margin: 0; max-width: 280px; line-height: 1.4; font-weight: 500">
                💰 Hemat 100% duit saku, murni modal browser
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 5.5 MEET THE DEVELOPER SECTION -->
      <section style="max-width: 900px; margin: 80px auto; padding: 0 20px">
        <div
          style="
            background: linear-gradient(to right, rgba(15, 23, 42, 0.6), rgba(30, 41, 59, 0.4));
            border-radius: 28px;
            border: 1px solid rgba(255, 255, 255, 0.06);
            padding: 40px;
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: center;
            gap: 40px;
            box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.3);
          "
        >
          <!-- SISI KIRI FOTO OWNER -->
          <div
            style="position: relative; display: flex; justify-content: center; align-items: center"
          >
            <div
              style="
                position: absolute;
                width: 160px;
                height: 160px;
                border-radius: 50%;
                background-color: rgba(34, 211, 238, 0.15);
                filter: blur(15px);
                z-index: 1;
              "
            ></div>
            <img
              src="foto-refqy.jpeg"
              alt="Refqy Obeth"
              class="hover-photo cursor-pointer"
              style="
                width: 150px;
                height: 150px;
                border-radius: 50%;
                object-fit: cover;
                border: 3px solid #22d3ee;
                position: relative;
                z-index: 2;
                box-shadow: 0 8px 24px rgba(34, 211, 238, 0.2);
              "
              @click="isPhotoZoomed = true"
            />
          </div>

          <!-- SISI KANAN BIO -->
          <div
            style="
              flex: 1;
              min-width: 280px;
              display: flex;
              flex-direction: column;
              gap: 12px;
              text-align: center;
            "
          >
            <div
              style="
                display: inline-block;
                width: fit-content;
                padding: 4px 12px;
                border-radius: 8px;
                background-color: rgba(34, 211, 238, 0.1);
                font-size: 11px;
                font-weight: bold;
                color: #22d3ee;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                margin: 0 auto;
              "
            >
              🛠️ Creator & Full-Stack Developer
            </div>
            <h3 style="font-size: 24px; font-weight: 800; color: #ffffff; margin: 0">
              Refqy Obeth S. S.
            </h3>
            <p style="font-size: 13px; color: #94a3b8; line-height: 1.6; margin: 0; width: 100%">
              Halo, gua Mahasiswa Teknik Informatika sekaligus full-stack web developer di balik
              Bethsbot. Gua bikin aplikasi ini murni demi menyelamatkan jari-jari tangan kalian dari
              kram akademis akibat tugas rangkuman kuliah manual yang melelahkan. Let's code and
              relax!
            </p>

            <!-- FIX `image_b44368.png`: Menyisipkan SVG Inline Instagram murni anti-bug di samping link teks username lu -->
            <div
              style="
                margin-top: 8px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 8px;
              "
            >
              <a
                href="https://instagram.com/bethsphtr_"
                target="_blank"
                style="
                  display: flex;
                  align-items: center;
                  gap: 8px;
                  font-size: 15px;
                  font-weight: bold;
                  color: #22d3ee;
                  text-decoration: none;
                "
                class="ig-link-hover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22d3ee"
                  stroke-width="2.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  style="display: inline-block; vertical-align: middle"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>@bethsphtr_</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- MODAL DIALOG POP-UP ZOOM FOTO PROFILE DEVELOPER -->
      <q-dialog v-model="isPhotoZoomed" backdrop-filter="blur(12px)">
        <div style="display: flex; justify-content: center; align-items: center; padding: 16px">
          <img
            src="foto-refqy.jpeg"
            alt="Refqy Obeth Zoomed"
            style="
              max-width: 90vw;
              max-height: 75vh;
              border-radius: 24px;
              border: 4px solid #22d3ee;
              box-shadow: 0 25px 50px -12px rgba(34, 211, 238, 0.4);
              animation: zoomAnimation 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            "
          />
        </div>
      </q-dialog>

      <!-- 6. CLOSING CALL TO ACTION -->
      <section
        style="max-width: 1000px; margin: 60px auto 0 auto; padding: 0 20px; text-align: center"
      >
        <div
          style="
            background: linear-gradient(135deg, #1e3a8a, #0f172a, #1d4ed8);
            border-radius: 32px;
            padding: 60px 40px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          "
        >
          <h2
            style="
              font-size: clamp(1.8rem, 3vw, 2.5rem);
              font-weight: 800;
              color: #ffffff;
              margin: 0 auto 16px auto;
              max-width: 600px;
              line-height: 1.2;
            "
          >
            Dosen Lu Udah Nyuruh Kumpulin Tugas?
          </h2>
          <p
            style="
              font-size: 15px;
              color: #cbd5e1;
              max-width: 550px;
              margin: 0 auto 32px auto;
              line-height: 1.6;
            "
          >
            Jangan biarkan waktu nongkrong, istirahat, atau belajar koding lu hancur cuma gara-gara
            nulis manual berlembar-lembar halaman buku.
          </p>
          <p style="font-size: 18px; font-weight: bold; color: #22d3ee; margin: 0 auto">
            Ayo, mulai nulis tanpa kram hari ini.
          </p>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isPhotoZoomed = ref(false)
const auroraCanvas = ref(null)
let animationFrameId = null

const goToWorkspace = () => {
  router.push('/nulis')
}

onMounted(() => {
  const canvas = auroraCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = 750
  }
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  let tick = 0

  const drawAurora = () => {
    tick += 0.0015
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#020617'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const bubbles = [
      {
        x: canvas.width * 0.3 + Math.sin(tick * 2.5) * (canvas.width * 0.15),
        y: 250 + Math.cos(tick * 1.8) * 80,
        radius: canvas.width * 0.4,
        color1: 'rgba(34, 211, 238, 0.25)',
        color2: 'rgba(34, 211, 238, 0)',
      },
      {
        x: canvas.width * 0.7 + Math.cos(tick * 2.1) * (canvas.width * 0.15),
        y: 300 + Math.sin(tick * 2.3) * 100,
        radius: canvas.width * 0.45,
        color1: 'rgba(29, 78, 216, 0.3)',
        color2: 'rgba(29, 78, 216, 0)',
      },
      {
        x: canvas.width * 0.5 + Math.sin(tick * 1.4) * (canvas.width * 0.2),
        y: 400 + Math.cos(tick * 3.1) * 90,
        radius: canvas.width * 0.35,
        color1: 'rgba(168, 85, 247, 0.2)',
        color2: 'rgba(168, 85, 247, 0)',
      },
    ]

    bubbles.forEach((b) => {
      ctx.beginPath()
      const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius)
      grad.addColorStop(0, b.color1)
      grad.addColorStop(1, b.color2)
      ctx.fillStyle = grad
      ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2)
      ctx.fill()
    })

    animationFrameId = requestAnimationFrame(drawAurora)
  }

  drawAurora()

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeCanvas)
    cancelAnimationFrame(animationFrameId)
  })
})
</script>

<style scoped>
.anim-pulse {
  animation: pulseGlow 2.5s infinite alternate ease-in-out;
}
@keyframes pulseGlow {
  0% {
    transform: scale(1);
    box-shadow: 0 10px 25px -5px rgba(34, 211, 238, 0.3);
  }
  100% {
    transform: scale(1.03);
    box-shadow: 0 15px 30px 2px rgba(34, 211, 238, 0.5);
  }
}
@keyframes zoomAnimation {
  0% {
    transform: scale(0.7);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.hover-card {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.hover-card:hover {
  transform: translateY(-6px);
  background-color: rgba(30, 41, 59, 0.6) !important;
  border-color: rgba(34, 211, 238, 0.3) !important;
  box-shadow: 0 15px 30px -10px rgba(34, 211, 238, 0.15);
}
.hover-photo {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.hover-photo:hover {
  transform: scale(1.1) rotate(3deg);
  border-color: #3b82f6 !important;
  box-shadow: 0 12px 32px rgba(59, 130, 246, 0.5) !important;
}
.button-pop {
  transition: all 0.2s ease;
}
.button-pop:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
}
/* Efek interaktif pas link username sorot mouse */
.ig-link-hover {
  transition: all 0.2s ease;
}
.ig-link-hover:hover {
  opacity: 0.85;
  transform: scale(1.02);
}
</style>
