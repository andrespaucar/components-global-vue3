import {createApp} from 'vue'; ;

import globalComponenst from './components/index'

const app = createApp({}) 
 
globalComponenst(app)

app.mount("#app")
