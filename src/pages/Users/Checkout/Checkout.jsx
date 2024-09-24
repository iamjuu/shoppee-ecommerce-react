import {
  Button,
  CVVInfo,
  CVVInput,
  CardLogo,
  CheckoutContainer,
  Expires,
  FooterText,
  FormBox,
  GlobalStyle,
  HomeDesc,
  HomeHeading,
  HomePrice,
  Input,
  Label,
  LeftSide,
  PaymentHeading,
  Price,
  Receipt,
  ReceiptHeading,
  RightSide,
  Select,
  Table,
  TextBox,
  TotalRow,
} from "./CheckoutStyle";
const Checkout = () => {
  return (
    <>
      <GlobalStyle />
      <CheckoutContainer>
       
        <LeftSide>
          <TextBox>
            <HomeHeading>Modern Home</HomeHeading>
            <HomePrice>
              <em>249.50 USD</em> / 1 night
            </HomePrice>
            <hr />
            <HomeDesc>
              <em>Entire home</em> for <em>2 guest</em>
            </HomeDesc>
            <HomeDesc>
              <em>Tue, July 23, 2022</em> to <em>Thu, July 25, 2022</em>
            </HomeDesc>
          </TextBox>
        </LeftSide>

        <RightSide>
          <Receipt>
            <ReceiptHeading>Receipt Summary</ReceiptHeading>
            <Table>
              <tbody>
                <tr>
                  <td>249.50 x 2 nights</td>
                  <Price>499.00 USD</Price>
                </tr>
                <tr>
                  <td>Discount</td>
                  <Price>0.00 USD</Price>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <Price>499.00 USD</Price>
                </tr>
                <tr>
                  <td>Tax</td>
                  <Price>47.41 USD</Price>
                </tr>
                <TotalRow>
                  <td>Total</td>
                  <Price>546.41 USD</Price>
                </TotalRow>
              </tbody>
            </Table>
          </Receipt>

          <PaymentHeading>Payment Information</PaymentHeading>
          <FormBox>
            <div>
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                id="full-name"
                name="full-name"
                placeholder="Satoshi Nakamoto"
                required
              />
            </div>
            <div>
              <Label htmlFor="credit-card-num">
                Card Number
                <span className="card-logos">
                  <CardLogo className="fa-brands fa-cc-visa"></CardLogo>
                  <CardLogo className="fa-brands fa-cc-amex"></CardLogo>
                  <CardLogo className="fa-brands fa-cc-mastercard"></CardLogo>
                  <CardLogo className="fa-brands fa-cc-discover"></CardLogo>
                </span>
              </Label>
              <Input
                id="credit-card-num"
                name="credit-card-num"
                placeholder="1111-2222-3333-4444"
                required
              />
            </div>
            <div>
              <Expires>Expires on:</Expires>
              <div>
                <Label htmlFor="expiration-month">Month</Label>
                <Select id="expiration-month" name="expiration-month" required>
                  <option value="">Month:</option>
                  <option value="January">January</option>
                  {/* Add other months */}
                </Select>
                <Label htmlFor="experation-year">Year</Label>
                <Select id="experation-year" name="experation-year" required>
                  <option value="">Year</option>
                  <option value="2023">2023</option>
                  {/* Add other years */}
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <CVVInput
                id="cvv"
                name="cvv"
                placeholder="415"
                type="text"
                required
              />
              <CVVInfo href="#">What is CVV?</CVVInfo>
            </div>
            <Button>
              <i className="fa-solid fa-lock"></i> Book Securely
            </Button>
          </FormBox>

          <FooterText>
            <i className="fa-solid fa-lock"></i> Your credit card information is
            encrypted
          </FooterText>
        </RightSide>
      </CheckoutContainer>
    </>
  );
};

export default Checkout;