import React from 'react';
import { div } from 'react-hyperscript-helpers';

import Job from './Job';

export default ({ jobs }) =>
  div(jobs.map((job, idx) => Job({ key: `${job}_idx`, ...job })));
