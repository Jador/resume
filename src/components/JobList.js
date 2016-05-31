import React from 'react';
import { div, h2 } from 'react-hyperscript-helpers'

import Job from './Job';

export default ({ jobs = [] }) =>
  div([
    h2('Experience'),
    jobs.map((job, idx) => Job({ key: `${job}_idx`, ...job }))
  ]);
