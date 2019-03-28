import * as React from 'react';
import { M } from '../../courses/egghead/manage-complex-state-in-react-apps-with-mobx/lesson1';
import { M2 } from '../../courses/egghead/manage-complex-state-in-react-apps-with-mobx/lesson1-2';
import { Temp } from '../../courses/egghead/manage-complex-state-in-react-apps-with-mobx/lesson3';
import {
  ArrayTemp,
  TempLesson4
} from '../../courses/egghead/manage-complex-state-in-react-apps-with-mobx/lesson4-arrays';

import { App } from '../../courses/egghead/manage-complex-state-in-react-apps-with-mobx/lesson7-async';
import { observable } from 'mobx';
import { Provider } from 'mobx-react';

export default function MobXCourse() {
  const temps = observable.map({
    Amsterdam: new TempLesson4(),
    Rome: new TempLesson4()
  });

  const temp = observable([]);

  return (
    <div className="course-block">
      <M />
      <M2 />
      <Temp />
      <TempLesson4 />
      <ArrayTemp temperature={temps} />
      <Provider temperatures={temp}>
        <App />
      </Provider>
      ,
    </div>
  );
}
