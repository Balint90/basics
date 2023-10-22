// $('#app').click(() => {
//     $('#app').html('Balint Csertan');
// }).html('Click me')

$(document).ready(() => {
    const elements = $('div');
    console.log('elements', elements);
    console.log('elements[1]', elements[1]);
    
    elements.html('hello');
    
    const elementWithClass = $('.div2');
    console.log('elementWithClass', elementWithClass);
    
    const elementWithId = $('#div3');
    console.log('elementWithId', elementWithId);
    
    const multipleElements = $('#div3, .div2');
    console.log('multipleElements', multipleElements);
    
    console.dir(document);
})