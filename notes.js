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


//!Bruichl=> city
//* Sussex Üniversitesi, Falmer, Brighton, UK => universities
//? Europcar Bournemouth New Site, =>place of interest

{
  quotations.lenght > 0 ? quotations.length > 0 : ""
}
const payByStripe = (id) => {
  let quotations =
    Number(journeyType) === 0
      ? [selectedQuotTransfer]
      : [selectedQuotTransfer, returnQuot];
  if (!iframeStripeInCaseItIsDirectlyPayment) {
    try {
      let config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quotations,
          type: id,
          language: "en",
          passengerEmail: emailTransfer,
          mode: "sandbox",
        }),
      };
      let url = "https://api.london-tech.com/api/v1/payment/stripe/create";
      fetch(url, config)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setDataTokenForWebSocket(data); //in order to a tag of pop up window
          setStatusTokenInCaseItDirectlyPayment(data.webSocketToken); //it will trigger interval and will make request
          setiframeStripeInCaseItIsDirectlyPayment(data?.href);
          //  dispatch(setPayment(5, resp.data.token, router));
        })
        .catch((error) => {
          console.log(error.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  }
};






try {


  fetch(url, config)
    .then((res) => res.json())
    .then((data) => {
      console.log(
        data,
        "this response coming from =>https://api.london-tech.com/api/v1/payment/stripe/charge"
      );

      setStatusToken(data.webSocketToken); //it will trigger interval and will make request
      // setDataTokenForWebSocket(data.href);
      setIframeStripe(data?.href);
    })
    .catch((error) => {
      console.log(error.message);
    });
} catch (error) {
  console.log(error.message);
}

<ReservationDetails
  eM={eM}
  sM={sM}
  resources={resources}
  reservation={reservation}
  postCodeAddress={postCodeAddress}
/>

{
  paymentType !== 1 && Number(currentPrice) <= Number(previousPrice) ? (
    quotations.length > 0 ?
      <button
        onClick={
          updatedLoading ? () => { } :
            () => this.wetherEffectedPriceButSTillDoesntChangeTheMethod()}
        className=" tmb-btn-primary-outlined fw_500 tmb-btn" >
        {updatedLoading ? "Loading" : "Save"}
      </button> : ""
  ) : (
    quotations.length > 0 ?
      <button
        onClick={
          updatedLoading ? () => { } :
            () => this.wetherEffectedPriceButSTillDoesntChangeTheMethod()}
        className=" tmb-btn-primary-outlined fw_500 tmb-btn" >
        {updatedLoading ? "Loading" : "Save"}
      </button> : ""

  )
}



// email: "elgun.ezmemmedov@mail.ru", //cash
// reservationId: "671836", //cash
// email: "info@aplcars.com",
// reservationId: "678623",
reservationId: "683527",
  email: "elgun.ezmemmedov@gmail.com",
    error: "",
      loading: false,