const app = require('fastify')({
    logger: true
  });
  
  app.register(require('@fastify/static'), {
    root: __dirname 
  })

  app.get('/', async (request, reply) => {
    reply.sendFile('font.ttf',{ cacheControl: false })
  })

  app.listen(3000, (err, address) => {
    if (err) {
      throw err
    }
    console.log( "Server is now listening on " + address);
  })
  module.exports = app; // make sure to export your `app` instance.