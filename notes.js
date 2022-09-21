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
{/* {0 === 0 && (
              <li key={0} className={0 === 0 ? "tmb-search-groupname" : ""}>
                {9 === 10 ? (
                  <img
                    src="https://api.london-tech.com/media/g-google.svg"
                    alt=""
                  />
                ) : (
                  // imgObj && (
                  //   <img
                  //     src={`https://api.london-tech.com${imgObj[item.pcatId]}`}
                  //     alt=""
                  //   />
                  // )
                  true && (
                    <img
                      src={
                        "https://api.london-tech.com/media/mglafg5zqlrsocfwodwj.svg"
                      }
                      alt=""
                    />
                  )
                )}

                <a>Airports</a>
                {10 === 10 && (
                  <img
                    src={
                      "https://api.london-tech.com/media/mglafg5zqlrsocfwodwj.svg"
                    }
                    alt=""
                    className={"tmb-search-groupname-google-image"}
                  />
                )}
              </li>
            )} */}

{/* <li>
              {imgObj && (
                <img
                  src={`https://api.london-tech.com${imgObj[item.pcatId]}`}
                  alt=""
                />
              )}
              <p href="/location/londiani-188981">
                {item.address}
                {`   ${item?.postcode ? `-  ${item?.postcode}` : ""}`}
              </p>
            </li> */}

<li>
  {true && (
    <img
      // src={`https://api.london-tech.com${imgObj[item.pcatId]}`}
      src={
        "https://api.london-tech.com/media/mglafg5zqlrsocfwodwj.svg"
      }
      alt=""
    />
  )}
  <p href="#">
    {"item.address heath gregs"}
    {/* {`   ${item?.postcode ? `-  ${item?.postcode}` : ""}`} */}
    {"T2gt-56"}
  </p>
</li>


// *************************************



  <div key={i}>
            {i === 0 && (
              <li key={0} className={i === 0 ? "tmb-search-groupname" : ""}>
                {item.pcatId === 10 ? (
                  <img
                    src="https://api.london-tech.com/media/g-google.svg"
                    alt=""
                  />
                ) : (
                  imgObj && (
                    <img
                      src={`https://api.london-tech.com${imgObj[item.pcatId]}`}
                      alt=""
                    />
                  )

                )}
                <a>  {namePlaceOfObj && namePlaceOfObj[item.pcatId]}</a>
                {10 === 10 && (
                  <img
                    src={
                      "https://api.london-tech.com/media/mglafg5zqlrsocfwodwj.svg"
                    }
                    alt=""
                    className={"tmb-search-groupname-google-image"}
                  />
                )}
              </li>
            )}
            <li>
              {imgObj && (
                <img
                  src={`https://api.london-tech.com${imgObj[item.pcatId]}`}
                  alt=""
                />
              )}
              <p href="/location/londiani-188981">
                {item.address}
                {`   ${item?.postcode ? `-  ${item?.postcode}` : ""}`}
              </p>
            </li>
          </div>