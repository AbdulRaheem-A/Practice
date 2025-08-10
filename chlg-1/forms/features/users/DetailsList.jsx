import styled from "styled-components"
import { StyledImg, Title } from "./User"
import { box_shadow } from "../../GlobalStyles"

function DetailsList(){
    
    return <>
      <StyledContainer>
        <Title style={{textAlign:"center"}}>
            Users list
        </Title>
        <StyledEachElement>
            <DepartmentContainer>
                <DepartmentFields>
                    <DepWorkTypePara>union leader</DepWorkTypePara>
                    <DepSalaryPara>19000</DepSalaryPara>
                </DepartmentFields>
                <DepartmentImg>
                    <StyledImg src="imgs/profile.png"/>
                </DepartmentImg>
            </DepartmentContainer>
            <UserContainer>
                <UserFields>
                    <div style={{display:"flex"}}>
                        <UserNamePara>Harish</UserNamePara>
                        <UserAgePara>24</UserAgePara>
                    </div>
                    <UserSexPara>Male</UserSexPara>
                    <UserWorkDiv>
                        <UserWorkTypePara>part time</UserWorkTypePara>
                        <UserWorkTimingPara>9.00pm</UserWorkTimingPara>
                    </UserWorkDiv>
                </UserFields>
                <UserImg>
                    <StyledImg src="imgs/profile.png"/>
                </UserImg>
            </UserContainer>
        </StyledEachElement>
      </StyledContainer>
    </>
}
export default DetailsList

const StyledContainer = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    row-gap: 2rem;
    padding-top:1rem;
    text-transform: capitalize;
`

const StyledEachElement = styled.li`
    display: flex;
    flex-direction: row;
    padding:15px;
    justify-content: space-around;
    width: 100%;
    ${box_shadow}
    border-radius: 5px;
`

const DepartmentContainer =  styled.div`
    display: flex;

`

const DepartmentFields =  styled.div`
    margin-right:1.5rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`

const DepartmentImg =  styled.div`
    width :6rem;
    height: 7rem;
`

const UserContainer =  styled.div`
    display: flex;
`

const UserFields =  styled.div`
    margin-right:1.5rem;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    
`

const UserImg =  styled.div`
    width:8rem;
    height: 9rem;
`

const DepWorkTypePara = styled.p`
    margin-top: 5px;
`

const DepSalaryPara = styled.p``

const UserNamePara = styled.p`
    margin-right:10px;
`

const UserAgePara = styled.p``

const UserSexPara = styled.p``

const UserWorkDiv = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
`

const UserWorkTypePara = styled.p``

const UserWorkTimingPara = styled.p`
    font-size: 12px;
`