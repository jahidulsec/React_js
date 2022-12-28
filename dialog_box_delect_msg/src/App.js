
import './App.css';

const Button = ({children, backgroundColor}) => {
  return <button backgroundColor={{backgroundColor}}>{children}</button>
}

const Alert = ({children}) => {
  return (
    <>
      <div className='Overlay' />
      <div className='Alert'>{children}</div>
    </>
  )
}

const DeleteButton = () => {
  return <Button backgroundColor="red">Delete</Button>
}

function App() {
  return (
    <div className='App'>
      <header>Little Lemon</header>
      <Alert>
        <h4>Delete Account</h4>
        <p>
          Are you sure? Want to proceed? You will miss all your delicious receipes!
        </p>
        <DeleteButton />
      </Alert>
    </div>
  );
}

export default App;
