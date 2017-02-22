

const nodeEval = require('node-eval');
const parse = require('@bem/deps/lib/formats/deps.js/parser');
const build = require('@bem/deps/lib/buildGraph.js');
const bemNaming = require('@bem/naming');
const BemEntityName = require('@bem/entity-name');

function simplifyDeps(context, source, tech = '') {
    let bemEntity = bemNaming.parse(context);
    let deps = nodeEval(source);
    let graph = parse([{entity: bemEntity, data: deps}]);
    // FIXME: кажется последний параметр .dependenciesOf пока вообще не важен, но возможно будет важен с bemgtml
    // Если в deps.js файла указано js зависит от bemhtml, и вызвать graph.dependenciesOf(decl, 'js') то да, он это учтёт и вернёт bemhtml тоже
    // https://github.com/bem-sdk/bem-graph#bemgraphdependenciesof
    let normalized = build(graph).dependenciesOf(bemEntity, tech);

    return normalized.map((entity) =>
        bemNaming.stringify(new BemEntityName(entity.entity)));
}

module.exports = simplifyDeps;
