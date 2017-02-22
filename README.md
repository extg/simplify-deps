# simplify deps

Преобразует файлы `.deps.js`

## Example

**[bem-components/button/button.deps.js]**
```js
[{
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
}]
```

```js
simlify('button', source, ['css']);
```

```js
[ 'jquery/__event/jquery__event.deps.js',
  'jquery/__event/_type/jquery__event_type.deps.js',
  'i-bem-dom/i-bem-dom.deps.js',
  'button/button.deps.js',
  'button/_focused/button_focused.deps.js',
  'control/control.deps.js',
  'button/_disabled/button_disabled.deps.js',
  'button/_pressed/button_pressed.deps.js',
  'button/__text/button__text.deps.js',
  'button/_hovered/button_hovered.deps.js',
  'jquery/__event/_type/jquery__event_type_pointer.deps.js',
  'keyboard/__codes/keyboard__codes.deps.js',
  'functions/functions.deps.js',
  'events/events.deps.js',
  'jquery/__event/jquery__event.css',
  'jquery/__event/_type/jquery__event_type.css',
  'i-bem-dom/i-bem-dom.css',
  'button/button.css',
  'button/_focused/button_focused.css',
  'control/control.css',
  'button/_disabled/button_disabled.css',
  'button/_pressed/button_pressed.css',
  'button/__text/button__text.css',
  'button/_hovered/button_hovered.css',
  'jquery/__event/_type/jquery__event_type_pointer.css',
  'keyboard/__codes/keyboard__codes.css',
  'functions/functions.css',
  'events/events.css' ]


```


[bem-components/button/button.deps.js]: https://github.com/bem/bem-components/blob/v5/common.blocks/button/button.deps.js
