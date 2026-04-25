const gameCases = [
  {
    id: "silent-lake",
    title: "Silent Lake",
    region: "Lake Erie Watershed, Ohio",
    theme: "Fish die-off",
    summary:
      "Fish are dying in a lake area used by nearby families and birds. Find how warm weather and human pollution worked together.",
    sceneLabels: ["Lake Edge", "Farm Channel", "Shallow Bay"],
    telemetryMode: "Live weather conditions near the lake",
    liveConfig: {
      type: "weather",
      latitude: 41.69,
      longitude: -83.47,
      current: ["temperature_2m", "precipitation", "wind_speed_10m"],
      hourly: ["temperature_2m", "precipitation_probability", "wind_speed_10m"],
      metricLabels: [
        { key: "temperature_2m", label: "Air Temperature", unit: "°C" },
        { key: "precipitation", label: "Precipitation", unit: "mm" },
        { key: "wind_speed_10m", label: "Wind Speed", unit: "km/h" }
      ],
      chartLabels: [
        { key: "temperature_2m", label: "Temperature", color: "#6ef0b4" },
        { key: "precipitation_probability", label: "Rain Chance", color: "#7fd6ff" },
        { key: "wind_speed_10m", label: "Wind Speed", color: "#f3b562" }
      ],
      sourceLabel: "Open-Meteo Forecast API"
    },
    liveFeed: [
      { time: "6:10 AM", text: "Local fishers report dead fish gathering near the shore." },
      { time: "8:25 AM", text: "Rangers notice green water near the farm runoff channel." },
      { time: "11:40 AM", text: "A heat warning is issued for the region." }
    ],
    reports: [
      { title: "What players learn", body: "Warm water holds less oxygen, and fertilizer runoff can feed algae that make water even harder for fish to survive." },
      { title: "How to prevent it", body: "Use less fertilizer, plant buffer strips near waterways, and monitor lakes during heatwaves." },
      { title: "Human cause", body: "Too much farm runoff entered the water after rain." },
      { title: "Environmental cause", body: "Hot weather and still water made the oxygen problem worse." }
    ],
    suspects: [
      { id: "factory-spill", name: "Factory spill only", pitch: "A factory spill alone caused the fish deaths.", requiredEvidence: ["spill-marker"], threshold: 2 },
      { id: "algal-bloom", name: "Runoff and hot weather", pitch: "Farm runoff and hot weather caused algae growth that removed oxygen from the water.", requiredEvidence: ["runoff", "heatwave", "oxygen-drop"], threshold: 3 },
      { id: "pathogen", name: "Fish disease only", pitch: "A sudden fish disease was the main cause.", requiredEvidence: ["pathogen"], threshold: 2 }
    ],
    clues: [
      { id: "clue-a1", type: "Sensor Check", title: "Oxygen Drop", descriptionSimple: "Check if the lake lost oxygen overnight.", cost: 12, insight: "Oxygen dropped sharply overnight, which fits an algae-driven event.", tags: ["oxygen-drop"] },
      { id: "clue-a2", type: "Satellite View", title: "Algae Growth", descriptionSimple: "Look for algae growth from above.", cost: 18, insight: "Green bloom patterns spread outward from the runoff channel.", tags: ["runoff", "bloom"] },
      { id: "clue-a3", type: "Weather Review", title: "Heatwave", descriptionSimple: "Review heat and weather conditions.", cost: 10, insight: "The area had hot, still weather that made the water more stressed.", tags: ["heatwave"] },
      { id: "clue-a4", type: "Lab Test", title: "Chemical Spill Check", descriptionSimple: "Look for signs of a chemical spill.", cost: 20, insight: "There are traces of pollution, but not enough to explain the full die-off.", tags: ["spill-marker"], lockedUntil: 1 },
      { id: "clue-a5", type: "Lab Test", title: "Disease Check", descriptionSimple: "Check if a fish disease spread.", cost: 16, insight: "No major outbreak signal appears in the fish samples.", tags: ["pathogen"], lockedUntil: 2 }
    ],
    twist: {
      triggerAfter: 3,
      label: "Combined Cause Found",
      message: "Big lesson: environmental damage often comes from both nature and human activity working together."
    },
    solution: "algal-bloom"
  },
  {
    id: "withering-fields",
    title: "Withering Fields",
    region: "Fresno County, California",
    theme: "Crop failure",
    summary:
      "Crops are failing across local farms. Learn how dry soil and polluted air can harm plants together.",
    sceneLabels: ["Farm Rows", "Dry Canal", "Road Corridor"],
    telemetryMode: "Live air quality near the farms",
    liveConfig: {
      type: "air",
      latitude: 36.74,
      longitude: -119.79,
      current: ["us_aqi", "pm2_5", "ozone"],
      hourly: ["us_aqi", "pm2_5", "ozone"],
      metricLabels: [
        { key: "us_aqi", label: "US AQI", unit: "" },
        { key: "pm2_5", label: "PM2.5", unit: "ug/m3" },
        { key: "ozone", label: "Ozone", unit: "ug/m3" }
      ],
      chartLabels: [
        { key: "us_aqi", label: "AQI", color: "#6ef0b4" },
        { key: "pm2_5", label: "PM2.5", color: "#7fd6ff" },
        { key: "ozone", label: "Ozone", color: "#f3b562" }
      ],
      sourceLabel: "Open-Meteo Air Quality API"
    },
    liveFeed: [
      { time: "7:15 AM", text: "Farmers report yellowing leaves across several fields." },
      { time: "1:30 PM", text: "Air monitors show ozone climbing during the hottest part of the day." },
      { time: "4:50 PM", text: "Dry soil readings remain dangerously low." }
    ],
    reports: [
      { title: "What players learn", body: "Plants under drought stress are more easily damaged by dirty air, especially ozone." },
      { title: "How to prevent it", body: "Reduce air pollution, improve irrigation planning, and protect farmland near heavy traffic and industry." },
      { title: "Human cause", body: "Air pollution from roads and industry raised ozone near the farms." },
      { title: "Environmental cause", body: "Dry weather weakened the crops first." }
    ],
    suspects: [
      { id: "bad-pesticide", name: "Bad pesticide only", pitch: "A bad pesticide was the main reason crops failed.", requiredEvidence: ["spray"], threshold: 2 },
      { id: "ozone-stress", name: "Pollution and drought", pitch: "Air pollution and drought damaged the crops together.", requiredEvidence: ["ozone", "drought", "oxidative-damage"], threshold: 3 },
      { id: "soil-fungus", name: "Fungus only", pitch: "A fungus outbreak was the main cause.", requiredEvidence: ["fungus"], threshold: 2 }
    ],
    clues: [
      { id: "clue-b1", type: "Air Check", title: "Pollution Spike", descriptionSimple: "Check how bad the air pollution became.", cost: 14, insight: "Ozone levels rose high enough to damage already-stressed crops.", tags: ["ozone"] },
      { id: "clue-b2", type: "Plant Review", title: "Leaf Damage", descriptionSimple: "Look at leaf damage closely.", cost: 15, insight: "The injury pattern fits dirty-air stress more than spray burn.", tags: ["oxidative-damage"] },
      { id: "clue-b3", type: "Water Review", title: "Dry Soil", descriptionSimple: "See how dry the soil became.", cost: 12, insight: "The soil had been dry for too long before the pollution event hit.", tags: ["drought"] },
      { id: "clue-b4", type: "Record Check", title: "Pesticide Records", descriptionSimple: "Review pesticide records.", cost: 9, insight: "The spray records look normal and do not explain the crop loss.", tags: ["spray"], lockedUntil: 1 },
      { id: "clue-b5", type: "Soil Test", title: "Fungus Test", descriptionSimple: "Test for fungus in the soil.", cost: 18, insight: "There is no sign of a major fungus outbreak.", tags: ["fungus"], lockedUntil: 2 }
    ],
    twist: {
      triggerAfter: 3,
      label: "Stress Combination Found",
      message: "Big lesson: pollution harms crops more when the environment is already under stress."
    },
    solution: "ozone-stress"
  },
  {
    id: "breathless-city",
    title: "Breathless City",
    region: "Salt Lake City, Utah",
    theme: "Urban air emergency",
    summary:
      "City air suddenly becomes unhealthy. Discover how trapped air and human emissions built a dangerous pollution event.",
    sceneLabels: ["School Zone", "Freight Yard", "Valley Air"],
    telemetryMode: "Live city air-quality readings",
    liveConfig: {
      type: "air",
      latitude: 40.76,
      longitude: -111.89,
      current: ["us_aqi", "pm2_5", "ozone"],
      hourly: ["us_aqi", "pm2_5", "ozone"],
      metricLabels: [
        { key: "us_aqi", label: "US AQI", unit: "" },
        { key: "pm2_5", label: "PM2.5", unit: "ug/m3" },
        { key: "ozone", label: "Ozone", unit: "ug/m3" }
      ],
      chartLabels: [
        { key: "us_aqi", label: "AQI", color: "#6ef0b4" },
        { key: "pm2_5", label: "PM2.5", color: "#7fd6ff" },
        { key: "ozone", label: "Ozone", color: "#f3b562" }
      ],
      sourceLabel: "Open-Meteo Air Quality API"
    },
    liveFeed: [
      { time: "5:45 AM", text: "Schools receive alerts about dangerous air quality." },
      { time: "7:00 AM", text: "Neighborhood sensors near the freight yard spike first." },
      { time: "9:20 AM", text: "Weather teams confirm trapped air over the city." }
    ],
    reports: [
      { title: "What players learn", body: "Pollution can get worse when weather traps dirty air close to the ground." },
      { title: "How to prevent it", body: "Limit overnight idling, improve clean transport, and warn schools early during high-risk weather." },
      { title: "Human cause", body: "Diesel activity added more dirty air to the city." },
      { title: "Environmental cause", body: "A weather inversion trapped that pollution near homes and schools." }
    ],
    suspects: [
      { id: "rush-hour", name: "Morning traffic only", pitch: "Morning traffic alone caused the spike.", requiredEvidence: ["traffic"], threshold: 2 },
      { id: "diesel-inversion", name: "Diesel and trapped air", pitch: "Diesel pollution and trapped air built up together overnight.", requiredEvidence: ["diesel", "inversion", "night-spike"], threshold: 3 },
      { id: "wildfire", name: "Wildfire smoke only", pitch: "Smoke from a faraway wildfire was the main cause.", requiredEvidence: ["smoke"], threshold: 2 }
    ],
    clues: [
      { id: "clue-c1", type: "Map Check", title: "Neighborhood Pattern", descriptionSimple: "See which neighborhoods had the worst pollution.", cost: 11, insight: "The highest readings sit closest to the freight area.", tags: ["diesel"] },
      { id: "clue-c2", type: "Weather Check", title: "Trapped Air", descriptionSimple: "Check if weather trapped pollution near the ground.", cost: 17, insight: "A temperature inversion kept pollution low over the city.", tags: ["inversion"] },
      { id: "clue-c3", type: "Time Review", title: "Night Build-Up", descriptionSimple: "Compare pollution timing with activity in the city.", cost: 13, insight: "The biggest spike happened before the morning commute started.", tags: ["night-spike"] },
      { id: "clue-c4", type: "Traffic Review", title: "Traffic Counts", descriptionSimple: "Review traffic numbers.", cost: 8, insight: "Traffic added to pollution, but it does not explain the pre-dawn peak.", tags: ["traffic"], lockedUntil: 1 },
      { id: "clue-c5", type: "Smoke Check", title: "Wildfire Scan", descriptionSimple: "Check for incoming wildfire smoke.", cost: 16, insight: "There is no matching wildfire plume for this event.", tags: ["smoke"], lockedUntil: 2 }
    ],
    twist: {
      triggerAfter: 3,
      label: "Hidden Night Build-Up",
      message: "Big lesson: when weather traps air, man-made pollution can build quickly before people even wake up."
    },
    solution: "diesel-inversion"
  },
  {
    id: "storm-drain-beach",
    title: "Closed Beach",
    region: "Miami, Florida",
    theme: "Beach contamination",
    summary:
      "A busy beach closes after dirty water reaches the shore. Find out how city runoff and heavy rain caused the problem.",
    sceneLabels: ["Beachfront", "Storm Drain", "Swim Zone"],
    telemetryMode: "Live coastal weather conditions",
    liveConfig: {
      type: "weather",
      latitude: 25.79,
      longitude: -80.13,
      current: ["temperature_2m", "precipitation", "wind_speed_10m"],
      hourly: ["temperature_2m", "precipitation_probability", "wind_speed_10m"],
      metricLabels: [
        { key: "temperature_2m", label: "Air Temperature", unit: "°C" },
        { key: "precipitation", label: "Precipitation", unit: "mm" },
        { key: "wind_speed_10m", label: "Wind Speed", unit: "km/h" }
      ],
      chartLabels: [
        { key: "temperature_2m", label: "Temperature", color: "#6ef0b4" },
        { key: "precipitation_probability", label: "Rain Chance", color: "#7fd6ff" },
        { key: "wind_speed_10m", label: "Wind Speed", color: "#f3b562" }
      ],
      sourceLabel: "Open-Meteo Forecast API"
    },
    liveFeed: [
      { time: "8:00 AM", text: "Morning swimmers report cloudy water near the storm drain." },
      { time: "10:20 AM", text: "Beach officials raise warning flags after rain." },
      { time: "1:00 PM", text: "Families are told to stay out of the water." }
    ],
    reports: [
      { title: "What players learn", body: "Heavy rain can wash trash, bacteria, and oil from streets into nearby beaches." },
      { title: "How to prevent it", body: "Improve stormwater systems, reduce litter, and warn the public quickly after large rain events." },
      { title: "Human cause", body: "Dirty runoff moved through city drains into coastal water." },
      { title: "Environmental cause", body: "Heavy rain pushed that runoff quickly into the beach area." }
    ],
    suspects: [
      { id: "boat-spill", name: "Boat spill only", pitch: "A single boat spill caused the closure.", requiredEvidence: ["boat"], threshold: 2 },
      { id: "runoff-rain", name: "Runoff and heavy rain", pitch: "Storm drains and heavy rain polluted the beach together.", requiredEvidence: ["runoff", "rain", "bacteria"], threshold: 3 },
      { id: "seaweed", name: "Seaweed only", pitch: "Natural seaweed made the beach unsafe.", requiredEvidence: ["seaweed"], threshold: 2 }
    ],
    clues: [
      { id: "clue-d1", type: "Water Test", title: "Bacteria Level", descriptionSimple: "Check for harmful bacteria in the water.", cost: 12, insight: "Bacteria rose sharply near the storm drain outlet.", tags: ["bacteria"] },
      { id: "clue-d2", type: "Drain Check", title: "Runoff Path", descriptionSimple: "See where dirty water entered the beach.", cost: 11, insight: "Street runoff flowed straight from drains into the swim zone.", tags: ["runoff"] },
      { id: "clue-d3", type: "Weather Review", title: "Heavy Rain", descriptionSimple: "Review rainfall before the closure.", cost: 10, insight: "A strong rain burst happened just before the contamination event.", tags: ["rain"] },
      { id: "clue-d4", type: "Harbor Review", title: "Boat Spill Check", descriptionSimple: "Look for reports of a nearby spill.", cost: 9, insight: "No single spill event explains the broad contamination pattern.", tags: ["boat"], lockedUntil: 1 },
      { id: "clue-d5", type: "Beach Survey", title: "Seaweed Check", descriptionSimple: "Check whether seaweed caused the closure.", cost: 8, insight: "Seaweed is present, but it is not the main safety issue.", tags: ["seaweed"], lockedUntil: 2 }
    ],
    twist: {
      triggerAfter: 3,
      label: "Drain Route Confirmed",
      message: "Big lesson: city infrastructure can turn heavy weather into a public health problem."
    },
    solution: "runoff-rain"
  },
  {
    id: "smoke-hills",
    title: "Smoke Over Town",
    region: "Redding, California",
    theme: "Wildfire smoke",
    summary:
      "A town wakes up under smoky skies. Find how land conditions and human mistakes increased the fire and smoke risk.",
    sceneLabels: ["Dry Hills", "Town Center", "Fire Line"],
    telemetryMode: "Live smoke-related air conditions",
    liveConfig: {
      type: "air",
      latitude: 40.58,
      longitude: -122.39,
      current: ["us_aqi", "pm2_5", "pm10"],
      hourly: ["us_aqi", "pm2_5", "pm10"],
      metricLabels: [
        { key: "us_aqi", label: "US AQI", unit: "" },
        { key: "pm2_5", label: "PM2.5", unit: "ug/m3" },
        { key: "pm10", label: "PM10", unit: "ug/m3" }
      ],
      chartLabels: [
        { key: "us_aqi", label: "AQI", color: "#6ef0b4" },
        { key: "pm2_5", label: "PM2.5", color: "#7fd6ff" },
        { key: "pm10", label: "PM10", color: "#f3b562" }
      ],
      sourceLabel: "Open-Meteo Air Quality API"
    },
    liveFeed: [
      { time: "6:30 AM", text: "Residents report thick smoke and ash on cars." },
      { time: "9:10 AM", text: "Fire crews say dry brush helped flames spread fast." },
      { time: "12:45 PM", text: "Air quality warnings expand across town." }
    ],
    reports: [
      { title: "What players learn", body: "Dry land and strong winds can turn small human-caused sparks into dangerous smoke events." },
      { title: "How to prevent it", body: "Reduce ignition risks, manage dry vegetation, and improve community fire planning." },
      { title: "Human cause", body: "A preventable ignition source likely started the fire." },
      { title: "Environmental cause", body: "Dry fuels and windy weather allowed the fire to spread." }
    ],
    suspects: [
      { id: "lightning", name: "Lightning only", pitch: "Lightning alone caused the event.", requiredEvidence: ["lightning"], threshold: 2 },
      { id: "spark-dry", name: "Human spark and dry land", pitch: "A human spark and dry weather worked together.", requiredEvidence: ["spark", "dry", "wind"], threshold: 3 },
      { id: "factory-smoke", name: "Factory smoke only", pitch: "A factory caused the smoky skies.", requiredEvidence: ["factory"], threshold: 2 }
    ],
    clues: [
      { id: "clue-e1", type: "Fire Report", title: "Ignition Source", descriptionSimple: "Check for signs of a human-caused spark.", cost: 12, insight: "Investigators found evidence of a likely preventable ignition source.", tags: ["spark"] },
      { id: "clue-e2", type: "Ground Review", title: "Dry Brush", descriptionSimple: "See how dry the land had become.", cost: 10, insight: "Very dry vegetation made the fire move quickly.", tags: ["dry"] },
      { id: "clue-e3", type: "Weather Review", title: "Wind Pattern", descriptionSimple: "Review wind conditions during the event.", cost: 11, insight: "Strong winds pushed smoke and flames toward town.", tags: ["wind"] },
      { id: "clue-e4", type: "Storm Review", title: "Lightning Check", descriptionSimple: "Look for lightning before the fire.", cost: 9, insight: "There was no recent lightning in the area.", tags: ["lightning"], lockedUntil: 1 },
      { id: "clue-e5", type: "Industrial Review", title: "Factory Emissions", descriptionSimple: "Check whether a factory caused the smoke.", cost: 8, insight: "The smoke chemistry does not match a factory plume.", tags: ["factory"], lockedUntil: 2 }
    ],
    twist: {
      triggerAfter: 3,
      label: "Fuel and Spark Linked",
      message: "Big lesson: human ignition becomes far more dangerous when landscapes are hot, dry, and windy."
    },
    solution: "spark-dry"
  },
  {
    id: "flooded-blocks",
    title: "Flooded Blocks",
    region: "Houston, Texas",
    theme: "Urban flooding",
    summary:
      "Neighborhood streets flood again and again. Find how pavement and heavy rainfall combined to make the damage worse.",
    sceneLabels: ["Homes", "Parking Lot", "Flooded Street"],
    telemetryMode: "Live rainfall and wind conditions",
    liveConfig: {
      type: "weather",
      latitude: 29.76,
      longitude: -95.37,
      current: ["temperature_2m", "precipitation", "wind_speed_10m"],
      hourly: ["temperature_2m", "precipitation_probability", "wind_speed_10m"],
      metricLabels: [
        { key: "temperature_2m", label: "Air Temperature", unit: "°C" },
        { key: "precipitation", label: "Precipitation", unit: "mm" },
        { key: "wind_speed_10m", label: "Wind Speed", unit: "km/h" }
      ],
      chartLabels: [
        { key: "temperature_2m", label: "Temperature", color: "#6ef0b4" },
        { key: "precipitation_probability", label: "Rain Chance", color: "#7fd6ff" },
        { key: "wind_speed_10m", label: "Wind Speed", color: "#f3b562" }
      ],
      sourceLabel: "Open-Meteo Forecast API"
    },
    liveFeed: [
      { time: "5:50 AM", text: "Residents wake up to water covering roads and driveways." },
      { time: "8:40 AM", text: "Storm drains begin overflowing after another strong downpour." },
      { time: "11:15 AM", text: "Local crews close several neighborhood streets." }
    ],
    reports: [
      { title: "What players learn", body: "When land is covered by pavement, heavy rain has fewer places to soak in." },
      { title: "How to prevent it", body: "Add green spaces, protect wetlands, improve drainage, and limit overbuilding." },
      { title: "Human cause", body: "Too much pavement and poor drainage sent water across streets and homes." },
      { title: "Environmental cause", body: "Heavy rainfall added more water than the area could handle." }
    ],
    suspects: [
      { id: "broken-pipe", name: "Broken pipe only", pitch: "A broken pipe caused the neighborhood flood.", requiredEvidence: ["pipe"], threshold: 2 },
      { id: "rain-pavement", name: "Heavy rain and pavement", pitch: "Hard surfaces and heavy rain flooded the area together.", requiredEvidence: ["rain", "pavement", "drain"], threshold: 3 },
      { id: "river-only", name: "River rise only", pitch: "Only the river caused the flooding.", requiredEvidence: ["river"], threshold: 2 }
    ],
    clues: [
      { id: "clue-f1", type: "Map Review", title: "Paved Area", descriptionSimple: "See how much land is covered by pavement.", cost: 10, insight: "Most of the neighborhood surface is paved and sheds water quickly.", tags: ["pavement"] },
      { id: "clue-f2", type: "Drain Review", title: "Overflowing Drains", descriptionSimple: "Check whether drains were overwhelmed.", cost: 11, insight: "Storm drains overflowed during the heaviest rain.", tags: ["drain"] },
      { id: "clue-f3", type: "Weather Review", title: "Rain Burst", descriptionSimple: "Review the timing of heavy rainfall.", cost: 9, insight: "A strong burst of rain hit in a very short period.", tags: ["rain"] },
      { id: "clue-f4", type: "Utility Check", title: "Pipe Break", descriptionSimple: "Check for a broken water pipe.", cost: 8, insight: "There is no sign of a water main break here.", tags: ["pipe"], lockedUntil: 1 },
      { id: "clue-f5", type: "River Check", title: "River Level", descriptionSimple: "See whether the river alone explains the flood.", cost: 12, insight: "The local river was not high enough to explain all of the street flooding.", tags: ["river"], lockedUntil: 2 }
    ],
    twist: {
      triggerAfter: 3,
      label: "Runoff Problem Confirmed",
      message: "Big lesson: building choices can make storms much more damaging."
    },
    solution: "rain-pavement"
  },
  {
    id: "bleached-reef",
    title: "Fading Reef",
    region: "Key Largo, Florida",
    theme: "Coral bleaching",
    summary:
      "A coral reef is turning pale. Find out how warming seas and human pressure are making reef life weaker.",
    sceneLabels: ["Reef Patch", "Boat Route", "Warm Water Zone"],
    telemetryMode: "Live ocean-area weather conditions",
    liveConfig: {
      type: "weather",
      latitude: 25.12,
      longitude: -80.41,
      current: ["temperature_2m", "precipitation", "wind_speed_10m"],
      hourly: ["temperature_2m", "precipitation_probability", "wind_speed_10m"],
      metricLabels: [
        { key: "temperature_2m", label: "Air Temperature", unit: "°C" },
        { key: "precipitation", label: "Precipitation", unit: "mm" },
        { key: "wind_speed_10m", label: "Wind Speed", unit: "km/h" }
      ],
      chartLabels: [
        { key: "temperature_2m", label: "Temperature", color: "#6ef0b4" },
        { key: "precipitation_probability", label: "Rain Chance", color: "#7fd6ff" },
        { key: "wind_speed_10m", label: "Wind Speed", color: "#f3b562" }
      ],
      sourceLabel: "Open-Meteo Forecast API"
    },
    liveFeed: [
      { time: "7:20 AM", text: "Divers report pale coral across a wide section of reef." },
      { time: "10:00 AM", text: "Water temperatures remain unusually warm." },
      { time: "2:15 PM", text: "Tour boats are asked to avoid the most fragile reef areas." }
    ],
    reports: [
      { title: "What players learn", body: "Coral bleaching happens when living corals are stressed by heat and other pressures." },
      { title: "How to prevent it", body: "Reduce climate pollution, protect reefs from damage, and limit local pollution and disturbance." },
      { title: "Human cause", body: "Climate pollution and local reef stress made the coral weaker." },
      { title: "Environmental cause", body: "Unusually warm conditions increased the bleaching risk." }
    ],
    suspects: [
      { id: "paint-spill", name: "Paint spill only", pitch: "A single spill alone bleached the reef.", requiredEvidence: ["spill"], threshold: 2 },
      { id: "heat-stress", name: "Heat and local stress", pitch: "Warm conditions and human pressure stressed the coral together.", requiredEvidence: ["heat", "stress", "fragile"], threshold: 3 },
      { id: "predator", name: "Predator only", pitch: "A reef predator caused the color loss.", requiredEvidence: ["predator"], threshold: 2 }
    ],
    clues: [
      { id: "clue-g1", type: "Temperature Review", title: "Warm Conditions", descriptionSimple: "Check if conditions have been unusually warm.", cost: 12, insight: "Recent temperatures have stayed unusually high for this reef area.", tags: ["heat"] },
      { id: "clue-g2", type: "Field Survey", title: "Reef Stress", descriptionSimple: "Look for signs of broader reef stress.", cost: 11, insight: "The reef shows signs of long-term stress, not one isolated hit.", tags: ["stress"] },
      { id: "clue-g3", type: "Damage Review", title: "Fragile Areas", descriptionSimple: "Check whether the weakest reef zones are affected most.", cost: 10, insight: "The most stressed reef sections are bleaching first.", tags: ["fragile"] },
      { id: "clue-g4", type: "Pollution Check", title: "Spill Report", descriptionSimple: "Look for a nearby spill event.", cost: 8, insight: "No single spill explains the wide bleaching pattern.", tags: ["spill"], lockedUntil: 1 },
      { id: "clue-g5", type: "Wildlife Check", title: "Predator Review", descriptionSimple: "Check whether predators caused the damage.", cost: 9, insight: "Predators are present, but they do not explain the bleaching.", tags: ["predator"], lockedUntil: 2 }
    ],
    twist: {
      triggerAfter: 3,
      label: "Long Stress Confirmed",
      message: "Big lesson: warming trends are even more harmful when ecosystems are already under pressure."
    },
    solution: "heat-stress"
  },
  {
    id: "dry-tap",
    title: "Dry Tap Warning",
    region: "Phoenix, Arizona",
    theme: "Water shortage",
    summary:
      "A community faces water shortages. Learn how long dry periods and heavy human demand can strain water supplies together.",
    sceneLabels: ["Reservoir", "Homes", "Dry Ground"],
    telemetryMode: "Live desert weather conditions",
    liveConfig: {
      type: "weather",
      latitude: 33.45,
      longitude: -112.07,
      current: ["temperature_2m", "precipitation", "wind_speed_10m"],
      hourly: ["temperature_2m", "precipitation_probability", "wind_speed_10m"],
      metricLabels: [
        { key: "temperature_2m", label: "Air Temperature", unit: "°C" },
        { key: "precipitation", label: "Precipitation", unit: "mm" },
        { key: "wind_speed_10m", label: "Wind Speed", unit: "km/h" }
      ],
      chartLabels: [
        { key: "temperature_2m", label: "Temperature", color: "#6ef0b4" },
        { key: "precipitation_probability", label: "Rain Chance", color: "#7fd6ff" },
        { key: "wind_speed_10m", label: "Wind Speed", color: "#f3b562" }
      ],
      sourceLabel: "Open-Meteo Forecast API"
    },
    liveFeed: [
      { time: "6:50 AM", text: "Officials warn residents to reduce water use immediately." },
      { time: "10:05 AM", text: "Reservoir levels remain lower than usual for the season." },
      { time: "3:30 PM", text: "Heat pushes daily water demand even higher." }
    ],
    reports: [
      { title: "What players learn", body: "Water shortages often come from both dry conditions and the way people use water." },
      { title: "How to prevent it", body: "Save water, reuse where possible, protect supply systems, and plan for hotter, drier years." },
      { title: "Human cause", body: "High demand and waste put pressure on available supply." },
      { title: "Environmental cause", body: "Long-term dryness reduced how much water was available." }
    ],
    suspects: [
      { id: "broken-plant", name: "Broken treatment plant only", pitch: "A plant failure alone caused the shortage.", requiredEvidence: ["plant"], threshold: 2 },
      { id: "drought-demand", name: "Drought and high demand", pitch: "Dry conditions and heavy water use caused the shortage together.", requiredEvidence: ["drought", "demand", "reservoir"], threshold: 3 },
      { id: "theft", name: "Water theft only", pitch: "Illegal water theft caused the shortage.", requiredEvidence: ["theft"], threshold: 2 }
    ],
    clues: [
      { id: "clue-h1", type: "Usage Review", title: "High Demand", descriptionSimple: "Check whether people were using more water than usual.", cost: 11, insight: "Water use has been running higher than the safe target.", tags: ["demand"] },
      { id: "clue-h2", type: "Weather Review", title: "Long Dry Spell", descriptionSimple: "Review recent dry weather conditions.", cost: 10, insight: "The area has stayed much drier than normal.", tags: ["drought"] },
      { id: "clue-h3", type: "Supply Review", title: "Reservoir Level", descriptionSimple: "Check how full the main water storage is.", cost: 12, insight: "Reservoir storage is lower than needed for comfort and growth.", tags: ["reservoir"] },
      { id: "clue-h4", type: "Plant Check", title: "Treatment Plant", descriptionSimple: "See if the treatment plant failed.", cost: 9, insight: "The treatment plant is operating normally.", tags: ["plant"], lockedUntil: 1 },
      { id: "clue-h5", type: "Enforcement Review", title: "Water Theft", descriptionSimple: "Check whether theft explains the shortage.", cost: 8, insight: "Theft exists in small amounts but is not the main problem.", tags: ["theft"], lockedUntil: 2 }
    ],
    twist: {
      triggerAfter: 3,
      label: "Supply Pressure Confirmed",
      message: "Big lesson: water scarcity becomes worse when hot, dry periods meet heavy human demand."
    },
    solution: "drought-demand"
  },
  {
    id: "muddy-river",
    title: "Muddy River",
    region: "Appalachian Foothills, West Virginia",
    theme: "River sediment problem",
    summary:
      "A river has turned muddy and unhealthy for fish. Find how land clearing and rain combined to send too much sediment into the water.",
    sceneLabels: ["Hillside", "River Bend", "Cleared Slope"],
    telemetryMode: "Live weather conditions near the watershed",
    liveConfig: {
      type: "weather",
      latitude: 38.35,
      longitude: -81.63,
      current: ["temperature_2m", "precipitation", "wind_speed_10m"],
      hourly: ["temperature_2m", "precipitation_probability", "wind_speed_10m"],
      metricLabels: [
        { key: "temperature_2m", label: "Air Temperature", unit: "°C" },
        { key: "precipitation", label: "Precipitation", unit: "mm" },
        { key: "wind_speed_10m", label: "Wind Speed", unit: "km/h" }
      ],
      chartLabels: [
        { key: "temperature_2m", label: "Temperature", color: "#6ef0b4" },
        { key: "precipitation_probability", label: "Rain Chance", color: "#7fd6ff" },
        { key: "wind_speed_10m", label: "Wind Speed", color: "#f3b562" }
      ],
      sourceLabel: "Open-Meteo Forecast API"
    },
    liveFeed: [
      { time: "6:40 AM", text: "Residents notice brown water flowing through the river." },
      { time: "10:15 AM", text: "Fishers report fewer fish in the shallows." },
      { time: "1:25 PM", text: "Recent hillside clearing becomes a focus of the investigation." }
    ],
    reports: [
      { title: "What players learn", body: "Removing plants from slopes makes it easier for rain to wash soil into rivers." },
      { title: "How to prevent it", body: "Protect stream buffers, reduce erosion, and manage clearing carefully." },
      { title: "Human cause", body: "Too much exposed soil from land clearing moved toward the river." },
      { title: "Environmental cause", body: "Rainfall washed that loose soil downhill." }
    ],
    suspects: [
      { id: "mine-leak", name: "Mine leak only", pitch: "A mine leak alone caused the muddy river.", requiredEvidence: ["mine"], threshold: 2 },
      { id: "erosion-rain", name: "Land clearing and rain", pitch: "Exposed soil and rain sent sediment into the river together.", requiredEvidence: ["erosion", "rain", "sediment"], threshold: 3 },
      { id: "algae", name: "Algae only", pitch: "Algae alone caused the color change.", requiredEvidence: ["algae"], threshold: 2 }
    ],
    clues: [
      { id: "clue-j1", type: "Slope Review", title: "Exposed Soil", descriptionSimple: "Check whether recent land clearing exposed soil.", cost: 11, insight: "A nearby cleared slope has little plant cover left.", tags: ["erosion"] },
      { id: "clue-j2", type: "Water Review", title: "Sediment Test", descriptionSimple: "Check whether the river contains too much sediment.", cost: 12, insight: "Sediment levels are much higher than safe conditions for fish.", tags: ["sediment"] },
      { id: "clue-j3", type: "Weather Review", title: "Rain Event", descriptionSimple: "Review rain before the river turned muddy.", cost: 9, insight: "Heavy rain fell shortly before the river clouded up.", tags: ["rain"] },
      { id: "clue-j4", type: "Industrial Check", title: "Mine Leak", descriptionSimple: "Check for a nearby mine leak.", cost: 8, insight: "There is no sign of a chemical mine leak driving this event.", tags: ["mine"], lockedUntil: 1 },
      { id: "clue-j5", type: "Water Check", title: "Algae Review", descriptionSimple: "See whether algae explains the river color.", cost: 8, insight: "The brown color is sediment, not an algae bloom.", tags: ["algae"], lockedUntil: 2 }
    ],
    twist: {
      triggerAfter: 3,
      label: "Erosion Route Found",
      message: "Big lesson: removing vegetation can make ordinary storms far more harmful to rivers."
    },
    solution: "erosion-rain"
  },
  {
    id: "hot-schoolyard",
    title: "Hot Schoolyard",
    region: "Las Vegas, Nevada",
    theme: "Urban heat island",
    summary:
      "A schoolyard becomes dangerously hot in the afternoon. Learn how city design and extreme heat work together.",
    sceneLabels: ["School Roof", "Asphalt Yard", "Small Shade Tree"],
    telemetryMode: "Live heat-related weather conditions",
    liveConfig: {
      type: "weather",
      latitude: 36.17,
      longitude: -115.14,
      current: ["temperature_2m", "precipitation", "wind_speed_10m"],
      hourly: ["temperature_2m", "precipitation_probability", "wind_speed_10m"],
      metricLabels: [
        { key: "temperature_2m", label: "Air Temperature", unit: "°C" },
        { key: "precipitation", label: "Precipitation", unit: "mm" },
        { key: "wind_speed_10m", label: "Wind Speed", unit: "km/h" }
      ],
      chartLabels: [
        { key: "temperature_2m", label: "Temperature", color: "#6ef0b4" },
        { key: "precipitation_probability", label: "Rain Chance", color: "#7fd6ff" },
        { key: "wind_speed_10m", label: "Wind Speed", color: "#f3b562" }
      ],
      sourceLabel: "Open-Meteo Forecast API"
    },
    liveFeed: [
      { time: "11:30 AM", text: "Playground temperatures climb quickly before lunch." },
      { time: "1:10 PM", text: "Teachers move students inside after heat complaints." },
      { time: "3:00 PM", text: "Parents ask why the yard feels hotter than nearby parks." }
    ],
    reports: [
      { title: "What players learn", body: "Cities with lots of dark surfaces and little shade can trap more heat." },
      { title: "How to prevent it", body: "Plant trees, add shade, use cool roofs and lighter surfaces, and protect children during heat waves." },
      { title: "Human cause", body: "Too much dark pavement and too little shade increased local heating." },
      { title: "Environmental cause", body: "An extreme hot day pushed already warm surfaces into a danger zone." }
    ],
    suspects: [
      { id: "boiler", name: "Broken boiler only", pitch: "A broken building system caused the schoolyard heat.", requiredEvidence: ["boiler"], threshold: 2 },
      { id: "heat-asphalt", name: "Heat and hard surfaces", pitch: "Extreme heat and dark surfaces made the yard dangerously hot together.", requiredEvidence: ["heat", "asphalt", "shade"], threshold: 3 },
      { id: "chemical", name: "Chemical reaction only", pitch: "A chemical reaction caused the hot ground.", requiredEvidence: ["chemical"], threshold: 2 }
    ],
    clues: [
      { id: "clue-k1", type: "Surface Review", title: "Dark Pavement", descriptionSimple: "Check whether dark surfaces are trapping heat.", cost: 10, insight: "The yard is mostly dark asphalt that absorbs a lot of sun.", tags: ["asphalt"] },
      { id: "clue-k2", type: "Shade Review", title: "Tree Cover", descriptionSimple: "Check whether there is enough shade.", cost: 9, insight: "There is very little shade compared with cooler nearby areas.", tags: ["shade"] },
      { id: "clue-k3", type: "Weather Review", title: "Extreme Heat", descriptionSimple: "Review the day’s heat conditions.", cost: 11, insight: "The city is under an extreme heat warning.", tags: ["heat"] },
      { id: "clue-k4", type: "Building Check", title: "Boiler Check", descriptionSimple: "See whether a building system caused the heat.", cost: 8, insight: "There is no equipment failure affecting the yard surface temperature.", tags: ["boiler"], lockedUntil: 1 },
      { id: "clue-k5", type: "Safety Check", title: "Chemical Review", descriptionSimple: "Check whether chemicals caused the heat.", cost: 8, insight: "No chemical spill or reaction is involved here.", tags: ["chemical"], lockedUntil: 2 }
    ],
    twist: {
      triggerAfter: 3,
      label: "Heat Island Confirmed",
      message: "Big lesson: city design can make already hot days much more dangerous."
    },
    solution: "heat-asphalt"
  }
];

