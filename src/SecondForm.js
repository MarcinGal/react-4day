import React from 'react'

class SecondForm extends React.Component {
    state = {
        text: ''
    }
    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.state.text}
                    onChange={(event) => this.setState({ text: event.target.value })}
                />
                <input
                    value={this.state.text}
                    readOnly
                />
            </div>
        )
    }
}

export default SecondForm