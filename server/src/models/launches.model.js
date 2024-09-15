export const launches = new Map();

const launch = {
  flightNumer: 100,
  mission: "Keplex Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
  costumer: ["Bidu", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumer, launch);
