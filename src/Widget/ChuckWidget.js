import React, {Component} from 'react';

class ChuckWidget extends Component {
    constructor(props) {
        super(props);
this.state ={ chuck:[] }
    }

    componentDidMount() {
        this.fetchData();
        this.dataTimer = setInterval(() => {
            this.fetchData();
        }, 100000);
        this.timer = setInterval(() => {
            this.props.animate().then(() => {
                this.fetchData()
            });
        }, 10000);

    }


    componentWillUnmount() {
        clearInterval(this.timer);
        clearInterval(this.dataTimer);
    }


    fetchData() {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => this.setState({chuck: data}))

    }

        render() {
            if (this.state.chuck.length  === 0) {
                return <div>chargement en cours</div>;
            }

        return (
            <div>
                <img src={this.state.chuck.icon_url} alt=""/>
                {this.state.chuck.value}

            </div>
        );
    }
}

export default ChuckWidget;