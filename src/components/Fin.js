import React from 'react';
import { h } from 'react-hyperscript-helpers';

import Paragrapher from './Paragrapher';
import { Card, CardText, CardTitle } from 'material-ui/Card';

export default ({ closing }) =>
  h(Card, { style: { marginTop: '1.5em' } }, [
    h(CardTitle, { title: 'Thank You!' }),
    h(CardText, [
      Paragrapher({ copy: closing })
    ])
  ]);
