import React from 'react';
import { h } from 'react-hyperscript-helpers';

import Paragrapher from './Paragrapher';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import { standAlone } from '../styles/card';

export default ({ copy }) =>
  h(Card, { style: standAlone }, [
    h(CardTitle, { title: 'My Interests' }),
    h(CardText, [ Paragrapher({ copy }) ])
  ])
