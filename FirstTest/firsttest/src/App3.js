import React, { Component } from 'react';
import Feed from './components/feed'

class App3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: [
                { id: 1, user: 'Addam', curtidas: 10, comentarios: 3 },
                { id: 2, user: 'Bruna', curtidas: 32, comentarios: 9 },
                { id: 3, user: 'João', curtidas: 15, comentarios: 1 },
                { id: 4, user: 'Maevy', curtidas: 180, comentarios: 0 }
            ]
        };
    }

    render() {
        return (
            <div>
                {this.state.feed.map((item) => {
                    return (
                        <Feed
                            id={item.id}
                            user={item.user}
                            like={item.curtidas}
                            coments={item.comentarios} />
                    );
                })}
            </div>
        )
    }
}

export default App3;