const GAME_TYPES = ["difference", "match", "reaction", "sequence", "unscramble"];
const DIFFICULTY_LABELS = ["Easy", "Easy+", "Medium", "Medium+", "Challenge"];
const ANAGRAM_WORDS = [
  "ALGAE",    
  "OZONE",     
  "DIESEL",    
  "RUNOFF",    
  "WILDFIRE",  
  "FLOOD",     
  "CORAL",     
  "DROUGHT",   
  "EROSION",   
  "ASPHALT",   
  "SMOG",
  "CARBON",
  "HABITAT",
  "METHANE",
  "WETLAND",
  "POLLEN",
  "BIOME",
  "COMPOST",
  "RECYCLE",
  "PLANKTON"
];

const clueArcadeConfigById = new Map();
const anagramWordByClueId = new Map();

gameCases.forEach((gameCase, caseIndex) => {
  gameCase.clues.forEach((clue, clueIndex) => {
    const type = GAME_TYPES[(clueIndex + caseIndex) % GAME_TYPES.length];
    const difficultyTier = Math.min(clueIndex, DIFFICULTY_LABELS.length - 1);
    clueArcadeConfigById.set(clue.id, {
      clueIndex,
      type,
      difficultyTier,
      difficultyLabel: DIFFICULTY_LABELS[difficultyTier]
    });
  });
});

