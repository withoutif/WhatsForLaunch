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
        img {
           height: 100px;
        }
         #root {
            display: flex;
            justify-content: space-evenly;
         }
        .drawer-header {
            width: 720px;
            border-bottom: 1px solid darkslategray;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: sans-serif;
            height: 100px;
            background: linear-gradient(to left, #ffffff, rgba(0,0,0,0.2));
        }

        .Collapsable {
            background: linear-gradient(to left, #ffffff, rgba(0,0,0,0.1));
        }

        .Collapsible__contentInner {
            margin: 20px;
            padding: 20px;
            -webkit-mask-composite: plus-lighter;
            background: #ffffff4d;
            background-clip: border-box;
            overflow-y: scroll;
            max-height: 180px;
        }
        .Collapsible__contentOuter {
            width: 732px;
            border: 2px solid darkslategray;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: sans-serif;
        }
            ul.pagination {
            color: white;
            display: flex;
            justify-content: space-around;
            width: 720px;
        }
        .selected-fave {
            background-color: red;
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