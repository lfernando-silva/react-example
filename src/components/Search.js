import React, {Component} from 'react';

class Search extends Component {

    filterUpdate() {
        const value = this.myValue.value;
        this.props.filterUpdate(value);
    };

    render() {
        return (
            <header>
                <form>
                    <input type="text"
                        placeholder="Type to filter..."
                        ref={value => { this.myValue = value }}
                        onChange={this.filterUpdate.bind(this) }/>
                </form>
            </header>
        );
    }
}

export default Search;