import { Tag, H1, P, CodeExample } from "chalkboard-ui";

export function TagPage() {
  return (
    <div>
      <div className="mb-8">
        <H1>Tag</H1>
        <P className="mt-2 text-chalkboard-foreground/70">
          Tags are used to label and categorize content. They work well for
          indicating properties, categories, or status of items like blog posts,
          products, or tasks.
        </P>
      </div>

      <div className="space-y-8">
        <CodeExample
          title="Basic Usage"
          code={`<Tag>Travel</Tag>
<Tag>Technology</Tag>
<Tag>Design</Tag>`}
        >
          <div className="flex flex-wrap gap-2">
            <Tag>Travel</Tag>
            <Tag>Technology</Tag>
            <Tag>Design</Tag>
          </div>
        </CodeExample>

        <CodeExample
          title="With Icons"
          code={`<Tag icon="star">Featured</Tag>
<Tag icon="user">Author</Tag>
<Tag icon="home">Local</Tag>
<Tag icon="mail">Newsletter</Tag>`}
        >
          <div className="flex flex-wrap gap-2">
            <Tag icon="star">Featured</Tag>
            <Tag icon="user">Author</Tag>
            <Tag icon="home">Local</Tag>
            <Tag icon="mail">Newsletter</Tag>
          </div>
        </CodeExample>

        <CodeExample
          title="In Context"
          code={`// Blog post tags
<article>
  <h3>My Trip to Japan</h3>
  <div className="flex gap-2">
    <Tag icon="star">Featured</Tag>
    <Tag>Travel</Tag>
    <Tag>Asia</Tag>
  </div>
</article>`}
        >
          <div className="rounded-lg border border-chalkboard-secondary bg-white p-4">
            <P className="mb-2 font-semibold">My Trip to Japan</P>
            <P className="mb-3 text-sm text-chalkboard-foreground/70">
              A two-week adventure through Tokyo, Kyoto, and Osaka...
            </P>
            <div className="flex flex-wrap gap-2">
              <Tag icon="star">Featured</Tag>
              <Tag>Travel</Tag>
              <Tag>Asia</Tag>
            </div>
          </div>
        </CodeExample>

        <CodeExample
          title="Multiple Tags"
          code={`<Tag>React</Tag>
<Tag>TypeScript</Tag>
<Tag>Tailwind CSS</Tag>
<Tag>Vite</Tag>
<Tag>Node.js</Tag>`}
        >
          <div className="flex flex-wrap gap-2">
            <Tag>React</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Tailwind CSS</Tag>
            <Tag>Vite</Tag>
            <Tag>Node.js</Tag>
          </div>
        </CodeExample>
      </div>
    </div>
  );
}
