import type { Project } from "../types";

export const curatedProjects: Project[] = [
  {
    id: "smartpond",
    title: "SmartPond - IoT-Based Real-Time Water Quality Monitoring System",
    shortTitle: "SmartPond",
    slug: "smartpond-iot-monitoring",
    summary:
      "A Flutter + Firebase + MQTT mobile system that helps tilapia farmers monitor pond water quality in real time.",
    category: "IoT Mobile App",
    tags: ["Flutter", "Firebase", "MQTT", "OneSignal", "Cloudinary"],
    year: "2025",
    role: "Mobile developer, IoT contributor, and IT support",
    problem:
      "Small tilapia farmers need affordable early warnings for pH, turbidity, TDS, humidity, and temperature changes that can harm fish health.",
    features: [
      "Real-time dashboard for water and environmental sensor readings.",
      "OneSignal alerts when parameters move outside safe thresholds.",
      "Historical charts and export to CSV, Excel, and PDF.",
      "Admin controls for thresholds, MQTT configuration, user roles, and device access.",
      "Map view for pond/device location and status.",
    ],
    technicalImplementation: [
      "Flutter interface with role-based admin and farmer views.",
      "Firestore streams for live sensor and alert data.",
      "MQTT through HiveMQ for ESP32/Arduino sensor publishing.",
      "Cloudinary upload flow for pond photos.",
      "Provider, ValueNotifier, and StreamBuilder for app state.",
    ],
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "MQTT", "HiveMQ", "OneSignal", "Cloudinary"],
    benefits: [
      "Helps farmers monitor ponds remotely.",
      "Reduces risk from poor water quality through earlier action.",
      "Turns historical sensor readings into practical decisions.",
      "Focuses on a Timor-Leste aquaculture use case.",
    ],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/herciomoreira3/SmartPond-IoT-Monitoring-System",
      },
    ],
    featured: true,
    source: "curated",
    githubRepo: "SmartPond-IoT-Monitoring-System",
  },
  {
    id: "iot-water-quality",
    title: "IoT-Based Water Quality Monitoring System for Tilapia Fish Ponds",
    shortTitle: "IoT Water Quality",
    slug: "iot-water-quality-tilapia",
    summary:
      "Embedded monitoring system using pH, TDS, turbidity, DHT11, and temperature sensors for pond-based aquaculture.",
    category: "Embedded IoT",
    tags: ["ESP32", "Sensors", "MQTT", "HiveMQ", "OneSignal"],
    year: "2025",
    role: "IoT system designer and implementer",
    problem:
      "Manual pond checks are slow and can miss sudden changes in water quality that affect tilapia health.",
    features: [
      "Continuous monitoring for pH, TDS, turbidity, water temperature, and ambient humidity.",
      "MQTT publish/subscribe data flow through HiveMQ.",
      "Cloud and dashboard visualization support.",
      "Mobile push alerts for unsafe readings.",
    ],
    technicalImplementation: [
      "Sensor readings collected by ESP32 or Arduino-based microcontroller.",
      "Low-latency data transmission through MQTT.",
      "Cloudinary support for visual pond condition assets.",
      "Dashboard-ready data model for live and historical readings.",
    ],
    stack: ["ESP32", "pH Sensor", "TDS Sensor", "DHT11", "Turbidity Sensor", "MQTT", "HiveMQ"],
    benefits: [
      "Supports healthier fish growth.",
      "Reduces manual monitoring effort.",
      "Provides data for better feeding, aeration, and water exchange decisions.",
    ],
    links: [],
    featured: true,
    source: "curated",
  },
  {
    id: "lagoa-iralalaro",
    title: "Lagoa Iralalaro Documentary",
    shortTitle: "Lagoa Iralalaro",
    slug: "lagoa-iralalaro-documentary",
    summary:
      "A documentary project preserving and promoting the history, legends, and cultural tourism value of Lagoa Iralalaro.",
    category: "Documentary",
    tags: ["Videography", "Editing", "Subtitles", "Storytelling"],
    year: "2022",
    role: "Producer and editor",
    problem:
      "Important local stories and tourism potential in Lautem need accessible digital documentation.",
    features: [
      "Cultural storytelling and legend narration.",
      "On-location filming around Lautem and Lagoa Iralalaro.",
      "Multilingual narration, dubbing, translation, and subtitles.",
      "YouTube-ready documentary output.",
    ],
    technicalImplementation: [
      "Field videography using Canon EOS 350D and iPhone XR.",
      "Post-production with editing, pacing, sound, subtitle, and translation work.",
      "Team coordination for script, direction, featuring, and dubbing.",
    ],
    stack: ["Video Editing", "Sound Mixing", "Subtitles", "Canon DSLR", "iPhone XR"],
    benefits: [
      "Preserves oral history and local heritage.",
      "Promotes tourism in Lautem Municipality.",
      "Shows end-to-end media production skills.",
    ],
    links: [],
    source: "curated",
  },
  {
    id: "workshop-management",
    title: "Workshop Management System",
    shortTitle: "Workshop System",
    slug: "workshop-management-system",
    summary:
      "PHP, Bootstrap, and MySQL system for workshop transactions, inventory, membership, and reporting.",
    category: "Business Web App",
    tags: ["PHP", "MySQL", "Bootstrap", "AJAX"],
    year: "2023",
    role: "Full-stack web developer",
    problem:
      "Workshop operations need clear transaction, revenue, inventory, and customer membership tracking.",
    features: [
      "Admin and cashier roles.",
      "Daily revenue dashboard.",
      "Shopping cart and automatic invoice generation.",
      "Membership and inventory reports.",
    ],
    technicalImplementation: [
      "PHP backend for authentication, transactions, and data operations.",
      "MySQL database for users, inventory, and transaction records.",
      "Bootstrap responsive interface and AJAX dashboard updates.",
    ],
    stack: ["PHP", "MySQL", "Bootstrap", "AJAX"],
    benefits: [
      "Reduces manual transaction errors.",
      "Improves operational transparency.",
      "Helps workshop teams track sales and inventory.",
    ],
    links: [],
    source: "curated",
  },
  {
    id: "community-complaint",
    title: "Community Complaint Information System",
    shortTitle: "Community Complaint",
    slug: "community-complaint-system",
    summary:
      "PHP and MySQL complaint platform with admin dashboard and real-time Telegram bot notifications.",
    category: "Civic Web App",
    tags: ["PHP", "MySQL", "Telegram Bot", "HTML", "CSS"],
    year: "2024",
    role: "Full-stack web developer",
    problem:
      "Communities need faster and more transparent ways to submit and track complaints to local administrators.",
    features: [
      "User registration and secure login.",
      "Complaint submission with details and optional attachments.",
      "Admin dashboard to manage and respond to complaints.",
      "Real-time Telegram notification when new complaints arrive.",
    ],
    technicalImplementation: [
      "PHP backend for authentication, complaint submission, and retrieval.",
      "MySQL storage for users and complaint records.",
      "Telegram Bot API integration for instant admin alerts.",
    ],
    stack: ["PHP", "MySQL", "Telegram Bot API", "HTML", "CSS"],
    benefits: [
      "Improves response time.",
      "Lets users track complaint status.",
      "Makes community service delivery more transparent.",
    ],
    links: [],
    source: "curated",
  },
];