[...clueArcadeConfigById.entries()]
  .filter(([, config]) => config.type === "unscramble")
  .forEach(([clueId], index) => {
    anagramWordByClueId.set(clueId, ANAGRAM_WORDS[index % ANAGRAM_WORDS.length]);
  });

const initialState = () => ({
  currentCaseIndex: 0,
  budget: 120,
  reputation: 84,
  breakthrough: 18,
  selectedSuspectId: null,
  collectedEvidence: {},
  solvedCases: new Set(),
  fundingClaims: {}
});

const state = initialState();
const liveDataCache = new Map();
const dashboardTourSteps = [
  {
    anchor: "sidebarIntro",
    title: "Welcome to the Investigation Hub",
    body: "This left side is your command area. It shows your reputation, budget, and overall progress while you solve cases."
  },
  {
    anchor: "caseList",
    title: "Step 1: Pick a Case",
    body: "Start by choosing one of the environmental cases. Each case is a different mystery with its own live updates and clues."
  },
  {
    anchor: "heroPanel",
    title: "Step 2: Read the Situation",
    body: "This top panel tells you what happened, where it happened, and gives the main story of the case before you investigate."
  },
  {
    anchor: "livePanel",
    title: "Step 3: Watch Live Happenings",
    body: "These updates make the case feel active. Read them like witness reports to understand what is unfolding in real time."
  },
  {
    anchor: "telemetryPanel",
    title: "Step 4: Check the Data",
    body: "This box shows live graphs and current readings. Use it to connect the mystery to real environmental conditions."
  },
  {
    anchor: "evidencePanel",
    title: "Step 5: Gather Clues",
    body: "Choose clue cards here. They cost budget, so pick carefully and focus on clues that help you compare possible causes."
  },
  {
    anchor: "dossierPanel",
    title: "Step 6: Review What You Learned",
    body: "The dossier keeps your important findings in one place so you can track the evidence before making a final choice."
  },
  {
    anchor: "theoryPanel",
    title: "Step 7: Pick the Cause",
    body: "When you think you understand the case, choose the explanation that best combines human and environmental causes."
  },
  {
    anchor: "reportPanel",
    title: "Step 8: Learn Prevention",
    body: "This panel explains how the problem could be prevented in the future, so the game teaches solutions as well as causes."
  },
  {
    anchor: "assistantCard",
    title: "Need Help?",
    body: "Use the AI Science Assistant whenever you want a hint. You can replay this tour anytime if you want another walkthrough."
  }
];

const elements = {
  reputationValue: document.querySelector("#reputationValue"),
  budgetValue: document.querySelector("#budgetValue"),
  breakthroughValue: document.querySelector("#breakthroughValue"),
  caseProgress: document.querySelector("#caseProgress"),
  caseList: document.querySelector("#caseList"),
  assistantInsight: document.querySelector("#assistantInsight"),
  introScreen: document.querySelector("#introScreen"),
  startGameBtn: document.querySelector("#startGameBtn"),
  requestHintBtn: document.querySelector("#requestHintBtn"),
  caseRegion: document.querySelector("#caseRegion"),
  caseTitle: document.querySelector("#caseTitle"),
  caseSummary: document.querySelector("#caseSummary"),
  liveTicker: document.querySelector("#liveTicker"),
  liveMarquee: document.querySelector("#liveMarquee"),
  simulateLiveBtn: document.querySelector("#simulateLiveBtn"),
  advanceCaseBtn: document.querySelector("#advanceCaseBtn"),
  twistBadge: document.querySelector("#twistBadge"),
  sceneLabelA: document.querySelector("#sceneLabelA"),
  sceneLabelB: document.querySelector("#sceneLabelB"),
  sceneLabelC: document.querySelector("#sceneLabelC"),
  signalRow: document.querySelector("#signalRow"),
  telemetryMode: document.querySelector("#telemetryMode"),
  metricGrid: document.querySelector("#metricGrid"),
  evidenceOptions: document.querySelector("#evidenceOptions"),
  evidenceCount: document.querySelector("#evidenceCount"),
  evidenceHelp: document.querySelector("#evidenceHelp"),
  fundResearchBtn: document.querySelector("#fundResearchBtn"),
  dossierFeed: document.querySelector("#dossierFeed"),
  dossierStatus: document.querySelector("#dossierStatus"),
  suspectList: document.querySelector("#suspectList"),
  testTheoryBtn: document.querySelector("#testTheoryBtn"),
  theoryFeedback: document.querySelector("#theoryFeedback"),
  reportCards: document.querySelector("#reportCards"),
  telemetryChart: document.querySelector("#telemetryChart"),
  tourOverlay: document.querySelector("#tourOverlay"),
  tourSpotlight: document.querySelector("#tourSpotlight"),
  tourCard: document.querySelector("#tourCard"),
  tourProgress: document.querySelector("#tourProgress"),
  tourTitle: document.querySelector("#tourTitle"),
  tourBody: document.querySelector("#tourBody"),
  tourBackBtn: document.querySelector("#tourBackBtn"),
  tourNextBtn: document.querySelector("#tourNextBtn"),
  tourSkipBtn: document.querySelector("#tourSkipBtn"),
  miniGameOverlay: document.querySelector("#miniGameOverlay"),
  miniGameEyebrow: document.querySelector("#miniGameEyebrow"),
  miniGameTitle: document.querySelector("#miniGameTitle"),
  miniGamePrompt: document.querySelector("#miniGamePrompt"),
  miniGameStage: document.querySelector("#miniGameStage"),
  miniGameStatus: document.querySelector("#miniGameStatus"),
  miniGameActionBtn: document.querySelector("#miniGameActionBtn"),
  miniGameCloseBtn: document.querySelector("#miniGameCloseBtn")
};

const caseButtonTemplate = document.querySelector("#caseButtonTemplate");
const evidenceCardTemplate = document.querySelector("#evidenceCardTemplate");
let activeTourIndex = -1;
let activeTourAnchor = null;
let activeMiniGame = null;
let activeMiniGameCleanup = null;
let activeTelemetryRequestId = 0;
let resizeTourFrame = null;

function getCurrentCase() {
  return gameCases[state.currentCaseIndex];
}

function getCollectedIds(caseId) {
  return state.collectedEvidence[caseId] || [];
}

function getCollectedClues(currentCase) {
  const collectedIds = new Set(getCollectedIds(currentCase.id));
  return currentCase.clues.filter((clue) => collectedIds.has(clue.id));
}

function formatValue(value, unit = "") {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return "Unavailable";
  }

  const rounded = Math.round(value * 10) / 10;
  return unit ? `${rounded} ${unit}` : `${rounded}`;
}

