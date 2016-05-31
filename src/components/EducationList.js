import React from 'react';
import { div, h2 } from 'react-hyperscript-helpers';

import Education from './Education';

export default ({ education }) =>
  div([
    h2('Education'),
    education.map((learnin, idx) => Education({ key: `edu_${idx}`, ...learnin }))
  ]);
