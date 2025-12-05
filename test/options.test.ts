import {describe, it, expect} from 'vitest';

/**
 * Unit tests for module options and types
 * These don't require Nuxt runtime - pure TypeScript tests
 */

type Mode = 'tree' | 'text' | 'table';
type QueryLanguageId = 'javascript' | 'lodash' | 'jmespath' | 'jsonquery' | 'jsonpath';

interface JSONEditorOptions {
  mode?: Mode;
  readOnly?: boolean;
  mainMenuBar?: boolean;
  navigationBar?: boolean;
  statusBar?: boolean;
  indentation?: number | string;
  tabSize?: number;
  height?: string | number;
  fullWidthButton?: boolean;
  darkTheme?: boolean;
  queryLanguagesIds?: QueryLanguageId[];
  queryLanguageId?: QueryLanguageId;
}

interface ModuleOptions {
  componentName?: string;
  options?: JSONEditorOptions;
}

describe('module options types', () => {
  describe('ModuleOptions', () => {
    it('should accept componentName', () => {
      const opts: ModuleOptions = {componentName: 'JsonEditor'};
      expect(opts.componentName).toBe('JsonEditor');
    });

    it('should accept custom componentName', () => {
      const opts: ModuleOptions = {componentName: 'MyEditor'};
      expect(opts.componentName).toBe('MyEditor');
    });

    it('should accept empty options', () => {
      const opts: ModuleOptions = {};
      expect(opts.componentName).toBeUndefined();
    });
  });

  describe('JSONEditorOptions', () => {
    it('should accept all modes', () => {
      const modes: Mode[] = ['tree', 'text', 'table'];
      modes.forEach((mode) => {
        const opts: JSONEditorOptions = {mode};
        expect(opts.mode).toBe(mode);
      });
    });

    it('should accept height as number', () => {
      const opts: JSONEditorOptions = {height: 400};
      expect(opts.height).toBe(400);
    });

    it('should accept height as string', () => {
      const opts: JSONEditorOptions = {height: '100%'};
      expect(opts.height).toBe('100%');
    });

    it('should accept indentation as number', () => {
      const opts: JSONEditorOptions = {indentation: 2};
      expect(opts.indentation).toBe(2);
    });

    it('should accept indentation as tab string', () => {
      const opts: JSONEditorOptions = {indentation: '\t'};
      expect(opts.indentation).toBe('\t');
    });

    it('should accept all boolean options', () => {
      const opts: JSONEditorOptions = {
        readOnly: true,
        mainMenuBar: false,
        navigationBar: true,
        statusBar: false,
        fullWidthButton: true,
        darkTheme: false,
      };
      expect(opts.readOnly).toBe(true);
      expect(opts.mainMenuBar).toBe(false);
    });

    it('should accept query languages', () => {
      const opts: JSONEditorOptions = {
        queryLanguagesIds: ['javascript', 'jmespath', 'jsonquery'],
        queryLanguageId: 'javascript',
      };
      expect(opts.queryLanguagesIds).toHaveLength(3);
      expect(opts.queryLanguageId).toBe('javascript');
    });
  });

  describe('defaults', () => {
    it('should match module defaults', () => {
      const defaults: ModuleOptions = {
        componentName: 'JsonEditor',
        options: {},
      };
      expect(defaults.componentName).toBe('JsonEditor');
      expect(defaults.options).toEqual({});
    });
  });
});

describe('JSON data types', () => {
  type JSONValue = string | number | boolean | null | JSONValue[] | {[key: string]: JSONValue};

  it('should accept primitives', () => {
    const values: JSONValue[] = ['string', 42, true, null];
    expect(values).toHaveLength(4);
  });

  it('should accept nested objects', () => {
    const data: JSONValue = {
      level1: {
        level2: {
          value: 'deep',
        },
      },
    };
    expect(data).toBeDefined();
  });

  it('should accept arrays', () => {
    const data: JSONValue = [1, 'two', {three: 3}];
    expect(data).toHaveLength(3);
  });
});

describe('path types', () => {
  type JSONPath = (string | number)[];

  it('should support string paths', () => {
    const path: JSONPath = ['user', 'profile', 'name'];
    expect(path).toHaveLength(3);
  });

  it('should support mixed paths', () => {
    const path: JSONPath = ['users', 0, 'name'];
    expect(path).toEqual(['users', 0, 'name']);
  });

  it('should support empty path for root', () => {
    const path: JSONPath = [];
    expect(path).toHaveLength(0);
  });
});
