'use strict'
{
  // ja Move Timing is after loading
  window.onload = function () {
    /*
     * Global Use const
     * 1: DarkLight-Mode / Change Color-Scheme & Save LocalStorage Color State
     * 2: ResizeView
     */
    const preview = document.getElementById('previewArea')
    const toggleMode = document.getElementById('toggleMode')
    /* Change Dark/Light-Mode color-scheme save LocalStorage */
    {
      // get Status on loading
      let ColorActive = localStorage.getItem('ColorActive')
      // Toggle Color Status
      const enableColorActive = () => {
        localStorage.setItem('ColorActive', 'enable')
        preview.classList.add('onColorLight')
        toggleMode.classList.add('on')
        toggleMode.innerHTML = 'Light'
      }
      const disableColorActive = () => {
        localStorage.setItem('ColorActive', null)
        preview.classList.remove('onColorLight')
        toggleMode.classList.remove('on')
        toggleMode.innerHTML = 'Dark'
      }
      if (ColorActive === 'enable') {
        enableColorActive()
      } else {
        disableColorActive()
      }
      // Event
      toggleMode.addEventListener('click', () => {
        if (preview.classList.contains('onColorLight')) {
          preview.classList.remove('onColorLight')
        } else {
          preview.classList.add('onColorLight')
        }
        // LocalStorage
        ColorActive = localStorage.getItem('ColorActive')
        if (ColorActive !== 'enable') {
          enableColorActive()
        } else {
          disableColorActive()
        }
      })
    }
    /* End Change Dark/Light-Mode color-scheme save LocalStorage */

    /* Get Resize on Preview-Window for BreakPoint */
    {
      const windowSizeView = document.getElementById('windowSizeView')
      // first view size
      const w = preview.clientWidth
      if(w < 1){
        windowSizeView.innerHTML = ('size...')
      }else{
        windowSizeView.innerHTML = w + 'px'
      }
      // Size View UI on CSS
      const classes = ['min', 'sm', 'md', 'lg', 'xl']

      // Resizing 横幅のハンドルバー操作中にサイズ幅をタグに表示
      window.addEventListener('resize', function (event) {
        /* for Resize, SetTimer for Performance  */
        let clientWidth = preview.clientWidth
        // view size-text
        const value = (x) => {
          return (windowSizeView.innerHTML = clientWidth + x)
        }
        // Change className
        const sizeColor = (c) => {
          return windowSizeView.classList.add(c)
        }
        // reset classList
        windowSizeView.classList.remove(...classes)
        // View Styling & Change Device
        if (clientWidth > 1440) {
          sizeColor('xl')
          value('px DeskTop-PC')
        } else if (clientWidth > 1024) {
          sizeColor('lg')
          value('px Note-PC')
        } else if (clientWidth > 768) {
          sizeColor('md')
          value('px SP-Tablet')
        } else if (clientWidth > 480) {
          sizeColor('sm')
          value('px SP')
        } else if (clientWidth < 481) {
          sizeColor('min')
          value('px Small-SP')
        } else {
          windowSizeView.classList.remove(...classes)
        }
        // console.log(clientWidth)
        let resizeTimer
        if (!resizeTimer) {
          clearTimeout(resizeTimer)
        }
        resizeTimer = setTimeout(function () {
          onResize()
        }, 800)
      })
      // リサイズ後の処理 = 0.8秒後にリサイズ処理のクリア
      function onResize() {}
    }
    /* End Get Resize  */
  }
}
