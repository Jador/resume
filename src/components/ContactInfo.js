import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

import { div, h } from 'react-hyperscript-helpers';

export default ({ contacts }) =>
  div(contacts.map(contact => {
    switch (contact.type) {
      case 'phone': return Phone(contact);
      case 'email': return Email(contact);
      case 'medium': return Link(contact, `https://medium.com/@${contact.value}`);
      default: return Link(contact, `https://${contact.type}.com/${contact.value}`);
    }
  }));


const Phone = (contact) => Link(contact, `tel:${contact.value}`);

const Email = (contact) => Link(contact, `mailto:${contact.value}`, 'envelope');

const Link = ({ type, value }, href, icon) =>
  h(FlatButton, {
    label: value,
    linkButton: true, href,
    icon: h(FontIcon, { className: `fa fa-${icon || type}` })
  });
