import React from "react";
import "./TodoForm.css";
import { useNavigate } from "react-router-dom";

function TodoForm(props) {
  const navigate = useNavigate();
  const [newTodoValue, setNewTodoValue] = React.useState(
    props.defaultTodoText || ""
  );

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    navigate("/");
    // setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(newTodoValue);
    navigate("/");
    // setOpenModal(false);
  };

  return (
    <React.Fragment>
      <div className="Background"></div>
      <div className="ModalBackground">
        <form onSubmit={onSubmit}>
          <label>{props.label}</label>
          <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder="New amazing task..."
          />
          <div className="TodoForm-buttonContainer">
            <button
              type="button"
              className="TodoForm-button TodoForm-button__cancel"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              type="Submit"
              className="TodoForm-button TodoForm-button__add"
            >
              {props.submitText}
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export { TodoForm };
