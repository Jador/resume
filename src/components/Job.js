import React from 'react';
import { h } from 'react-hyperscript-helpers';

import Paragrapher from './Paragrapher';
import { Card, CardTitle, CardText } from 'material-ui/Card';

export default ({ position, company, start, end, location, copy = [] }) =>
  h(Card, [
    h(CardTitle, { title: `${position} – ${company}`, subtitle: `${start} – ${end} | ${location}` }),
    h(CardText, [
      Paragrapher({ copy })
    ])
  ]);
