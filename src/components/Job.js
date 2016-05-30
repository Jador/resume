import React from 'react';
import { h, section, h2, div, p } from 'react-hyperscript-helpers';

import { Card, CardTitle, CardText } from 'material-ui/Card';

export default ({ position, company, start, end, location, copy = [] }) =>
  h(Card, [
    h(CardTitle, { title: `${position} – ${company}`, subtitle: `${start} – ${end} | ${location}` }),
    h(CardText, copy.map(para => p(para)))
  ])