function shuffleArray(list) {
  const clone = [...list];
  for (let index = clone.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [clone[index], clone[swapIndex]] = [clone[swapIndex], clone[index]];
  }

  return clone;
}

function hashString(value) {
  return [...value].reduce((total, character, index) => total + character.charCodeAt(0) * (index + 3), 0);
}

function encodeSvg(svgMarkup) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgMarkup)}`;
}

function colorFromSeed(seed, hueShift = 0, saturation = 88, lightness = 64) {
  const hue = (seed * 47 + hueShift) % 360;
  return `hsl(${hue} ${saturation}% ${lightness}%)`;
}

function makeStickerSvg(type, variantSeed = 0) {
  const primary = colorFromSeed(variantSeed + type.length, 8, 90, 64);
  const secondary = colorFromSeed(variantSeed + type.length * 2, 120, 86, 60);
  const accent = colorFromSeed(variantSeed + type.length * 3, 220, 96, 84);

  const stickers = {
    star: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="${primary}"/>
            <stop offset="100%" stop-color="${secondary}"/>
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="28" fill="url(#bg)"/>
        <circle cx="60" cy="60" r="32" fill="${accent}"/>
        <path d="M60 26l9 19 21 3-15 14 4 21-19-10-19 10 4-21-15-14 21-3z" fill="#ffb400"/>
      </svg>
    `,
    rocket: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="${primary}"/>
            <stop offset="100%" stop-color="${secondary}"/>
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="28" fill="url(#bg)"/>
        <path d="M64 22c20 10 25 34 18 54L60 98 38 76c-7-20-2-44 18-54l4-2 4 2z" fill="#ffffff"/>
        <circle cx="60" cy="50" r="10" fill="${accent}"/>
        <path d="M45 82l-10 15 16-5 9 9 0-18z" fill="#ff7b54"/>
        <path d="M75 82l10 15-16-5-9 9 0-18z" fill="#ff7b54"/>
      </svg>
    `,
    gem: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="${primary}"/>
            <stop offset="100%" stop-color="${secondary}"/>
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="28" fill="url(#bg)"/>
        <path d="M34 44l14-18h24l14 18-26 50z" fill="#fff"/>
        <path d="M34 44h52L60 94z" fill="${accent}"/>
        <path d="M48 26l12 18 12-18" fill="none" stroke="${colorFromSeed(variantSeed, 260, 80, 48)}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
    crown: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="${primary}"/>
            <stop offset="100%" stop-color="${secondary}"/>
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="28" fill="url(#bg)"/>
        <path d="M28 82l10-34 22 18 18-28 14 28 16-14 12 30z" fill="#ffe77a"/>
        <rect x="28" y="82" width="74" height="10" rx="5" fill="#fff4a6"/>
        <circle cx="38" cy="48" r="6" fill="#fff"/>
        <circle cx="60" cy="66" r="6" fill="#fff"/>
        <circle cx="78" cy="38" r="6" fill="#fff"/>
        <circle cx="92" cy="52" r="6" fill="#fff"/>
      </svg>
    `,
    heart: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="${primary}"/>
            <stop offset="100%" stop-color="${secondary}"/>
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="28" fill="url(#bg)"/>
        <path d="M60 92 28 60c-9-9-9-24 0-33 9-9 24-9 33 0l-1 1 1-1c9-9 24-9 33 0 9 9 9 24 0 33z" fill="#fff2f5"/>
      </svg>
    `,
    moon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="${primary}"/>
            <stop offset="100%" stop-color="${secondary}"/>
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="28" fill="url(#bg)"/>
        <circle cx="66" cy="56" r="28" fill="${accent}"/>
        <circle cx="78" cy="48" r="26" fill="${colorFromSeed(variantSeed, 300, 70, 44)}"/>
        <circle cx="35" cy="34" r="4" fill="#fff"/>
        <circle cx="43" cy="73" r="5" fill="#fff"/>
      </svg>
    `,
    rainbow: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="${primary}"/>
            <stop offset="100%" stop-color="${secondary}"/>
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="28" fill="url(#bg)"/>
        <path d="M26 80a34 34 0 0 1 68 0" fill="none" stroke="#ff6b6b" stroke-width="10" stroke-linecap="round"/>
        <path d="M34 80a26 26 0 0 1 52 0" fill="none" stroke="#ffd93d" stroke-width="10" stroke-linecap="round"/>
        <path d="M42 80a18 18 0 0 1 36 0" fill="none" stroke="#6bcB77" stroke-width="10" stroke-linecap="round"/>
      </svg>
    `
  };

  return encodeSvg(stickers[type]);
}

function getDifferencePuzzle(clue) {
  const seed = hashString(clue.id);
  const pick = (offset, min, range) => min + ((seed * (offset * 13 + 17) + offset * 29) % range);
  const template = ["lake", "farm", "city", "beach", "forest", "reef", "flood", "drought", "river", "schoolyard"][seed % 10];

  if (template === "lake") {
    const base = {
      template,
      skyTop: "hsl(200 80% 70%)",
      skyBottom: "hsl(190 75% 85%)",
      sunX: pick(3, 64, 60),
      sunY: pick(4, 50, 30),
      waterColor: "hsl(195 70% 55%)",
      fishX: pick(8, 100, 60),
      fishY: pick(9, 280, 40),
      treeX: pick(11, 300, 60),
      treeY: pick(12, 180, 30),
      pipeShown: false,
      algaeShown: false,
      deadFishShown: false
    };
    const overrides = {
      waterColor: "hsl(90 60% 45%)",
      pipeShown: true, 
      algaeShown: true
    };
    return {
      targets: [
          {left: 50, top: 70, radius: 18 },
          {left: 15, top: 55, radius: 12 },
      ],
      left: base,
      right: { ...base, ...overrides }
    };
  }

  if (template === "farm") {
    const base = {
      template,
      skyTop: "hsl(200 75% 72%)",
      skyBottom: "hsl(190 70% 86%)",
      cropColor: "hsl(110 65% 45%)",
      sunX: pick(3, 320, 40),
      sunY: pick(4, 50, 30),
      smogShown: false,
      witheredShown: false
    };
    const overrides = {
      cropColor: "hsl(40 55% 50%)",
      smogShown: true,
      skyTop: "hsl(30 30% 70%)"
    };
    return {
      targets: [
        { left: 50, top: 75, radius: 18 },
        { left: 50, top: 25, radius: 16 }
      ],
      left: base,
      right: { ...base, ...overrides }
    };
  }

  if (template === "city") {
    const base = {
      template,
      skyTop: "hsl(205 80% 70%)",
      skyBottom: "hsl(200 70% 84%)",
      buildingHue: 220,
      truckShown: false,
      smogShown: false
    };
    const overrides = {
      skyTop: "hsl(30 25% 60%)",
      skyBottom: "hsl(35 30% 75%)",
      smogShown: true,
      truckShown: true
    };
    return {
      targets: [
        { left: 50, top: 25, radius: 18 },
        { left: 25, top: 78, radius: 14 }
      ],
      left: base,
      right: { ...base, ...overrides }
    };
  }

  if (template === "beach") {
    const base = {
      template,
      skyTop: "hsl(200 80% 72%)",
      skyBottom: "hsl(195 75% 86%)",
      waterColor: "hsl(195 75% 60%)",
      sunX: pick(3, 64, 60),
      sunY: pick(4, 60, 30),
      trashShown: false,
      signShown: false
    };
    const overrides = {
      waterColor: "hsl(30 40% 50%)",
      trashShown: true,
      signShown: true
    };
    return {
      targets: [
        { left: 50, top: 60, radius: 16 },
        { left: 75, top: 75, radius: 14 } 
      ],
      left: base,
      right: { ...base, ...overrides }
    };
  }

  if (template === "forest") {
    const base = {
      template,
      skyTop: "hsl(200 75% 72%)",
      skyBottom: "hsl(190 70% 86%)",
      treeColor: "hsl(120 60% 40%)",
      fireShown: false,
      smokeShown: false
    };
    const overrides = {
      skyTop: "hsl(20 60% 55%)",
      skyBottom: "hsl(30 55% 70%)",
      treeColor: "hsl(25 50% 35%)",
      fireShown: true,
      smokeShown: true
    };
    return {
      targets: [
        { left: 30, top: 70, radius: 16 },
        { left: 65, top: 30, radius: 16 }
      ],
      left: base,
      right: { ...base, ...overrides }
    };
  }

  if (template === "reef") {
    const base = {
      template,
      skyTop: "hsl(200 70% 60%)",
      skyBottom: "hsl(195 70% 75%)",
      coralColor: "hsl(340 80% 65%)",
      fishCount: 3,
      bleachedShown: false
    };
    const overrides = {
      coralColor: "hsl(0 0% 90%)",
      fishCount: 1,
      bleachedShown: true
    };
    return {
      targets: [
        { left: 35, top: 65, radius: 18 }, 
        { left: 70, top: 55, radius: 14 }],
      left: base,
      right: { ...base, ...overrides }
    };
  }
  if (template === "flood") {
    const base = {
      template,
      skyTop: "hsl(200 75% 70%)",
      skyBottom: "hsl(195 70% 84%)",
      streetColor: "hsl(0 0% 35%)",
      waterShown: false,
      carSubmerged: false,
      drainOverflow: false
    };
    const overrides = {
      streetColor: "hsl(30 40% 45%)", 
      waterShown: true,
      carSubmerged: true,
      drainOverflow: true
    };
    return {
      targets: [
        { left: 50, top: 75, radius: 18 }, 
        { left: 25, top: 65, radius: 14 }   
      ],
      left: base,
      right: { ...base, ...overrides }
    };
  }

  if (template === "drought") {
    const base = {
      template,
      skyTop: "hsl(200 75% 72%)",
      skyBottom: "hsl(195 70% 86%)",
      groundColor: "hsl(110 50% 40%)",
      waterLevel: 200,
      cracksShown: false,
      deadPlantShown: false
    };
    const overrides = {
      groundColor: "hsl(30 40% 55%)", 
      waterLevel: 320,                 
      cracksShown: true,
      deadPlantShown: true,
      skyTop: "hsl(35 40% 70%)"       
    };
    return {
      targets: [
        { left: 50, top: 65, radius: 18 }, 
        { left: 25, top: 80, radius: 14 }   
      ],
      left: base,
      right: { ...base, ...overrides }
    };
  }

  if (template === "river") {
    const base = {
      template,
      skyTop: "hsl(200 80% 70%)",
      skyBottom: "hsl(195 75% 85%)",
      riverColor: "hsl(195 70% 55%)",
      hillColor: "hsl(120 60% 40%)",
      erosionShown: false,
      logsShown: false
    };
    const overrides = {
      riverColor: "hsl(30 50% 40%)",  
      hillColor: "hsl(30 45% 50%)",   
      erosionShown: true,
      logsShown: true
    };
    return {
      targets: [
        { left: 50, top: 70, radius: 18 },  
        { left: 75, top: 35, radius: 14 }  
      ],
      left: base,
      right: { ...base, ...overrides }
    };
  }

  if (template === "schoolyard") {
    const base = {
      template,
      skyTop: "hsl(200 75% 72%)",
      skyBottom: "hsl(195 70% 86%)",
      groundColor: "hsl(120 55% 45%)",
      treeShown: true,
      heatWavesShown: false
    };
    const overrides = {
      skyTop: "hsl(35 50% 65%)",        
      groundColor: "hsl(0 0% 25%)",     
      treeShown: false,                 
      heatWavesShown: true
    };
    return {
      targets: [
        { left: 50, top: 75, radius: 18 }, 
        { left: 75, top: 45, radius: 14 }  
      ],
      left: base,
      right: { ...base, ...overrides }
    };
  }
}

function makeDifferenceSceneSvg(sceneConfig) {
  const config = typeof sceneConfig === "string"
    ? getDifferencePuzzle({ id: `bonus-${sceneConfig}` }).left
    : sceneConfig;
  const { template, skyTop, skyBottom } = config;

  return encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 420">
      <defs>
        <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="${skyTop}"/>
          <stop offset="100%" stop-color="${skyBottom}"/>
        </linearGradient>
      </defs>
      <rect width="420" height="420" fill="url(#sky)"/>
      ${template === "lake" ? `
        <circle cx="${config.sunX}" cy="${config.sunY}" r="32" fill="#ffe55d"/>
        <rect y="240" width="420" height="180" fill="${config.waterColor}"/>
        <path d="M0 240q40 12 80 0t80 0 80 0 80 0 100 0v20H0z" fill="rgba(255,255,255,0.25)"/>
        <ellipse cx="${config.fishX}" cy="${config.fishY}" rx="22" ry="10" fill="${config.algaeShown ? '#888' : '#ff8b54'}"/>
        <path d="M${config.fishX - 22} ${config.fishY}l-12 -8 0 16z" fill="${config.algaeShown ? '#888' : '#ff8b54'}"/>
        <circle cx="${config.fishX + 8}" cy="${config.fishY - 2}" r="2" fill="#000"/>
        <ellipse cx="${config.treeX + 30}" cy="${config.treeY + 30}" rx="32" ry="38" fill="hsl(120 60% 40%)"/>
        <rect x="${config.treeX + 24}" y="${config.treeY + 50}" width="12" height="30" fill="#6b3410"/>
        ${config.pipeShown ? `
          <rect x="20" y="220" width="50" height="22" fill="#555"/>
          <ellipse cx="70" cy="231" rx="6" ry="11" fill="#3a3a3a"/>
          <path d="M70 240q10 8 22 4t18 -2" stroke="hsl(90 70% 45%)" stroke-width="6" fill="none" stroke-linecap="round"/>
        ` : ""}
        ${config.algaeShown ? `
          <circle cx="180" cy="320" r="14" fill="hsl(90 70% 40%)" opacity="0.7"/>
          <circle cx="220" cy="340" r="18" fill="hsl(90 70% 40%)" opacity="0.7"/>
          <circle cx="280" cy="310" r="12" fill="hsl(90 70% 40%)" opacity="0.7"/>
        ` : ""}
      ` : ""}
      ${template === "farm" ? `
        <circle cx="${config.sunX}" cy="${config.sunY}" r="34" fill="#ffe55d"/>
        ${config.smogShown ? `
          <ellipse cx="120" cy="80" rx="80" ry="22" fill="rgba(120,100,80,0.45)"/>
          <ellipse cx="280" cy="110" rx="90" ry="24" fill="rgba(120,100,80,0.4)"/>
        ` : ""}
        <rect y="240" width="420" height="180" fill="${config.cropColor}"/>
        <g fill="${config.witheredShown ? 'hsl(30 50% 35%)' : 'hsl(120 60% 35%)'}">
          <rect x="40" y="260" width="6" height="40"/>
          <rect x="80" y="255" width="6" height="45"/>
          <rect x="120" y="262" width="6" height="38"/>
          <rect x="160" y="258" width="6" height="42"/>
          <rect x="200" y="260" width="6" height="40"/>
          <rect x="240" y="256" width="6" height="44"/>
          <rect x="280" y="262" width="6" height="38"/>
          <rect x="320" y="258" width="6" height="42"/>
          <rect x="360" y="260" width="6" height="40"/>
        </g>
        <path d="M0 360q60 -20 120 0t150 0 150 0v60H0z" fill="#6b3410"/>
      ` : ""}
      ${template === "city" ? `
       ${config.smogShown ? `
          <ellipse cx="200" cy="100" rx="180" ry="40" fill="rgba(100,80,70,0.5)"/>
        ` : ""}
        <rect x="40" y="160" width="70" height="200" fill="hsl(${config.buildingHue} 30% 35%)"/>
        <rect x="130" y="120" width="80" height="240" fill="hsl(${config.buildingHue + 20} 30% 30%)"/>
        <rect x="230" y="180" width="70" height="180" fill="hsl(${config.buildingHue + 40} 30% 28%)"/>
        <rect x="320" y="140" width="70" height="220" fill="hsl(${config.buildingHue + 10} 30% 32%)"/>
        <g fill="#ffe55d">
          <rect x="55" y="180" width="10" height="10"/>
          <rect x="80" y="200" width="10" height="10"/>
          <rect x="150" y="150" width="10" height="10"/>
          <rect x="180" y="200" width="10" height="10"/>
          <rect x="250" y="220" width="10" height="10"/>
          <rect x="340" y="170" width="10" height="10"/>
        </g>
        <rect y="360" width="420" height="60" fill="#333"/>
        ${config.truckShown ? `
          <rect x="60" y="320" width="80" height="38" rx="4" fill="hsl(0 70% 45%)"/>
          <rect x="40" y="335" width="30" height="23" rx="3" fill="hsl(0 70% 50%)"/>
          <circle cx="60" cy="362" r="10" fill="#222"/>
          <circle cx="120" cy="362" r="10" fill="#222"/>
          <ellipse cx="50" cy="320" rx="14" ry="6" fill="rgba(80,70,60,0.6)"/>
        ` : ""}
      ` : ""}
      ${template === "beach" ? `
        <circle cx="${config.sunX}" cy="${config.sunY}" r="34" fill="#ffe55d"/>
        <rect y="200" width="420" height="140" fill="${config.waterColor}"/>
        <path d="M0 200q40 14 80 0t80 0 80 0 80 0 100 0v20H0z" fill="rgba(255,255,255,0.25)"/>
        <rect y="340" width="420" height="80" fill="#f5d28a"/>
        ${config.trashShown ? `
          <rect x="280" y="350" width="20" height="14" fill="#888"/>
          <circle cx="320" cy="362" r="6" fill="hsl(60 80% 50%)"/>
          <rect x="240" y="358" width="14" height="8" fill="hsl(0 60% 55%)"/>
        ` : ""}
        ${config.signShown ? `
          <rect x="180" y="280" width="60" height="40" fill="hsl(0 80% 50%)"/>
          <text x="210" y="305" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">CLOSED</text>
          <rect x="206" y="320" width="8" height="40" fill="#6b3410"/>
        ` : ""}
      ` : ""}
      ${template === "forest" ? `
        ${config.smokeShown ? `
          <ellipse cx="220" cy="90" rx="120" ry="35" fill="rgba(80,60,55,0.5)"/>
          <ellipse cx="120" cy="120" rx="80" ry="22" fill="rgba(80,60,55,0.4)"/>
        ` : ""}
        <rect y="320" width="420" height="100" fill="hsl(80 50% 35%)"/>
        <g>
          <ellipse cx="70" cy="280" rx="35" ry="42" fill="${config.treeColor}"/>
          <rect x="64" y="300" width="12" height="40" fill="#6b3410"/>
          <ellipse cx="180" cy="270" rx="40" ry="48" fill="${config.treeColor}"/>
          <rect x="174" y="295" width="12" height="45" fill="#6b3410"/>
          <ellipse cx="290" cy="280" rx="38" ry="45" fill="${config.treeColor}"/>
          <rect x="284" y="300" width="12" height="42" fill="#6b3410"/>
          <ellipse cx="380" cy="290" rx="32" ry="38" fill="${config.treeColor}"/>
          <rect x="374" y="305" width="12" height="38" fill="#6b3410"/>
        </g>
        ${config.fireShown ? `
          <path d="M100 320 q-10 -20 0 -38 q12 12 18 0 q4 18 -4 38z" fill="hsl(20 90% 55%)"/>
          <path d="M108 318 q-6 -14 0 -26 q8 8 12 0 q2 14 -4 26z" fill="hsl(45 95% 60%)"/>
        ` : ""}
      ` : ""}
      ${template === "reef" ? `
       <rect width="420" height="420" fill="url(#sky)"/>
        <path d="M0 0q40 14 80 0t80 0 80 0 80 0 100 0v20H0z" fill="rgba(255,255,255,0.2)"/>
        <rect y="340" width="420" height="80" fill="#f5d28a"/>
        <g>
          <path d="M120 340 q-10 -40 0 -80 q12 30 24 0 q4 50 -8 80z" fill="${config.coralColor}"/>
          <path d="M180 340 q-12 -50 0 -100 q14 40 28 0 q6 60 -10 100z" fill="${config.coralColor}"/>
          <path d="M240 340 q-10 -40 0 -70 q12 28 22 0 q4 42 -8 70z" fill="${config.coralColor}"/>
        </g>
        ${Array.from({ length: config.fishCount }, (_, i) => `
          <ellipse cx="${280 + i * 30}" cy="${200 + i * 20}" rx="14" ry="7" fill="hsl(${30 + i * 60} 80% 60%)"/>
          <path d="M${266 + i * 30} ${200 + i * 20}l-8 -5 0 10z" fill="hsl(${30 + i * 60} 80% 60%)"/>
        `).join("")}
        <circle cx="60" cy="60" r="20" fill="#ffe55d" opacity="0.6"/>
      ` : ""}
      ${template === "flood" ? `
        <rect y="240" width="420" height="180" fill="${config.streetColor}"/>
        ${config.waterShown ? `
          <rect y="280" width="420" height="140" fill="rgba(80,100,120,0.55)"/>
          <path d="M0 280q40 8 80 0t80 0 80 0 80 0 100 0v10H0z" fill="rgba(255,255,255,0.3)"/>
        ` : ""}
        <rect x="40" y="120" width="100" height="120" fill="hsl(30 40% 60%)"/>
        <rect x="60" y="150" width="20" height="25" fill="hsl(200 70% 60%)"/>
        <rect x="100" y="150" width="20" height="25" fill="hsl(200 70% 60%)"/>
        <path d="M30 120l60 -40 60 40z" fill="hsl(0 50% 40%)"/>
        <rect x="240" y="140" width="100" height="100" fill="hsl(30 35% 65%)"/>
        <path d="M230 140l60 -35 60 35z" fill="hsl(0 50% 40%)"/>
        <rect x="180" y="${config.carSubmerged ? '290' : '270'}" width="70" height="${config.carSubmerged ? '20' : '40'}" rx="6" fill="hsl(0 60% 50%)"/>
        ${!config.carSubmerged ? `<circle cx="195" cy="312" r="8" fill="#222"/><circle cx="235" cy="312" r="8" fill="#222"/>` : ""}
        <rect x="${config.drainOverflow ? '90' : '90'}" y="265" width="30" height="8" fill="#444"/>
        ${config.drainOverflow ? `<path d="M105 273 q-15 20 -30 30" stroke="hsl(30 50% 45%)" stroke-width="6" fill="none" stroke-linecap="round"/>` : ""}
      ` : ""}

      ${template === "drought" ? `
        <circle cx="340" cy="60" r="38" fill="#ffe55d"/>
        <rect y="220" width="420" height="200" fill="${config.groundColor}"/>
        <ellipse cx="210" cy="${config.waterLevel}" rx="180" ry="40" fill="hsl(195 65% 50%)"/>
        ${config.cracksShown ? `
          <path d="M60 360 L100 380 L80 410" stroke="hsl(30 50% 30%)" stroke-width="3" fill="none"/>
          <path d="M150 370 L180 400 L160 415" stroke="hsl(30 50% 30%)" stroke-width="3" fill="none"/>
          <path d="M280 365 L320 395 L300 415" stroke="hsl(30 50% 30%)" stroke-width="3" fill="none"/>
        ` : ""}
        <ellipse cx="${config.deadPlantShown ? '70' : '70'}" cy="320" rx="20" ry="${config.deadPlantShown ? '12' : '25'}" fill="${config.deadPlantShown ? 'hsl(30 50% 35%)' : 'hsl(120 60% 40%)'}"/>
        <rect x="66" y="320" width="8" height="20" fill="#6b3410"/>
      ` : ""}

      ${template === "river" ? `
        <rect y="280" width="420" height="60" fill="${config.riverColor}"/>
        <path d="M0 280q40 10 80 0t80 0 80 0 80 0 100 0v10H0z" fill="rgba(255,255,255,0.25)"/>
        <path d="M0 200 Q120 ${config.erosionShown ? '180' : '160'} 240 200 T420 210 L420 280 L0 280Z" fill="${config.hillColor}"/>
        ${!config.erosionShown ? `
          <ellipse cx="80" cy="180" rx="20" ry="15" fill="hsl(120 65% 35%)"/>
          <ellipse cx="180" cy="170" rx="22" ry="16" fill="hsl(120 65% 35%)"/>
          <ellipse cx="300" cy="180" rx="20" ry="15" fill="hsl(120 65% 35%)"/>
        ` : `
          <path d="M250 200 L240 240 L260 240Z" fill="hsl(30 50% 35%)"/>
          <path d="M290 205 L280 245 L300 245Z" fill="hsl(30 50% 35%)"/>
          <path d="M330 200 L320 240 L340 240Z" fill="hsl(30 50% 35%)"/>
        `}
        <rect y="340" width="420" height="80" fill="hsl(80 50% 35%)"/>
        ${config.logsShown ? `
          <rect x="200" y="295" width="40" height="8" rx="3" fill="#6b3410"/>
          <rect x="280" y="305" width="35" height="8" rx="3" fill="#6b3410"/>
        ` : ""}
      ` : ""}

      ${template === "schoolyard" ? `
        <circle cx="340" cy="60" r="34" fill="#ffe55d"/>
        ${config.heatWavesShown ? `
          <path d="M60 200 q5 -10 10 0 t10 0 t10 0" stroke="rgba(255,150,80,0.6)" stroke-width="2" fill="none"/>
          <path d="M180 220 q5 -10 10 0 t10 0 t10 0" stroke="rgba(255,150,80,0.6)" stroke-width="2" fill="none"/>
          <path d="M300 210 q5 -10 10 0 t10 0 t10 0" stroke="rgba(255,150,80,0.6)" stroke-width="2" fill="none"/>
        ` : ""}
        <rect x="60" y="140" width="180" height="120" fill="hsl(30 35% 70%)"/>
        <rect x="100" y="180" width="30" height="40" fill="hsl(200 70% 60%)"/>
        <rect x="160" y="180" width="30" height="40" fill="hsl(200 70% 60%)"/>
        <rect x="120" y="220" width="50" height="40" fill="hsl(0 50% 40%)"/>
        <path d="M50 140 L150 100 L250 140Z" fill="hsl(0 50% 40%)"/>
        <rect y="260" width="420" height="160" fill="${config.groundColor}"/>
        ${config.treeShown ? `
          <ellipse cx="340" cy="240" rx="40" ry="50" fill="hsl(120 60% 40%)"/>
          <rect x="334" y="270" width="12" height="40" fill="#6b3410"/>
        ` : ""}
        <circle cx="280" cy="320" r="12" fill="hsl(0 70% 50%)"/>
      ` : ""}
    </svg>
  `);
}

