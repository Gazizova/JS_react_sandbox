import React, {Component} from "react";
import {VolumeSlider} from '../components/slider'
import data from '../data.1.json'
import './slider.css'

export class SliderPage extends Component{

    localData = JSON.parse(JSON.stringify(data));
    section = this.localData.assessment.sections[0].subsections[1].groups[0].questions[1].answers;


  render() {

    return (
        <div className='componentSlider'>
            <VolumeSlider value={this.section.length}/>
        </div>
    )
  }
}