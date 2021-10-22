import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const mount = (mountPoint: HTMLElement) => {
  ReactDOM.render(<App />, mountPoint);
};

const authMountPoint = document.getElementById('_auth-dev-root')!;
if (process.env.NODE_ENV === 'development' && authMountPoint) {
  mount(authMountPoint);
}

export { mount };