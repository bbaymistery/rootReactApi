let totalPriceDescription = `
                                    < !--total price-- >
         <div style="float:left;width: 650px;font-family:Arial, Helvetica,Verdana sans-serif !important ;color:#666;">
           <span style="font-weight: 700;font-size:14px;padding-top:15px;"><br>Total Price : GBP
                   ${reservations[1]?.quotation.price ? `${Number(reservations[0]?.quotation?.price) + Number(reservations[1]?.quotation?.price)}` : `${reservations[0]?.quotation?.price}`}
         </span>
        </div>

 <!--adresss description-- >
    <div style="float:left;width: 650px;font-family:Arial, Helvetica,Verdana sans-serif !important ;color:#666;">
        <span><br>Heathrow Gatwick Transfers
        <br> Aero House,
         <br>611 Sipson Road,
         <br>West Drayton,
          <br>UB7 0JD,
         <br>United Kingdom
          <br>Tel: <span class="js-phone-number">+44 208 683 2330</span>,
           <br>Website:
          <a href="http://www.heathrow-gatwick-transfers.com" target="_blank">www.heathrow-gatwick-transfers.com</a>,
                <br>Email enquiries:
                 <a href="#" target="_blank" rel=" noopener noreferrer"> info@heathrow-gatwick-transfers.com </a>
        </span>
     </div>
`