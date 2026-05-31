# Product Requirements Document: Hercio Moreira Gusmao Portfolio

## 1. Ringkasan

Portfolio baru ini akan menggantikan portfolio Wix lama milik Hercio Moreira Gusmao dengan website developer portfolio yang dibuat secara mandiri, tanpa Wix dan tanpa CMS eksternal. Website harus memakai konten dari portfolio lama, tetapi tampil dengan gaya visual dan interaksi yang sangat dekat dengan referensi desain `https://www.mritunjoy.online/#home`: clean, modern, glassmorphism, light futuristic grid background, centered hero, pill navigation, animated reveal, project cards, toolbox section, dan contact CTA.

Target utama: membuat portfolio yang terasa profesional untuk seorang developer/engineer, cepat dibuka, mudah di-maintain dari codebase, dan layak dipakai untuk personal branding, freelance, kolaborasi, dan peluang kerja.

## 2. Sumber Informasi

Sumber konten utama:

- Portfolio lama: `https://herciomoreira3.wixsite.com/portfolio`
- Resume lama: `https://herciomoreira3.wixsite.com/portfolio/resume`
- Project list lama: `https://herciomoreira3.wixsite.com/portfolio/item`
- GitHub profile/repositories: `https://github.com/herciomoreira3`
- Detail proyek lama:
  - SmartPond - IoT-Based Real-Time Water Quality Monitoring System for Nile Tilapia Ponds
  - IoT-Based Water Quality Monitoring System for Tilapia Fish Ponds
  - Lagoa Iralalaro Documentary
  - Workshop Management System
  - Community Complaint System

Sumber referensi visual:

- `https://www.mritunjoy.online/#home`

Catatan legal/desain:

- Website baru boleh meniru arah visual, layout, ritme interaksi, dan rasa desain dari referensi.
- Website baru tidak boleh menyalin personal branding, nama, avatar, teks, asset, atau source code milik referensi.
- Semua konten, identitas, CTA, social link, dan project harus milik Hercio.

## 3. Tujuan Produk

1. Menghapus ketergantungan pada Wix dan CMS.
2. Menampilkan identitas Hercio sebagai IT Support, IoT engineer, dan software/mobile developer.
3. Mengubah portfolio dari tampilan template menjadi website modern yang dibuat sendiri.
4. Menyajikan project lama sebagai case study yang lebih kuat, bukan hanya list.
5. Mempermudah update konten melalui file data di repository.
6. Menampilkan repository GitHub baru secara otomatis tanpa edit manual di komponen UI.
7. Membuat resume bisa diperbarui dari content source/CMS ringan, bukan hardcoded statis.
8. Memiliki performa tinggi, SEO dasar, responsive design, dan aksesibilitas yang baik.

## 4. Non-Goals

- Tidak membuat CMS custom dari nol pada MVP.
- Tidak membuat backend besar/kompleks pada MVP; jika perlu dynamic content, gunakan GitHub API, Git-backed CMS, static sync script, atau serverless/cache ringan.
- Tidak membuat sistem blog pada MVP.
- Tidak membuat chat AI kecuali masuk sebagai fase lanjutan.
- Tidak membuat copy 1:1 dari brand, avatar, logo, atau konten website referensi.

## 5. Target Pengguna

Pengguna utama:

- Recruiter atau hiring manager yang menilai pengalaman teknis Hercio.
- Calon client freelance yang ingin melihat kemampuan membuat sistem nyata.
- Dosen, mentor, atau partner komunitas yang ingin melihat kontribusi project IoT/IT.
- Developer lain yang ingin melihat GitHub, project stack, dan contact.

Kebutuhan pengguna:

- Cepat memahami siapa Hercio dan skill utamanya.
- Bisa melihat project paling kuat dalam beberapa detik.
- Bisa membuka detail project tanpa bingung.
- Bisa menghubungi via email, WhatsApp, LinkedIn, atau GitHub.
- Bisa membuka live demo SIPOLAI dan download aplikasi Android Testora dari GitHub Release.

## 6. Positioning dan Brand

Nama yang ditampilkan:

- Hercio Moreira Gusmao
- Jika ingin presisi sesuai portfolio lama, gunakan "Hercio Moreira Gusmao" atau "Hercio Moreira Gusmão" sesuai preferensi final.

Headline/role yang disarankan:

- IT Support & IoT Software Engineer
- Alternatif: Full Stack / IoT Developer
- Alternatif: IT Support Engineer & Mobile Developer

Hero one-liner:

- "Building practical IoT, mobile, and support systems for real-world problems in Timor-Leste."

Tone:

- Profesional, direct, technical, dan percaya diri.
- Tidak terlalu corporate.
- Tidak memakai bahasa marketing berlebihan.
- Teks utama boleh English karena portfolio lama memakai English; microcopy bisa tetap English untuk konsistensi global.

## 7. Content Inventory Dari Portfolio Lama

### 7.1 Profile

Nama:

- Hercio Moreira Gusmao

Role lama:

- IT Support & Engineer

Bio lama:

- Undergraduate student pursuing Informatics Engineering at National University of Timor-Leste (UNTL).
- Passionate about information technology and hands-on problem solving.
- Advanced knowledge in Tier 1 and Tier 2 troubleshooting.
- Able to resolve hardware, software, device, OS, network, and application issues.

Bio baru yang disarankan:

- "I am an Informatics Engineering undergraduate at the National University of Timor-Leste (UNTL), focused on practical software, IoT, and IT support solutions. My work combines Tier 1/Tier 2 troubleshooting, mobile development, embedded systems, and cloud-connected applications to solve real problems for communities and small organizations."

### 7.2 Contact

- Email: `herciomoreira3@gmail.com`
- Phone/WhatsApp: `(+670) 73735557`
- GitHub: `https://github.com/herciomoreira3`
- WhatsApp short link: `https://wa.link/kpbawn`
- LinkedIn: `https://www.linkedin.com/in/hercio-moreira-gusmao-0819753b5`

### 7.3 Experience

Experience 1:

- Period: 2025 - Present
- Title: IT Support & IoT Project Contributor
- Organization: SOI (School on Internet Asia) - Community-Based Research (CBR) IoT Project Team Timor-Leste
- Highlights:
  - Contributor to international CBR IoT project focused on water management solutions for Timor-Leste communities.
  - Added multi-language support in mobile application, including Tetun and Portuguese.
  - Participated in IoT deployment, hardware setup, sensor configuration, and communication module setup.
  - Provided real-time troubleshooting for data communication, connectivity, and transmission issues.

Experience 2:

- Period: 2022 - 2023
- Title: Producer & Editor
- Organization: Ratalolo Team for Secretario Estado Comunicacao Social (SECOMS)
- Highlights:
  - Produced and edited documentary video projects.
  - Coordinated concepts, scripts, and shooting schedules.
  - Managed post-production including editing, sound mixing, and color correction.
  - Used editing software to improve video quality and storytelling.

### 7.4 Education

Education 1:

- Period: 2020 - 2026
- Institution: UNTL
- Degree: Bachelor's Degree of Engineering
- Status: Undergraduate
- Highlights:
  - Semester 4 and 5: Workshop Management Information System.
  - Semester 6 and 7: Public Complaint Information System and student grade data analysis with predictive modeling.
  - Final Year Capstone: IoT-based real-time water quality monitoring system for Nile tilapia ponds, tracking pH, temperature, turbidity, TDS, and humidity.

Education 2:

- Period: 2016 - 2018
- Institution: ETI - Baucau
- Level: High School
- Status: Graduated
- Highlights:
  - Focus on informatics and technical studies.
  - Final project: Online voting information system for student council president election.
  - Built foundational skills in computer science, software development, and technical problem-solving.

Data correction:

- The old Wix site listed high school year as `2035 - 2035`; this has been corrected to `2016 - 2018`.

### 7.5 Professional Skillset

From old portfolio:

- Troubleshooting & IT Support
- Software & Systems Development
- Mobile App Development
- IoT & Embedded Systems

Expanded stack inferred from project details:

- Flutter
- Dart
- Riverpod
- GoRouter
- Firebase
- Firestore
- Firebase Authentication
- Firebase Storage
- MQTT
- HiveMQ
- OneSignal
- Cloudinary
- ESP32 / Arduino-based microcontrollers
- pH sensor
- TDS sensor
- Turbidity sensor
- DHT11
- Temperature sensor
- PHP
- CodeIgniter 4
- MySQL
- MariaDB / TiDB-compatible configuration
- Bootstrap
- HTML
- CSS
- JavaScript
- Telegram Bot API
- Data analysis / predictive modeling
- Video editing and post-production

### 7.6 Languages

- Tetun: Native
- English: Proficient
- Bahasa Indonesia: Proficient

## 8. Project Content Requirements

### 8.1 Project: SmartPond

Title:

- SmartPond - IoT-Based Real-Time Water Quality Monitoring System for Nile Tilapia Ponds

Short description:

- Full-stack Flutter mobile application with IoT integration, real-time MQTT, Firebase backend, OneSignal push notifications, and Cloudinary image storage.

Category:

- IoT
- Mobile App
- Aquaculture
- Firebase

Problem:

- Small and medium tilapia farmers need affordable real-time monitoring for pond water quality.

Core features:

- Real-time dashboard for air temperature, humidity, water temperature, pH, TDS, and turbidity.
- Device selector, unread alert badge, and last update timestamp.
- OneSignal push notifications for out-of-range parameters.
- Alert cooldown to prevent notification spam.
- Historical charts with FlChart.
- Export data as CSV, Excel, and PDF.
- Alert management screen with unread/all tabs.
- Admin threshold configuration.
- MQTT broker management.
- Device access control.
- Interactive map with device status and pond locations.
- User authentication and role-based UI.
- Farmer-friendly manual/help section.

Technical stack:

