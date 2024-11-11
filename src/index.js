import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [accordion, setAccordion] = useState([
    {
      id: 1,
      title: 'First Accordion',
      subject: 'ddgdggdgdgd',
      expanded: false,
      checkboxChecked: false,
    },
    {
      id: 2,
      title: 'Second Accordion',
      subject: 'ddgdggdgdgd',
      expanded: false,
      checkboxChecked: false,
    },
    {
      id: 3,
      title: 'Third Accordion',
      subject: 'ddgdggdgdgd',
      expanded: false,
      checkboxChecked: false,
    },
  ])
  const [submitState, setSubmitState] = useState(true)
  const handleAccordionState = (acc) => {
    setAccordion((prevAccordion) =>
      prevAccordion.map((item) =>
        item.id === acc.id
          ? {...item, expanded: !item.expanded}
          : {...item, expanded: false},
      ),
    )
  }
  const handleCheckboxChange = (acc) => {
    setAccordion((prevAccordion) =>
      prevAccordion.map((item) =>
        item.id === acc.id
          ? {...item, checkboxChecked: !item.checkboxChecked}
          : {...item},
      ),
    )
  }
  useEffect(() => {
    if (accordion.every((item) => item.checkboxChecked === true)) {
      setSubmitState(false)
    } else {
      setSubmitState(true)
    }
  }, [accordion])
  return (
    <>
      {accordion.map((acc, index) => (
        <div key={index}>
          <h1>{acc.title}</h1>
          {acc.expanded === true && <h2>{acc.subject}</h2>}

          <button onClick={() => handleAccordionState(acc)}>
            {acc.expanded === false ? 'expand' : 'collapse'}
          </button>
          {
            <input
              type="checkbox"
              checked={acc.checkboxChecked}
              onChange={() => handleCheckboxChange(acc)}
            />
          }
        </div>
      ))}
      <button disabled={submitState}>Submit</button>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
