import React, { Component } from 'react';
import NamesBabiesList from './components/NamesBabiesList.js';
import Search from './components/Search.js';
import Credit from './components/Credit.js';
import ShorList from './components/ShortList.js';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
        }
    }

    filterUpdate(value) {
        this.setState({
            filterText: value
        });
    }

    render() {
        return (
            <div>
                <Search
                    filterText={this.state.filterText}
                    filterUpdate={this.filterUpdate.bind(this) }
                    />
                <ShorList  />
                <main>
                    <NamesBabiesList
                        data={this.props.data}
                        filterText={this.state.filterText}
                        />
                </main>
                <Credit />
            </div>
        );
    }
}

export default App;
