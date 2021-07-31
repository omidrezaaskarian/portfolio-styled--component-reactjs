import React from 'react'
import styled from 'styled-components'


const PortfolioList = ({title}) => {
    return (
        <Link  >
          {title}
        </Link>
    )
}

export default PortfolioList


const Link = styled.li`
font-size:12px;
margin-right:50px;
padding:7px;
border-radius: 10px;
cursor: pointer;
&.active{
    background-color:#15023a;
    color:#fff;
}
`;