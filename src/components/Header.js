import React from 'react';
import { h, div } from 'react-hyperscript-helpers';

import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';

import pic from '../images/me.jpeg';
import styles from '../styles/index.css';

export default () =>
  h(AppBar, {
    showMenuIconButton: false,
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
