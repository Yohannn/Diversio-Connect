import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import { kpi_color } from '../../../utils';

import styled from 'styled-components';
import { 
    Card, SubHeader, BoldTitle, 
    GrayContent, KpiTag  } from '../../GlobalStyle';
import { TagSeparator, SourceTag } from './Resources';


// styled components:
const PopularCard = styled(Card)`
    width: 65%;
    margin-right: 30px;
    /* max-width: 800px; */
`
const Primary = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
`

const PrimaryImg = styled.img`
    height: 25vh;
    width: 100%;
    margin-bottom: 20px;
`
const SmallImg = styled.img`
    height: 18vh;
    width: 100%;
    margin-bottom: 20px;
`

const StyledContainer = styled(Container)`
    padding-right: 0px !important;
    padding-left: 0px !important;
`

const StyledRow = styled(Row)`
    margin-top: 50px;
    margin-bottom: 50px;
`

// React components:
const renderPrimaryArticle = (article) => {
    return(
        <Primary>
            <PrimaryImg src={article.urlToImage} />
            <a href={article.url}>
                <BoldTitle>{article.title}</BoldTitle>
            </a>
            <KpiTag color={kpi_color(article.kpi)}>
                    {article.kpi}
            </KpiTag>
            <TagSeparator/>
            <SourceTag>{article.source.name}</SourceTag>
            <GrayContent>{article.content}</GrayContent>
        </Primary> 
    )
}

const renderSmallArticle = (article) => {
    return (
        <React.Fragment>
            <SmallImg src={article.urlToImage} />
            <a href={article.url}>
                <BoldTitle>{article.title}</BoldTitle>
            </a>
            <KpiTag color={kpi_color(article.kpi)}>
                    {article.kpi}
            </KpiTag>
            <TagSeparator/>
            <SourceTag>{article.source.name}</SourceTag>
            <GrayContent>{article.content}</GrayContent>
        </React.Fragment>
    )
}

const Popular = (props) => {
    const primary = props.articles[0];
    return (
        <PopularCard>
            <SubHeader>Popular</SubHeader>
                {renderPrimaryArticle(primary)}
                <StyledContainer>
                    <StyledRow>
                        <Col sm="6">
                            {renderSmallArticle(props.articles[1])}
                        </Col>
                        <Col sm="6">
                            {renderSmallArticle(props.articles[2])}
                        </Col>
                    </StyledRow>
                    <StyledRow>
                        <Col sm="6">
                            {renderSmallArticle(props.articles[3])}
                        </Col>
                        <Col sm="6">
                            {renderSmallArticle(props.articles[4])}
                        </Col>
                    </StyledRow>
                </StyledContainer>
        </PopularCard>
    )
}

export default Popular;