- Flutter / Dart
- Firebase Authentication
- Firestore
- MQTT / HiveMQ
- ESP32 or Arduino sensor publishing
- OneSignal
- Cloudinary
- FlChart
- flutter_map / OpenStreetMap
- Provider, ValueNotifier, StreamBuilder
- pdf, excel, csv, share_plus

Benefits:

- 24/7 remote monitoring.
- Early warning for poor water conditions.
- Historical data for better aquaculture decisions.
- Affordable and scalable for rural communities.
- Localized for Timor-Leste context.

Case study CTA:

- View Case Study
- Optional: GitHub / Demo if URL is available.

### 8.2 Project: IoT-Based Water Quality Monitoring System

Title:

- IoT-Based Water Quality Monitoring System for Tilapia Fish Ponds

Short description:

- IoT water quality monitoring system using temperature, TDS, DHT11, turbidity, and pH sensors.

Category:

- IoT
- Embedded Systems
- Water Quality

Core features:

- Real-time sensor monitoring.
- MQTT data transmission through HiveMQ.
- Cloud/image handling with Cloudinary.
- OneSignal push notifications.
- Dashboard for live data, trends, and alerts.

Technical stack:

- Temperature sensor
- TDS sensor
- DHT11
- Turbidity sensor
- pH sensor
- ESP32 / Arduino-based microcontroller
- MQTT / HiveMQ
- Cloudinary
- OneSignal
- Web or mobile dashboard

Benefits:

- Better fish health and productivity.
- Remote pond management.
- Affordable for small-scale aquaculture.
- Historical trend analysis.

### 8.3 Project: Lagoa Iralalaro Documentary

Title:

- Lagoa Iralalaro Documentary: History and Legends of Timor-Leste's Largest Lagoon

Short description:

- Documentary project promoting cultural heritage, local tourism, and oral history from Lautem Municipality.

Category:

- Media
- Documentary
- Cultural Heritage

Core features:

- Cultural storytelling and legend narration.
- On-location filming around Lagoa Iralalaro, Los Palos, Malahara, and related cultural sites.
- Multilingual narration/dubbing and subtitles.
- Tourism promotion for Lautem.
- Team-based production with scripting, direction, dubbing, translation, and editing.

Technical implementation:

- Canon EOS 350D DSLR
- iPhone XR
- PC editing setup
- Audio recording and dubbing
- Subtitle and translation workflow

Benefits:

- Preserves oral history and local legends.
- Promotes Lautem tourism.
- Involves community and local authorities.
- Makes cultural content accessible through YouTube.

### 8.4 Project: Workshop Management System

Title:

- Workshop Management System

Short description:

- Workshop Management Information System using PHP, Bootstrap, and MySQL.

Category:

- Web App
- Business System
- PHP

Core features:

- Admin role.
- Cashier role.
- Real-time dashboard for daily revenue and KPIs.
- Shopping cart.
- Automatic invoice generation.
- Membership management.
- Transaction reports.
- Inventory reports.

Technical stack:

- PHP
- MySQL
- Bootstrap
- AJAX for dashboard updates

Benefits:

- Streamlines workshop operations.
- Reduces manual errors.
- Improves reporting transparency.
- Improves customer experience through membership benefits.

### 8.5 Project: Community Complaint System

Title:

- Community Complaint Information System

Short description:

- Community complaint web system using PHP, HTML, MySQL, and real-time Telegram bot notifications.

Category:

- Web App
- Civic Tech
- Telegram Bot

Core features:

- User registration and login.
- Complaint submission with descriptions and optional files/images.
- Admin dashboard.
- Complaint status tracking.
- Real-time Telegram notifications for new complaints.

Technical stack:

- PHP
- HTML
- CSS
- MySQL
- Telegram Bot API

Benefits:

- Faster complaint handling.
- Better transparency for users.
- Accessible from any internet-connected device.
- Immediate admin response through Telegram notification.

### 8.6 GitHub Repository Projects

Portfolio baru harus menampilkan project dari GitHub secara otomatis, selain project curated/case study dari portfolio Wix lama.

Current public repository snapshot:

- Source: public GitHub repositories under `https://github.com/herciomoreira3`.
- Date checked: 2026-06-01.
- Scope: public, non-archived repositories visible through GitHub public API.
- Private repositories require a valid GitHub token or repaired local `gh` authentication.

Repositories discovered:

| Repository | Display title | Main language | Portfolio treatment |
| --- | --- | --- | --- |
| `Testora-Online-Exam-Mobile-Aplication` | Testora - Online Exam Mobile Application | Dart | New project card and case study candidate |
| `SmartPond-IoT-Monitoring-System` | SmartPond - IoT Monitoring System | Dart | Link to existing SmartPond case study; do not duplicate as a separate project |
| `SIPOLAI-Sistema-Manajementu-Dadus-Populasaun-CI4` | SIPOLAI - Population Data Management System | PHP | New project card and case study candidate |
| `SIMAUCATAR-HRIS-Human-Resource-Information-System-CI4` | SIMAUCATAR - HRIS for Maucatar Administrative Post | JavaScript / CI4 stack | New project card and case study candidate |

