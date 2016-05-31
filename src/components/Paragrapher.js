import React from 'react';
import { div, p } from 'react-hyperscript-helpers';

export default ({ copy = [] }) =>
  div(copy.map(para => p(para)));
