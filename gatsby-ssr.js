const React = require('react');

const HeadComponents = [
  <meta charSet="utf-8" />,
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />,
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />,
  <meta name="baidu-site-verification" content="code-jhx2PuFokJ" />,
];

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents);
};
