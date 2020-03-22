import React from "react";
import Axios from "axios";
import "./style.css";

export default class App extends React.Component {

    state = {
        confirmed: 0,
        recovered: 0,
        deaths: 0
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const res = await Axios.get("https://covid19.mathdro.id/api");
        this.setState({
            confirmed: res.data.confirmed.value,
            recovered: res.data.recovered.value,
            deaths: res.data.deaths.value
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Coronavirus live update</h1>

                <div className="flex">
                    <div className="box confirmed">
                        <h3>Total confirmed cases</h3>
                        <h4>{this.state.confirmed}</h4>
                    </div>
                    <div className="box recovered">
                        <h3>Recovered</h3>
                        <h4>{this.state.recovered}</h4>
                    </div>
                    <div className="box deaths">
                        <h3>Deaths</h3>
                        <h4>{this.state.deaths}</h4>
                    </div>
                </div>
            </div>
        );
    }
}