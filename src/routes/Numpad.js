import { useState, useEffect } from "react";
import NumpadPresenter from "./NumpadPresenter.js";

function Numpad() {
  //function
  const [input, setInput] = useState("");
  const [btn_disabled, changeDisabled] = useState(true);

  useEffect(() => {
    const countHypen = input.match(/-/g) == null ? 0 : input.match(/-/g).length;
    const inputLen = input.length - countHypen;

    if (inputLen < 4) {
      setInput(input.replace(/-/g, ""));
      changeDisabled(true);
    }
    if (inputLen >= 4 && inputLen < 8)
      setInput(input.replace(/-/g, "").replace(/(\d{3})(\d)/, "$1-$2"));

    if (inputLen >= 8 && inputLen < 10) {
      setInput(
        input.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d)/, "$1-$2-$3")
      );
      changeDisabled(true);
    }
    if (inputLen === 10) {
      setInput(
        input.replace(/-/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
      );
      changeDisabled(false);
    }
    if (inputLen === 11)
      setInput(
        input.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    if (input.length > 13) setInput(input.replace(/-/g, ""));
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
      onDisabled={btn_disabled}
    ></NumpadPresenter>
  );
}

export default Numpad;
