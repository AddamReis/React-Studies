import React, { Component } from 'react';

class Usuario extends Component {
    constructor(props){
        super(props);
        this.state={
            name: ''
        };
    }

    componentDidMount(){
        const {name} = this.props.match.params;
        this.setState({name});
    }

    render() {
        return (
            <div>
                <center><h2>Usuario {this.state.name}</h2></center><br/>
            </div>
        );
    }
}

export default Usuario;