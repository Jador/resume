import React from 'react';
import { h, hh } from 'react-hyperscript-helpers';

import Paragrapher from './Paragrapher';
import Avatar from 'material-ui/Avatar';
import { Card, CardHeader, CardText, CardTitle } from 'material-ui/Card';

import pic from '../images/me.jpeg';

export default hh(({ about }) =>
  h(Card, [
    h(CardHeader, {
      avatar: h(Avatar, { src: pic, size: 80 }),
      title: 'Tyler Graham',
      subtitle: 'Software Enthusiast',
      style: {
        display: 'flex',
        alignItems: 'center'
      },
      titleStyle: { fontSize: '1.5em' },
      subtitleStyle: { fontSize: '1em' }
    }),
    h(CardTitle, { title: 'Who am I?' }),
    h(CardText, [
      Paragrapher({ copy: about })
    ])
  ]))
