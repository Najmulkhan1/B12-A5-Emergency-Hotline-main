// innerText function
function innerTxt (id){
   const innertext = document.getElementById(id).innerText

   return innertext
}

// select all elements with class "heard-click", "copy-btn"
const hardClick = document.getElementsByClassName('heard-click')
const copyBtn = document.getElementsByClassName('copy-btn')

// loop

for(let click of hardClick){
    click.addEventListener('click',function(){
        // const hard = document.getElementById('current-hart').innerText
        const hard = innerTxt('current-hart')
        let hardConverted = parseInt(hard)
        
        hardConverted++

        document.getElementById('current-hart').innerText = hardConverted
        
    })
}