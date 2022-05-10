console.log('It is working!')

function doStuff(){
    // go get that CTA Button
    const cta=document.querySelector('.cta-button');
    // Set the display propperty in style to "None" (hides the button)
    cta.style.display='none';

    //create a new paragraph element
    let message = document. createElement('p');

    //adding this text inside our new paragraph element
    message.innerHTML = 'Your Order has been Placed';

    // find the section tag and add to the end a child our new paragraph
    document.querySelector('section'). appendChild(message);

}