import React from "react";

export class TestRefs extends React.Component {
  constructor() {
    super();
    this.state = {
      a: "--",
      b: "---",
      c: "-"
    };
  }

  updateEvent = e => {
    this.setState({
      a: e.target.value
    });
  };
  updateRefs = () => {
    this.setState({
      b: this.refs.b.value
    });
  };

  updateRefsComponent = () => {
    this.setState({
      c: this.refs.c.value
    });
  };

  render() {
    return (
      <div className="lesson">
        <h3> Lesson refs:</h3>
        <input ref="a" type="text" onChange={this.updateEvent} />
        <p>{this.state.a}</p>
        <hr />
        <input ref="b" type="text" onChange={this.updateRefs} />
        <p>{this.state.b}</p>
        <Input
          ref={component => (this.c = component)}
          update={this.updateRefsComponent}
        />
        <p>{this.state.с}</p>
      </div>
    );
  }
}

class Input extends React.Component {
  render() {
    return <input ref="input" type="text" onChange={this.props.update} />;
  }
}