#### GitHub Project: Testora

Title:

- Testora - Online Exam Mobile Application

Short description:

- Flutter mobile application for secure online exams with real-time Firebase data, role-based access, notifications, localization, and reporting.

Category:

- Mobile App
- Education Technology
- Flutter
- Firebase

Core features from README:

- Admin can manage users, subjects, exam submissions, reports, and alerts.
- Teacher can create exams for assigned subjects, manage questions, view students, and review results.
- Student can view published exams, take timed exams, view history, and receive alerts.
- Supports Tetun and English interface.
- Supports push notifications and PDF/report export.

Technical stack:

- Flutter
- Dart
- Firebase Auth
- Cloud Firestore
- Firebase Storage
- Riverpod
- OneSignal
- GoRouter
- Easy Localization
- PDF export

GitHub URL:

- `https://github.com/herciomoreira3/Testora-Online-Exam-Mobile-Aplication`

#### GitHub Project: SmartPond Repository

Title:

- SmartPond - IoT Monitoring System

Short description:

- Flutter + Firebase + MQTT mobile application for real-time tilapia pond water-quality monitoring.

Portfolio handling:

- This repository maps to the existing SmartPond case study in section 8.1.
- The portfolio must merge GitHub metadata into the curated SmartPond project instead of showing two duplicate cards.
- Add the GitHub repository URL as the main source-code link.

GitHub URL:

- `https://github.com/herciomoreira3/SmartPond-IoT-Monitoring-System`

#### GitHub Project: SIPOLAI

Title:

- SIPOLAI - Sistema Manajementu Dadus Populasaun

Short description:

- CodeIgniter 4 system for managing population data, families, letters, inventory, requests, demographic records, uploads, and reports for Suku Laisorolai de Baixo.

Category:

- Web App
- Government / Community System
- CodeIgniter
- PHP

Core features from README:

- Authentication and session control.
- Aldeia/community structure management.
- Family and family member management.
- Incoming/outgoing letter records.
- Inventory and cargo tracking.
- Request forms and request types.
- Demographic records including population, profession, religion, and literacy.
- Document/photo uploads.
- Migrations and seeders for initial setup.

Technical stack:

- CodeIgniter 4
- PHP
- MySQL / MariaDB / TiDB-compatible configuration
- Composer
- Render deployment

Links:

- GitHub: `https://github.com/herciomoreira3/SIPOLAI-Sistema-Manajementu-Dadus-Populasaun-CI4`
- Demo: `https://sipolai-sistema-manajementu-dadus.onrender.com/`

#### GitHub Project: SIMAUCATAR

Title:

- SIMAUCATAR - Human Resource Information System

Short description:

- HRIS web application for employee, attendance, leave, salary, notice, and disciplinary management at Postu Administrativu Maucatar.

Category:

- Web App
- HRIS
- Government Administration
- CodeIgniter

Core features from README:

- Employee registration and profile management.
- Department, position, and category organization.
- Profile photo upload.
- Automatic user account creation.
- Clock-in and clock-out attendance.
- Attendance time configuration and late detection.
- Leave request management with supporting document upload.
- Salary/payment, official notice, and disciplinary sanction management.

Technical stack:

- CodeIgniter 4
- PHP 8.4
- Bootstrap 5
- MySQL
- JavaScript

GitHub URL:

- `https://github.com/herciomoreira3/SIMAUCATAR-HRIS-Human-Resource-Information-System-CI4`

### 8.7 GitHub Auto-Sync Requirements

The portfolio must support automatic GitHub project discovery.

GitHub source:

- Use GitHub REST API endpoint `GET /users/{username}/repos`.
- Username: `herciomoreira3`.
- Default query: `per_page=100`, `sort=pushed`, `type=owner`.
- Fetch public repositories by default.
- Private repositories are optional and require a GitHub token/server-side fetch.

Display rules:

- Include public, non-archived, non-fork repositories by default.
- Exclude repositories with topics or config flags such as `portfolio-hidden`, `draft`, or `private`.
- Feature repositories with topic/config flag `portfolio-featured`.
- If a repository matches a curated project through `githubRepo`, merge metadata instead of creating a duplicate card.
- Use repository `description` as card summary when available.
- If description is empty, use the first meaningful heading/paragraph from README.
- Use repository language and topics as initial tags.
- Show repo URL, homepage/demo URL, primary language, stars, forks, and last pushed date when useful.
- Sort order:
  1. Curated featured projects.
  2. Curated projects with GitHub metadata.
  3. Auto-discovered GitHub repositories sorted by `pushed_at`.

Freshness:

- A new public GitHub repository should appear automatically in the portfolio after cache refresh or redeploy.
- Target freshness for static deployment: within 24 hours.
- Target freshness for runtime/serverless fetch: within 1 hour.

Fallback:

- Keep a generated `githubRepos.snapshot.json` fallback so the portfolio still renders when the GitHub API is unavailable or rate-limited.
- The UI should show the last successful sync date in development/debug mode, not necessarily to end users.

