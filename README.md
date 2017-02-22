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
simlify('button', source);
```

```js
[ 'jquery__event',
  'jquery__event_type',
  'i-bem-dom',
  'button',
  'button',
  'button_focused',
  'control',
  'button_disabled',
  'button_pressed',
  'button__text',
  'jquery__event',
  'button_hovered',
  'jquery__event_type_pointer',
  'keyboard__codes',
  'functions',
  'events',
  'jquery__event_type' ]

```


[bem-components/button/button.deps.js]: https://github.com/bem/bem-components/blob/v5/common.blocks/button/button.deps.js