function getArcadeWord(clue) {
  return anagramWordByClueId.get(clue.id) || ANAGRAM_WORDS[hashString(clue.id) % ANAGRAM_WORDS.length];
}

function getMatchingStickerSet(clue, pairCount) {
  const stickerSets = [
    ["star", "rocket", "gem", "crown"],
    ["heart", "moon", "rainbow", "rocket"],
    ["gem", "heart", "star", "moon"],
    ["crown", "rainbow", "rocket", "heart"],
    ["moon", "star", "rainbow", "gem"]
  ];
  const set = stickerSets[hashString(clue.id) % stickerSets.length];
  return set.slice(0, pairCount);
}

function getClueArcadeConfig(clue) {
  return clueArcadeConfigById.get(clue.id) || {
    clueIndex: 0,
    type: "difference",
    difficultyTier: 0,
    difficultyLabel: DIFFICULTY_LABELS[0]
  };
}

function getMiniGameTypeLabel(type) {
  const labels = {
    difference: "Spot 2 Differences",
    match: "Match Flip",
    reaction: "Tap Rush",
    sequence: "Light Show",
    unscramble: "Anagram Burst"
  };

  return labels[type] || "Clue Challenge";
}

function renderArcadeImageRow(types) {
  return `
    <div class="arcade-art-row">
      ${types.map((type) => `
        <div class="arcade-art-card">
          <img src="${makeStickerSvg(type)}" alt="${type} arcade icon">
        </div>
      `).join("")}
    </div>
  `;
}

function setMiniGameStatus(message) {
  elements.miniGameStatus.textContent = message;
}

function closeMiniGame() {
  if (activeMiniGameCleanup) {
    activeMiniGameCleanup();
  }

  activeMiniGame = null;
  activeMiniGameCleanup = null;
  elements.miniGameOverlay.classList.add("hidden");
  elements.miniGameOverlay.setAttribute("aria-hidden", "true");
  elements.miniGameStage.innerHTML = "";
  elements.miniGameStage.style.pointerEvents = "auto";
  elements.miniGameActionBtn.classList.add("hidden");
  elements.miniGameActionBtn.onclick = null;
  setMiniGameStatus("Win the round to unlock your clue.");
}

function awardClue(clue) {
  const currentCase = getCurrentCase();
  const collectedIds = getCollectedIds(currentCase.id);
  state.collectedEvidence[currentCase.id] = [...collectedIds, clue.id];
  state.budget -= clue.cost;
  state.breakthrough = Math.min(100, state.breakthrough + 7);
  state.reputation = Math.min(100, state.reputation + 2);
}

function hasClaimedFunding(caseId) {
  return Boolean(state.fundingClaims[caseId]);
}

function showClueAccessMessage(clue, reason) {
  const currentCase = getCurrentCase();
  const gameLabel = getMiniGameTypeLabel(createMiniGameBlueprint(clue).type);

  const messages = {
    locked: `This clue is still locked. Collect ${clue.lockedUntil} clue${clue.lockedUntil > 1 ? "s" : ""} first, then you can play ${gameLabel}.`,
    budget: `You need ${clue.cost} budget for this clue, but you only have ${state.budget}. Use Replenish Budget in the Evidence Board, or solve the case to earn more funding.`,
    collected: `You already collected this clue. Check the Case Dossier or test your answer in Pick the Cause.`,
    unavailable: `This clue cannot be opened right now. Try another clue or use Replenish Budget for more research funds.`
  };

  const message = messages[reason] || messages.unavailable;
  elements.evidenceHelp.textContent = message;
  elements.theoryFeedback.textContent = message;

  if (reason === "budget" || reason === "locked") {
    elements.assistantInsight.textContent = `Next step: ${message}`;
  } else if (reason === "collected") {
    elements.assistantInsight.textContent = "You already have this clue. Read your dossier, then choose the best cause or gather a different clue.";
  }

  if (reason === "budget") {
    elements.fundResearchBtn.focus();
  }
}

function requestResearchFunding() {
  const currentCase = getCurrentCase();
  if (hasClaimedFunding(currentCase.id)) {
    const message = "You already used the Replenish Budget option for this case. Solve the case correctly to earn another budget reward.";
    elements.evidenceHelp.textContent = message;
    elements.theoryFeedback.textContent = message;
    return;
  }

  state.fundingClaims[currentCase.id] = true;
  state.budget += 20;
  state.reputation = Math.max(40, state.reputation - 3);
  const message = "Research funding approved: +20 budget. This option can be used once per case, and it lowers reputation slightly.";
  elements.evidenceHelp.textContent = message;
  elements.theoryFeedback.textContent = message;
  elements.assistantInsight.textContent = "You have more budget now. Return to the Evidence Board and choose the clue you want to investigate next.";
  renderAll();
}

