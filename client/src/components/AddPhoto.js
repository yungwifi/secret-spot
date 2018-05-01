import React, { Component } from 'react';
import styled from 'styled-components'


class AddPhoto extends Component {
    render() {
        return (
            <div>
                <h4> Add New Photo </h4>
                <input type="text" name="caption" value={this.props.photos} />
                <input type="text" name="image" value={this.props.photos} />
                <button> Save Photo </button>
            </div>
        )
    }
}

export default AddPhoto