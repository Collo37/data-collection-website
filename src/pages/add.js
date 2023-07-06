import { colors, wards } from "@/constants";
import { Radio } from "@mui/material";
import React, { useEffect, useState } from "react";

import CSSstyles from "../styles/add.module.css";

const Add = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    gender: "",
    idNumber: "",
    phone: "",
    ward: "",
    occupation: "",
  });

  const [sub, setSub] = useState(null);

  const addUser = async () => {
    // const citizens = (await DataStore.save(new Citizen(inputValues)));
    try {
      console.log(inputValues);
    } catch (error) {
      alert(error?.message);
    }
  };

  const loadUser = async () => {
    console.log("getting ouser");
  };

  useEffect(() => {
    loadUser();
    console.log("component mounted");
  }, []);
  return (
    <div style={styles.container}>
      <div style={styles.scrollContainer} className={CSSstyles.inputs_container}>
        <p style={{ color: colors.link, fontSize: 22 }}>Input Data</p>
        <p style={styles.text}>Name</p>
        <input
          label="Name"
          style={{ marginVertical: 10, height: 60 }}
          mode="outlined"
          onChange={(event) =>
            setInputValues({ ...inputValues, name: event.target.value })
          }
          value={inputValues.name}
        />
        <p style={styles.text}>Gender</p>
        <div style={styles.row}>
          <Radio
            value="male"
            onClick={() => setInputValues({ ...inputValues, gender: "male" })}
            status={inputValues.gender === "male" ? "checked" : "unchecked"}
          />
          <p>Male</p>
        </div>
        <div style={styles.row}>
          <Radio
            value="female"
            onClick={() => setInputValues({ ...inputValues, gender: "female" })}
            status={inputValues.gender === "female" ? "checked" : "unchecked"}
          />
          <p>Female</p>
        </div>
        <p style={styles.text}>ID Number</p>
        <input
          label="ID Number"
          style={{ marginVertical: 10, height: 60 }}
          mode="outlined"
          onChange={(event) =>
            setInputValues({ ...inputValues, idNumber: event.target.value })
          }
          value={inputValues.idNumber}
        />
        <p style={styles.text}>Phone Number</p>
        <input
          label="Phone Number"
          style={{ marginVertical: 10, height: 60 }}
          mode="outlined"
          onChange={(event) =>
            setInputValues({ ...inputValues, phone: event.target.vale })
          }
          value={inputValues.phone}
        />
        <p style={styles.text}>Occupation</p>
        <input
          label="Occupation"
          style={{ marginVertical: 10, height: 60 }}
          mode="outlined"
          onChange={(event) =>
            setInputValues({ ...inputValues, occupation: event.target.value })
          }
          value={inputValues.occupation}
        />
        <p style={styles.text}>Ward</p>
        <select>
          {wards.map((ward, index) => {
            return (
              <option
                key={index}
                onClick={() => setInputValues({ ...inputValues, ward })}
              >
                {ward}
              </option>
            );
          })}
        </select>
        <button style={styles.button} onClick={addUser}>
          <p style={{ color: "white" }}>Submit</p>
        </button>
      </div>
    </div>
  );
};

export default Add;

const styles = {
  container: {
    paddingTop: 20,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "white",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: colors.link,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 5,
    backgroundColor: colors.primary,
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    outline: "none",
    border: "none",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    left: 20,
    top: 50,
    position: "absolute",
    zIndex: 20,
  },
};
