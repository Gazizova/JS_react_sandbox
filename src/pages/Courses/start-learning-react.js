import { TestProps } from '../../courses/egghead/start_learniing_react/props';
import { StateLesson } from '../../courses/egghead/start_learniing_react/state';
import { EventLesson } from '../../courses/egghead/start_learniing_react/events';
import React, { Component } from 'react';
import { TestRefs } from '../../courses/egghead/start_learniing_react/references';
import ComponentLifecycle from '../../courses/egghead/start_learniing_react/componentLifeMethods';
import ComponentFetch from '../../courses/egghead/start_learniing_react/map';
import WrapperForChildrenComponets from '../../courses/egghead/start_learniing_react/childrenComponents';
class Startlearningreact extends Component {
  render() {
    return (
      <div className="course-block">
        <TestProps num={345} />
        <StateLesson />
        <EventLesson />
        <TestRefs />
        <ComponentLifecycle />
        <ComponentFetch />
        <WrapperForChildrenComponets />
      </div>
    );
  }
}

export default Startlearningreact;
