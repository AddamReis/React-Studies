import React, { Component } from 'react';

class Feed extends Component {
    render() {
        return (
            <div>
                <div key={this.props.id}>
                    <center><h2>{this.props.user}</h2>
                        {this.props.coments > 1 ?
                            'Coments (' + this.props.coments + ') '
                            : 'Coment (' + this.props.coments + ') '
                        }
                        {this.props.coments > 1 ?
                            'Likes (' + this.props.like + ') '
                            : 'Likes (' + this.props.like + ') '
                        }
                        <hr/>
                    </center>
                </div>
            </div>
        );
    }
}

export default Feed;