// importamos la funcion que vamos a testear
import {homePage} from '../src/lib/components/homePage.js';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
let dom
let container
describe('index.html', () => {
  beforeEach(() => {
    // Constructing a new JSDOM with this option is the key
    // to getting the code in the script tag to execute.
    // This is indeed dangerous and should only be done with trusted content.
    // https://github.com/jsdom/jsdom#executing-scripts
    dom = new JSDOM(html, { runScripts: 'testInception' })
    container = dom.window.document.body
  });
});
/* describe('testing route functions', () => {
  it('should return type bolean', () => {
    expect(typeof userFound).toBe('bolean');
  });
}); */
container.getElementById('root').innerHTML = homePage();
it('renders a button element', () => {
  expect(container.querySelector('button')).not.toBeNull()
  expect(getByText(container, 'Iniciar Sesión')).toBeInTheDocument()
});
