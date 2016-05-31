import React from 'react';
import { h, p } from 'react-hyperscript-helpers';

import { Card, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default () =>
  h(Card, [
    h(CardTitle, { title: 'About This App' }),
    h(CardText, [
      p([
        'This hastily put together React app is meant to serve as a living resume. All of the code exists on',
        h(FlatButton, {
          style: { lineHeight: '34px', minWidth: '0px' },
          labelStyle: { padding: '0.25em' },
          label: 'github',
          href: 'https://github.com/jador/resume',
          linkButton: true
        })
      ]),
      p('Why did I make this? Well it was time to update my resume and I found this domain I really liked....'),
      p([
        'This app diverges a little bit from my typical architecture. ',
        'It is the first thing I\'ve made in a while that didn\'t use Redux. The reason is pretty simple, though. ',
        'There isn\'t any changing app state (just load and go) so having Redux is kind of pointless. I will admit ',
        'it was a little uncomfortable not falling back on those very familiar patterns, however.'
      ]),
      p([
        'You may have noticed that I am using CSS Modules (which is great and you should definitely check it out), but I am not ',
        'making very good use of it. This because I wanted to checkout Material UI, which is inline style based. Therefore, ',
        'there is very little css.'
      ]),
      p([
        'I am making use of Firebase to act as a backend, just so I can tweak the copy and add future positions without any fuss. ',
        'And since I am using the database I decided to use the hosting feature as well. That turned out to be awesome. Originally, I ',
        'was going to host it on DigitalOcean and get my Docker on, plus use LetsEncrypt to get a certificate. Firebase handled all of that ',
        'and globally distrubited my app. Not bad.'
      ]),
      p([
        'I do have some plans to make this thing better. I plan to go all in on the progressive web app movement so look out for those ',
        'ServiceWorkers! Also, now that I\'ve made it, it feels like it is missing some...pizazz. So I\'d expect a face lift before too ',
        'long. Check the issues on Github for more details.'
      ]),
      p([
        'Anyways, thank you so much for checking out my resume and ramblings!'
      ])
    ])
  ])
