import React, { Component } from 'react';

class Like extends Component {
    
    getClassName = () => {
        let liked = this.props.liked;

        if (liked){
            return "fa fa-heart";
        }
        else{
            return "fa fa-heart-o";
        }
    }

    render() {
        return(
            <React.Fragment>
                <i onClick={this.props.onClick} className={this.getClassName()} aria-hidden="true"></i>
            </React.Fragment>
        );
    }
}
 
export default Like;