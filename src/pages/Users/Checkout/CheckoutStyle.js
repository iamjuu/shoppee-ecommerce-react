import styled, { createGlobalStyle } from 'styled-components';

// Global styles
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%; /* 10px on a 16px base font */
  }


  em {
    font-style: normal;
    font-weight: 700;
  }

  hr {
    color: #fff;
    margin-bottom: 1.2rem;
  }
`;

// Styled components
export const CheckoutContainer = styled.div`
  max-width: 120rem;
  height: 50rem;
  margin-left: 180px;
  margin-bottom: 150px;
  margin-top: 50px;
  display: grid;
  
 
  grid-template-columns: 1fr 1fr;
  justify-content: center;

  @media (max-width: 1024px) {
    height: auto;
    margin-left: -5px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 100%;
    padding: 1rem;
    /* margin-left: 0px; */
  }
`;

export const LeftSide = styled.div`
display:flex;
align-items: center;
justify-content: center;
  background: url('https://images.pexels.com/photos/2876787/pexels-photo-2876787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-position: center;
  background-size: cover;
  position: relative;

  @media (max-width: 768px) {
    height: 30rem;
  }
`;

export const TextBox = styled.div`
  background: rgba(95, 121, 134, 0.8);
  width: 100%;
  padding: 1rem 2rem;
  position: absolute;
  bottom: 0;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const HomeHeading = styled.h1`
  color: #e8e8e1;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const HomePrice = styled.p`
  color: #aeae97;
  font-size: 2rem;
  margin-bottom: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const HomeDesc = styled.p`
  color: #e8e8e1;
  font-size: 1.2rem;
  line-height: 1.5;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const RightSide = styled.div`
  background-color: #fff;
  padding: 1.8rem 3.2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Receipt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: solid 1px;
  margin-bottom: 1rem;
`;

export const ReceiptHeading = styled.h2`
  font-size: 1.6rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0 1.5rem;
  color: #64645f;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const TotalRow = styled.tr`
  font-size: 1.4rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Price = styled.td`
  text-align: end;
`;

export const PaymentHeading = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const FormBox = styled.form`
  display: grid;
  grid-template-rows: 1fr;
  gap: 1.5rem;
`;

export const CardLogo = styled.i`
  font-size: 2rem;
`;

export const Expires = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const Input = styled.input`
  font-family: inherit;
  font-size: 1.2rem;
  padding: 0.5rem;
  width: 100%;
`;

export const Select = styled.select`
  padding: 0.5rem;
`;

export const CVVInput = styled(Input)`
  width: 25%;
`;

export const CVVInfo = styled.a`
  color: inherit;
  text-decoration: underline;

  &:hover {
    color: #5f7986;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  background-color: #4c616b;
  border: none;
  border-radius: 8px;
  color: #eff2f3;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  padding: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: #5f7986;
    transition: ease-out 0.1s;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const FooterText = styled.p`
  font-size: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const FormFocusStyles = styled.div`
  input:focus,
  select:focus {
    outline: none;
    box-shadow: 0 0 0 0.8rem rgba(139, 139, 107, 0.5);
    border-radius: 8px;
  }
`;