function finishMiniGameSuccess() {
  if (!activeMiniGame || activeMiniGame.completed) {
    return;
  }

  if (activeMiniGameCleanup) {
    activeMiniGameCleanup();
    activeMiniGameCleanup = null;
  }

  activeMiniGame.completed = true;
  elements.miniGameStage.style.pointerEvents = "none";
  const clue = activeMiniGame.clue;
  awardClue(clue);
  elements.miniGameActionBtn.textContent = "Collect Clue";
  elements.miniGameActionBtn.classList.remove("hidden");
  elements.miniGameActionBtn.onclick = () => {
    closeMiniGame();
    elements.theoryFeedback.textContent = clue.insight;
    renderAll();
  };
  setMiniGameStatus("Challenge complete. You earned the clue.");
}

function failMiniGame(message) {
  if (!activeMiniGame || activeMiniGame.failed || activeMiniGame.completed) {
    return;
  }

  activeMiniGame.failed = true;
  elements.miniGameStage.style.pointerEvents = "none";
  if (activeMiniGameCleanup) {
    activeMiniGameCleanup();
    activeMiniGameCleanup = null;
  }
  setMiniGameStatus(message);
  if (activeMiniGame?.clue) {
    elements.miniGameActionBtn.textContent = "Retry";
    elements.miniGameActionBtn.classList.remove("hidden");
    elements.miniGameActionBtn.onclick = () => startClueChallenge(activeMiniGame.clue);
  }
}

function createMiniGameBlueprint(clue) {
  return getClueArcadeConfig(clue);
}

function renderMiniGameHeader(clue, subtitle) {
  elements.miniGameEyebrow.textContent = "Arcade Clue Challenge";
  elements.miniGameTitle.textContent = `${getMiniGameTypeLabel(activeMiniGame.type)}: ${clue.title}`;
  elements.miniGamePrompt.textContent = subtitle;
  setMiniGameStatus("Win the round to unlock your clue.");
}

function makeWeatherUrl(config) {
  const params = new URLSearchParams({
    latitude: config.latitude,
    longitude: config.longitude,
    current: config.current.join(","),
    hourly: config.hourly.join(","),
    timezone: "auto",
    past_hours: "12",
    forecast_hours: "12"
  });

  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

function makeAirUrl(config) {
  const params = new URLSearchParams({
    latitude: config.latitude,
    longitude: config.longitude,
    current: config.current.join(","),
    hourly: config.hourly.join(","),
    timezone: "auto",
    past_hours: "12",
    forecast_hours: "12"
  });

  return `https://air-quality-api.open-meteo.com/v1/air-quality?${params.toString()}`;
}

async function fetchLiveTelemetry(gameCase, forceRefresh = false) {
  if (!forceRefresh && liveDataCache.has(gameCase.id)) {
    return liveDataCache.get(gameCase.id);
  }

  const { liveConfig } = gameCase;
  const url = liveConfig.type === "air" ? makeAirUrl(liveConfig) : makeWeatherUrl(liveConfig);
  const pending = fetch(url)
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`Live data request failed with status ${response.status}`);
      }

      const payload = await response.json();
      return { payload, fetchedAt: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }) };
    });

  liveDataCache.set(gameCase.id, pending);
  return pending;
}

function buildChartSeriesFromPayload(gameCase, payload) {
  const hourly = payload.hourly || {};
  const time = hourly.time || [];
  const startIndex = Math.max(0, time.length - 8);
  const labels = time.slice(startIndex).map((value) => {
    const date = new Date(value);
    return date.toLocaleTimeString([], { hour: "numeric" });
  });

  const series = gameCase.liveConfig.chartLabels.map((entry) => ({
    label: entry.label,
    color: entry.color,
    values: (hourly[entry.key] || []).slice(startIndex)
  }));

  return { labels, series };
}

function renderStats() {
  elements.reputationValue.textContent = state.reputation.toString();
  elements.budgetValue.textContent = state.budget.toString();
  elements.breakthroughValue.textContent = `${state.breakthrough}%`;
  elements.caseProgress.textContent = `${state.currentCaseIndex + 1} / ${gameCases.length}`;
}

function clearTourHighlight() {
  if (!activeTourAnchor) {
    document.querySelectorAll("[data-tour-anchor]").forEach((element) => {
      element.classList.remove("tour-dimmed");
    });
    return;
  }

  activeTourAnchor.classList.remove("tour-highlight");
  document.querySelectorAll("[data-tour-anchor]").forEach((element) => {
    element.classList.remove("tour-dimmed");
  });
  activeTourAnchor = null;
}

function endTour() {
  clearTourHighlight();
  activeTourIndex = -1;
  elements.tourOverlay.classList.add("hidden");
  elements.tourOverlay.setAttribute("aria-hidden", "true");
}

function positionTourCard(anchorRect) {
  const cardWidth = Math.min(360, window.innerWidth - 32);
  const spaceRight = window.innerWidth - anchorRect.right;
  const placeRight = spaceRight > cardWidth + 24;
  const top = Math.max(16, Math.min(window.innerHeight - 240, anchorRect.top));
  const left = placeRight
    ? Math.min(window.innerWidth - cardWidth - 16, anchorRect.right + 16)
    : Math.max(16, anchorRect.left - cardWidth - 16);

  elements.tourCard.style.top = `${top}px`;
  elements.tourCard.style.left = `${left}px`;
}

function applyTourStep(index) {
  const step = dashboardTourSteps[index];
  const anchor = document.querySelector(`[data-tour-anchor="${step.anchor}"]`);
  if (!anchor) {
    return;
  }

  clearTourHighlight();
  activeTourIndex = index;
  activeTourAnchor = anchor;
  document.querySelectorAll("[data-tour-anchor]").forEach((element) => {
    if (element !== activeTourAnchor) {
      element.classList.add("tour-dimmed");
    }
  });
  activeTourAnchor.classList.add("tour-highlight");

  const rect = anchor.getBoundingClientRect();
  elements.tourOverlay.classList.remove("hidden");
  elements.tourOverlay.setAttribute("aria-hidden", "false");
  elements.tourProgress.textContent = `Guide ${index + 1} / ${dashboardTourSteps.length}`;
  elements.tourTitle.textContent = step.title;
  elements.tourBody.textContent = step.body;
  elements.tourBackBtn.disabled = index === 0;
  elements.tourNextBtn.textContent = index === dashboardTourSteps.length - 1 ? "Finish" : "Next";
  elements.tourSpotlight.style.top = `${Math.max(8, rect.top - 10)}px`;
  elements.tourSpotlight.style.left = `${Math.max(8, rect.left - 10)}px`;
  elements.tourSpotlight.style.width = `${Math.min(window.innerWidth - 16, rect.width + 20)}px`;
  elements.tourSpotlight.style.height = `${Math.min(window.innerHeight - 16, rect.height + 20)}px`;
  positionTourCard(rect);
}

function showTourStep(index) {
  const step = dashboardTourSteps[index];
  const anchor = document.querySelector(`[data-tour-anchor="${step.anchor}"]`);
  if (!anchor) {
    return;
  }

  anchor.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest"
  });

  window.setTimeout(() => {
    applyTourStep(index);
  }, 260);
}

function startTour() {
  showTourStep(0);
}

function renderCaseList() {
  elements.caseList.innerHTML = "";

  gameCases.forEach((gameCase, index) => {
    const fragment = caseButtonTemplate.content.cloneNode(true);
    const button = fragment.querySelector(".case-button");
    const title = fragment.querySelector(".case-button-title");
    const meta = fragment.querySelector(".case-button-meta");
    const solved = state.solvedCases.has(gameCase.id);

    title.textContent = gameCase.title;
    meta.textContent = solved
      ? `Solved • ${gameCase.theme}`
      : `${getCollectedIds(gameCase.id).length} clues • ${gameCase.theme}`;

    if (index === state.currentCaseIndex) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      state.currentCaseIndex = index;
      state.selectedSuspectId = null;
      renderAll();
      loadTelemetryForCurrentCase();
    });

    elements.caseList.appendChild(fragment);
  });
}

function renderHero() {
  const currentCase = getCurrentCase();
  const collectedCount = getCollectedIds(currentCase.id).length;
  const twistUnlocked = collectedCount >= currentCase.twist.triggerAfter;

  elements.caseRegion.textContent = currentCase.region;
  elements.caseTitle.textContent = currentCase.title;
  elements.caseSummary.textContent = currentCase.summary;
  elements.telemetryMode.textContent = currentCase.telemetryMode;
  elements.twistBadge.textContent = twistUnlocked ? currentCase.twist.label : "Investigation Open";

  [elements.sceneLabelA, elements.sceneLabelB, elements.sceneLabelC].forEach((labelNode, index) => {
    labelNode.textContent = currentCase.sceneLabels[index];
  });
}

function renderLiveFeed() {
  const currentCase = getCurrentCase();
  elements.liveTicker.innerHTML = "";
  const marqueeText = currentCase.liveFeed.map((item) => `${item.time} - ${item.text}`).join("   //   ");
  elements.liveMarquee.textContent = `${marqueeText}   //   ${marqueeText}`;

  currentCase.liveFeed.forEach((item) => {
    const entry = document.createElement("article");
    entry.className = "live-item";
    entry.innerHTML = `<time>${item.time}</time><p>${item.text}</p>`;
    elements.liveTicker.appendChild(entry);
  });
}

function renderSignalsPlaceholder(gameCase) {
  elements.signalRow.innerHTML = "";

  const items = [
    { title: "Live Source", body: gameCase.liveConfig.sourceLabel },
    { title: "Location", body: gameCase.region },
    { title: "Status", body: "Waiting for live telemetry" }
  ];

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "signal-pill";
    card.innerHTML = `<strong>${item.title}</strong><p>${item.body}</p>`;
    elements.signalRow.appendChild(card);
  });
}

function renderLiveTelemetry(gameCase, result) {
  const { payload, fetchedAt } = result;
  const current = payload.current || {};
  const metricLabels = gameCase.liveConfig.metricLabels;

  elements.signalRow.innerHTML = "";
  elements.metricGrid.innerHTML = "";

  const signals = [
    { title: "Live Source", body: gameCase.liveConfig.sourceLabel },
    { title: "Updated", body: fetchedAt },
    { title: "Coordinates", body: `${gameCase.liveConfig.latitude}, ${gameCase.liveConfig.longitude}` }
  ];

  signals.forEach((item) => {
    const card = document.createElement("div");
    card.className = "signal-pill";
    card.innerHTML = `<strong>${item.title}</strong><p>${item.body}</p>`;
    elements.signalRow.appendChild(card);
  });

  metricLabels.forEach((entry) => {
    const card = document.createElement("div");
    card.className = "metric-card";
    card.innerHTML = `<strong>${formatValue(current[entry.key], entry.unit)}</strong><span>${entry.label}</span><p>Live reading from the selected region.</p>`;
    elements.metricGrid.appendChild(card);
  });

  const chartData = buildChartSeriesFromPayload(gameCase, payload);
  drawTelemetryChart(chartData.labels, chartData.series);
}

function renderTelemetryError(message) {
  elements.signalRow.innerHTML = "";
  elements.metricGrid.innerHTML = "";

  const signal = document.createElement("div");
  signal.className = "signal-pill";
  signal.innerHTML = `<strong>Live data issue</strong><p>${message}</p>`;
  elements.signalRow.appendChild(signal);

  const canvas = elements.telemetryChart;
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#07161d";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(236, 247, 242, 0.8)";
  context.font = '16px "Avenir Next", sans-serif';
  context.fillText("Live data could not be loaded.", 42, 150);
  context.font = '13px "Avenir Next", sans-serif';
  context.fillText("Try Refresh Live Data to request the real feed again.", 42, 180);
}

function startClueChallenge(clue) {
  if (state.budget < clue.cost) {
    showClueAccessMessage(clue, "budget");
    return;
  }

  const renderers = {
    difference: renderDifferenceGame,
    match: renderMatchingGame,
    reaction: renderReactionGame,
    sequence: renderSequenceGame,
    unscramble: renderUnscrambleGame
  };

  activeMiniGame = { clue, ...createMiniGameBlueprint(clue) };
  const renderer = renderers[activeMiniGame.type];
  if (!renderer) {
    elements.theoryFeedback.textContent = "This clue game could not be loaded. Please try another clue.";
    activeMiniGame = null;
    return;
  }

  elements.miniGameOverlay.classList.remove("hidden");
  elements.miniGameOverlay.setAttribute("aria-hidden", "false");
  elements.miniGameActionBtn.classList.add("hidden");
  elements.miniGameActionBtn.onclick = null;
  elements.miniGameStage.innerHTML = "";
  elements.miniGameStage.style.pointerEvents = "auto";

  if (activeMiniGameCleanup) {
    activeMiniGameCleanup();
  }
  activeMiniGameCleanup = null;

  renderer(clue);
}

