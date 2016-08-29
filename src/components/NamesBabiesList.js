import React, {Component} from 'react';

class NamesBabiesList extends Component {
    render() {
        //console.log("DATA %s",this.props.data);
        const {data, filterText} = this.props;
        const list = data
            .filter((d) => {
                //Remove names doesnt match filtertext
                return d.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
            }).map(d => {
                return (
                    <li key={d.id} className={d.sex}>{ d.name }</li>
                );
            });

        return (
            <div className="App">
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default NamesBabiesList;