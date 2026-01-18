import { H1, H2, P, Message, CodeExample } from "chalkboard-ui";

export function MessagePage() {
  return (
    <div>
      <div className="mb-8">
        <H1>Message</H1>
        <P className="mt-2 text-chalkboard-foreground/70">
          Messages display feedback to users about actions, states, or important
          information. They come in four semantic variants with appropriate
          icons and colors.
        </P>
      </div>

      <div className="space-y-8">
        <CodeExample
          title="Success"
          code={`<Message variant="success" title="Success!">
  Your changes have been saved successfully.
</Message>`}
        >
          <Message variant="success" title="Success!">
            Your changes have been saved successfully.
          </Message>
        </CodeExample>

        <CodeExample
          title="Error"
          code={`<Message variant="error" title="Error">
  There was a problem processing your request. Please try again.
</Message>`}
        >
          <Message variant="error" title="Error">
            There was a problem processing your request. Please try again.
          </Message>
        </CodeExample>

        <CodeExample
          title="Info"
          code={`<Message variant="info" title="Did you know?">
  You can customize your settings in the preferences panel.
</Message>`}
        >
          <Message variant="info" title="Did you know?">
            You can customize your settings in the preferences panel.
          </Message>
        </CodeExample>

        <CodeExample
          title="Warning"
          code={`<Message variant="warning" title="Warning">
  Your session will expire in 5 minutes. Save your work now.
</Message>`}
        >
          <Message variant="warning" title="Warning">
            Your session will expire in 5 minutes. Save your work now.
          </Message>
        </CodeExample>

        <section>
          <H2 className="mb-4">Without Title</H2>
          <P className="mb-4 text-chalkboard-foreground/70">
            Messages can also be used without a title for simpler notifications.
          </P>
          <div className="space-y-4">
            <CodeExample
              title="Simple Messages"
              code={`<Message variant="success">File uploaded successfully.</Message>
<Message variant="error">Failed to delete item.</Message>
<Message variant="info">New features are available.</Message>
<Message variant="warning">Low disk space remaining.</Message>`}
            >
              <div className="space-y-3">
                <Message variant="success">File uploaded successfully.</Message>
                <Message variant="error">Failed to delete item.</Message>
                <Message variant="info">New features are available.</Message>
                <Message variant="warning">Low disk space remaining.</Message>
              </div>
            </CodeExample>
          </div>
        </section>

        <section>
          <H2 className="mb-4">All Variants</H2>
          <P className="mb-4 text-chalkboard-foreground/70">
            A comparison of all four message variants side by side.
          </P>
          <div className="space-y-3">
            <Message variant="success" title="Success">
              Operation completed without errors.
            </Message>
            <Message variant="error" title="Error">
              Something went wrong. Please try again.
            </Message>
            <Message variant="info" title="Information">
              Here is some helpful information for you.
            </Message>
            <Message variant="warning" title="Warning">
              Please review before continuing.
            </Message>
          </div>
        </section>
      </div>
    </div>
  );
}
