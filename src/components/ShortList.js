import React, {Component} from 'react';

class ShortList extends Component {

    filterUpdate() {
        const value = this.myList.value || "Click on a name to shortlist";
    }

    render() {
        return (
            <p>{}</p>
        );
    }
};

export default ShortList;