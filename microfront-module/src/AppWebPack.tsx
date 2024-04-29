import r2wc from "@r2wc/react-to-web-component";
import App from './App';

const ModuleWebComponent = r2wc(App);

customElements.define('module-example', ModuleWebComponent);