import {useState} from 'react';

function App() {

  const [score,setScore] = useState("");
  const [comment,setCommnet] = useState("");
  const [name,setName] = useState("")
  const handleSubmit = e => {
    e.preventDefault();
    if (score < 5 && comment.length <= 10 ) {
      alert('Provide a comment explaining why the experience was poor')
      return;
    }
    console.log("form submitted!")
    setCommnet("");
    setScore("")
    setName("")
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div>
            <label htmlFor='name'>Name:</label>
            <input 
              id="name" 
              type="text"
              value={name}
              onChange={e=>setName(e.target.value)}
              />
          </div>
          <div>
            <label>Score: {score}</label>
            <input 
              type="range" 
              min="0" 
              max="10" 
              value={score} 
              onChange={(e)=>setScore(e.target.value)}/>
          </div>
          <div>
            <label>Comment:</label>
            <textarea 
              placeholder='Give your feedback'
              value={comment} 
              onChange={e=>setCommnet(e.target.value)}/>
          </div>
          <input type="submit"/>
        </fieldset>
      </form>
    </div>
  )
}

export default App;