Recommended implementation:

- MVP: run a build-time sync script that fetches public repos and writes `src/data/githubRepos.snapshot.json`.
- Add GitHub Actions scheduled workflow or deployment platform scheduled rebuild to refresh the snapshot.
- Optional runtime enhancement: serverless API route with cache headers to fetch GitHub repos without exposing private tokens.

### 8.8 Dynamic Resume Requirements

Resume content must not be hardcoded inside UI components. Hercio must be able to add new resume entries without changing component code.

Editable resume content must support:

- Experience
- Education
- Certifications
- Awards
- Volunteer/community work
- Publications or presentations
- Training/workshops
- Languages
- Skill categories
- Optional CV link for future use only

Recommended MVP content source:

- Store resume entries in editable JSON, YAML, or Markdown/MDX files under `/content/resume/`.
- Components read the content through a typed content loader.
- A new resume item should appear after editing the content file and redeploying.

Recommended no-code editing layer:

- Add Decap CMS or another Git-backed CMS as a lightweight admin interface.
- CMS should edit files in the repository instead of using a separate database.
- Use an editorial workflow if review/approval is needed.

Dynamic behavior:

- Resume items must be sorted by date automatically.
- Items can be marked `visible: false` to hide without deleting.
- Items can be marked `featured: true` to appear near the top.
- Resume section should support category filters or tabs if the content grows.
- CV PDF support is optional and should not appear inside the Tools section by default; leave room for a future auto-generated PDF resume if needed.

## 9. Information Architecture

MVP should be a single-page portfolio with anchor navigation.

Recommended nav:

- Home
- Projects
- Tools
- Contact

Resume content placement:

- Include Experience, Education, Skillset, and Languages inside a dedicated `Resume` block between Projects and Tools, or as a compact timeline subsection under Home.
- If an extra nav item is acceptable, use: Home, Projects, Resume, Tools, Contact.
- If visual parity with the reference is the priority, keep the nav at four items and make Resume reachable through the page flow plus a compact timeline section.

Recommended page order:

1. Home / Hero
2. Tech Stack
3. Projects
4. Resume / Experience & Education
5. Tools / Toolbox
6. Contact
7. Footer

## 10. UX Requirements

### 10.1 Global Layout

- Single-page scroll experience.
- Fixed top-centered pill navigation.
- Smooth anchor scroll.
- Active nav state changes by section.
- Language switcher for English, Bahasa Indonesia, and Tetun.
- Light grid background across the page.
- Soft ambient background lighting integrated into the canvas.
- No Wix banner or Wix footer.
- CMS dependency is optional and limited to content editing; the public site must still render from content files/snapshots.
- Use glassmorphism for cards, nav, contact block, and small pills.
- Use consistent max-width container around 1100-1200px.

### 10.2 Home / Hero

Content:

- Status pill: "Available for projects" or "Open to collaboration".
- Circular avatar/photo area.
- Large name: "Hercio Moreira Gusmao".
- Verification-style accent icon beside name.
- Animated role text: e.g. "IT Support Engineer", "IoT Developer", "Mobile App Developer".
- Short bio from old portfolio.
- Primary CTA: View Projects.
- Secondary CTA: GitHub.
- Secondary CTA: WhatsApp.
- Optional CTA: SIPOLAI Live Demo.
- Stats row:
  - 5+ Projects
  - IoT / Mobile / Support
  - Timor-Leste

Behavior:

- Role text should animate or rotate.
- Hero elements should reveal on load.
- CTA buttons should have hover lift and shadow.

### 10.3 Tech Stack

Content:

- Display skill pills similar to reference.
- Use icons where possible.
- Include:
  - IT Support
  - Troubleshooting
  - Flutter
  - Dart
  - Firebase
  - Riverpod
  - MQTT
  - IoT
  - PHP
  - CodeIgniter 4
  - MySQL
  - Bootstrap
  - JavaScript
  - Cloudinary
  - OneSignal
  - Telegram Bot API

Behavior:

- Horizontal wrapping row on desktop.
- Scrollable or wrapped chips on mobile.
- Subtle reveal animation.

### 10.4 Projects

Content:

- Section eyebrow: "WORK"
- Section title: "Projects"
- Section subtitle: "Selected systems and field projects across IoT, mobile apps, IT support, and community software."
- Show curated projects from the old portfolio plus auto-discovered GitHub repositories.
- Current MVP should include the 5 old portfolio projects and the 3 new GitHub-only projects: Testora, SIPOLAI, and SIMAUCATAR.
- SmartPond GitHub repository must enrich the existing SmartPond case study instead of creating a duplicate card.

Card requirements:

- Icon/category visual.
- Project title.
- Short description.
- Tech tag or category tag.
- Button: "View Case Study".
- Optional external links: GitHub, Demo, Video.

Detail requirements:

- MVP can use modal, expandable panel, or dedicated route.
- Detail view must include:
  - Problem
  - Role
  - Key features
  - Technical implementation
  - Benefits/impact
  - Stack
  - Media placeholder

Behavior:

