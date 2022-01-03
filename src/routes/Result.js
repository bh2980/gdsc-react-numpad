import { useParams } from "react-router-dom";

function Result() {
  const { input } = useParams();
  console.log(input);
  return (
    <div>
      <div>{input}</div>
    </div>
  );
}

export default Result;
