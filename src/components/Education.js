import React from 'react';
import { h } from 'react-hyperscript-helpers';

import { Card, CardTitle, CardText } from 'material-ui/Card';

import Paragrapher from './Paragrapher';

export default ({ school, degree, start, end, remarks }) =>
  h(Card, [
    h(CardTitle, { title: school, subtitle: `${degree ? `${degree} |` : ''} ${start} – ${end}` }),
    h(CardText, [
      Paragrapher({ copy: remarks })
    ])
  ])
