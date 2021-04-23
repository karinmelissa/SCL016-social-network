import router from '../src/route.js';

/*import {router} from '../src/route.js';*/

describe('Pruebas de navegacion', () => {
  it('Rutas protegidas por sesion', () => {

    router.userVerification = jest.fn();
    router.showTemplate = jest.fn();

    //Sin sesion
    router.userVerification.mockImplementation(() => false);

    window.location.hash = '#/profile';
    router.changeRouter('#/profile');
    expect(window.location.hash).toBe('');

    window.location.hash = '#/home';
    router.changeRouter('#/home');
    expect(window.location.hash).toBe('');

    //Con sesion

    router.userVerification.mockImplementation(() => true);

    window.location.hash = '#/profile';
    router.changeRouter('#/profile');
    expect(window.location.hash).toBe('#/profile');

    window.location.hash = '#/home';
    router.changeRouter('#/home');
    expect(window.location.hash).toBe('#/home');

  });
});

// importamos la funcion que vamos a testear
/* import {homePage} from '../src/lib/components/homePage.js';

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
 describe('testing route functions', () => {
  it('should return type bolean', () => {
    expect(typeof userFound).toBe('bolean');
  });
});
container.getElementById('root').innerHTML = homePage();
it('renders a button element', () => {
  expect(container.querySelector('button')).not.toBeNull()
  expect(getByText(container, 'Iniciar Sesión')).toBeInTheDocument()
});

*/
