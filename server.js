let express = require("express");
let path = require("path");
let app = express();
let bodyParser = require('body-parser');

let PORT = process.env.PORT || 6464;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use('/static', express.static(path.join(__dirname, 'app/public')))
//   app.get("*", function(req,res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

  // API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
  
  // Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  
  