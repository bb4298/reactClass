import React, { Component, Fragment } from 'react';
import './style.scss';
class Random extends Component {
    constructor(props) {
        super(props);
        this.state={
            randomNumber:0,
            name:'Quang'
        };
    }
    handleChangeNumber (type) {
        switch (type){
            case 'UP_NUMBER':{
                let a = Math.floor(Math.random()*100);
                while(a>this.state.randomNumber){a = Math.floor(Math.random()*100)}
                this.setState({randomNumber:a});
                return;
            };
            case 'DOWN_NUMBER':{
                let a = Math.floor(Math.random()*100);
                while(a<this.state.randomNumber){a = Math.floor(Math.random()*100)}
                this.setState({randomNumber:a});
                return;
            };
            default:
                return;
    
        }
    }

    render() {
        return (
            <Fragment>
                 <div>
                    {this.state.randomNumber}
                </div>
                <div>
                    <input type="button" className="btn" value="Up" onClick={()=>{this.handleChangeNumber('UP_NUMBER')}} />
                    <input type="button" className="btn" value="Down" onClick={()=>{this.handleChangeNumber('DOWN_NUMBER')}} />
                </div>
                <hr/>
                <div>
                    {this.state.name}
                </div>
                <div>
                    <input type="button" className="btn" value="Change name" onClick={()=>{
                        this.setState({name:'Quân'});
                    }}/>
                   
                </div>
            </Fragment>
        );
    }
}

export default Random;