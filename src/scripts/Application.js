import View from './View';
import Model from './Model';
import Controller from './Controller';


const app = new Controller(new Model(), new View());
app.run();