- Cards reveal as user scrolls.
- Hover state: card lifts slightly, border/glow strengthens.
- Cards should remain readable and not overflow.
- Auto-discovered repositories should use a clean fallback card even when README, demo link, or image is missing.

### 10.5 Resume / Experience & Education

Content:

- Resume data must come from editable content files or Git-backed CMS, not hardcoded component JSX.
- Experience timeline:
  - SOI Asia / CBR IoT Project Team Timor-Leste
  - Ratalolo Team / SECOMS
- Education timeline:
  - UNTL, Bachelor's Degree of Engineering, 2020-2026
  - ETI - Baucau, High School, year requires confirmation
- Professional skillset.
- Languages.
- Future additions must support certifications, workshops/training, awards, volunteer work, and optional CV updates.

Visual:

- Use glass cards or timeline blocks.
- Keep design consistent with reference: airy spacing, soft cards, compact labels.
- If many resume items are added later, introduce compact tabs or filters by category.

### 10.6 Tools / Toolbox

Purpose:

- Match reference structure while adapting to Hercio's actual profile.

MVP cards:

- "SIPOLAI Live Demo" - link langsung ke demo Render: `https://sipolai-sistema-manajementu-dadus.onrender.com/`.
- "Testora Android App" - download APK dari GitHub Release:
  - Android 32-bit, untuk Android 1.0 sampai Android 4.4: `https://github.com/herciomoreira3/Testora-Online-Exam-Mobile-Aplication/releases/download/v1.0.0/app-armeabi-v7a-release.apk`
  - Android 64-bit, untuk Android 5.0 dan lebih baru: `https://github.com/herciomoreira3/Testora-Online-Exam-Mobile-Aplication/releases/download/v1.0.0/app-arm64-v8a-release.apk`
- "Repository Pulse" - menampilkan jumlah repository public yang sudah tersinkron dan waktu refresh terakhir dari snapshot GitHub.

Do not create fake live demos.

### 10.7 Contact

Content:

- Eyebrow: "GET IN TOUCH"
- Title: "Let's Build Together"
- Description: "Open to collaborations, freelance projects, IT support work, and IoT/software discussions."
- Buttons:
  - Email Me: `mailto:herciomoreira3@gmail.com`
  - GitHub: `https://github.com/herciomoreira3`
  - LinkedIn: `https://www.linkedin.com/in/hercio-moreira-gusmao-0819753b5`
  - WhatsApp: `https://wa.link/kpbawn`
- Phone text: `(+670) 73735557`

Behavior:

- External links open in a new tab where appropriate.
- Email and WhatsApp links should work on desktop and mobile.

### 10.8 Footer

Content:

- "(c) 2026 Hercio Moreira Gusmao. All Rights Reserved."
- Optional small text: "Built with React, TypeScript, and care."

Do not include:

- Wix branding.
- "Powered by Wix."

## 11. Visual Design Requirements

Reference style to match:

- Light pastel canvas with subtle blue/lavender tone.
- 64px grid overlay with very low opacity.
- Fixed glass pill navigation centered at top.
- Cards with translucent white background, blur, soft border, and subtle shadow.
- Large bold hero name.
- Small uppercase section eyebrows.
- Rounded chips and buttons.
- Purple/blue accent color.
- Floating contact/chat-style button may be included only if it links to WhatsApp or contact.

Recommended design tokens:

- Font: Inter, system-ui, sans-serif.
- Text primary: near-black navy, e.g. `#18182e`.
- Text secondary: muted gray-lavender, e.g. `#6f7287`.
- Accent purple: `#7c6af7`.
- Accent blue/cyan: `#38bdf8` or similar.
- Canvas: very light lavender/blue, e.g. `#f3f6ff`.
- Card background: rgba white around 0.55-0.78.
- Card border: rgba white around 0.70-0.85.
- Backdrop blur: 20px-24px.
- Card radius: approximately 24px to match reference.
- Nav radius: 999px.
- Grid size: 64px.

Layout measurements:

- Desktop nav height: about 56px.
- Desktop nav width: about 360-430px depending nav item count.
- Hero max-width: about 650px.
- Project cards: 3-column grid on desktop.
- Cards min-height: about 250-300px.
- Mobile project cards: 1-column.

Animation:

- Smooth reveal on scroll.
- Hero stagger animation.
- Button hover transform.
- Optional typewriter / rotating role.
- Animation must respect `prefers-reduced-motion`.

Important implementation note:

- The background should feel close to the reference but should not depend on copied image assets or copied CSS.
- Ambient color should be integrated subtly into the page background, not treated as unrelated decorative blobs.

## 12. Technical Requirements

Recommended MVP stack:

- Vite
- React
- TypeScript
- CSS custom properties with handcrafted CSS, or Tailwind CSS if it helps speed.
- Framer Motion or lightweight CSS animations for reveal/hero transitions.
- lucide-react or react-icons for UI/social icons.
- Typed content/data files for profile, curated projects, resume, skills, and links.
- GitHub repository sync layer for auto-discovered projects.
- Decap CMS or another Git-backed CMS for editing resume/content without changing component code.
- Optional React Router only if project detail pages use dedicated routes.

