export default {
    props: {
        type: {
            type: String,
            default: 'success'
        },
        text: {
            type: String,
            default: 'normal'
        }
    },
    computed: {
        tag() {
            switch (this.type) {
                case 'success':
                    return 1
                case 'danger':
                    return 2
                case 'warning':
                    return 3
                default:
                    return 1
            }
        }
    },
    render(h) {
        return h('div', {
            class: {
                btnBox: true,
                'btn-success': this.type == 'success',
                'btn-danger': this.type == 'danger',
                'btn-warning': this.type == 'warning'
            },
            domProps: {
                title: 'btn',
                // innerText: this.text,
                // innerHtml:`<button>点击</button>`
            },
            on: {
                click: this.handleClick
            }
        },
        [
            h('button',{
                domProps:{
                    innerText:this.text
                },
                class:{
                    btn:true
                },
                props:{
                    datType:'btn'
                }
            })
        ])
    },
    methods: {
        handleClick() {
            console.log('-----------------')
        }
    }

}