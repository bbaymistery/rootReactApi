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


// date.split(" ")[0].replace(/\//g, "-")

//       setSelectedPoints: (point, index, type) => {
//         let { reservation } = this.state;
//         let selectedPickupPoints = reservation.selectedPickupPoints;
//         let selectedDropoffPoints = reservation.selectedDropoffPoints;

//         if (index === 0) selectedPickupPoints = [...selectedPickupPoints, point];
//         if (index === 1) selectedDropoffPoints = [...selectedDropoffPoints, point];

//         reservation[
//           type === "pickup" ? "selectedPickupPoints" : "selectedDropoffPoints"
//         ] = type === "pickup" ? selectedPickupPoints : selectedDropoffPoints;


//         //when ever we update points It will update quotations
//         let { transferDetails: { transferDateTimeString }, } = reservation;
//         let params = { selectedPickupPoints, selectedDropoffPoints, transferDateTimeString }
//         this.getQuotations(params)
//         this.setState({ reservation });
//       },





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


useEffect(() => {
  const url = `https://api.london-tech.com/api/v1/payment/status`;
  let interVal;
  if (statusTokenInCaseDirectlyPayment) {
    interVal = setInterval(async () => {
      let config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: statusTokenInCaseDirectlyPayment }),
      };
      try {
        let requ = await fetch(url, config);
        let resp = await requ.json();

        if (resp?.status === 200) {
          if (dataTokenForWebSocket?.href?.includes("stripe")) {
            dispacth(setPayment(7, resp.data.token, ""));
            setiframeStripeInCaseItIsDirectlyPayment("");
            setStatusTokenInCaseItDirectlyPayment("");
            setAlert({
              alert: true,
              message: "Reservation Updated",
              close: false,
            });
          }
          clearInterval(interVal);
        }
      } catch (error) {
        console.log(error);
      }
    }, 2000);
  }

  return () => clearInterval(interVal);
}, [statusTokenInCaseDirectlyPayment]);



onSave() {
  let isUpdatedInCaseItIsCash = false;
  let {
    quotation: quot,
    specialRequests: requuest,
    transferDateTimeString: date,
    selectedPickupPoints: pickUps,
    selectedDropoffPoints: dropOff,
  } = this.props

  let {
    quotation,
    paymentType,
    specialRequests,
    transferDateTimeString,
    selectedDropoffPoints,
    selectedPickupPoints,
  } = this.state

  let propsValues = JSON.stringify({
    quotatin: quot,
    specialRequests: requuest,
    transferDateTimeString: date,
    selectedDropOffPoints: dropOff,
    selectedPickUpPoints: pickUps
  })
  let stateValues = JSON.stringify({
    quotation,
    specialRequests,
    transferDateTimeString,
    selectedDropoffPoints,
    selectedPickupPoints,
  })
  //if paymnet type 1 It means cash
  //so it should be updated firstly on screeen then he /she should go for pay by card in order to make it permanent
  if (propsValues !== stateValues && paymentType === 1) isUpdatedInCaseItIsCash = true;
  if (isUpdatedInCaseItIsCash) {
    window.manageBookingDispatch.saveJourneyOnScreenInCaseItIsCash(JSON.parse(stateValues));
  }
  this.props.onSave();
}

{/* {quotations.length > 0 ? (
            <div className="editable-buttons">
              <button onClick={() => this.onCancel()} className="tmb-cancel-btn tmb-btn-primary-outlined fw_500 tmb-btn" >
                Cancel
              </button>
              <button onClick={loading ? () => { } : () => this.onSave()} className=" tmb-btn-primary-outlined fw_500 tmb-btn" >
                Save
              </button>

              //if it is cash payment and updated effected to the price then we should  keep charge on that
               onClick={loading ? () => { } : () => this.onSave()}
              <button  className=" tmb-btn-primary-outlined fw_500 tmb-btn" >
                wetherEffectedPriceButSTillWantsPayCash
              </button>
            </div>
          ) : ""} */}


{/* if it is  cahs payment then we  dont need to charge cubcharge */ }
{/* {paymentType !== 1 ? "" : Number(currentPrice) - Number(previousPrice) > 0 &&
          <div class="informative-subcharges-div">
            <img src={__env.infoAlert} alt="" />
            <div class="informative-subcharge-price-info ">
              <p id="informationMessage">Due to the amendments you have made;</p>
              <p id="informationMessage">New Journey price : £ {currentPrice}</p>
              <p id="informationMessage">Previous journey price : £ {`${previousPrice}.00`}</p>
              <p id="informationMessage" className="difference-price">Price difference : £ {`${+currentPrice - +previousPrice}.00`}</p>
            </div>
          </div>} */}
{/* if it is  cahs payment then we dont need to make it visible cause he is gonna pay all by card */ }
{/* {paymentType !== 1 ? "" : Number(currentPrice) - Number(previousPrice) > 0 &&
          <div className="jrn-py-btn-div">
            <button className="tmb-btn tmb-button-primary-outlined-hover ">
              Pay By Card
            </button>
          </div>} */}


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

localStorage.getItem('reservation') ? JSON.parse(localStorage["reservation"]) : {},