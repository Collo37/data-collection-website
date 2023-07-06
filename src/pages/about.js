import React from "react";
import Image from "next/image";
import { Divider } from "@mui/material";

import ProfileImage from "../../public/images/Profile.png";

import styles from "./pageStyles/About.module.css";

const message = {
  intro:
    "Kidake Alex Malova is a noble Kenyan, a proud husband and a father. Married to one beautiful female wife blessed with 3 kids.    Born and raised in Vihiga County. Schooled at Munoywa, then Emusire Boys, where he excelled with flying colours , graduated from MKU with a Bachelor's in BCoM, and currently pursuing a Master's in Finance, Leicester University. Kidake is an astute business person holding a stronger acumen who boosts of having done business and worked in many countries across the world. He is an individual with a philanthropic heart.",
  agenda:
    "Our Agenda as TEAM KIDAKE is to turn Vihiga into an international business hub, which overly turns the county to a job creation institution at the same time as a source of revenue for the county. Changing Vihiga into a business hub will automotically improve the living standards of our people.",
  mission: "To turn Vihiga into a Business Hub.",
  vision:
    "To spearhead development in our county by inviting investors from across the world who will discover more business opportunities for our people.",
};

const MessageBox = ({ title, message }) => {
  return (
    <div className={styles.message_box_container}>
      <span className={styles.message_box_title}>{title}</span>
      <Divider />
      <article className={styles.message_box_message}>{message}</article>
    </div>
  );
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.page_header_container}>
        <div className={styles.page_image_container}>
          <Image
            src={ProfileImage}
            alt="Kidake Alex Malova"
            style={styles.page_header_image}
          />
        </div>
      </div>
      {/** Page Header ends */}

      <div className={styles.details_container}>
        <div className={styles.details_container_title}>
          <MessageBox title="Intro" message={message.intro} />
          <MessageBox title="Agenda" message={message.agenda} />
          <MessageBox title="Mission" message={message.mission} />
          <MessageBox title="Vision" message={message.vision} />
        </div>
      </div>
    </div>
  );
};

export default About;
