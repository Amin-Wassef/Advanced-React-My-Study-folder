import React, { useState, useEffect } from "react";

const BatteryStatusApp = () => {
  const [batteryLevel, setBatteryLevel] = useState(0);

  useEffect(() => {
    const batteryPromise = navigator.getBattery();

    batteryPromise
      .then((battery) => {
        setBatteryLevel(battery.level * 100); // Convert battery level to percentage

        battery.addEventListener("levelchange", () => {
          setBatteryLevel(battery.level * 100);
        });
      })
      .catch((error) => console.error("Battery API not supported", error));

    return () => {
      // Clean up event listeners
      batteryPromise.then((battery) => {
        battery.removeEventListener("levelchange", () => {});
      });
    };
  }, []);

  useEffect(() => {
    if (batteryLevel === 40) {
      playAlert("Notification40.wav");
    } else if (batteryLevel === 82) {
      playAlert("Notification80.wav");
    }
  }, [batteryLevel]);

  const playAlert = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  return (
    <div>
      <h1>Battery Status: {batteryLevel}%</h1>
    </div>
  );
};

export default BatteryStatusApp;

// import React from "react";
// import { useBattery } from "react-use";

// function Battery() {
//   // Calling useBattery hook
//   const battery = useBattery();

//   // Destructuring battery properties
//   const { isSupported, level, charging, dischargingTime, chargingTime } =
//     battery;

//   //Check if browser support Battery API
//   if (!isSupported) {
//     return (
//       <div>
//         <strong>Battery sensor</strong>: <span>Not supported</span>
//       </div>
//     );
//   }
//   return (
//     <div>
//       {/* Display Battery Charge Percentage */}
//       <strong>Charge level</strong>:&nbsp;&nbsp;{" "}
//       <span>{(level * 100).toFixed(0)}%</span> <br />
//       {/* Display Whether Device is charging or not */}
//       <strong>Charging</strong>:&nbsp;&nbsp;{" "}
//       <span>{charging ? "Yes" : "No"}</span> <br />
//       {/* Display Device Charging time */}
//       <strong>Charging time</strong>:&nbsp;&nbsp;
//       <span>{chargingTime ? chargingTime : "Finished"}</span> <br />
//       {/* Display Device Discharging time */}
//       <strong>Discharging time</strong>:&nbsp;&nbsp;{" "}
//       <span>{dischargingTime}</span>
//     </div>
//   );
// }

// export default Battery;
