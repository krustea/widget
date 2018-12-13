import React, {Component} from 'react';
const API = 'https://newsapi.org/v2/top-headlines?sources=lequipe&apiKey=dc12cb1abb234a46bae81524b2ab2dcc'


class EquipeWidget extends Component {
    constructor(props) {
        super(props);
        this.state = { articles: [], index: 0 }

    }


    componentDidMount() {
        this.fetchData();
        this.dataTimer = setInterval(() => {
            this.fetchData();
        }, 100000);

        this.timer = setInterval(() => {
            this.props.animate().then(() => {
                const index = (this.state.index >= this.state.articles.length - 1) ? 0 : this.state.index + 1;
                this.setState({ index: index });
            });
        }, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        clearInterval(this.dataTimer);
    }

    fetchData() {
        fetch(API)
            .then(response=>response.json())
            .then(data=>this.setState({articles: data.articles}));
    }

    render() {

        if (this.state.articles.length  === 0) {
            return <div>chargement en cours</div>;
        }

        const article = this.state.articles[this.state.index];

        return (
            <div>
                <h5 className="equiph5" key={article.id}>{article.title}</h5>
                <img className="img" src={article.urlToImage} alt=""/>
                <p>{article.description}</p>
            </div>
        );
    }
}


export default EquipeWidget;