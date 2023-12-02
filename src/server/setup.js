const serverSetup = (app, cors, express) => {
  app.use(cors());
  app.use(express.json());
};

const serverConfigure = (req, res) => {
  console.log("server up and runing");
};

module.exports = { serverSetup, serverConfigure };
