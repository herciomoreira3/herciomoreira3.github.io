import type { Skill } from "../types";

export const skills: Skill[] = [
  { id: "support", label: "IT Support", category: "support", icon: "Headphones", priority: 1 },
  { id: "troubleshooting", label: "Troubleshooting", category: "support", icon: "Wrench", priority: 2 },
  { id: "flutter", label: "Flutter", category: "mobile", icon: "Smartphone", priority: 3 },
  { id: "dart", label: "Dart", category: "mobile", icon: "Code2", priority: 4 },
  { id: "firebase", label: "Firebase", category: "cloud", icon: "Flame", priority: 5 },
  { id: "mqtt", label: "MQTT", category: "iot", icon: "RadioTower", priority: 6 },
  { id: "iot", label: "IoT Systems", category: "iot", icon: "Cpu", priority: 7 },
  { id: "php", label: "PHP", category: "web", icon: "ServerCog", priority: 8 },
  { id: "ci4", label: "CodeIgniter 4", category: "web", icon: "Layers", priority: 9 },
  { id: "mysql", label: "MySQL", category: "web", icon: "Database", priority: 10 },
  { id: "javascript", label: "JavaScript", category: "web", icon: "Braces", priority: 11 },
  { id: "onesignal", label: "OneSignal", category: "cloud", icon: "BellRing", priority: 12 },
  { id: "cloudinary", label: "Cloudinary", category: "cloud", icon: "Cloud", priority: 13 },
  { id: "telegram", label: "Telegram Bot API", category: "web", icon: "Send", priority: 14 },
];
