import styled from "styled-components"
import GlobalStyles from "../GlobalStyles"
import UserForm from "../features/users/User"
import DepartmentForm from "../features/departments/Department"
import DetailsList from "../features/users/DetailsList"

function App(){

    return <>
      <GlobalStyles />
      <Main>
        <UserBlock>
          <UserForm />
        </UserBlock>
        <DepartmentBlock >
          <DepartmentForm />
        </DepartmentBlock>
        <DisplayBlock>
          <DetailsList />
        </DisplayBlock>
      </Main>
    </>
}
export default App

const Main = styled.div`
  height: 100vh;
  font-family:"Poppins",sans-serif;
  font-weight:400;
  display: grid;
  grid-template-areas :
  "user display"
  "department display"
  ;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: auto 50%;
  row-gap: 5px;
  column-gap: 5px;
  background-color: #efeeee;
`

const DepartmentBlock = styled.div`
  grid-area: department;
  /* background-color: #ef0000; */
`

const UserBlock = styled.div`
  grid-area: user;
`

const DisplayBlock = styled.div`
  grid-area: display;
  /* background-color: red; */
  margin-right:10px;
`