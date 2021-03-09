import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard";
import Form from "./Form";
import ls from "../services/LocalStorage";

function Main() {
  const localStorageData = ls.get("userData") || {};
  const [data, setData] = useState(
    localStorageData.data || {
      palette: "1",
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: "",
    }
  );
  useEffect(() => {
    ls.set("userData", { data });
  }, [data]);

  /*   const [palette, setPalettes] = useState("1");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState(""); */

  const handleInputLifting = (inputValue, inputName) => {
    //data[inputName] = inputValue; NO VALE
    setData({
      ...data,
      [inputName]: inputValue,
    });

    /*  if (inputName === "name") {
          setName(inputValue);
        } else if (inputName === "job") {
          setJob(inputValue);
        } else if (inputName === "palette") {
          setPalettes(inputValue);
        } else if (inputName === "email") {
          setEmail(inputValue);
        } else if (inputName === "phone") {
          setPhone(inputValue);
        } else if (inputName === "linkedin") {
          setLinkedin(inputValue);
        } else if (inputName === "github") {
          setGithub(inputValue);
        } */
  };

  const handleReset = () => {
    setData({
      palette: "1",
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: "",
    });
    localStorage.clear();
    /* setName("");
        setJob("");
        setPalettes("1");
        setEmail("");
        setPhone("");
        setLinkedin("");
        setGithub(""); */
  };
  return (
    <main className="mainProfile mainProfile__wrapper">
      {" "}
      {/* <div className="mainProfile__wrapper"> */}{" "}
      <PhotoCard data={data} handleReset={handleReset} />{" "}
      <Form data={data} handleInputLifting={handleInputLifting} />{" "}
      {/* </div> */}{" "}
    </main>
  );
}

export default Main;
