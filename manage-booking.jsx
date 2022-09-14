const __env = {
  domain: "https://api.london-tech.com",
  websiteLogUrl: "https://heathrow-gatwick-transfers.com/images/logoJpg.png",
};
const icons = {
  at: `data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNMjU2IDhDMTE4Ljk0MSA4IDggMTE4LjkxOSA4IDI1NmMwIDEzNy4wNTkgMTEwLjkxOSAyNDggMjQ4IDI0OCA0OC4xNTQgMCA5NS4zNDItMTQuMTQgMTM1LjQwOC00MC4yMjMgMTIuMDA1LTcuODE1IDE0LjYyNS0yNC4yODggNS41NTItMzUuMzcybC0xMC4xNzctMTIuNDMzYy03LjY3MS05LjM3MS0yMS4xNzktMTEuNjY3LTMxLjM3My01LjEyOUMzMjUuOTIgNDI5Ljc1NyAyOTEuMzE0IDQ0MCAyNTYgNDQwYy0xMDEuNDU4IDAtMTg0LTgyLjU0Mi0xODQtMTg0UzE1NC41NDIgNzIgMjU2IDcyYzEwMC4xMzkgMCAxODQgNTcuNjE5IDE4NCAxNjAgMCAzOC43ODYtMjEuMDkzIDc5Ljc0Mi01OC4xNyA4My42OTMtMTcuMzQ5LS40NTQtMTYuOTEtMTIuODU3LTEzLjQ3Ni0zMC4wMjRsMjMuNDMzLTEyMS4xMUMzOTQuNjUzIDE0OS43NSAzODMuMzA4IDEzNiAzNjguMjI1IDEzNmgtNDQuOTgxYTEzLjUxOCAxMy41MTggMCAwIDAtMTMuNDMyIDExLjk5M2wtLjAxLjA5MmMtMTQuNjk3LTE3LjkwMS00MC40NDgtMjEuNzc1LTU5Ljk3MS0yMS43NzUtNzQuNTggMC0xMzcuODMxIDYyLjIzNC0xMzcuODMxIDE1MS40NiAwIDY1LjMwMyAzNi43ODUgMTA1Ljg3IDk2IDEwNS44NyAyNi45ODQgMCA1Ny4zNjktMTUuNjM3IDc0Ljk5MS0zOC4zMzMgOS41MjIgMzQuMTA0IDQwLjYxMyAzNC4xMDMgNzAuNzEgMzQuMTAzQzQ2Mi42MDkgMzc5LjQxIDUwNCAzMDcuNzk4IDUwNCAyMzIgNTA0IDk1LjY1MyAzOTQuMDIzIDggMjU2IDh6bS0yMS42OCAzMDQuNDNjLTIyLjI0OSAwLTM2LjA3LTE1LjYyMy0zNi4wNy00MC43NzEgMC00NC45OTMgMzAuNzc5LTcyLjcyOSA1OC42My03Mi43MjkgMjIuMjkyIDAgMzUuNjAxIDE1LjI0MSAzNS42MDEgNDAuNzcgMCA0NS4wNjEtMzMuODc1IDcyLjczLTU4LjE2MSA3Mi43M3oiLz48L3N2Zz4=`,
  user: "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNMjI0IDI1NmM3MC43IDAgMTI4LTU3LjMgMTI4LTEyOFMyOTQuNyAwIDIyNCAwIDk2IDU3LjMgOTYgMTI4czU3LjMgMTI4IDEyOCAxMjh6bTg5LjYgMzJoLTE2LjdjLTIyLjIgMTAuMi00Ni45IDE2LTcyLjkgMTZzLTUwLjYtNS44LTcyLjktMTZoLTE2LjdDNjAuMiAyODggMCAzNDguMiAwIDQyMi40VjQ2NGMwIDI2LjUgMjEuNSA0OCA0OCA0OGgzNTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDh2LTQxLjZjMC03NC4yLTYwLjItMTM0LjQtMTM0LjQtMTM0LjR6Ii8+PC9zdmc+",
  check:
    "data:image/svg+xml;base64,PHN2ZyB0cmFuc2Zvcm09InNjYWxlKDEpIiBmaWxsPSIjMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6Ii8+PC9zdmc+",
};
class AlertMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sM: "", //succesMessage
      eM: "", //errorMessage
    };
  }
  componentDidMount() {
    window.alertMessageDispatch = {
      alertMessage: (sM, eM) => this.setState({ ...this.state, sM, eM }),
    };
    setTimeout(() => {
      this.setState({ ...this.state, sM: "", eM: "" });
    }, 4000);
  }

  render() {
    let { sM, eM } = this.state;

    return (
      <div className={"tmb-alert-container"}>
        <div
          className={`
          tmb-alert-div
          ${sM.length > 0 || eM.length > 0 ? "tmb-showAlert" : ""}
          ${eM.length > 0 ? "tmb-alert-div-error" : ""}
           `}
        >
          {/* check icon */}
          <img className="tmb-check-img" src={icons.check} alt="" />
          <span>{eM.length > 0 && eM}</span>
          <span>{sM.length > 0 && sM}</span>
          <div className={"tmb-message-container"}>
            <div className={"tmb-progress-moved tmb-progress"}>
              <div className={"tmb-progress-bar"}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class BookingLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "elgun.ezmemmedov@mail.ru",
      reservationId: "671836",
      error: "",
      loading: false,
    };
  }

  //!fecth reservation details
  checkReservationDetails(e) {
    e.preventDefault();
    if (this.state.loading === false) {
      this.setState({ error: "", loading: true }, () => {
        let eM = "incorrect registered details";
        let { email, reservationId } = this.state;
        let requestBody = {
          method: "POST",
          body: JSON.stringify({ reservationId, email }),
          headers: { "Content-Type": "application/json" },
        };

        fetch(`${__env.domain}/api/v1/reservation/find-details`, requestBody)
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              let { data } = res;
              window.manageBookingDispatch.onSuccessLogin(data);
            } else {
              this.setState({ error: eM, loading: false });
              //triggering alert message when incorrect id or email
              window.alertMessageDispatch.alertMessage("", eM);
            }
          })
          .catch(
            (error) => {
              this.setState({ error: error.message, loading: false });
              window.alertMessageDispatch.alertMessage("", error.message);
            }
            //alert message
          );
        //reset Error message after showAlert is gone
        setTimeout(() => {
          this.setState({ error: "" });
        }, 4000);
      });
    }
  }

  render() {
    let { email, reservationId, error, loading } = this.state;
    console.log(error);

    return (
      <div className="tmb-login-section">
        {error && <AlertMessage />}
        <div className={"tmb-login-content"}>
          <div className={"tmb-login-content-logo-imagee"}>
            <img src={`${__env.websiteLogUrl}`} alt="" />
          </div>

          <form onSubmit={(e) => this.checkReservationDetails(e)} method="POST">
            <div className="tmb-form-control">
              <div className="tmb-form-control-header">
                <p className={"tmb-form-control-header-label"}>Email</p>
              </div>

              <div className="tmb-input-div">
                <img className="tmb-form-icon" src={icons.at} alt="" />
                <input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  className={`tmb-input `}
                />
              </div>
            </div>
            <div className="tmb-form-control">
              <div className="tmb-form-control-header">
                <p className={"tmb-form-control-header-label"}>ReservationId</p>
              </div>
              <div className="tmb-input-div">
                <img
                  className="tmb-form-icon tmb-user-icon"
                  src={icons.user}
                  alt=""
                />
                <input
                  type="text"
                  name="reservationId"
                  value={reservationId}
                  placeholder="ReservationId"
                  onChange={(e) =>
                    this.setState({ reservationId: e.target.value })
                  }
                  className={`tmb-input `}
                />
              </div>
            </div>
            <div className={"tmb-input-button"}>
              <button
                className="tmb-btn  tmb-btn-primary-outlined"
                onClick={(e) => this.checkReservationDetails(e)}
              >
                {loading ? "LOADING ..." : "Find"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

class ReservationDetails extends React.Component {
  render() {
    return <div>reservation details</div>;
  }
}

class ManageBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: [],
      isAuth: false,
      showState: false,
    };
  }
  componentDidMount() {
    window.manageBookingDispatch = {
      onSuccessLogin: (reservations) =>
        this.setState({ ...this.state, reservations, isAuth: true }),
    };
  }
  render() {
    let { reservation, isAuth, showState } = this.state;
    return (
      <div className="tool-manage-booking" mode="dark">
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "silver",
            zIndex: 1000,
          }}
        >
          <button onClick={(e) => this.setState({ showState: !showState })}>
            state
          </button>
          {showState ? (
            <pre
              style={{
                width: 600,
                height: 600,
                overflow: "auto",
              }}
            >
              {JSON.stringify(this.state, null, 2)}
            </pre>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </div>
        {isAuth ? (
          <ReservationDetails reservation={reservation} />
        ) : (
          <BookingLogin />
        )}
      </div>
    );
  }
}

(() => {
  let insrter = setInterval(() => {
    if (document.getElementById("manageBookingDemo")) {
      //
      ReactDOM.render(
        React.createElement(ManageBooking, {}),
        document.getElementById("manageBookingDemo")
      );
      console.log("render is done");
      clearInterval(insrter);
    } else {
      console.log("not render yet");
    }
  }, 100);
})();
