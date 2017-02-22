

const nodeEval = require('node-eval');
const parseDeps = require('@bem/deps/lib/formats/deps.js/parser');
const buildGraph = require('@bem/deps/lib/buildGraph.js');
const bemNaming = require('@bem/naming');
const bemFsScheme = require('@bem/fs-scheme');
const BemCell = require('@bem/cell');
const BemEntityName = require('@bem/entity-name');

const createBemCell = bemEntity => new BemCell({
    entity: new BemEntityName(bemEntity.entity),
    tech: bemEntity.tech
});

/**
 *
 * @param {String} context - string representation of BEM entity, e.g. block_mod_val
 * @param {String} source - source code of .deps.js un utf-8 encoding
 * @param {Object} options
 * @param {String} options.scheme='nested'
 * @param {String} options.naming='origin'
 * @param {Array} options.techs
 * @return {Array<String>}
 */
const simplifyDeps = (context, source, options = {}) => {
    let scheme = options.scheme || 'nested';
    let naming = options.naming || 'origin';
    let techs = ['deps.js'].concat(options.techs);

    let bemFs = bemFsScheme(scheme);

    let bemEntity = bemNaming.parse(context);
    let bemDeps = nodeEval(source);
    let bemGraph = parseDeps([{entity: bemEntity, data: bemDeps}]);
    let normalized = techs.reduce((acc, tech) => {
        return acc.concat(buildGraph(bemGraph).dependenciesOf(bemEntity, tech));
    }, []);

    return normalized.map(entity =>
        bemFs.path(createBemCell(entity), {naming}));
};

module.exports = simplifyDeps;