function renderDifferenceGame(clue) {
  const puzzle = getDifferencePuzzle(clue);
  const targets = puzzle.targets;
  const targetCount = 2;
  renderMiniGameHeader(clue, `Compare the two bright scene cards and tap the ${targetCount} changes in the right image.`);
  const found = [];

  elements.miniGameStage.innerHTML = `
    <div class="mini-game-card arcade-card">
      <div class="arcade-headline">
        <span class="arcade-chip">${activeMiniGame.difficultyLabel}</span>
        <span class="arcade-chip">Find ${targetCount} differences</span>
      </div>
      <div class="mini-diff-grid">
        <div class="mini-diff-board board-a">
          <img class="diff-scene-image" src="${makeDifferenceSceneSvg(puzzle.left)}" alt="Colorful cartoon scene A">
        </div>
        <div id="diffBoardB" class="mini-diff-board board-b">
          <img class="diff-scene-image" src="${makeDifferenceSceneSvg(puzzle.right)}" alt="Colorful cartoon scene B">
        </div>
      </div>
      <p id="diffBanner" class="diff-banner">Tap the ${targetCount} changes in the right image.</p>
    </div>
  `;

  const board = document.querySelector("#diffBoardB");
  const banner = document.querySelector("#diffBanner");

  board.addEventListener("click", (event) => {
    const rect = board.getBoundingClientRect();
    const xPercent = ((event.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((event.clientY - rect.top) / rect.height) * 100;
    const hitIndex = targets.findIndex((target, index) =>
      !found.includes(index) &&
      Math.abs(xPercent - target.left) < (target.radius || 10) &&
      Math.abs(yPercent - target.top) < (target.radius || 10)
    );

    if (hitIndex >= 0) {
      found.push(hitIndex);
      const ring = document.createElement("div");
      ring.className = "diff-found";
      ring.style.left = `${targets[hitIndex].left}%`;
      ring.style.top = `${targets[hitIndex].top}%`;
      board.appendChild(ring);
      banner.textContent = `Differences found: ${found.length} / ${targetCount}`;
      setMiniGameStatus(`Great catch. ${found.length} of ${targetCount} found.`);
      if (found.length === targetCount) {
        finishMiniGameSuccess();
      }
    } else {
      failMiniGame("That area matches. Try another bright detail.");
    }
  });
}

function renderMatchingGame(clue) {
  const pairCount = activeMiniGame.difficultyTier >= 3 ? 4 : 3;
  renderMiniGameHeader(clue, `Flip cards to match ${pairCount} sticker pairs. Match them all to win your clue.`);
  const selectedIcons = getMatchingStickerSet(clue, pairCount);
  const deck = shuffleArray(selectedIcons.flatMap((icon) => ([
    { id: `${icon}-a`, icon, matched: false },
    { id: `${icon}-b`, icon, matched: false }
  ]))).map((card) => ({
    id: card.id,
    icon: card.icon,
    matched: card.matched
  }));
  let flipped = [];
  let locked = false;
  let mismatchTimer = null;

  elements.miniGameStage.innerHTML = `
    <div class="mini-game-card arcade-card">
      <div class="arcade-headline">
        <span class="arcade-chip">${activeMiniGame.difficultyLabel}</span>
        <span class="arcade-chip">${pairCount} pairs</span>
      </div>
      <div id="matchGrid" class="match-grid"></div>
      <div class="mini-score">Find all ${pairCount} matching sticker pairs.</div>
    </div>
  `;

  const grid = document.querySelector("#matchGrid");

  function renderDeck() {
    grid.innerHTML = "";
    deck.forEach((card) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `match-card ${card.matched || flipped.includes(card.id) ? "revealed" : ""}`;
      button.dataset.cardId = card.id;
      button.innerHTML = `
        <span class="match-front">?</span>
        <span class="match-back">
          <img src="${makeStickerSvg(card.icon, hashString(`${clue.id}-${card.id}`))}" alt="${card.icon} sticker">
        </span>
      `;
      button.disabled = card.matched || flipped.includes(card.id) || locked;
      button.addEventListener("click", () => {
        if (locked || flipped.includes(card.id)) {
          return;
        }

        flipped.push(card.id);
        renderDeck();

        if (flipped.length === 2) {
          const [firstId, secondId] = flipped;
          const first = deck.find((entry) => entry.id === firstId);
          const second = deck.find((entry) => entry.id === secondId);

          if (first.icon === second.icon) {
            first.matched = true;
            second.matched = true;
            flipped = [];
            setMiniGameStatus(`Nice match. ${deck.filter((entry) => entry.matched).length / 2} of ${pairCount} pairs cleared.`);
            if (deck.every((entry) => entry.matched)) {
              finishMiniGameSuccess();
            } else {
              renderDeck();
            }
          } else {
            locked = true;
            setMiniGameStatus("Not a match. Watch the cards and try again.");
            mismatchTimer = window.setTimeout(() => {
              flipped = [];
              locked = false;
              renderDeck();
            }, 700);
          }
        }
      });
      grid.appendChild(button);
    });
  }

  renderDeck();
  activeMiniGameCleanup = () => {
    if (mismatchTimer) {
      window.clearTimeout(mismatchTimer);
    }
  };
}

function renderAnomalyGame(clue) {
  renderMiniGameHeader(clue, "Click the hidden bonus icon in the bright scene.");
  elements.miniGameStage.innerHTML = `
    <div class="mini-game-card arcade-card">
      <div id="anomalyBoard" class="anomaly-board candy-board">
        <img class="bonus-scene-image" src="${makeDifferenceSceneSvg("a")}" alt="Arcade scene">
        <div class="anomaly-target" style="left:66%; top:54%;"></div>
        <div class="scene-hint">Find the hidden bonus</div>
      </div>
    </div>
  `;

  const board = document.querySelector("#anomalyBoard");
  board.addEventListener("click", (event) => {
    const rect = board.getBoundingClientRect();
    const xPercent = ((event.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((event.clientY - rect.top) / rect.height) * 100;
    if (Math.abs(xPercent - 66) < 10 && Math.abs(yPercent - 54) < 10) {
      finishMiniGameSuccess();
    } else {
      failMiniGame("Missed it. Try clicking closer to the suspicious hotspot.");
    }
  });
}

function renderMapGame(clue) {
  renderMiniGameHeader(clue, "Click the most likely source area on the map.");
  elements.miniGameStage.innerHTML = `
    <div class="mini-game-card">
      <div id="mapBoard" class="map-board">
        <div class="map-grid"></div>
        <div class="map-region region-a"></div>
        <div class="map-region region-b"></div>
        <div class="map-hitbox" style="left:18%; top:26%; width:18%; height:18%;"></div>
        <div class="scene-hint">Find the source zone</div>
      </div>
      <p class="mini-score">Click the area where the contamination likely started.</p>
    </div>
  `;

  const board = document.querySelector("#mapBoard");
  board.addEventListener("click", (event) => {
    const rect = board.getBoundingClientRect();
    const xPercent = ((event.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((event.clientY - rect.top) / rect.height) * 100;
    const hit = xPercent >= 18 && xPercent <= 36 && yPercent >= 26 && yPercent <= 44;
    if (hit) {
      finishMiniGameSuccess();
    } else {
      failMiniGame("That location is downstream. Try clicking closer to the source.");
    }
  });
}

function renderReactionGame(clue) {
  const targetScore = [3, 4, 4, 5, 5][activeMiniGame.difficultyTier];
  const maxRounds = [8, 9, 10, 11, 12][activeMiniGame.difficultyTier];
  const dotCount = activeMiniGame.difficultyTier >= 3 ? 6 : 5;
  renderMiniGameHeader(clue, `Tap the glowing stars. Ignore sleepy clouds and catch ${targetScore} stars to win.`);
  elements.miniGameStage.innerHTML = `
    <div class="reaction-lane mini-game-card arcade-card">
      <div class="arcade-headline">
        <span class="arcade-chip">${activeMiniGame.difficultyLabel}</span>
        <span class="arcade-chip">Goal: ${targetScore} stars</span>
      </div>
      ${renderArcadeImageRow(["star", "rocket", "gem"])}
      <div id="reactionTrack" class="reaction-track"></div>
    </div>
  `;

  const track = document.querySelector("#reactionTrack");
  let score = 0;
  let rounds = 0;
  const interval = window.setInterval(() => {
    rounds += 1;
    track.innerHTML = "";
    Array.from({ length: dotCount }, () => Math.random() > 0.55).forEach((isRed) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `reaction-dot ${isRed ? "reaction-red" : "reaction-green"}`;
      button.textContent = isRed ? "★" : "☁";
      button.addEventListener("click", () => {
        if (isRed) {
          score += 1;
          setMiniGameStatus(`Great tap. ${score} / ${targetScore} stars collected.`);
          if (score >= targetScore) {
            window.clearInterval(interval);
            finishMiniGameSuccess();
          }
        } else {
          score = Math.max(0, score - 1);
          failMiniGame("That was a cloud. Ignore clouds and tap stars.");
        }
      });
      track.appendChild(button);
    });

    if (rounds > maxRounds && score < targetScore) {
      window.clearInterval(interval);
      failMiniGame(`Round over. Try again and grab ${targetScore} stars faster.`);
    }
  }, 950);

  activeMiniGameCleanup = () => window.clearInterval(interval);
}

function renderSequenceGame(clue) {
  const sequencePools = [
    ["sun", "star", "gem"],
    ["sun", "star", "gem", "bolt"],
    ["star", "gem", "sun", "bolt"],
    ["bolt", "sun", "gem", "star"],
    ["gem", "bolt", "star", "sun"]
  ];
  const sequence = sequencePools[activeMiniGame.difficultyTier];
  const sequenceLength = sequence.length;
  const flashDelay = [640, 600, 560, 520, 500][activeMiniGame.difficultyTier];
  let inputLocked = true;
  let previewTimers = [];
  renderMiniGameHeader(clue, `Watch the light show, then tap the same ${sequenceLength} glowing pads in order.`);
  elements.miniGameStage.innerHTML = `
    <div class="mini-game-card arcade-card">
      <div class="arcade-headline">
        <span class="arcade-chip">${activeMiniGame.difficultyLabel}</span>
        <span class="arcade-chip">Repeat ${sequenceLength} taps</span>
      </div>
      ${renderArcadeImageRow(["star", "gem", "crown"])}
      <div class="sequence-grid">
        <button type="button" class="sequence-pad sequence-river" data-sequence="sun">Sun</button>
        <button type="button" class="sequence-pad sequence-factory" data-sequence="star">Star</button>
        <button type="button" class="sequence-pad sequence-lake" data-sequence="gem">Gem</button>
        <button type="button" class="sequence-pad sequence-smoke" data-sequence="bolt">Bolt</button>
      </div>
    </div>
  `;

  const pads = [...document.querySelectorAll(".sequence-pad")];
  let playerIndex = 0;

  sequence.forEach((key, index) => {
    const pad = pads.find((item) => item.dataset.sequence === key);
    const onTimer = window.setTimeout(() => {
      pad.classList.add("active");
      const offTimer = window.setTimeout(() => pad.classList.remove("active"), 340);
      previewTimers.push(offTimer);
    }, 500 + index * flashDelay);
    previewTimers.push(onTimer);
  });
  const unlockTimer = window.setTimeout(() => {
    inputLocked = false;
    setMiniGameStatus("Your turn. Repeat the flashing order.");
  }, 500 + sequence.length * flashDelay);
  previewTimers.push(unlockTimer);

  setMiniGameStatus("Memorize the flashing order, then wait for your turn.");

  pads.forEach((pad) => {
    pad.addEventListener("click", () => {
      if (inputLocked) {
        setMiniGameStatus("Watch the preview first, then repeat it.");
        return;
      }
      if (pad.dataset.sequence === sequence[playerIndex]) {
        playerIndex += 1;
        if (playerIndex === sequence.length) {
          finishMiniGameSuccess();
        } else {
          setMiniGameStatus(`Nice. ${playerIndex} / ${sequence.length} taps correct.`);
        }
      } else {
        playerIndex = 0;
        failMiniGame("Wrong order. Watch the pattern and try again.");
      }
    });
  });

  activeMiniGameCleanup = () => {
    previewTimers.forEach((timerId) => window.clearTimeout(timerId));
  };
}

function renderSortGame(clue) {
  renderMiniGameHeader(clue, "Sort the samples into clean and polluted buckets.");
  const samples = shuffleArray([
    { label: "Oil sheen", polluted: true },
    { label: "Clear rainwater", polluted: false },
    { label: "Murky runoff", polluted: true },
    { label: "Healthy leaf", polluted: false },
    { label: "Foamy discharge", polluted: true },
    { label: "Fresh spring", polluted: false }
  ]);

  elements.miniGameStage.innerHTML = `
    <div class="mini-game-card">
      <div id="sampleGrid" class="sample-grid"></div>
      <div class="bucket-grid">
        <div id="cleanBucket" class="bucket clean"><h4>Clean</h4><div class="bucket-slot"></div></div>
        <div id="pollutedBucket" class="bucket polluted"><h4>Polluted</h4><div class="bucket-slot"></div></div>
      </div>
    </div>
  `;

  const sampleGrid = document.querySelector("#sampleGrid");
  samples.forEach((sample) => {
    const chip = document.createElement("div");
    chip.className = "sample-chip";
    chip.draggable = true;
    chip.textContent = sample.label;
    chip.dataset.polluted = sample.polluted ? "yes" : "no";
    chip.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", chip.dataset.polluted);
      event.dataTransfer.setData("label", chip.textContent);
    });
    sampleGrid.appendChild(chip);
  });

  [
    { id: "cleanBucket", expects: "no" },
    { id: "pollutedBucket", expects: "yes" }
  ].forEach((bucketInfo) => {
    const bucket = document.querySelector(`#${bucketInfo.id}`);
    const slot = bucket.querySelector(".bucket-slot");
    bucket.addEventListener("dragover", (event) => event.preventDefault());
    bucket.addEventListener("drop", (event) => {
      event.preventDefault();
      const answer = event.dataTransfer.getData("text/plain");
      const label = event.dataTransfer.getData("label");
      const chip = [...document.querySelectorAll(".sample-chip")].find((item) => item.textContent === label);
      if (!chip) {
        return;
      }

      if (answer === bucketInfo.expects) {
        slot.appendChild(chip);
        const remaining = document.querySelectorAll("#sampleGrid .sample-chip").length;
        setMiniGameStatus(`Sorted ${6 - remaining} / 6 samples.`);
        if (remaining === 0) {
          finishMiniGameSuccess();
        }
      } else {
        failMiniGame("That sample belongs in the other bucket.");
      }
    });
  });
}

function renderQuizGame(clue) {
  renderMiniGameHeader(clue, "Beat the timer in this fast science round.");
  const questions = shuffleArray([
    { prompt: "What usually makes algae blooms worse?", options: ["Cool nights", "Nutrient runoff", "Extra oxygen"], answer: "Nutrient runoff" },
    { prompt: "What harms leaves in ozone cases?", options: ["Leaf tissue", "Farm roads", "Clouds"], answer: "Leaf tissue" },
    { prompt: "What traps pollution near the ground?", options: ["Temperature inversion", "Moonlight", "Bird migration"], answer: "Temperature inversion" }
  ]);
  let current = 0;
  let score = 0;
  let timer = null;
  let seconds = 5;

  elements.miniGameStage.innerHTML = `
    <div class="mini-game-card">
      <h4 id="quizPrompt"></h4>
      <div id="quizOptions" class="quiz-options"></div>
      <div class="quiz-timer"><div id="quizTimerFill" class="quiz-timer-fill"></div></div>
    </div>
  `;

  const prompt = document.querySelector("#quizPrompt");
  const options = document.querySelector("#quizOptions");
  const timerFill = document.querySelector("#quizTimerFill");

  const nextQuestion = () => {
    if (timer) {
      window.clearInterval(timer);
    }

    if (current >= questions.length) {
      if (score >= 2) {
        finishMiniGameSuccess();
      } else {
        failMiniGame("You needed 2 correct answers. Reopen the clue and try again.");
      }
      return;
    }

    const question = questions[current];
    seconds = 5;
    prompt.textContent = question.prompt;
    options.innerHTML = "";
    timerFill.style.width = "100%";

    question.options.forEach((optionText) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      button.textContent = optionText;
      button.addEventListener("click", () => {
        if (optionText === question.answer) {
          score += 1;
          setMiniGameStatus(`Correct. Score ${score} / 3.`);
        } else {
          failMiniGame("Not quite. Keep going.");
        }
        current += 1;
        nextQuestion();
      });
      options.appendChild(button);
    });

    timer = window.setInterval(() => {
      seconds -= 1;
      timerFill.style.width = `${(seconds / 5) * 100}%`;
      if (seconds <= 0) {
        window.clearInterval(timer);
        current += 1;
        failMiniGame("Time up for that question.");
        nextQuestion();
      }
    }, 1000);
  };

  activeMiniGameCleanup = () => {
    if (timer) {
      window.clearInterval(timer);
    }
  };

  nextQuestion();
}

function renderUnscrambleGame(clue) {
  const answer = getArcadeWord(clue);
  const letters = shuffleArray(answer.split(""));
  const picked = [];

  renderMiniGameHeader(clue, "Build the hidden arcade word by tapping the letter tiles in the right order.");
  elements.miniGameStage.innerHTML = `
    <div class="mini-game-card arcade-card">
      <div class="arcade-headline">
        <span class="arcade-chip">${activeMiniGame.difficultyLabel}</span>
        <span class="arcade-chip">${answer.length} letters</span>
      </div>
      ${renderArcadeImageRow(["rocket", "crown", "star"])}
      <div id="wordSlots" class="word-slots"></div>
      <div id="wordBank" class="word-bank"></div>
    </div>
  `;

  const slots = document.querySelector("#wordSlots");
  const bank = document.querySelector("#wordBank");

  const renderWord = () => {
    slots.innerHTML = "";
    bank.innerHTML = "";

    for (let index = 0; index < answer.length; index += 1) {
      const slot = document.createElement("div");
      slot.className = "word-slot";
      slot.textContent = picked[index] || "";
      slots.appendChild(slot);
    }

    letters.forEach((letter, index) => {
      if (picked.filter((value) => value === letter).length > letters.slice(0, index + 1).filter((value) => value === letter).length - 1) {
        return;
      }

      const button = document.createElement("button");
      button.type = "button";
      button.className = "word-letter";
      button.textContent = letter;
      button.addEventListener("click", () => {
        if (picked.length < answer.length) {
          picked.push(letter);
          renderWord();
          if (picked.join("") === answer) {
            finishMiniGameSuccess();
          } else if (picked.length === answer.length) {
            failMiniGame("That spelling is incorrect. Try again.");
            picked.length = 0;
            renderWord();
          }
        }
      });
      bank.appendChild(button);
    });
  };

  renderWord();
}

function renderSliderGame(clue) {
  renderMiniGameHeader(clue, "Match the environmental readings to the healthy target zone.");
  elements.miniGameStage.innerHTML = `
    <div class="slider-wrap mini-game-card">
      <div class="slider-row">
        <label><span>pH</span><strong id="phValue">7</strong></label>
        <input id="phSlider" type="range" min="1" max="14" value="7">
      </div>
      <div class="slider-row">
        <label><span>Oxygen</span><strong id="oxygenValue">6</strong></label>
        <input id="oxygenSlider" type="range" min="1" max="10" value="6">
      </div>
      <div class="slider-row">
        <label><span>Temperature</span><strong id="tempValue">20</strong></label>
        <input id="tempSlider" type="range" min="5" max="35" value="20">
      </div>
      <button id="sliderCheckBtn" class="primary-button" type="button">Check Match</button>
    </div>
  `;

  const phSlider = document.querySelector("#phSlider");
  const oxygenSlider = document.querySelector("#oxygenSlider");
  const tempSlider = document.querySelector("#tempSlider");
  const phValue = document.querySelector("#phValue");
  const oxygenValue = document.querySelector("#oxygenValue");
  const tempValue = document.querySelector("#tempValue");

  const sync = () => {
    phValue.textContent = phSlider.value;
    oxygenValue.textContent = oxygenSlider.value;
    tempValue.textContent = tempSlider.value;
  };

  [phSlider, oxygenSlider, tempSlider].forEach((slider) => slider.addEventListener("input", sync));
  sync();

  document.querySelector("#sliderCheckBtn").addEventListener("click", () => {
    const matched =
      Math.abs(Number(phSlider.value) - 7) <= 1 &&
      Math.abs(Number(oxygenSlider.value) - 8) <= 1 &&
      Math.abs(Number(tempSlider.value) - 18) <= 3;
    if (matched) {
      finishMiniGameSuccess();
    } else {
      failMiniGame("Close, but the ecosystem is still off balance. Adjust the sliders and try again.");
    }
  });
}

function renderEvidence() {
  const currentCase = getCurrentCase();
  const collectedIds = new Set(getCollectedIds(currentCase.id));
  const fundingUsed = hasClaimedFunding(currentCase.id);

  elements.evidenceOptions.innerHTML = "";
  elements.evidenceCount.textContent = `${collectedIds.size} clues logged`;
  elements.fundResearchBtn.textContent = fundingUsed ? "Budget Refilled This Case" : "Replenish Budget +20";
  elements.fundResearchBtn.disabled = fundingUsed;
  elements.evidenceHelp.textContent = fundingUsed
    ? "You already used the budget refill in this case. Solve the case correctly to earn more budget."
    : "Pick a clue to play its mini-game. If a clue is unavailable, click it to see why. If you run low on budget, use Replenish Budget.";

  currentCase.clues.forEach((clue) => {
    const fragment = evidenceCardTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".evidence-card");
    const locked = typeof clue.lockedUntil === "number" && collectedIds.size < clue.lockedUntil;
    const collected = collectedIds.has(clue.id);
    const tooExpensive = !locked && !collected && state.budget < clue.cost;
    const gameConfig = createMiniGameBlueprint(clue);
    const gameLabel = getMiniGameTypeLabel(gameConfig.type);

    fragment.querySelector(".evidence-type").textContent = clue.type;
    fragment.querySelector(".evidence-cost").textContent = collected ? "Collected" : `${clue.cost} budget`;
    fragment.querySelector(".evidence-title").textContent = clue.title;
    fragment.querySelector(".evidence-description").textContent = collected
      ? `Already solved. Review it in the dossier.`
      : locked
        ? `Locked. Collect ${clue.lockedUntil} clue${clue.lockedUntil > 1 ? "s" : ""} first. Then play: ${gameLabel}.`
        : tooExpensive
          ? `Not enough budget right now. Needs ${clue.cost}. Play later or use Replenish Budget. Mini-game: ${gameLabel}.`
          : `${clue.descriptionSimple} Mini-game: ${gameLabel}.`;

    if (locked) {
      card.classList.add("locked");
    }

    if (collected) {
      card.classList.add("collected");
    }

    if (tooExpensive) {
      card.classList.add("budget-low");
    }

    if (locked) {
      card.addEventListener("click", () => showClueAccessMessage(clue, "locked"));
    } else if (collected) {
      card.addEventListener("click", () => showClueAccessMessage(clue, "collected"));
    } else if (tooExpensive) {
      card.addEventListener("click", () => showClueAccessMessage(clue, "budget"));
    } else {
      card.addEventListener("click", () => startClueChallenge(clue));
    }

    elements.evidenceOptions.appendChild(fragment);
  });
}

