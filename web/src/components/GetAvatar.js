import React from "react";
import defaultAvatar from "../images/pepino.gif";
import "../stylesheets/layout/_getAvatar.scss";

const GetAvatar = (props) => {
  let fr = new FileReader();

  const myFileField = React.createRef();
  const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];

      fr.addEventListener("load", getImage);

      fr.readAsDataURL(myFile);
    }
  };
  const getImage = () => {
    const image = fr.result;

    props.handleInputLifting(image, "photo");
  };
  const avatar = props.data === "" ? defaultAvatar : props.data;
  return (
    <>
      <label htmlFor="photo" className="form__label">
        Imagen de perfil
      </label>
      <div className="get-avatar">
        <label className="photo__btn " type="button">
          Añadir imagen
          <input
            name="photo"
            type="file"
            ref={myFileField}
            className="hidden "
            onChange={uploadImage}
          />
        </label>

        <div
          className="photo__preview "
          style={{
            backgroundImage: `url("${avatar}")`,
          }}
        ></div>
      </div>
    </>
  );
};

export default GetAvatar;
