import React from "react";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

import styles from "../styles/locations.module.css";
import { colors } from "@/constants";

const designatedLocations = [
  { area: "Banja", completed: false },
  { area: "Muhudu", completed: false },
  { area: "Tambua", completed: false },
  { area: "Jepkoyai", completed: false },
  { area: "Luanda Township", completed: true },
  { area: "Luanda South", completed: true },
  { area: "Mwibona", completed: false },
  { area: "Wemilabi", completed: false },
  { area: "Emabungo", completed: false },
];

// const markAsCovered = (area) => {
// }

const locations = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <h1 className={styles.header_title}>Locations</h1>
        <h1 className={styles.header_subtitle}>Manage completed areas</h1>
      </div>
      <div className={styles.locations_container}>
        {designatedLocations.map((location, index) => {
          return (
            <div
              style={{
                backgroundColor: location.completed
                  ? colors.background
                  : colors.primary,
              }}
              className={styles.location_container}
              key={index}
            >
              <p
                style={{
                  color: location.completed ? colors.link : colors.background,
                }}
                className={styles.location_name}
              >
                {location.area}
              </p>
              {location.completed ? (
                <CheckOutlinedIcon color={colors.link} />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default locations;
