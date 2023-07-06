import React, { useEffect, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useRouter } from "next/router";

import styles from "./styles.module.css";
import Link from "next/link";
import { colors } from "@/constants";

const Layout = ({ children }) => {
  const { asPath } = useRouter();
  const [isValidPath, setIsValidPath] = useState(false);

  useEffect(() => {
    if (asPath === "/" || asPath === "/profile") {
      setIsValidPath(true);
    } else {
      setIsValidPath(false);
    }
  }, [asPath]);

  return (
    <div className={styles.container}>
      <div>{children}</div>
      {isValidPath ? (
        <div className={styles.bottom_tab}>
          <div className={styles.bottom_tab_wrapper}>
            <Link
              href="/"
              className={styles.bottom_tab_button_left}
              style={{ color: asPath === "/" ? colors.link : "white" }}
            >
              <HomeOutlinedIcon />
              <p>Home</p>
            </Link>
            <Link
              href="/profile"
              className={styles.bottom_tab_button_right}
              style={{ color: asPath === "/profile" ? colors.link : "white" }}
            >
              <PersonOutlineOutlinedIcon />
              <p>Profile</p>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Layout;
