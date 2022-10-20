import React from "react";
import { useSelector } from "react-redux";

function ReservedDragons() {
  const allDragons = useSelector((state) => state.dragons.dragons);
  const reservedDragons = allDragons.filter(
    (dragon) => dragon.reserved === true
  );
  console.log(reservedDragons);
  const displayReservedDragons = reservedDragons.map((dragon) => (
    <div key={dragon.id}>
      <h3>{dragon.rocket_name}</h3>
      <p>{dragon.description}</p>
      <p>{dragon.reserved}</p>
    </div>
  ));

  return (
    <div>
      reservedDragons
      {displayReservedDragons}
    </div>
  );
}

export default ReservedDragons;
