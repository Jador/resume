import React from 'react';
import { div } from 'react-hyperscript-helpers';

import JobList from '../components/JobList';
import Education from '../components/EducationList';

export default ({ jobs, education }) =>
  div([
    JobList({ jobs }),
    Education({ education })
  ]);
