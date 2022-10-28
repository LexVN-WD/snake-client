const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    conn.write("Name: AVN");
  });

  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     conn.write("Move: up")
  //   }, 50)
  // });

  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     conn.write("Move: up")
  //   }, 100)
  // });

  // conn.on("connect", () => {
  //   setInterval(() => {
  //     conn.write("Move: up")
  //   }, 50)
  // });




  return conn;
};

module.exports = {connect};