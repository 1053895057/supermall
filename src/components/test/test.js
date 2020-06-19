export default {
    name:'Test',
    props:{
        componentMsg:{
            type:String,
            default:''
        }
    },
    data(){
        return {

        }
    },
    beforeCreate() {
        console.log('beforeCreate')
      },
      created() {
        console.log('created')
        this.toast()
      },
      beforeMount() {
        console.log('beforeMount')
      },
      mounted() {
        console.log('mounted')
      },
     methods:{
         toast(e){
             console.log(e)
         }
     },
     render(h){
         console.log('render')
         return(
            <div class="renderComponent">
                <div class="renderComponentred">
                {this.componentMsg}  
                </div>
                <input v-model={this.componentProps}/>
                {
                //创建新的div节点并且绑定对应的class和style和slot插槽
                    h(
                        'div',
                        {
                            class:[
                                !this.componentMsg?'font-big':'',
                                this.componentMsg?'font-weight':''
                            ],
                            style:{
                                color:'#fa0'
                            }
                        },
                        this.$slots.a
                    )
                }  
                <div id="yellow">
                    {this.componentMsg}
                </div> 
                {
                    h(
                        'div',
                        {
                            staticClass:'font-samll',
                            style:{color:'pink'},
                            on: {
                                click: () => this.toast(true)
                            }
                        },[
                            'ssss',
                            this.$slots.b
                        ]
                        
                    )
                }
            </div>
        
         )
     }

}