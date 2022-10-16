import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);


class App extends React.Component{

    state = {lat: null,errorMessage:''}

    componentDidMount(){
        console.log("mounted")
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate(){
        console.log("did update")
    }

    render(){      
        if (this.state.lat != null){return (<SeasonDisplay lat={this.state.lat}/>)}
        else if(this.state.errorMessage==''){return (<div>loading!</div>)}
        else{return (<div>Could not display the season information, error: {this.state.errorMessage}</div>)}
    }
}

root.render(<App/>);