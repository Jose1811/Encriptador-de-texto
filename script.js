const copy_text = async (text) =>{
    try{
        await navigator.clipboard.writeText(text);
        alert('Texto copiado en el portapapeles!!');
    }catch (e){
        alert('No se pudo copiar el texto!!');
    }
}

function validText(text){
    const valid_text = /^[a-z\s]+$/;
    console.log(text);
    if(valid_text.test(text)){
        return true;
    }else {
        return false
    }
}


function disableContainer(){
    let text_container = document.getElementById('text_container');
    document.getElementById('img_people').style.display = 'none';
    document.getElementById('text_img').style.display = 'none';
    document.getElementById('btn_copy').style.display = 'block';
    return text_container;
}


function encrypt(){
    let msg =  document.getElementById('box_txtarea').value;
    let text_feedback = document.getElementById('text_feedback');
    if(msg === "" || msg === null){
        alert('Ingrese el texto a encriptar');
    }else{
        let isvalid = validText(msg);
        if(!isvalid){
            text_feedback.style.display = 'block';
        }else{
            text_feedback.style.display = 'none';
            let txtencriptar = "";
            let text_container = disableContainer();
            
            for(var i=0; i < msg.length ; i++){
                console.log(msg[i]);
                if(msg[i] === 'e'){
                    txtencriptar += "enter"; 
                }
                else{
                    if(msg[i] === 'i'){
                        txtencriptar += "imes"; 
                    }else{
                        if(msg[i] === 'a'){
                            txtencriptar += "ai"; 
                        }else{
                            if(msg[i] === 'o'){
                                txtencriptar += "ober"; 
                            }else{
                                if(msg[i] === 'u'){
                                    txtencriptar += "ufat"; 
                                }else{
                                    txtencriptar += msg[i];
                                }
                            }
                        }
                    }
                }
            }
            text_container.style.display = 'block';
            text_container.innerHTML = txtencriptar;
        }
    }
}


function decrypt(){
    let msg =  document.getElementById('box_txtarea').value;
    let text_feedback = document.getElementById('text_feedback');
    if(msg === "" || msg === null){
        alert('Ingrese el texto a desencriptar');
    }else{

        let isvalid = validText(msg);
        if(!isvalid){
            text_feedback.style.display = 'block';
        }else{
            text_feedback.style.display = 'none';
            let txtdesencriptar = "";
            let text_container = disableContainer();
        
            for(var i=0; i < msg.length ; i++){
                ;
                if(msg[i] == 'e'){
                    txtdesencriptar = txtdesencriptar + "e";
                    console.log(txtdesencriptar);
                    i = i+4;
                }
                else{
                    if(msg[i] == 'i'){
                        txtdesencriptar = txtdesencriptar + "i";
                        i = i+3;
                    }else{
                        if(msg[i] == 'a'){
                            txtdesencriptar = txtdesencriptar + "a";
                            i= i+1;
                        }else{
                            if(msg[i] == 'o'){
                                txtdesencriptar = txtdesencriptar + "o";
                                i = i+3;
                            }else{
                                if(msg[i] == 'u'){
                                    txtdesencriptar = txtdesencriptar + "u";
                                    i = i+3;
                                }else{
                                    txtdesencriptar += msg[i];
                                }
                            }
                        }
                    }
                }
            }
            text_container.style.display = 'block';
            text_container.innerHTML = txtdesencriptar;
        }    

    }
}


function copyText(){
    let text = document.getElementById('text_container').innerHTML;
    copy_text(text);
}

