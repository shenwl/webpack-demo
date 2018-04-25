import san from 'san'
import Hello from './component/hello.js'

let hello = new Hello({
    data: {
        text: 'World'
    }
})

hello.attach(document.getElementById('root'))


