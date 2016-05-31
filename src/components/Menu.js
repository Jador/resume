import React from 'react';
import { h, hh } from 'react-hyperscript-helpers';
import { Link } from 'react-router';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default hh(({ open = true, toggleMenu }) =>
  h(Drawer, { open }, [
    h(Link, { to: '/about' }, [
      h(MenuItem, { onTouchTap: toggleMenu }, 'About Me')
    ]),
    h(Link, { to: '/resume' }, [
      h(MenuItem, { onTouchTap: toggleMenu }, 'Resume')
    ]),
    h(Link, { to: '/contact' }, [
      h(MenuItem, { onTouchTap: toggleMenu }, 'Contact Info')
    ])
  ]));
