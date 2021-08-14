import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import styled from "styled-components";
import { Card } from "../../components/card/Card";
import { ChartCard } from "../../components/card/Chart";
import { InfoCard } from "../../components/card/InfoCard";
import { NewProduct } from "../../components/card/NewProduct";
import { NewUser } from "../../components/card/NewUser";
import Product from "../../components/card/Product";
import ProductList from "../../components/card/ProductList";
import { User } from "../../components/card/User";
import UserList from "../../components/card/UserList";
import { WidgetLg, WidgetSm } from "../../components/card/Widget";
import Navbar from "../../components/navbar/Navbar";
import "./dashboard.scss";
import { userData } from "./dummydata";

const HEADERS = ["Dashboard", "Quick Menu", "Notifications", "Staff"];
const ITEMS = [
  ["Home", "Analytics", "Sales"],
  ["Users", "Products", "Transactions", "Reports"],
  ["Mail", "Feedback", "Messages"],
  ["Manage", "Analytics", "Reports"],
];

const Main = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 56px);
`;

const Sidebar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: rgb(247, 247, 250);

  .card {
    margin-bottom: 15px;
  }

  .card.header {
    font-size: 13px;
    color: gray;
    margin-bottom: 5px;
  }

  .card.li {
    padding: 7px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 0;

    &:active,
    &:hover {
      background-color: rgb(240, 240, 255);
    }
  }
`;

const Home = styled.div`
  flex: 4;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Widgets = styled.div`
  display: flex;
  margin: 20px;
`;

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <Main>
        <Sidebar>
          {HEADERS.map((header, index) => (
            <Card header={header} items={ITEMS[index]} />
          ))}
        </Sidebar>
        <Switch>
          <Route path="/dashboard/home" exact>
            <Home>
              <Cards>
                <InfoCard
                  title="Revenue"
                  totalNumber="2,415"
                  changingRate="-11.4"
                />
                <InfoCard
                  title="Cost"
                  totalNumber="2,225"
                  changingRate="+2.4"
                />
                <InfoCard
                  title="Sales"
                  totalNumber="4,415"
                  changingRate="-1.4"
                />
              </Cards>
              <ChartCard
                title="User Analytics"
                data={userData}
                dataKey="Active User"
                grid
              />
              <Widgets>
                <WidgetSm />
                <WidgetLg />
              </Widgets>
            </Home>
          </Route>
          <Route path="/dashboard/users">
            <UserList />
          </Route>
          <Route path="/dashboard/user/:userId">
            <User />
          </Route>
          <Route path="/dashboard/newuser">
            <NewUser />
          </Route>
          <Route path="/dashboard/products">
            <ProductList />
          </Route>
          <Route path="/dashboard/product/:productId">
            <Product />
          </Route>
          <Route path="/dashboard/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </Main>
    </div>
  );
};
