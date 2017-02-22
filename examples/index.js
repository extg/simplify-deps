

const simlify = require('../index');

let context = 'button';
let source = `[{
    mustDeps : 'i-bem-dom',
    shouldDeps : [
        {
            elems : ['text'],
            mods : { focused : true, hovered : true, disabled : true, pressed : true }
        },
        { block : 'jquery', elem : 'event', mods : { type : 'pointer' } },
        { block : 'keyboard', elem : 'codes' },
        'functions',
        'events',
        'control'
    ]
},
{
    tech : 'spec.js',
    shouldDeps : { tech : 'bemhtml', block : 'button' }
},
{
    tech : 'tmpl-spec.js',
    shouldDeps : [
        { tech : 'bemhtml', block : 'button', mods : { type : 'link' } },
        { tech : 'bemhtml', block : 'icon' }
    ]
}]`;

console.log(simlify(context, source));

// [ 'jquery__event',
//     'jquery__event_type',
//     'i-bem-dom',
//     'button',
//     'button',
//     'button_focused',
//     'control',
//     'button_disabled',
//     'button_pressed',
//     'button__text',
//     'jquery__event',
//     'button_hovered',
//     'jquery__event_type_pointer',
//     'keyboard__codes',
//     'functions',
//     'events',
//     'jquery__event_type' ]
