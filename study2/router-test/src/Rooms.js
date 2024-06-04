import { useParams } from "react-router-dom";

function Rooms({ match }) {
  return (
    <div>
      <Room />
    </div>
  );
}

export default Rooms;

function Room({ match }) {
  const params = useParams();

  return <h2>{`${params.id} 방을 선택하셨습니다.`}</h2>;
}
