import * as React from "react";
import MobXLesson1 from "../../courses/egghead/manage-complex-state-in-react-apps-with-mobx/lesson1";
import Temperature from "../../courses/egghead/manage-complex-state-in-react-apps-with-mobx/lesson2";

export default function MobXCourse() {
  return (
    <div className="course-block">
      <MobXLesson1 />
      <Temperature />
    </div>
  );
}
