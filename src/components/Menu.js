import React from 'react';
import { h, hh } from 'react-hyperscript-helpers';
import { Link } from 'react-router';

import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default hh(({ open = true, toggleMenu }) =>
  h(Drawer, { open, docked: false }, [
    h(Link, { to: '/about' }, [
      h(MenuItem, { onTouchTap: toggleMenu }, 'About Me')
    ]),
    h(Link, { to: '/resume' }, [
      h(MenuItem, { onTouchTap: toggleMenu }, 'Resume')
    ]),
    h(Link, { to: '/contact' }, [
      h(MenuItem, { onTouchTap: toggleMenu }, 'Contact Info')
    ]),
    h(Divider),
    h(Link, { to: '/explain' }, [
      h(MenuItem, { onTouchTap: toggleMenu }, 'About This App')
    ])
  ]));
