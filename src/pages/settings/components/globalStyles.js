//takes values and enters it into the style to update the page
import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle
`
body{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: 0.50s linear;
}
`