import React from 'react';
import ARTICLE_DATA from './article-page.data.js';
//embedding collection preview to articlepage component
import ArticlePreview from '../../components/article-preview/article-preview.component'

//class component as we need to deal with data/state
class ArticlePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections:ARTICLE_DATA
        }
    }
  
    render(){
        const {collections} = this.state;
        return (<div className="article-page">
                {
                    collections.map(({id, ...otherCollectionsProps}) => (
                        <ArticlePreview key={id} {...otherCollectionsProps}/>
                    ))
                }
            </div>
            )
    }
}

export default ArticlePage;
