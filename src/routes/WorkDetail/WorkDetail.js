import React from 'react'
import { useLocation } from "react-router-dom";
import renderHTML from 'react-render-html';
import { android, ios } from '../../assets'

import Template from '../../components/Template';

function WorkDetail() {
    const location = useLocation();
    return (
        <Template>
            <div className="container work-detail">
                <div className="work-assets">
                    <div className="work-image">
                        <img src={ location.state.image } alt="" />
                    </div>
                    <div className="work-gif">
                        {
                            location.state.gif 
                            ? <img src={ location.state.gif } alt="#" />
                            : <div className="work-gif-unavailable">Gif not available <hr/></div>
                        }
                    </div>
                </div>
                <div className="work-description">
                    <div className="description-header">
                        <div>
                            <h1>{ location.state.title }</h1>
                            <p>{ location.state.category }</p>
                        </div>
                        <div className="download-link">
                            <a target="_blank" rel="noopener noreferrer" href={ location.state.android_link }> <img src={ android } alt="" /> </a>
                            <a target="_blank" rel="noopener noreferrer" href={ location.state.ios_link }> <img src={ ios } alt="" /> </a>
                        </div>
                    </div>
                    <p>{  renderHTML(location.state.description) }</p>
                </div>
            </div>
        </Template>
    )
}

export default WorkDetail
