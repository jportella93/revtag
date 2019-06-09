import React from 'react';
import iconCredit from '../data/iconCredit';

const Credit = () => (
  <div style={{ textAlign: 'center' }}>
    Icons made by{' '}
    {iconCredit.map(d => (
      <a key={d.name} href={d.link} title={d.title}>
        {d.name}
        {', '}
      </a>
    ))}{' '}
    from{' '}
    <a href="https://www.flaticon.com/" title="Flaticon">
      www.flaticon.com
      </a>{' '}
    is licensed by{' '}
    <a
      href="http://creativecommons.org/licenses/by/3.0/"
      title="Creative Commons BY 3.0"
      target="_blank" rel="noopener noreferrer">
      CC 3.0 BY
      </a>
  </div>
)

export default Credit;
