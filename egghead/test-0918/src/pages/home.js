import React, {Component} from "react";
import data from '../data.1.json'
class HomeAlt extends Component{
    localData = JSON.parse(JSON.stringify(data));
    section = this.localData.assessment.sections[0].subsections[1].groups[0].questions[1].answers;
    render() {
        return (
            <div id="home">
                <h2>This is the home page.</h2>
                <div>{console.log(this.section.length)}</div>
            </div>
        );
    }
}
export default HomeAlt;
