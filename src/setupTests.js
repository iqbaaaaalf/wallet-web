//import { configure } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
//
//configure({ adapter: new Adapter() });
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';

configure({ adapter: new Adapter() });
const dom = new jsdom.JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;