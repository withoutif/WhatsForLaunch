export default ({ body, title, initialState }) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <style type="text/css">
        body {
            background-image: url(https://cdn.spacetelescope.org/archives/images/publicationjpg/opo0328a.jpg);
            background-size: cover;
        }
    </style>
    
        <script crossorigin >window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
        <link rel="stylesheet" href="/assets/index.css" />
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>
      <script crossorigin src="/assets/bundle.js"></script>
    </html>
  `;
};