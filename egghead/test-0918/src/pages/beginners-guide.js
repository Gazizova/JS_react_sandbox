import React from "react";
import Lesson3 from '../courses/react_beginners_guide/lesson3-JSX'
import Lesson4 from '../courses/react_beginners_guide/lesson4-ReusableReactProject'
import Lesson5 from '../courses/react_beginners_guide/lesson5-PropTypes'
import Lesson6 from '../courses/react_beginners_guide/lesson6-conditionalRender'
import Lesson7tick from '../courses/react_beginners_guide/lesson7-renderApp'
import Lesson9 from '../courses/react_beginners_guide/lesson9-eventHandler'
import Lesson10 from '../courses/react_beginners_guide/lesson10-componentState'
import Lesson12 from '../courses/react_beginners_guide/lesson12-classComponent'
// import Lesson13 from '../courses/react_beginners_guide/lesson13-manipulateWithDOM'
import Lesson14 from '../courses/react_beginners_guide/lesson14-basicForm'
import Lesson15 from '../courses/react_beginners_guide/lesson15-dynamicForm'
import Lesson16 from '../courses/react_beginners_guide/lesson16-controllingFormValues'
import Lesson17 from '../courses/react_beginners_guide/lesson17-keyProp'

export default class ReactBeginnersGuide extends React.Component{
    render() {
        return (
          <div className="course-block">
              <Lesson17/>
              <Lesson16/>
              <Lesson15
                  getErrorMessage={value => {
                      if (value.length < 3) {
                          return `Value must be at least 3 characters, but is only ${value.length}`
                      }
                      if (!value.includes('s')) {
                          return `Value does not include "s" but it should!`
                      }
                      return null
                  }}/>
              <Lesson14/>
              <Lesson12/>
              <Lesson3 />

              <Lesson4/>
              <Lesson5 firstName={"string"}/>
              <Lesson6 message = "Hi All"/>
              <Lesson6 />
              <Lesson7tick />
              <Lesson9 start={0} />
              <Lesson10/>
          </div>
        )
    }
    

} 