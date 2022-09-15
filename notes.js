//!reservation document
/*
  reservations: [
        {
          reservationDetails: {
            channelId: 5,
            accountId: 225,
          },
          selectedPickupPoints: [],
          selectedDropoffPoints: [],
          quotation: {},
          transferDetails: {
            transferDateTimeString:"",
            pickupCategoryId: "",
            passengersNumber: 1,
            passengerSuitcase: 1,
            specialRequests: "",
          },
          passengerDetails: {
            token: "",
            lastname: "",
            language: "en",
            firstname: "",
            email: "",
            phone: "",
          },
          paymentDetails: {
            token: "",
            paymentType: "",
            account: 225,
          },
        },
        {
          reservationDetails: {
            channelId: 5,
            accountId: 225,
          },
          selectedPickupPoints: [],
          selectedDropoffPoints: [],
          quotation: {},
          transferDetails: {
            transferDateTimeString: "",
            pickupCategoryId: "",
            passengersNumber: 1,
            passengerSuitcase: 1,
            specialRequests: "",
          },
          passengerDetails: {
            token: "",
            lastname: "",
            language: "en",
            firstname: "",
            email: "",
            phone: "",
          },
          paymentDetails: {
            token: "",
            paymentType: "",
            account: 225,
          },
        },
      ],
*/

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

<div className="jrn-details">
  <div className="jrn-details-header">
    <img src={icons.mapLocation} alt="" />
    <p>Pick-up Location :</p>
  </div>
  <div className="jrn-details-bottom-container">
    <div className="jrn-details-bottom-adress">
      <img src={icons.check} alt="" />
      <span className="jrn-details-bottom-name">London Heathrow airport</span>
    </div>
    <div className="jrn-details-bottom-description">
      <img src={icons.circle} alt="" />
      <div className="jrn-text-div">
        <span>Fligth Number:</span>&nbsp;
        <span>j2 8002132131</span>
      </div>
    </div>
  </div>
</div>;
