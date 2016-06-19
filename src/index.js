import Config from 'config';

export default ({ template, types: t }) => ({
  visitor: {
    MemberExpression(path) {
      if (path.get('object').matchesPattern('process.env')) {
        const key = path.toComputedKey();
        if (t.isStringLiteral(key) && key.value === 'NODE_CONFIG') {
          path.replaceWith(template(`(${JSON.stringify(Config)})`)());
        }
      }
    },
  },
});
