import styled from "styled-components";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const AddProductTitle = styled.h1``;
const AddProductForm = styled.form`
  margin-top: 10px;
`;
const AddProductItem = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
  }
  input {
    padding: 10px;
  }
  select {
    padding: 10px;
  }
`;

const AddProductButton = styled.button`
  margin-top: 10px;
  padding: 7px 10px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
export const NewProduct = () => {
  return (
    <Container>
      <AddProductTitle>New Product</AddProductTitle>
      <AddProductForm>
        <AddProductItem>
          <label>Image</label>
          <input type="file" id="file" />
        </AddProductItem>
        <AddProductItem>
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </AddProductItem>
        <AddProductItem>
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </AddProductItem>
        <AddProductItem>
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </AddProductItem>
        <AddProductButton>Create</AddProductButton>
      </AddProductForm>
    </Container>
  );
};
