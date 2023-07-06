import React from "react";

import styles from "../styles/profile.module.css";

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <div style={{ height: 150 }} />
        <h3 className={styles.header_title}>Collins Oduor</h3>
        <h3 className={styles.header_subtitle}>Registered users: 10</h3>
        <h3 className={styles.header_subtitle}>Phone: 0740840022</h3>
        <h3 className={styles.header_subtitle}>Email: email@email.com</h3>
      </div>
      <button className={styles.button} onClick={() => console.log("Logging out")}>Log Out</button>
    </div>
  );
};

export default Profile;
