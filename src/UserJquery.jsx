import React from 'react';
import $ from 'jquery';

function UserJquery(){
    const person ={
        name: 'song',
        saySong: 'abc',
        sayHello:function(){
            console.log('hello', this);
            const that = this;
            // eslint-disable-next-line no-undef
            setTimeout(function(){
                console.log(this);
                console.log(that);
            });
        },
    };
    function input_alert(e){
        let input_val = $('#inputId').val();
        $("#conBox").text(input_val);
        person.sayHello()
        
        // alert($(this).e);
    }
    return(
        <div>
            <input id="inputId" name="inputName" type="text" />
            <button id="buttonId" onClick={() => input_alert()}>jquery Button</button><br />
            <div id="conBox"></div>
        </div>
    );
}

export default UserJquery;