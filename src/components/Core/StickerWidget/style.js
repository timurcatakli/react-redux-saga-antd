import styled from 'styled-components';
import { borderRadius } from '../settings/style-util';

const StickerWidgetStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  ${borderRadius('5px')};

  .carlsbadIconWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    flex-shrink: 0;
    background-color: rgba(0, 0, 0, 0.1);

    i {
      font-size: 30px;
    }
  }

  .carlsbadContentWrapper {
    width: 100%;
    padding: 20px 15px 20px 20px;
    display: flex;
    flex-direction: column;

    .carlsbadStatNumber {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.1;
      margin: 0 0 5px;
    }

    .carlsbadLabel {
      font-size: 16px;
      font-weight: 400;
      margin: 0;
      line-height: 1.2;
    }
  }
`;

export { StickerWidgetStyle };
