import styled, { css } from "styled-components"

function UserForm(){
    
    return <>
      <StyledForm>
        <Title>
            user
        </Title>
        <UserContainer>
            <UserFieldsContainer>
                <FirstFieldContainer>
                    <StyledLabel htmlFor="name" name="name">
                        name
                    </StyledLabel>
                    <StyledInput type="text" id="name"/>
                </FirstFieldContainer>
                    <AgeFieldContainer>
                        <StyledLabel htmlFor="age" name="age">
                            age
                        </StyledLabel>
                        <StyledInput type="text" id="age"/>
                    </AgeFieldContainer>
                    <SexFieldContainer>
                        <StyledLabel htmlFor="sex" name="sex">
                            sex
                        </StyledLabel>
                        <StyledSelect id="sex">
                            <option>male</option>
                            <option>female</option>
                        </StyledSelect>
                    </SexFieldContainer>
                <ThirdFieldContainer>
                    <StyledLabel htmlFor="work" name="work">
                        work
                    </StyledLabel>
                    <StyledSelect id="work">
                        <option>full time</option>
                        <option>part time</option>
                    </StyledSelect>
                    <StyledSelect id="work">
                        <option>8.00AM</option>
                        <option>1.00PM</option>
                        <option>6.00PM</option>
                        <option>11.00PM</option>
                    </StyledSelect>
                </ThirdFieldContainer>
            </UserFieldsContainer>
            <PhotoContainer>
                <OuterPhotoContainer>
                    <OuterImgContainer>
                        <StyledImg src="/imgs/profile.png" />
                    </OuterImgContainer>
                    <ImgInputContainer>
                        <StyledInput type="file" id="img" accept="image/*"/>
                        <StyledButton>
                            preview img
                        </StyledButton>
                    </ImgInputContainer>
                </OuterPhotoContainer>
            </PhotoContainer>
        </UserContainer>
        <DepartmentContainer>
            <StyledSelect size="long">
                <StyledOption>
                </StyledOption>
            </StyledSelect>
        </DepartmentContainer>
        <FooterContainer>
            <StyledButton type="submit">
                Submit
            </StyledButton>
        </FooterContainer>
      </StyledForm>
    </>
}
export default UserForm

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items:center;
`

const StyledForm = styled.form`
    width:100%; 
    height:100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: .5fr 5fr 1fr 1fr;
`

export const Title = styled.div`
    text-transform: capitalize;
    ${flexCenter}
`

const UserContainer = styled.div`
    /* background-color: #e0cd1e; */
    display: grid;
    grid-template-columns: 1fr .7fr;
`

const UserFieldsContainer = styled.div`
    /* background-color:purple; */
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
` 

const FirstFieldContainer = styled.div`
`

const SecondFieldContainer = styled.div`
display: flex;
flex-direction: column;
`

const ThirdFieldContainer = styled.div`
`

const AgeFieldContainer = styled.div`
`

const SexFieldContainer = styled.div`
    margin-left:-5px;
`

export const StyledLabel = styled.label`
    text-transform: capitalize;
    padding-right:10px;
    padding-left: ${(props)=>
    {
        switch(props.htmlFor){
            case 'age' :
                return '15px'
            case 'work' :
                return '7px'
            case 'sex':
                return '25px'
            default :
                return ''
        }
    }
    };
`

export const StyledSelect = styled.select`
    font-family: inherit;
    &:nth-of-type(2){
        margin-left: 25px;
    }
    padding:5px;
    text-transform:capitalize;
    width : ${(props)=>props.size==="long"?"100%":null};
`

export const StyledOption = styled.option`

`

export const StyledInput= styled.input`
    font-family: inherit;
    ${(props)=>{
        switch(props.type){
            case 'text' :
                return {
                width:'10rem',
                height:'2.10rem',
                paddingLeft:'8px'
                }
            case 'file' :
                return {
                    marginLeft:'50%'
                }
            default :
                return null
        }
    }}
    

`

const PhotoContainer = styled.div`
    /* background-color: violet; */
`

const OuterPhotoContainer = styled.div`
    ${flexCenter};
    flex-direction: column;
`
const OuterImgContainer = styled.div`
    width: 10rem;
    height: 12rem;
    margin: 10px 0 15px;
    align-self:center;
`

export const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius:10px;
`

export const StyledButton = styled.button`
    border-radius: 5px;
    background-color: #cacacadc;
    border: 0;
    font-family: inherit;
    margin-top:10px;
    &:active{
        transition: 0.5s ease-out;
        background-color: #e5e4e4dc;
    }
    padding: ${
        (props) => props.type === "submit" ?
        "10px 20px":
        "10px"
    };
    align-self: center;
`

const ImgInputContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction:column;
`


const DepartmentContainer = styled.div`
    /* background-color:yellow; */
    margin-top: 20px;
`

const StyledDepartment = styled.div`
    
`

const FooterContainer = styled.div`
    /* background-color: #7bc2f5; */
    display: flex;
    justify-content: center;
    align-items: center;
`
