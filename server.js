let express = require("express");
let path = require("path");
let app = express();

var PORT = process.env.PORT || 6464;

  app.get("*", function(req,res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
  
  // Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

  
  