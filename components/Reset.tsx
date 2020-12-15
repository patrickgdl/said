/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

const reset = {
  /**
    Use a better box model (opinionated).
    */

  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  /**
    Use a more readable tab size (opinionated).
    */

  ':root': {
    tabSize: 4,
  },

  /**
   * Remove anchor underline decoration
   */

  a: {
    textDecoration: 'none',
  },

  /**
    Correct the line height in all browsers.
    */

  html: {
    lineHeight: 1.15,
    fontSize: '15px',
  },

  /*
    Sections
    ========
    */

  /**
    Remove the margin in all browsers.
    Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
    */

  body: {
    margin: 0,
    fontFamily:
      'Roboto, ui-sans-serif, system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  },

  p: {
    padding: 0,
  },

  'blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre': {
    margin: 0,
  },

  /*
    Grouping content
    ================
    */

  /**
    1. Add the correct height in Firefox.
    2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
    */

  hr: {
    height: 0 /* 1 */,
    color: 'inherit' /* 2 */,
  },

  /*
    Text-level semantics
    ====================
    */

  /**
    Add the correct text decoration in Chrome, Edge, and Safari.
    */

  'abbr[title]': {
    textDecoration: 'underline dotted',
  },

  /**
    Add the correct font weight in Edge and Safari.
    */

  'b, strong': {
    fontWeight: 'bolder',
  },

  /**
    1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
    2. Correct the odd 'em' font sizing in all browsers.
    */

  'code, kbd, samp, pre': {
    fontFamily:
      'ui-monospace, SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace,' /* 1 */,
    fontSize: '1em' /* 2 */,
  },

  /**
    Add the correct font size in all browsers.
    */

  small: {
    fontSize: '80%',
  },

  /**
    Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
    */

  'sub, sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },

  sub: {
    bottom: '-0.25em',
  },

  sup: {
    top: '-0.5em',
  },

  /*
    Tabular data
    ============
    */

  /**
    1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
    2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
    */

  table: {
    textIndent: 0 /* 1 */,
    borderColor: 'inherit' /* 2 */,
  },

  /*
    Forms
    =====
    */

  /**
    1. Change the font styles in all browsers.
    2. Remove the margin in Firefox and Safari.
    */

  'button, input, optgroup, select, textarea': {
    fontFamily: 'inherit' /* 1 */,
    fontSize: '100%' /* 1 */,
    lineHeight: 1.15 /* 1 */,
    margin: 0 /* 2 */,
  },

  /**
    Remove the inheritance of text transform in Edge and Firefox.
    1. Remove the inheritance of text transform in Firefox.
    */

  'button, select': {
    /* 1 */ textTransform: 'none',
  },

  /**
    Correct the inability to style clickable types in iOS and Safari.
    */

  button: {
    appearance: 'button',
  },

  /**
    Remove the inner border and padding in Firefox.
    */

  '::-moz-focus-inner': {
    borderStyle: 'none',
    padding: 0,
  },

  /**
    Restore the focus styles unset by the previous rule.
    */

  ':-moz-focusring': {
    outline: '1px dotted ButtonText',
  },

  /**
    Remove the additional ':invalid' styles in Firefox.
    See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
    */

  ':-moz-ui-invalid': {
    boxShadow: 'none',
  },

  /**
    Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
    */

  legend: {
    padding: 0,
  },

  /**
    Add the correct vertical alignment in Chrome and Firefox.
    */

  progress: {
    verticalAlign: 'baseline',
  },

  /**
    Correct the cursor style of increment and decrement buttons in Safari.
    */

  '::-webkit-inner-spin-button, ::-webkit-outer-spin-button': {
    height: 'auto',
  },

  /**
    Remove the inner padding in Chrome and Safari on macOS.
    */

  '::-webkit-search-decoration': {
    appearance: 'none',
  },

  /**
    1. Correct the inability to style clickable types in iOS and Safari.
    2. Change font properties to 'inherit' in Safari.
    */

  '::-webkit-file-upload-button': {
    appearance: 'button' /* 1 */,
    font: 'inherit' /* 2 */,
  },

  /*
    Interactive
    ===========
    */

  /*
    Add the correct display in Chrome and Safari.
    */

  summary: {
    display: 'list-item',
  },

  /**
   * 1. Prevent padding and border from affecting element width.
   *
   *    We used to set this in the html element and inherit from
   *    the parent element for everything else. This caused issues
   *    in shadow-dom-enhanced elements like <details> where the content
   *    is wrapped by a div with box-sizing set to `content-box`.
   *
   *    https://github.com/mozdevs/cssremedy/issues/4
   *
   *
   * 2. Allow adding a border to an element by just adding a border-width.
   *
   *    By default, the way the browser specifies that an element should have no
   *    border is by setting it's border-style to `none` in the user-agent
   *    stylesheet.
   *
   *    In order to easily add borders to elements by just setting the `border-width`
   *    property, we change the default border-style for all elements to `solid`, and
   *    use border-width to hide them instead. This way our `border` utilities only
   *    need to set the `border-width` property instead of the entire `border`
   *    shorthand, making our border utilities much more straightforward to compose.
   *
   *    https://github.com/tailwindcss/tailwindcss/pull/116
   */

  '*, ::before, ::after': {
    boxSizing: 'border-box' /* 1 */,
    borderWidth: 0 /* 2 */,
    borderStyle: 'solid' /* 2 */,
    borderColor: '#e5e7eb' /* 2 */,
  },
};

export default reset;
