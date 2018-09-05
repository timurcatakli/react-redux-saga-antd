import styled from 'styled-components';

const BoxNumberWidgetStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: #ffffff;
  overflow: hidden;
  border: 1px solid #ebebeb;

  .isoSaleLabel {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    color: #323332;
    margin: 0 0 20px;
  }

  .isoSalePrice {
    font-size: 28px;
    font-weight: 300;
    line-height: 1.2;
    margin: 0 0 20px;
  }

  .isoSaleDetails {
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
    color: #979797;
    margin: 0;
  }
`;

export { BoxNumberWidgetStyle };
