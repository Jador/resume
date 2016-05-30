import React from 'react';

import { div } from 'react-hyperscript-helpers';

export default ({ contacts }) =>
  div(contacts.map(contact => div(contact.value)))
