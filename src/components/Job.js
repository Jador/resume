import React from 'react';
import { section, h2, div } from 'react-hyperscript-helpers';

export default ({ position, start, end }) =>
  section([
    h2(position),
    div(`${start} – ${end}`)
  ])
