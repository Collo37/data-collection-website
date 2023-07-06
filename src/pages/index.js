import React from "react";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { colors } from "@/constants";

import styles from "../styles/Home.module.css";
import { Divider } from "@mui/material";
import Link from "next/link";

const Index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <h3 className={styles.header_title}>Kidake Alex Malova</h3>
        <h3 className={styles.header_subtitle}>Governor Vihiga County 2027</h3>
      </div>

      <div className={styles.actions_container}>
        <Link href="/add" className={styles.action_button}>
          <PersonAddAlt1Icon
            color="white"
            style={{
              backgroundColor: colors.primary,
              borderRadius: "50%",
              padding: 5,
              width: 40,
              height: 40,
            }}
          />
          <p className={styles.action_button_text}>Add Data</p>
        </Link>
        <Divider />
        <Link href="/locations" className={styles.action_button}>
          <CreateRoundedIcon
            color="white"
            style={{
              backgroundColor: colors.primary,
              borderRadius: "50%",
              padding: 5,
              width: 40,
              height: 40,
            }}
          />
          <p className={styles.action_button_text}>Manage Locations</p>
        </Link>
      </div>

      <Link href="/about" className={styles.profile_button}>
        <div className={styles.profile_button_text}>
          <p style={{ color: colors.link, fontSize: 20 }}>Profile</p>
          <p style={{ color: colors.black, fontSize: 16 }}>
            View Mr. Kidake&apos;s Profile
          </p>
        </div>
        <ArrowCircleRightRoundedIcon
          color="white"
          style={{ width: 40, height: 40, fill: "white" }}
        />
      </Link>
    </div>
  );
};

export default Index;
