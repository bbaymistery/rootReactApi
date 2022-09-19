//!reservation document => it is used in    htg manage booking

//! setSeelceted points manage booking
/*
  setSelectedPoints: (point, index, type) => {
        let { reservations } = this.state;
        reservations[
          type === "pickup" ? "selectedPickupPoints" : "selectedDropoffPoints"
        ][index] = point;
        this.setState({ reservations });
      },
*/
{
  pickUps &&
    pickUps?.map((point) => {
      return (
        <div className="jrn-details-bottom-container">
          <div className="jrn-details-bottom-adress">
            <img src={icons.check} alt="" />
            <span className="jrn-details-bottom-name">{point?.address}</span>
          </div>
          {point?.flightDetails?.flightNumber && (
            <div className="jrn-details-bottom-description">
              <img src={icons.circle} alt="" />
              <div className="jrn-text-div">
                <span>Fligth Number:</span>&nbsp;
                <span>{point?.flightDetails?.flightNumber}</span>
              </div>
            </div>
          )}
          {point?.flightDetails?.waitingPickupTime > 0 && (
            <div className="jrn-details-bottom-description">
              <img src={icons.circle} alt="" />
              <div className="jrn-text-div">
                <span>Waiting Pickup Time:</span>&nbsp;
                <span>{point?.flightDetails?.waitingPickupTime > 0}</span>
              </div>
            </div>
          )}

          {point?.postCodeDetails?.postCodeAddress && (
            <div className="jrn-details-bottom-description">
              <img src={icons.circle} alt="" />
              <div className="jrn-text-div">
                <span>Postcode Address:</span>&nbsp;
                <span>{point?.postCodeDetails?.postCodeAddress}</span>
              </div>
            </div>
          )}
          {point?.cruiseNumber && (
            <div className="jrn-details-bottom-description">
              <img src={icons.circle} alt="" />
              <div className="jrn-text-div">
                <span>Cruise Name:</span>&nbsp;
                <span>{point?.cruiseNumber}</span>
              </div>
            </div>
          )}
          {point?.trainNumber && (
            <div className="jrn-details-bottom-description">
              <img src={icons.circle} alt="" />
              <div className="jrn-text-div">
                <span>Train Number:</span> &nbsp;
                <span>{point?.trainNumber}</span>
              </div>
            </div>
          )}
          {point?.pcatId === 8 && point?.["address-description"] && (
            <div className="jrn-details-bottom-description">
              <img src={icons.circle} alt="" />
              <div className="jrn-text-div">
                <span>Cities:</span>&nbsp;
                <span>{point?.["address-description"]}</span>
              </div>
            </div>
          )}
          {/*  */}
          {point?.pcatId === 9 && point?.["address-description"] && (
            <div className="jrn-details-bottom-description">
              <img src={icons.circle} alt="" />
              <div className="jrn-text-div">
                <span>Universities And Colleges:</span>{" "}
                <span>{point?.["address-description"]}</span>
              </div>
            </div>
          )}
          {point?.pcatId === 10 && point?.["address-description"] && (
            <div className="jrn-details-bottom-description">
              <img src={icons.circle} alt="" />
              <div className="jrn-text-div">
                <span>Description:</span>{" "}
                <span>{point?.["address-description"]}</span>
              </div>
            </div>
          )}
        </div>
      );
    });
}
//  print() {
// let vehicleTypes = [
//   selectedQuotTransfer && carObject[selectedQuotTransfer?.carId]?.name,
// ];
// let transferTypes = [
//   selectedQuotTransfer &&
//     carObject[selectedQuotTransfer?.carId]?.transferType,
// ];
// let reservId = [[reserv]];
// let reqOptions = {
//   method: "POST",
//   body: JSON.stringify({
//     reservId,
//     reservations: [reservations[0]],
//     vehicleTypes,
//     transferTypes,
//     meetPoint,
//     surcharge,
//   }),
//   headers: {
//     Accept: "application/json, text/plain, */*",
//     "Content-Type": "application/json",
//   },
// };
// fetch(`${env.websiteDomain}/api/reservation-document/${reserv}`, reqOptions)
//   .then((res) => res.json())
//   .then((res) => {
//     if (res.status === "OK") {
//       setTimeout(() => {
//         (async () => {
//           var win = window.open("", `Reservation ID ${reserv}`);
//           win.document.body.innerHTML = res.htmlTemplate;
//           win.print();
//         })();
//       }, 1000);
//     }
//   })
//   .catch((e) => console.log(e.message));
// }
if (e.target.name !== "passengersNumber") {
  this.setState({
    editableDataReservation: {
      ...this.state.editableDataReservation.passengerDetails,
      [e.target.name]: e.target.value,
    },
  });
} else {
  this.setState({
    editableDataReservation: {
      ...this.state.editableDataReservation.transferDetails,
      [e.target.name]: e.target.value,
    },
  });
}
<div className="editable-jrn-points-container-box-card">
  <div className="editable-jrn-points-container-box-card-header">
    <span>1</span>
    <img src="https://api.london-tech.com/media/mglafg5zqlrsocfwodwj.svg" />
    <p>London Heathrow Airport, Terminal 4</p>

    <div className="editable-jrn-points-container-box-card-trash">x</div>
  </div>
</div>;
{
  objectDetailStatuses[1]?.flightDetails?.waitingPickupTime.pickup === 1 && (
    <Select
      icon="plane-arrival"
      title="When should the driver pick you up?"
      data={waitingMinutes}
      name="waitingPickupTime"
      onChange={(e) => onchangeHandler(e, 0, 0)}
      fromTrDetails={true}
      value={
        flightDetails.waitingPickupTime > 0
          ? flightDetails.waitingPickupTime
          : `${selectedPickUpPointsOneWay[whichSelectedItem]?.flightDetails?.waitingPickupTime} minutes`
      }
      infoForFlight={true}
      fromBooking={true}
    />
  );
}
