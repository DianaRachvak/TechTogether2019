/*import React, { Component } from 'react';
import typeformEmbed from '@typeform/embed'

class Survey extends Component {


    componentDidMount(){

        console.log(typeformEmbed);

        const embedElement = document.querySelector('.js-typeform-embed')
    
        typeformEmbed.makeWidget(
            embedElement,
            'https://rachelchen2.typeform.com/to/P40bQl',
            {
              opacity: 55,
              buttonText: "Answer this!",
              hideScrollbars: true,
              onSubmit: function () {
                console.log('Typeform successfully submitted')
              }
            }
          )

        /*const popup1 = typeformEmbed.makePopup(
        'https://rachelchen2.typeform.com/to/P40bQl',
        {
            mode: 'popup',
            autoClose: 3000,
            hideHeaders: true,
            hideFooters: true,
            onSubmit: function(){
                console.log('Typeform successfully submitted')
            }
        }
        )
        document.getElementById('bt-popup').addEventListener('click', function(){
            popup1.open();
        });*/
    //}

    //render(){
    //    return(
    //        <div>
    //            <button id='bt-popup' class='my-button'>popup</button>
    //        </div>  
    //    )
    //}
//}

//export default Survey;

import React, { Component } from 'react'
//import typeformEmbed from '@typeform/embed'
import * as typeformEmbed from '@typeform/embed'

class Survey extends Component {
    componentDidMount(){


        const embedElement = document.querySelector('.js-typeform-embed')

        typeformEmbed.makeWidget(
            embedElement,
            'https://rachelchen2.typeform.com/to/P40bQl',
            {
              opacity: 55,
              buttonText: "Answer this!",
              hideScrollbars: true,
              onSubmit: function () {
                console.log('Typeform successfully submitted')
              }
            }
          )

        // const popup1 = typeformEmbed.makePopup(
        // 'https://rachelchen2.typeform.com/to/P40bQl',
        // {
        //     mode: 'popup',
        //     autoClose: 3000,
        //     hideHeaders: true,
        //     hideFooters: true,
        //     onSubmit: function(){
        //         console.log('Typeform successfully submitted')
        //     }
        // }
        // )
        // document.getElementById('bt-popup').addEventListener('click', function(){
        //     popup1.open();
        // });
    }

    render(){
        return(
            <div>
                <button id='bt-popup' class='my-button'>popup</button>
            </div>  
        )
    }
}

export default Survey;