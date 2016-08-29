import React, {Component} from 'react';

class Credit extends Component {
    render() {
        let link = "https://www.yahoo.com/news/atticus-tops-baby-names-2015-124073377716.html";
        return (
            <div className="credit">
                <p>
                    Source name of list:
                    <a href={link}>Nomes: Yahoo! - Top Babies Names in 2015. </a>
                </p>
            </div>
        );
    }
}

export default Credit;