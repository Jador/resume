import React from 'react';
import { section, h2, div, p } from 'react-hyperscript-helpers';

export default ({ position, start, end, location, copy = [] }) =>
  section([
    h2(position),
    div(`${start} – ${end}`),
    div(location),
    div(copy.map(para => p(para)))
  ])
