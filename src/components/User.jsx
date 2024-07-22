import { useDispatch, useSelector } from "react-redux";
import { setName } from '../redux/slice';

export const User = () => {

  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  const handleSetName = () => {
    const newName = prompt("Digita tu nombre: ");
    dispatch(setName(newName));
  }

  return (
    <div>
      <h1>User: {name} </h1>
      <div className="my-4">
        <button onClick={handleSetName} >Asignar nombre</button>
      </div>
    </div>
  )
}
