const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Keplex Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  costumers: ["Bidu", "NASA"],
  upcoming: true,
  success: true,
};

export function getAllLaunches() {
  return Array.from(launches.values());
}

export function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      costumers: ["Bidu", "NASA"],
      flightNumber: latestFlightNumber,
    })
  );
}

launches.set(launch.flightNumber, launch);