Why this stack:

- Fast static site.
- Easy to maintain by a developer.
- No custom CMS/backend overhead.
- Good deployment options.
- Easy animation and component structure.
- Supports automatic GitHub project updates and editable resume content.

Suggested file structure:

```txt
src/
  assets/
  components/
    Nav.tsx
    Hero.tsx
    TechStack.tsx
    Projects.tsx
    ProjectCard.tsx
    ProjectDetail.tsx
    Resume.tsx
    Toolbox.tsx
    Contact.tsx
    Footer.tsx
  data/
    profile.ts
    projects.ts
    githubRepos.snapshot.json
    resume.ts
    skills.ts
  content/
    resume/
      experience.json
      education.json
      certifications.json
  lib/
    github.ts
    content.ts
  scripts/
    sync-github-repos.ts
  public/
    admin/
      config.yml
      index.html
  styles/
    globals.css
    tokens.css
  App.tsx
  main.tsx
```

Content management:

- Curated profile/project content must live in typed data or content files.
- Auto-discovered GitHub repository content must come from GitHub API sync and a generated snapshot fallback.
- Resume content must live in editable JSON/YAML/Markdown content files and can be edited through GitHub UI or a Git-backed CMS.
- No hardcoded project or resume text inside UI components.
- Data should be easy to edit without touching layout code.
- Adding a new public GitHub repository should not require changing portfolio code.
- Adding a new resume item should not require changing portfolio code.

GitHub integration:

- Public repos can be fetched client-side, build-time, or through a cached serverless route.
- Preferred MVP: build-time script `sync-github-repos` writes a snapshot file, then the UI merges that snapshot with curated project data.
- Preferred production: scheduled GitHub Actions or deployment-platform cron triggers a rebuild so new repositories appear automatically.
- Private repos must be fetched server-side with a token and must never expose the token in browser JavaScript.
- If local `gh` authentication is used for development, the token must be valid before syncing private repositories.

Editable resume integration:

- Preferred MVP: Git-backed content files committed to the repo.
- Preferred no-code admin: Decap CMS editing `/content/resume/` and `/content/profile/`.
- The CMS must create commits or pull requests in GitHub; deployment should rebuild after merge/publish.

Deployment:

- Vercel, Netlify, or GitHub Pages.
- Custom domain optional.

## 13. Data Model Requirements

### 13.1 Profile

Fields:

- name
- displayRole
- rotatingRoles
- bio
- location
- email
- phone
- links
- stats
- cvUrl
- avatarUrl

### 13.2 Project

Fields:

- id
- title
- shortTitle
- slug
- summary
- category
- tags
- year
- role
- problem
- features
- technicalImplementation
- stack
- benefits
- links
- media
- featured
- source: curated | github | merged
- githubRepo
- repoUrl
- homepageUrl
- primaryLanguage
- topics
- stars
- forks
- pushedAt
- lastSyncedAt
- isAutoDiscovered
- isHidden

### 13.3 Resume Item

Fields:

- id
- type: experience | education | certification | award | volunteer | training | publication | language | skill
- title
- organization
- period
- startDate
- endDate
- current
- location
- description
- highlights
- tags
- links
- visible
- featured
- sortOrder
- source
- updatedAt

### 13.4 Skill

Fields:

- id
- label
- category
- icon
- priority

### 13.5 GitHub Repository Snapshot

Fields:

- id
- name
- fullName
- description
- htmlUrl
- homepageUrl
- primaryLanguage
- topics
- stars
- forks
- isFork
- isArchived
- defaultBranch
- createdAt
- updatedAt
- pushedAt
- readmeSummary
- matchedProjectId
- visibility
- lastSyncedAt

### 13.6 Content Source Config

Fields:

- githubUsername
- repoIncludeMode
- excludedRepos
- featuredRepos
- hiddenTopics
- featuredTopics
- resumeContentPath
- cmsEnabled
- syncInterval
- lastSuccessfulSyncAt

## 14. SEO Requirements

Page title:

- "Hercio Moreira Gusmao - IT Support & IoT Software Engineer"

Meta description:

- "Portfolio of Hercio Moreira Gusmao, an Informatics Engineering student and IT Support/IoT developer from Timor-Leste building mobile, IoT, and web systems."

Open Graph:

- og:title
- og:description
- og:type = website
- og:image = generated or provided portfolio preview image
- og:url = final domain

Structured data:

- Person schema.
- SameAs links: GitHub, LinkedIn.

SEO behavior:

- Anchor sections should be crawlable.
- Project cards should have meaningful headings.
- Images need alt text.

## 15. Accessibility Requirements

- Use semantic HTML sections and headings.
- Nav links must be keyboard accessible.
- Buttons and links need visible focus states.
- Color contrast should pass WCAG AA.
- Do not rely on color alone for status.
- Respect `prefers-reduced-motion`.
- Avatar and project images need meaningful alt text or empty alt if decorative.
- External links should have accessible labels if icon-only.

