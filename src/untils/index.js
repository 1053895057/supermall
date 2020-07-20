export default ()=>{
  let script=document.createElement('script')
  script.setAttribute("defer","defer")
  script.src="//cdn.jsdelivr.net/npm/eruda"
  document.body.appendChild(script)
  localStorage.setItem('eruda-dev-tools', JSON.stringify({transparency: 1, displaySize: 80,theme: "Arc Dark", tinyNavBar: true, activeEruda: false, navBarBgColor: "#2196f3"}))
  script.onload=function(){
    window.eruda.init()
    const util=window.eruda.util
    const info=window.eruda._$el.find('#eruda-info li')
    util.$css(info[0],'position','relative')
    util.$insert.prepend(info[0], '<button class="copy-btn">复制</button>')
    const btn=info.find('.copy-btn')
    util.$css(btn[0],{
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: '#dedede',
        color: '#42A5F5',
        border: 'none',
        width: '60px',
        height: '25px',
        'border-radius': '20px'
    })
    util.$event.on(btn[0], 'click', ()=>{
        util.copy(location.href,()=>{
            util.$(btn[0]).html('已复制')
        })
    })

  }
}