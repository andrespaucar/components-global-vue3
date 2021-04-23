// COMPONENTS GLOBALS 
import ModalComponent  from './modal/index.vue' 
import ButtonComponent from "./button/index.vue";
import FormInputComponent from "./form/input.vue"; 
 
export default (app) => {
    app.component('mdf-modal' , ModalComponent)  
    app.component('mdf-button' , ButtonComponent)
    app.component('mdf-input' , FormInputComponent)  
}
