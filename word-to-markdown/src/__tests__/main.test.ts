import convert from '../main.js';

// Map of fixtures and expected Markdown output
const expectations = {
  em: 'This word is _italic_.',
  strong: 'This word is **bold**.',
  h1: '# Heading 1\n\nParagraph text',
  h2: '## Heading 2\n\nParagraph text',
  p: 'This is paragraph text.',
  'multiple-headings':
    '# H1\n\nParagraph\n\n## H2\n\nParagraph\n\n### H3\n\nParagraph',
  table:
    '| **Foo** | **Bar** |\n| --- | --- |\n| One | Two |\n| Three | Four |',
  ul: '- One\n- Two\n- Three',
  ol: '1. One\n2. Two\n3. Three',
  'nested-ol':
    '1. One\n    1. Sub one\n    2. Sub two\n2. Two\n    1. Sub one\n        1. Sub sub one\n        2. Sub sub two\n    2. Sub two\n3. Three',
  'nested-ul':
    '- One\n  - Sub one\n    - Sub sub one\n    - Sub sub two\n  - Sub two\n- Two',
  'list-with-links':
  'comma after bold': 'This is **bolded**, and text.',
  'text after bold': '**This** is **bolded** _and_ text.',
  'file with space': 'This is paragraph text.',
};

describe('main', () => {
  for (const [fixture, expected] of Object.entries(expectations)) {
    it(`should convert the "${fixture}" fixture to Markdown`, async () => {
      const path = `src/__fixtures__/${fixture}.docx`;
      const md = await convert(path);
      expect(md).toEqual(expected);
    });
  }
});
