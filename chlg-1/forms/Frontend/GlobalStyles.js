import { createGlobalStyle } from "styled-components";

export const box_shadow = "box-shadow: -1px -1px 17px -3px rgba(0,0,0,0.44);\
                    -webkit-box-shadow: -1px -1px 17px -3px rgba(0,0,0,0.44);\
                    -moz-box-shadow: -1px -1px 17px -3px rgba(0,0,0,0.44);"

const GlobalStyles = createGlobalStyle`
:root{
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

}

`

export default GlobalStyles