import React, {Component} from "react";
import {Route} from "react-router-dom";
import ListTodo from "./components/ListTodo";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="row">
                    <div className="col-xs-12">
                        <Route path="/" component={ListTodo}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;