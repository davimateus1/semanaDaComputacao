import { useNavigate } from "react-router-dom";
import "./styles.css";

export const Button = (props) => {
  const navigate = useNavigate();

  return (
    <button className="btn_component" onClick={() => navigate(props.route)}>
      {props.icon ? <props.icon /> : ""}
      {props.text}
    </button>
  );
};
