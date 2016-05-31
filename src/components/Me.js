import React from 'react';
import { h, hh } from 'react-hyperscript-helpers';

import Paragrapher from './Paragrapher';

import { Card, CardHeader, CardText, CardTitle } from 'material-ui/Card';

export default hh(({ about }) =>
  h(Card, [
    h(CardTitle, { title: 'Who am I?' }),
    h(CardText, [
      Paragrapher({ copy: about })
    ])
  ]))
