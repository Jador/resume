import React from 'react';
import { h, div, span } from 'react-hyperscript-helpers';

import { Card, CardTitle } from 'material-ui/Card';

import { standAlone } from '../styles/card';
import styles from '../styles/index.css';

export default ({ book, author }) =>
  h(Card, { style: standAlone }, [
    h(CardTitle, { title: 'Currently Reading' }),
    div({ className: styles.reading }, [
      span({ className: styles.book }, book),
      span(` by ${author}`)
    ])
  ])
