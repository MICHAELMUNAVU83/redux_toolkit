import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDragons } from "./dragonsSlice";
import { changeReservation } from "./dragonsSlice";
function Dragons() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (dragons.length === 0) {
      dispatch(fetchDragons());
    }
  });
  const dragons = useSelector((state) => state.dragons.dragons);
  console.log(dragons);

  const displayDragons = dragons.map((dragon) => (
    <div key={dragon.id}>
      <h3>{dragon.rocket_name}</h3>
      <p>{dragon.description}</p>
      {dragon.reserved ? (
        <button
          onClick={() => {
            dispatch(changeReservation(dragon));
          }}
        >
          {" "}
          Cancel reservation{" "}
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(changeReservation(dragon));
          }}
        >
          {" "}
          Reserve{" "}
        </button>
      )}
    </div>
  ));
  return <div>{displayDragons}</div>;
}

export default Dragons;
