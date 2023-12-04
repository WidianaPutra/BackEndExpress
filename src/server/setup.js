const Information = {
  version: "1.0.0",
  host: "localhost",
  port: 4000,
  massage: "Selamat bersenang senang",
  information: "Dibuat dengan ExpressJs & Cors",
};

const serverSetup = (app, cors, express) => {
  app.use(cors());
  app.use(express.json());
};

const serverConfigure = (req, res) => {
  console.table(Information);
};

module.exports = { serverSetup, serverConfigure };
