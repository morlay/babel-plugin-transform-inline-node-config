import { expect } from '@morlay/test-utils';
import { transform } from 'babel-core';
import pluginTransformInlineNodeConfig from '../index';

describe('babel-plugin-transform-inline-node-config', () => {
  it('should transform process.env.NODE_CONFIG inline', () => {
    expect(
      transform('const test = process.env.NODE_CONFIG', {
        plugins: [
          pluginTransformInlineNodeConfig,
        ],
        minified: true,
      }).code
    ).to.eql('const test={"key":"value"};');
  });
});
