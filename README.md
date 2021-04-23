# components-global-vue3
Registrar componentes globales en Vue3
- Si trabajas con PHP(Laravel) y Vue3, quisas necesites registrar los componentes de manera global y tener en archivos separados los Componentes y las Paginas.
```
import {createApp} from 'vue'; ;

import globalComponenst from './components/index'

const app = createApp({}) 
 
globalComponenst(app)
//Registra el componente Pagina
//app.component('page-pos-cash',require('./views/dashboard/index.vue').default)

app.mount("#app")
```

```
import ModalComponent  from './modal/index.vue' 
import ButtonComponent from "./button/index.vue";
import FormInputComponent from "./form/input.vue"; 
 
export default (app) => {
    app.component('mdf-modal' , ModalComponent)  
    app.component('mdf-button' , ButtonComponent)
    app.component('mdf-input' , FormInputComponent)  
}
```