function renderDossier() {
  const currentCase = getCurrentCase();
  const entries = [{ tag: "Case Opened", body: currentCase.summary }];
  const collectedClues = getCollectedClues(currentCase);
  const twistUnlocked = collectedClues.length >= currentCase.twist.triggerAfter;

  collectedClues.forEach((clue) => {
    entries.push({ tag: clue.type, body: clue.insight });
  });

  if (twistUnlocked) {
    entries.push({ tag: "Big Lesson", body: currentCase.twist.message });
  }

  elements.dossierStatus.textContent = twistUnlocked ? "Prevention lesson unlocked" : "Clues still coming in";
  elements.dossierFeed.innerHTML = "";

  entries.forEach((entry, index) => {
    const row = document.createElement("article");
    row.className = "dossier-entry";
    row.innerHTML = `<time>Log ${String(index + 1).padStart(2, "0")} • ${entry.tag}</time><p>${entry.body}</p>`;
    elements.dossierFeed.appendChild(row);
  });
}

function renderSuspects() {
  const currentCase = getCurrentCase();
  elements.suspectList.innerHTML = "";

  currentCase.suspects.forEach((suspect) => {
    const option = document.createElement("button");
    option.className = "suspect-option";
    option.type = "button";
    option.innerHTML = `<strong>${suspect.name}</strong><p>${suspect.pitch}</p>`;

    if (state.selectedSuspectId === suspect.id) {
      option.classList.add("selected");
    }

    option.addEventListener("click", () => {
      state.selectedSuspectId = suspect.id;
      renderSuspects();
    });

    elements.suspectList.appendChild(option);
  });
}

function renderReports() {
  const currentCase = getCurrentCase();
  elements.reportCards.innerHTML = "";

  currentCase.reports.forEach((report) => {
    const card = document.createElement("div");
    card.className = "report-card";
    card.innerHTML = `<strong>${report.title}</strong><p>${report.body}</p>`;
    elements.reportCards.appendChild(card);
  });
}

function renderAssistantInsight() {
  const currentCase = getCurrentCase();
  const collectedIds = getCollectedIds(currentCase.id);
  const collectedTags = new Set(getCollectedClues(currentCase).flatMap((clue) => clue.tags));
  const twistUnlocked = getCollectedClues(currentCase).length >= currentCase.twist.triggerAfter;
  const availableClues = currentCase.clues.filter((clue) => {
    const collected = collectedIds.includes(clue.id);
    const locked = typeof clue.lockedUntil === "number" && collectedIds.length < clue.lockedUntil;
    return !collected && !locked;
  });
  const affordableClues = availableClues.filter((clue) => clue.cost <= state.budget);

  let message =
    "Start simple: look for one human cause and one environmental cause. Many real problems happen when both work together.";

  if (collectedTags.size > 0) {
    message = "You already have clues. Now ask which answer best matches both a people-made pressure and a natural condition.";
  }

  if (twistUnlocked) {
    message = `${message} The prevention guide will help explain how this problem could be reduced next time.`;
  }

  if (availableClues.length > 0 && affordableClues.length === 0) {
    message = "You do not have enough budget for the next clue. Use Replenish Budget in the Evidence Board, or solve the case correctly to earn more funding.";
  }

  elements.assistantInsight.textContent = message;
}

function drawTelemetryChart(labels, series) {
  const canvas = elements.telemetryChart;
  const context = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const padding = 42;

  context.clearRect(0, 0, width, height);
  context.fillStyle = "#07161d";
  context.fillRect(0, 0, width, height);

  if (!series || series.length === 0 || !labels || labels.length === 0) {
    context.fillStyle = "rgba(236, 247, 242, 0.8)";
    context.font = '16px "Avenir Next", sans-serif';
    context.fillText("Waiting for live telemetry...", 42, 160);
    return;
  }

  context.strokeStyle = "rgba(255,255,255,0.08)";
  context.lineWidth = 1;

  for (let i = 0; i < 5; i += 1) {
    const y = padding + ((height - padding * 2) / 4) * i;
    context.beginPath();
    context.moveTo(padding, y);
    context.lineTo(width - padding, y);
    context.stroke();
  }

  const allValues = series.flatMap((entry) => entry.values.filter((value) => value !== null && value !== undefined));
  const min = Math.min(...allValues);
  const max = Math.max(...allValues);
  const xStep = labels.length > 1 ? (width - padding * 2) / (labels.length - 1) : 0;

  series.forEach((entry) => {
    context.beginPath();
    context.strokeStyle = entry.color;
    context.lineWidth = 3;

    entry.values.forEach((value, index) => {
      if (value === null || value === undefined) {
        return;
      }

      const normalized = (value - min) / (max - min || 1);
      const x = padding + xStep * index;
      const y = height - padding - normalized * (height - padding * 2);

      if (index === 0 || entry.values[index - 1] === null || entry.values[index - 1] === undefined) {
        context.moveTo(x, y);
      } else {
        context.lineTo(x, y);
      }
    });

    context.stroke();
  });

  context.font = '12px "Avenir Next", sans-serif';
  context.fillStyle = "rgba(236, 247, 242, 0.7)";
  labels.forEach((label, index) => {
    const x = padding + xStep * index;
    context.fillText(label, x - 10, height - 16);
  });

  series.forEach((entry, index) => {
    context.fillStyle = entry.color;
    context.fillRect(width - 164, 18 + index * 22, 14, 14);
    context.fillStyle = "rgba(236, 247, 242, 0.85)";
    context.fillText(entry.label, width - 142, 30 + index * 22);
  });
}

function testTheory() {
  const currentCase = getCurrentCase();
  if (!state.selectedSuspectId) {
    elements.theoryFeedback.textContent = "Choose a cause first, then check your answer.";
    return;
  }

  const selectedSuspect = currentCase.suspects.find((suspect) => suspect.id === state.selectedSuspectId);
  const collectedTags = new Set(getCollectedClues(currentCase).flatMap((clue) => clue.tags));
  const matchedEvidence = selectedSuspect.requiredEvidence.filter((tag) => collectedTags.has(tag));
  const enoughEvidence = matchedEvidence.length >= selectedSuspect.threshold;

  if (selectedSuspect.id === currentCase.solution && enoughEvidence) {
    state.solvedCases.add(currentCase.id);
    state.reputation = Math.min(100, state.reputation + 6);
    state.budget += 24;
    state.breakthrough = Math.min(100, state.breakthrough + 12);
    elements.theoryFeedback.textContent =
      `Correct. ${selectedSuspect.name} best fits the clues. You found how the environment and human actions worked together.`;

    if (state.solvedCases.size === gameCases.length) {
      elements.theoryFeedback.textContent += " You solved all 10 cases in this set.";
    }

    renderAll();
    return;
  }

  if (selectedSuspect.id === currentCase.solution && !enoughEvidence) {
    elements.theoryFeedback.textContent = "That answer may be right, but you need a few more clues before the game can confirm it.";
    state.reputation = Math.max(40, state.reputation - 1);
    renderStats();
    return;
  }

  elements.theoryFeedback.textContent = "That answer does not fit the clues well enough yet. Try another cause or gather more evidence first.";
  state.reputation = Math.max(40, state.reputation - 2);
  renderStats();
}

async function loadTelemetryForCurrentCase(forceRefresh = false) {
  const currentCase = getCurrentCase();
  const requestId = ++activeTelemetryRequestId;
  renderSignalsPlaceholder(currentCase);
  elements.metricGrid.innerHTML = "";
  drawTelemetryChart([], []);
  elements.theoryFeedback.textContent = `Loading live data from ${currentCase.liveConfig.sourceLabel}...`;

  try {
    const result = await fetchLiveTelemetry(currentCase, forceRefresh);
    if (requestId !== activeTelemetryRequestId || currentCase.id !== getCurrentCase().id) {
      return;
    }

    renderLiveTelemetry(currentCase, result);
    elements.theoryFeedback.textContent = `Live telemetry loaded from ${currentCase.liveConfig.sourceLabel}.`;
  } catch (error) {
    if (requestId !== activeTelemetryRequestId || currentCase.id !== getCurrentCase().id) {
      return;
    }

    renderTelemetryError(error.message);
    elements.theoryFeedback.textContent = "The real data feed could not be loaded right now. Try Refresh Live Data again.";
  }
}

function requestHint() {
  const currentCase = getCurrentCase();
  const solved = state.solvedCases.has(currentCase.id);

  if (solved) {
    elements.assistantInsight.textContent = "Case closed. Move to another case when you are ready.";
    return;
  }

  renderAssistantInsight();
  elements.theoryFeedback.textContent = "Hint updated. Look for the answer that combines a human cause with an environmental cause.";
}

function advanceCase() {
  if (state.currentCaseIndex < gameCases.length - 1) {
    state.currentCaseIndex += 1;
  } else {
    state.currentCaseIndex = 0;
  }

  state.selectedSuspectId = null;
  renderAll();
  loadTelemetryForCurrentCase();
}

function renderAll() {
  renderStats();
  renderCaseList();
  renderHero();
  renderLiveFeed();
  renderReports();
  renderEvidence();
  renderDossier();
  renderSuspects();
  renderAssistantInsight();
}

elements.requestHintBtn.addEventListener("click", requestHint);
elements.testTheoryBtn.addEventListener("click", testTheory);
elements.fundResearchBtn.addEventListener("click", requestResearchFunding);
elements.simulateLiveBtn.addEventListener("click", () => {
  liveDataCache.delete(getCurrentCase().id);
  loadTelemetryForCurrentCase(true);
});
elements.advanceCaseBtn.addEventListener("click", advanceCase);
elements.startGameBtn.addEventListener("click", () => {
  elements.introScreen.classList.add("hidden");
  startTour();
});
elements.tourBackBtn.addEventListener("click", () => {
  if (activeTourIndex > 0) {
    showTourStep(activeTourIndex - 1);
  }
});
elements.tourNextBtn.addEventListener("click", () => {
  if (activeTourIndex >= dashboardTourSteps.length - 1) {
    endTour();
    return;
  }

  showTourStep(activeTourIndex + 1);
});
elements.tourSkipBtn.addEventListener("click", endTour);
elements.miniGameCloseBtn.addEventListener("click", closeMiniGame);
window.addEventListener("resize", () => {
  if (resizeTourFrame) {
    window.cancelAnimationFrame(resizeTourFrame);
  }
  resizeTourFrame = window.requestAnimationFrame(() => {
    resizeTourFrame = null;
    if (activeTourIndex >= 0) {
      showTourStep(activeTourIndex);
    }
  });
});

renderAll();
loadTelemetryForCurrentCase();
