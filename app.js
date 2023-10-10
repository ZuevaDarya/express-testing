import { ppid } from "process";

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

    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto(URL);
    await page.waitForSelector('#inp');
    await page.waitForSelector('#bt');
    await page.click('#bt');
    const inpValue = await page.$eval('#inp', inp => inp.value);
    browser.close();

    res.send(inpValue);
  });

  app.all('*', (req, res) => {
    res.send('zdarya');
  });

  return app;
}
