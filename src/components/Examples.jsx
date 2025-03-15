import { useState } from "react";
import { TabButton } from "./TabButton";
import { EXAMPLES } from "../data";

export function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  };

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          onSelect={() => handleSelect("components")}
          isSelected={selectedTopic === "components"}
        >
          Components
        </TabButton>
        <TabButton
          onSelect={() => handleSelect("jsx")}
          isSelected={selectedTopic === "jsx"}
        >
          JSX
        </TabButton>
        <TabButton
          onSelect={() => handleSelect("props")}
          isSelected={selectedTopic === "props"}
        >
          Props
        </TabButton>
        <TabButton
          onSelect={() => handleSelect("state")}
          isSelected={selectedTopic === "state"}
        >
          State
        </TabButton>
      </menu>
      {!selectedTopic && <p>Please select a topic.</p>}
      {
        selectedTopic && <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
      }
    </section>
  );
}