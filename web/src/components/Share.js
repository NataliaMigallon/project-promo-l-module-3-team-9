import "../stylesheets/layout/_shareSection.scss";
import ShareCreated from "./ShareCreated";
import ShareFail from "./ShareFail";
import api from "../services/api";

const Share = (props) => {
  const userData = props.data;

  const handleButton = (ev) => {
    ev.preventDefault();
    api.sendCard(userData).then((card) => {
      props.handleButtonLifting(card);
    });
  };

  return (
    <>
      <fieldset className={"collapsable js-slide3 " + props.className}>
        <div>{props.children}</div>

        <div className="shareContainer js-content">
          <section className="share collapsable__hide">
            <div className="share__btn js-create-btn">
              <button className="share__btn--text" onClick={handleButton}>
                <i
                  className="share__btn--icon fa fa-address-card-o"
                  aria-hidden="true"
                ></i>
                Crear tarjeta
              </button>
            </div>
          </section>
        </div>
      </fieldset>
      {props.cardCreated.success === false ? (
        <ShareFail data={userData} />
      ) : props.cardCreated.success ? (
        <ShareCreated shareCreated={props.cardCreated.cardURL} />
      ) : null}
    </>
  );
};
export default Share;
