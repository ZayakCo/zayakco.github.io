let open = false
const mTab = document.getElementById('m-tab')
const items = document.querySelectorAll('.m-item')

function mOpen() {

    if (open == false) {

        mTab.style.zIndex = '1';
        mTab.classList.add('extend')

        items.forEach(e => {

            e.classList.remove('go-away')
            
        });

        open = true

    }else if (open == true) {

        mTab.style.zIndex = '-1';
        mTab.classList.remove('extend')

        items.forEach(e => {

            e.classList.add('go-away')
            
        });

        open = false

    }
    
}