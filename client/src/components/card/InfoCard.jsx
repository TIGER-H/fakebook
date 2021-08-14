import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

  span {
    font-size: 15px;
    color: gray;
  }
`;

const Title = styled.div`
  font-size: 20px;
`;

const MoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;

const Money = styled.div`
  font-size: 30px;
  font-weight: 600;
`;
const MoneyRate = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const InfoCard = ({ title, totalNumber, changingRate }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <MoneyContainer>
        <Money>{`\$${totalNumber}`}</Money>
        <MoneyRate>
          {changingRate}
          {Number(changingRate) > 0 ? (
            <ArrowUpward style={{ color: "red" }} />
          ) : (
            <ArrowDownward style={{ color: "green" }} />
          )}
        </MoneyRate>
      </MoneyContainer>
      <span>Compared to last month</span>
    </Container>
  );
};