## 16. Performance Requirements

Targets:

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 90+
- Lighthouse SEO: 90+
- First Contentful Paint: under 1.8s on good connection
- Largest Contentful Paint: under 2.5s
- JavaScript bundle should stay small for a static portfolio.

Implementation:

- Optimize images.
- Lazy load non-critical media.
- Avoid heavy animation libraries unless necessary.
- Primary curated content should render from local content files or a generated snapshot.
- GitHub auto-projects must have cached/static fallback so rate limits or API downtime do not blank the Projects section.
- If runtime GitHub fetching is used, cache responses and show stale data gracefully.

## 17. Responsive Requirements

Desktop:

- Centered hero with large typography.
- 3-column project grid.
- Pill nav centered at top.

Tablet:

- 2-column project grid.
- Hero typography reduced.
- Nav still centered but width adapts.

Mobile:

- 1-column layout.
- Nav remains usable and does not overflow.
- Hero name must fit without horizontal scroll.
- Buttons wrap cleanly.
- Cards remain readable with adequate padding.
- Contact buttons stack or wrap.

Breakpoints:

- Mobile: below 640px
- Tablet: 640px-1024px
- Desktop: 1024px+

## 18. Functional Acceptance Criteria

MVP is accepted when:

1. Website runs locally with a standard dev command.
2. Portfolio has no Wix banner, Wix footer, or Wix dependency.
3. Home section shows Hercio's name, role, bio, stats, and CTAs.
4. Navigation scrolls to the correct sections.
5. Visual style closely matches the reference: glass pill nav, light grid background, centered hero, soft glass cards, purple/blue accents.
6. Projects section includes all 5 old portfolio projects.
7. Projects section includes current public GitHub-only projects: Testora, SIPOLAI, and SIMAUCATAR.
8. SmartPond GitHub repository is merged into the existing SmartPond case study instead of duplicated.
9. Adding a new public GitHub repository can make it appear automatically through API sync/snapshot refresh without changing UI component code.
10. Each curated project has a case-study level detail view or expandable detail content.
11. Resume/Experience/Education content from old site is included.
12. Adding a new resume item through content files or CMS can update the Resume section without changing component code.
13. Contact links work for email, WhatsApp, GitHub, and LinkedIn.
14. Site is responsive on mobile, tablet, and desktop.
15. Lighthouse targets are met or documented if not met.
16. Content is stored in maintainable data/content files, not scattered in components.

## 19. Content Issues To Confirm Before Launch

1. Exact spelling: "Gusmao" or "Gusmão".
2. Final role title.
3. High school year for ETI - Baucau has been corrected to `2016 - 2018`.
4. Whether a CV PDF should be reintroduced later, and what the final filename should be.
5. Profile photo/avatar to use.
6. Project images, screenshots, video links, GitHub links, and live demo links.
7. Site language support is English, Bahasa Indonesia, and Tetun.
8. Final domain and deployment target.
9. Whether private GitHub repositories should appear; this requires a valid token and server-side/private sync.
10. Whether resume editing should be GitHub file editing only, or a no-code admin UI such as Decap CMS.
11. Which GitHub repos should be hidden, featured, or merged with existing case studies.
12. Whether demo credentials for SIPOLAI should be shown publicly or kept out of the portfolio.

## 20. Suggested Implementation Phases

### Phase 1 - Foundation

- Create Vite + React + TypeScript project.
- Add global design tokens and background system.
- Build responsive layout shell.
- Add typed data/content structure.
- Add initial GitHub repository snapshot.

### Phase 2 - Core Sections

- Build Nav.
- Build Hero.
- Build Tech Stack.
- Build Projects cards.
- Build GitHub auto-discovered project cards.
- Build Contact.

### Phase 3 - Content Depth

- Add Project detail modal or pages.
- Add Resume timeline.
- Add editable resume content loader.
- Add Toolbox section.
- Add SIPOLAI live demo and Testora APK download behavior.

### Phase 4 - Dynamic Content

- Add GitHub repository sync script.
- Add scheduled rebuild or GitHub Actions refresh.
- Add duplicate merge logic for curated projects with matching repos.
- Add Decap CMS or Git-backed editing flow for resume/profile content if no-code editing is required.

### Phase 5 - Polish

- Add scroll reveal, typewriter/role rotation, hover states.
- Add SEO metadata and Open Graph image.
- Add accessibility pass.
- Optimize mobile layout.

### Phase 6 - Deployment

- Build production bundle.
- Test locally.
- Deploy to Vercel/Netlify/GitHub Pages.
- Connect domain if available.

## 21. Recommended First Build Decision

Use a hybrid single-page React + TypeScript portfolio: curated content files for strong case studies, GitHub auto-sync for repository cards, and editable Git-backed resume content. Do not build a custom CMS/backend from scratch. Build the design manually with CSS tokens to match the reference closely. The old portfolio projects remain the curated narrative source, while GitHub becomes the automatic source for new repository-based projects.
