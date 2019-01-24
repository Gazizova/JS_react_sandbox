import React, { useState, useEffect } from 'react';
import { useLogger } from 'react-use';

export default function ReactConferenceHook() {
  const [name, setName] = useState('Mary');
  const [surname, setSurname] = useState('Poppins');
  const width = useWindowWidth();

  function setUserName(e) {
    setName(e.target.value);
  }

  function setUserSurname(e) {
    setSurname(e.target.value);
  }

  const Demo = (...props) => {
    useLogger('Demo', props);
    return null;
  };

  useEffect(() => {
    document.title = name + '' + surname;
    console.time('1');
    console.group('Group for logs');
    console.log('log');
    console.info('info');
    console.warn('warn');
    console.error('error');
    console.groupEnd();
    console.timeEnd('1');
  });

  Demo(name, surname);

  return (
    <div className="lesson">
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" value={name} onChange={setUserName} />
      </div>
      <div>
        <label htmlFor="surname">Surname</label>
        <input id="surname" value={surname} onChange={setUserSurname} />
      </div>
      <div>
        <label htmlFor="width">Window width</label>
        <input readOnly value={width} id="width" />
      </div>
    </div>
  );
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    // alternative:
    // const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      // unsibscribe
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
}
