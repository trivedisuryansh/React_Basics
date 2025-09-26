import Header from './components/Header/Header.jsx';
import CoreConcept from './components/Core_Concepts/Core_Concepts.jsx';
import TabButton from './components/TabButton.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import { useState } from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(); 

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
console.log("App Componest Excecuting");

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map( (conceptItem)=>  <CoreConcept{...conceptItem}/> )}
            {/* <CoreConcept 
            title = {CORE_CONCEPTS[0].title} 
            description = {CORE_CONCEPTS[0].description}
            image = {CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'states'}onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          
           {!selectedTopic? <p>Please Select a topic</p>: null} 
           {selectedTopic? <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>:null} 
        </section>
      </main>
    </div>
  );
}

export default App;
