import React from 'react';

import { kpi_color } from '../../../utils';

import {
    KpiTag, SubHeader
} from '../../GlobalStyle';

import {
    SubCard, TagSeparator, SourceTag,
     SubImg, SubArticle, SmallerBoldTitle
} from './Resources';



// React components:
const renderEachArticle = (article) => {
    return(
        <SubArticle key={article.title}>
            <SubImg src={article.urlToImage} />
            <a href={article.url}>
                <SmallerBoldTitle>
                    {article.title}
                </SmallerBoldTitle>
            </a>
            <KpiTag color={kpi_color(article.kpi)}>
                    {article.kpi}
            </KpiTag>
            <TagSeparator/>
            <SourceTag>{article.source.name}</SourceTag>
        </SubArticle> 
    )
}

const Trending = (props) => {
    
    return (
        <SubCard>
            <SubHeader>Trending</SubHeader>
            {props.articles.map((article) => {
                return(
                    renderEachArticle(article)
                )
            })}
        </SubCard>
    )
}

export default Trending;