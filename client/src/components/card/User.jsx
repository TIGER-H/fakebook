import styled from "styled-components";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1``;
const AddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;
const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const ShowTop = styled.div`
  display: flex;
  align-items: center;
`;
const ShowImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const ShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const Username = styled.span`
  font-weight: 600;
`;
const Usertitle = styled.span`
  font-weight: 300;
`;
const ShowBottom = styled.div`
  margin-top: 20px;
`;
const UserShowTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;
const UserShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;

  .userShowIcon {
    font-size: 16px;
  }
`;
const UserShowInfoTitle = styled.div`
  margin-left: 10px;
`;

const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
`;
const UserUpdateTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
const UserUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const UserUpdateLeft = styled.div``;
const UserUpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  .userUpdateInput {
    border: none;
    width: 250px;
    height: 30px;
    border-bottom: 1px solid gray;

    &:focus {
      outline: none;
    }
  }
`;
const UserUpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .userUpdateButton {
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-weight: 600;
  }
`;

const UserUpdateUpload = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
  }

  .userUpdateIcon {
    cursor: pointer;
  }
`;

export const User = (params) => {
  return (
    <Container>
      <TitleContainer>
        <Title>Edit User</Title>
        <Link to="/dashboard/newuser">
          <AddButton>Create</AddButton>
        </Link>
      </TitleContainer>
      <UserContainer>
        <UserShow>
          <ShowTop>
            <ShowImg
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <ShowTopTitle>
              <Username>Anna Becker</Username>
              <Usertitle>Software Engineer</Usertitle>
            </ShowTopTitle>
          </ShowTop>
          <ShowBottom>
            <UserShowTitle>Account Details</UserShowTitle>
            <UserShowInfo>
              <PermIdentity className="userShowIcon" />
              <UserShowInfoTitle>annabeck99</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <CalendarToday className="userShowIcon" />
              <UserShowInfoTitle>10.12.1999</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowTitle>Contact Details</UserShowTitle>
            <UserShowInfo>
              <PhoneAndroid className="userShowIcon" />
              <UserShowInfoTitle>+1 123 456 67</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <MailOutline className="userShowIcon" />
              <UserShowInfoTitle>annabeck99@gmail.com</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <LocationSearching className="userShowIcon" />
              <UserShowInfoTitle>New York | USA</UserShowInfoTitle>
            </UserShowInfo>
          </ShowBottom>
        </UserShow>
        <UserUpdate>
          <UserUpdateTitle>Edit</UserUpdateTitle>
          <UserUpdateForm>
            <UserUpdateLeft>
              <UserUpdateItem>
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </UserUpdateItem>
              <UserUpdateItem>
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </UserUpdateItem>
              <UserUpdateItem>
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </UserUpdateItem>
              <UserUpdateItem>
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="userUpdateInput"
                />
              </UserUpdateItem>
              <UserUpdateItem>
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </UserUpdateItem>
            </UserUpdateLeft>
            <UserUpdateRight>
              <UserUpdateUpload>
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </UserUpdateUpload>
              <button className="userUpdateButton">Update</button>
            </UserUpdateRight>
          </UserUpdateForm>
        </UserUpdate>
      </UserContainer>
    </Container>
  );
};
