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
/*

  constructor(props) {
    super(props);
    this.state = {
      whichItemSelected:
        this.props.whichItemSelected,
      id:
        this.props.item.pcatId === 5 && this.props.item.postCodeDetails.id,
      postCodeAddress:
        this.props.item.pcatId === 5 && this.props.item.postCodeDetails.postCodeAddress,
    };
  }