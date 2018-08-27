import React,{Component} from 'react'


class Lesson14 extends React.Component {
    handleSubmit = event => {
        event.preventDefault()
        console.log({target: event.target})
        console.log(event.target[0].value)
        console.log(
            event.target.elements.username.value,
        )
        console.log(this.inputNode.value)
    }

    render() {
        return (
            <div>
                <h3> Lesson 14:</h3>

            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="username"
                        ref={node => {this.inputNode = node}}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            </div>
        )
    }
}


export default Lesson14
