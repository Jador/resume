import React from 'react';
import { h, div } from 'react-hyperscript-helpers';

import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

import pic from '../images/me.jpeg';
import styles from '../styles/index.css';

export default ({ toggleMenu }) =>
  h(AppBar, {
    onLeftIconButtonTouchTap: toggleMenu,
    title: [
      h(Avatar, { src: pic, size: 80 }),
      div({ className: styles.header }, [
        div('Tyler Graham'),
        div({ className: styles.subTitle }, 'Software Enthusiast')
      ])
    ],
    titleStyle: {
      display: 'flex',
      height: 'auto',
      alignItems: 'center',
      padding: '0.75em'
    }
  });
