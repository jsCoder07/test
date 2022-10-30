import React from "react";
import ReservationForm from "../components/ReservationForm";
import HomeImg2 from "../images/optized/reserve.jpg";

const Reservations = () => {
  return (
    <div>
      <ReservationForm
        title="Room Reservation"
        background={HomeImg2}
      ></ReservationForm>
    </div>
  );
};

export default Reservations;
