let names= prompt('ismingizni kiriting');

const messages = document.getElementById('messages')
var mmessages=document.getElementById('mmessages')
var textbox = document.getElementById('textbox')
var button = document.getElementById('button')
var r= 0
var val=textbox.value
var url = 'https://615c38b4c298130017735fee.mockapi.io/api/v1/users'
var ul=document.createElement('ul')



function sent(){
    if(textbox.value!=''){
        
        
        var obj={
            ism:names,
            xabar:textbox.value
        }

        fetch('https://615c38b4c298130017735fee.mockapi.io/api/v1/user', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        }).then(function (data) {
            r=data.id
            
            
        }).catch(function (error) {
            console.warn('Something went wrong.', error);
        });

        
        textbox.value=''
}
}
button.addEventListener('click', sent)

document.body.addEventListener('keypress', (e)=>{
    if(e.keyCode==13){
        sent()
    }
    textbox.focus()
})

var l = ''
function responsee() {
    fetch('https://615c38b4c298130017735fee.mockapi.io/api/v1/user')
        .then(response => response.json())
        .then(data => {
            l=data.length
            ul.innerHTML=''
            for (let indek = 0; indek <=r; indek++) {
            
                var p = document.createElement('p')
                var li= document.createElement('li')
                
                li.appendChild(p)
                p.innerHTML=data[indek].ism + ': ' + data[indek].xabar
                ul.appendChild(li)
                mmessages.innerHTML=ul.outerHTML
            }
        }
        )
        

        
}


setInterval(responsee, 2000)

