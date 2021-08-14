import { Visibility } from "@material-ui/icons";
import styled from "styled-components";

const WidgetSmContainer = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
`;

const WidgetSmTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
const WidgetSmList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const WidgetSmallListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;
const WidgetSmImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const WidgetSmUser = styled.div`
  display: flex;
  flex-direction: column;
`;
const WidgetSmUsername = styled.span`
  font-weight: 600;
`;
const WidgetSmUserTitle = styled.span`
  font-weight: 300;
`;
const WidgetSmButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;

export const WidgetSm = () => {
  return (
    <WidgetSmContainer>
      <WidgetSmTitle>New Join Members</WidgetSmTitle>
      <WidgetSmList>
        <WidgetSmallListItem>
          <WidgetSmImg
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          ></WidgetSmImg>
          <WidgetSmUser>
            <WidgetSmUsername>Anna Keller</WidgetSmUsername>
            <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <Visibility style={{ fontSize: 16, marginRight: 5 }} />
            Display
          </WidgetSmButton>
        </WidgetSmallListItem>
        <WidgetSmallListItem>
          <WidgetSmImg
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          ></WidgetSmImg>
          <WidgetSmUser>
            <WidgetSmUsername>Anna Keller</WidgetSmUsername>
            <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <Visibility style={{ fontSize: 16, marginRight: 5 }} />
            Display
          </WidgetSmButton>
        </WidgetSmallListItem>
        <WidgetSmallListItem>
          <WidgetSmImg
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          ></WidgetSmImg>
          <WidgetSmUser>
            <WidgetSmUsername>Anna Keller</WidgetSmUsername>
            <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <Visibility style={{ fontSize: 16, marginRight: 5 }} />
            Display
          </WidgetSmButton>
        </WidgetSmallListItem>
        <WidgetSmallListItem>
          <WidgetSmImg
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          ></WidgetSmImg>
          <WidgetSmUser>
            <WidgetSmUsername>Anna Keller</WidgetSmUsername>
            <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <Visibility style={{ fontSize: 16, marginRight: 5 }} />
            Display
          </WidgetSmButton>
        </WidgetSmallListItem>
        <WidgetSmallListItem>
          <WidgetSmImg
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          ></WidgetSmImg>
          <WidgetSmUser>
            <WidgetSmUsername>Anna Keller</WidgetSmUsername>
            <WidgetSmUserTitle>Software Engineer</WidgetSmUserTitle>
          </WidgetSmUser>
          <WidgetSmButton>
            <Visibility style={{ fontSize: 16, marginRight: 5 }} />
            Display
          </WidgetSmButton>
        </WidgetSmallListItem>
      </WidgetSmList>
    </WidgetSmContainer>
  );
};

const WidgetLgContainer = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;

const WidgetLgTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;

const WidgetLgTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;

const WidgetLgTr = styled.tr``;
const WidgetLgTh = styled.th`
  text-align: left;
`;

const WidgetLgUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const WidgetLgImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const WidgetLgName = styled.span`
  font-weight: 600;
`;
const WidgetLgDate = styled.td`
  font-weight: 300;
`;
const WidgetLgAmount = styled.td`
  font-weight: 300;
`;

const WidgetLgStatus = styled.td``;

const Button = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
`;

const ButtonApproved = styled(Button)`
  ::before {
    content: "Approved";
  }
  background-color: #e5faf2;
  color: #3bb077;
`;
const ButtonPending = styled(Button)`
  ::before {
    content: "Pending";
  }
  background-color: #ebf1fe;
  color: #2a7ade;
`;
const ButtonDeclined = styled(Button)`
  ::before {
    content: "Declined";
  }
  background-color: #fff0f1;
  color: #d95087;
`;

export const WidgetLg = () => {
  return (
    <WidgetLgContainer>
      <WidgetLgTitle>Latest transactions</WidgetLgTitle>
      <WidgetLgTable>
        <WidgetLgTr>
          <WidgetLgTh>Customer</WidgetLgTh>
          <WidgetLgTh>Date</WidgetLgTh>
          <WidgetLgTh>Amount</WidgetLgTh>
          <WidgetLgTh>Status</WidgetLgTh>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgImg
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />

            <WidgetLgName>Susan carol</WidgetLgName>
          </WidgetLgUser>

          <WidgetLgDate>2 Jul 2021</WidgetLgDate>
          <WidgetLgAmount>$122.00</WidgetLgAmount>
          <WidgetLgStatus>
            <ButtonApproved />
          </WidgetLgStatus>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgImg
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            ></WidgetLgImg>
            <WidgetLgName>Susan carol</WidgetLgName>
          </WidgetLgUser>
          <WidgetLgDate>2 Jul 2021</WidgetLgDate>
          <WidgetLgAmount>$122.00</WidgetLgAmount>
          <WidgetLgStatus>
            <ButtonDeclined />
          </WidgetLgStatus>
        </WidgetLgTr>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgImg
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            ></WidgetLgImg>
            <WidgetLgName>Susan carol</WidgetLgName>
          </WidgetLgUser>
          <WidgetLgDate>2 Jul 2021</WidgetLgDate>
          <WidgetLgAmount>$122.00</WidgetLgAmount>
          <WidgetLgStatus>
            <ButtonPending />
          </WidgetLgStatus>
        </WidgetLgTr>
      </WidgetLgTable>
    </WidgetLgContainer>
  );
};
