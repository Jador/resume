import React from 'react';

import { div } from 'react-hyperscript-helpers';

import Me from '../components/Me';
import Interests from '../components/Interests';
import Reading from '../components/Reading';

export default ({ about, interests = {} }) =>
  div([
    Me({ about }),
    Interests({ copy: interests.copy }),
    Reading({ ...interests.reading })
  ]);
