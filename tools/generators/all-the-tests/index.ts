import {
  formatFiles,
  generateFiles,
  names,
  Tree,
  updateJson,
} from '@nrwl/devkit';
import { Linter } from '@nrwl/linter';
import { libraryGenerator } from '@nrwl/react';
import { resolve } from 'path';

interface Schema {
  count: number;
  name: string;
  startAt: number;
}

export default async function (tree: Tree, schema: Schema) {
  for (let idx = schema.startAt || 0; idx < schema.count; idx++) {
    const libName = `${schema.name}-${idx}`;
    const libDir = `./libs/${libName}`;
    await libraryGenerator(tree, {
      importPath: `@test-all-the-tests/${libName}`,
      linter: Linter.EsLint,
      skipFormat: true,
      skipTsConfig: false,
      style: 'css',
      name: libName,
      unitTestRunner: 'none',
      publishable: true,
      component: true,
    });
    const n = names(libName);
    generateFiles(tree, resolve(__dirname, 'files'), libDir, {
      ...n,
      tpl: '',
    });

    const testFile = tree.read(`${libDir}/src/lib/${n.fileName}.test.tsx`);

    for (let i = 0; i < 25; i++) {
      tree.write(`${libDir}/src/lib/${n.fileName}-${i}.test.tsx`, testFile);
    }

    updateJson(tree, `${libDir}/package.json`, (json) => {
      json = {
        ...json,
        scripts: {
          test: 'vitest run',
          'test:watch': 'vitest watch',
          'test:ui': 'vitest watch --ui',
        },
      };

      return json;
    });
  }
  return () => {
    formatFiles(tree);
  };
}
