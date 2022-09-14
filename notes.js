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
