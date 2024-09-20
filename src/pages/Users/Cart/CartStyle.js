import styled from "styled-components";
export const ShoppingCartContainer = styled.div`
  margin-top: 5px;
  padding: 20px;

  @media (max-width: 768px) {
    margin-top: 0;
    padding: 10px;
  }
`;

export const ColumnLabels = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  color: #aaa;
  &:nth-child(1) {
    width: 20%;
  }
  &:nth-child(2) {
    width: 37%;
  }
  &:nth-child(3) {
    width: 12%;
  }
  &:nth-child(4) {
    width: 10%;
  }
  &:nth-child(5) {
    width: 9%;
  }
  &:nth-child(6) {
    width: 12%;
    text-align: right;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const Product = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;

  .product-image {
    width: 20%;
    img {
      width: 100px;
    }
  }

  .product-details {
    width: 37%;
    .product-title {
      margin-right: 20px;
      font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium";
    }
    .product-description {
      margin: 5px 20px 5px 0;
      line-height: 1.4em;
    }
  }

  .product-price {
    width: 12%;
  }

  .product-quantity {
    width: 10%;
    input {
      width: 40px;
    }
  }

  .product-removal {
    width: 9%;
    button {
      background-color: #c66;
      color: white;
      font-size: 12px;
      border-radius: 3px;
      padding: 4px 8px;
      border: none;
    }
    button:hover {
      background-color: #a44;
    }
  }

  .product-line-price {
    width: 12%;
    text-align: right;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .product-image,
    .product-details,
    .product-price,
    .product-quantity,
    .product-removal,
    .product-line-price {
      width: 100%;
      text-align: left;
      margin-bottom: 10px;
    }

    .product-image img {
      width: 80px;
    }
  }
`;

export const Totals = styled.div`
  margin-top: 20px;
  .totals-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .totals-item-total {
    font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium";
  }

  @media (max-width: 768px) {
    .totals-item {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const CheckoutButton = styled.button`
  background-color: #6b6;
  color: white;
  font-size: 25px;
  padding: 6px 25px;
  border-radius: 3px;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background-color: #494;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 10px 15px;
  }
`;
