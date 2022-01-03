import { useState, useEffect } from "react";
import NumpadPresenter from "./NumpadPresenter.js";

function Numpad() {
  //function
  const [input, setInput] = useState("");
  const [btn_disabled, changeDisabled] = useState(true);
  useEffect(() => {
    let hypen = input.match(/-/g);

    if (hypen == null) hypen = 0;
    else hypen = hypen.length;

    if (input.length - hypen < 4) {
      setInput(input.replace(/-/g, ""));
      changeDisabled(true);
    }
    if (input.length - hypen >= 4 && input.length - hypen < 8)
      setInput(input.replace(/-/g, "").replace(/(\d{3})(\d)/, "$1-$2"));

    if (input.length - hypen >= 8 && input.length - hypen < 10) {
      setInput(
        input.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d)/, "$1-$2-$3")
      );
      changeDisabled(true);
    }
    if (input.length - hypen === 10)
      setInput(
        input.replace(/-/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
      );
    if (input.length - hypen === 11) {
      setInput(
        input.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
      changeDisabled(false);
    }
    if (input.length > 13) setInput(input.substring(0, 13));
  }, [input]);

  const onClick = (event) => {
    setInput((current) => current + event.target.value);
  };

  const onReset = () => {
    setInput("");
  };

  const onDelete = () => {
    setInput(input.substring(0, input.length - 1));
  };

  return (
    <NumpadPresenter
      input={input}
      onClick={onClick}
      onReset={onReset}
      onDelete={onDelete}
      btn_disabled={btn_disabled}
    ></NumpadPresenter>
  );
}

export default Numpad;
