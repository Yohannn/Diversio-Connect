import styled, { createGlobalStyle } from 'styled-components';


// Style to be applied globally.
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');
    body {
        background-color: #FAFBFC !important;
        font-family: Lato !important;
        min-width: 1080px;
    }

    li {
        list-style-type: none;
    }

    
` 

// Generic styling components to be used selectively throughout entire App.
export const Card = styled.div`
    background-color: #FFF;
    box-sizing: border-box;
    border: 1px solid #DBD9DB;	
    box-shadow: -5px 5px 20px 0 rgba(30,30,30,0.03);
    min-width: 500px;

    margin-top: 40px;
    margin-left: 40px;
    margin-right: 40px;
    padding: 60px 50px;
` 

export const SubHeader = styled.div`
    color: #2A2C2E;	
    font-family: 'Lato', sans-serif;	
    font-size: 16px;	
    font-weight: 500;	
    line-height: 23px;
    margin-bottom: 8px;
`

export const BoldTitle = styled.div`
    
    color: #2A2C2E;	
    font-family: Lato;	
    font-size: 16px;	
    font-weight: bold;	
    line-height: 23px;
    /* margin-top: 20px; */
`

export const GrayContent = styled.div`
    /* height: 30px;	 */
    /* max-width: 400px;	 */
    width: 100%;
    color: #2A2C2E;	
    font-family: Lato;	
    font-size: 0.8rem;	
    font-weight: 300;	
    margin-top: 6px;
    padding-bottom: 5px;
    
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`

export const KpiTag = styled.span`
    color : ${({ color }) => color};
    height: 20px;	
    width: 100%;	
    font-family: Lato;	
    font-size: 10px;	
    line-height: 20px;
    
    /* margin-top: 8px; */
`

export const Separator = styled.div`
    box-sizing: border-box;    
    height: 22px;  
    width: 1.5px;  
    background-color: #DBD9DB;
`
export default GlobalStyle;
