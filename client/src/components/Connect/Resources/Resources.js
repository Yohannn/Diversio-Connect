import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import ConnectWrapper from '../ConnectWrapper';
import Popular from './Popular';
import { kpi_random } from '../../../utils';

import { fetchResourcesArticles } from '../../../actions';

import styled from 'styled-components';
import {  BoldTitle, Separator, Card  } from '../../GlobalStyle';
import Trending from './Trending';
import Regulatory from './Regulatory';


// styled components:
const ResourcesContainer = styled.div`
    width: 1080px;
    display: flex;
`

export const TagSeparator = styled(Separator)`
    margin: 0px 8px;
    height: 8px;
    display: inline-block;
`

export const SourceTag = styled.span`
    font-family: Lato;	
    color: #5E77FF;	
    width: 100%;	
    font-size: 10px;	
    line-height: 20px;
`

// for Trending, Regulatory
export const SubCard = styled(Card)`
    width: 60%;
    min-width: 300px;
    margin-left: 0px;
    margin-top: 40px;
    margin-right: 0px;
    padding: 20px 15px;
    min-width: auto;
`

export const SubImg = styled.img`
    height: 8vh;
    width: 8vh;
    margin-top: 5px;
    margin-right: 13px;
    float: left;
`
export const SubArticle = styled.div`
    display: block;
    margin-top: 30px;
    margin-bottom: 30px;
`

// styled components:
export const SmallerBoldTitle = styled(BoldTitle)`
    font-size: 0.7rem;
    height: 2rem;
    line-height: 1.1rem;
    
    text-overflow: ellipsis;
    white-space: normal;
    overflow: hidden;
`


// React components:
class Resources extends Component {
    
    state = { appName: "resources" }

    componentDidMount(){
        this.props.fetchResourcesArticles();
    }

    render () {

        // Waiting for data to be fetched.
        if (this.props.popular.length === 0) {
            return ( <div>Loading...</div>)
        }

        return (
            <ConnectWrapper title={this.state.appName}>
                <ResourcesContainer>
                    <Popular articles={this.props.popular} />
                    <div>
                        <Trending articles={this.props.trending}/>
                        <Regulatory articles={this.props.regulatory}/>
                    </div>
                </ResourcesContainer>
            </ConnectWrapper>
        )
    }
};




// Randomly sample articles to assign to following categories: 
// popular, trending and regulartory.
// <To be changed according to appropriate selecting algorithm>.
// Note occasiaonal error for sampling same story for trending and regulatory.
const assignCategory = (articles) =>{
    // add kpi to each articles.
    const kpiAddedArticles = articles.map((article) => { return {...article, kpi: kpi_random()}});
    const popular = _.sampleSize(kpiAddedArticles, 5);
    const trending = _.sampleSize(kpiAddedArticles, 4);
    const regulatory = _.sampleSize(kpiAddedArticles, 4);

    return [popular, trending, regulatory];
}

const mapStateToProps = (state) => {
    const entireArticles = state.resources.articles;
    const [popular, trending, regulatory] = assignCategory(entireArticles);

    return { 
        popular: popular,
        trending: trending,
        regulatory: regulatory
     };
}
export default  connect(mapStateToProps, {
    fetchResourcesArticles
})(Resources);
