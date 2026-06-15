import defaultMdxComponents from "fumadocs-ui/mdx";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    pre: (props) => {
      const codeBlockProps = { ...props };
      delete codeBlockProps.ref;

      return (
        <CodeBlock {...codeBlockProps}>
          <Pre>{props.children}</Pre>
        </CodeBlock>
      );
    },
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
