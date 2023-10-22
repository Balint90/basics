// $('#app').click(() => {
//     $('#app').html('Balint Csertan');
// }).html('Click me')

$(document).ready(() => {
    const elements = $('div');
    console.log(elements);
    console.log(elements[1]);
    
    elements.html('hello');
    
    const elementWithClass = $('.div2');
    console.log(elementWithClass);
    
    const elementWithId = $('#div3');
    console.log(elementWithId);
    
    console.dir(document);
})