import React from 'react';
import $ from 'jquery';

function UserJquery(){
    function input_alert(e){
        let input_val = $('#inputId').val();
        $("#conBox").text(input_val);
        //alert(input_val);
    }
    return(
        <div>
            <input id="inputId" name="inputName" />
            <button id="buttonId" onClick={() =>input_alert()}>
                Jquery Button
            </button><br />
            <div id="conBox"></div>
        </div>
    );
}

export default UserJquery;