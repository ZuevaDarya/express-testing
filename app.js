export default function appSrc(express, bodyParser, puppeteer) {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS, DELETE');
    res.header('Content-Type', 'text/plain; charset=UTF-8')
    next();
  });

  app.get('/login/', (req, res) => {
    res.send('zdarya');
  });

  app.get('/test/', async (req, res) => {
    const URL = req.query.URL || req.body.URL;
    
    const response = await fetch(URL);
    if (response.ok) {
      const inp = document.getElementById('inp');
      const btn = document.getElementById('bt');

      btn.addEventListener('click', async () => {
        const inpVAlue = inp.value;
        res.send(inpVAlue);
      });
    } else console.log('ERROR');
  });

  app.all('*', (req, res) => {
    res.send('zdarya');
  });

  return app;
}
