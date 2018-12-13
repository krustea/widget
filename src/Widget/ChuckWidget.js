import React, {Component} from 'react';

class ChuckWidget extends Component {
    constructor(props) {
        super(props);
this.state ={chuck:[]}
    }

    componentDidMount() {

        fetch('https://api.chucknorris.io/jokes/random')
            .then(response=>response.json())
            .then(data=>this.setState({chuck :data}))

    }



    render() {

        return (
            <div>
                <img src={this.state.chuck.icon_url} alt=""/>
                {this.state.chuck.value}

            </div>
        );
    }
}

export default ChuckWidget;