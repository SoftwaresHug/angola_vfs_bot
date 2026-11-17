// Auto-generated configuration for VFS Portugal Angola AutoBot

export const config = {
  botName: "VFS Portugal Angola",
  country: "Angola",
  provider: "VFS Global",
  destination: "Portugal",
  loginUrl: "https://visa.vfsglobal.com/ago/pt/prt/login",
  centers: [
  "Luanda"
],
  visaCategories: [
  "Schengen",
  "Job Seeker",
  "Work",
  "Study",
  "Family Reunification",
  "Transit",
  "Medical"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
