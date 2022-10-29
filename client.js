// IMPORTS
const net = require("net");
const { IP, PORT } = require("./constants");

// CONNECT FUNCTION
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    conn.write("Name: AVN");
    // can change AVN to be whatever 3 character initial ythe player would like
    conn.write("Say: ");
    conn.write("Connected to Snake Server");
  });
  return conn;
};

// EXPORTS
module.exports = {
  connect,
};