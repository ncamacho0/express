module.exports = app => {
  app.listen(app.get("port"), () => {
    console.log(`Ntask API - Port ${app.get("port")}`);
  });
};