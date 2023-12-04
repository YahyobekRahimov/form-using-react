import './App.css'
import backgroundBlurred from './images/decorative-image.png';
import Form from './components/form';

function App() {
  return (
    <main className='main'>
        <img className='decorative-img' src={backgroundBlurred} alt="for decoration" />
        <img className='decorative-img' src={backgroundBlurred} alt="for decoration" />
        <img className='decorative-img' src={backgroundBlurred} alt="for decoration" />
        <img className='decorative-img' src={backgroundBlurred} alt="for decoration" />
        <div className="container main__container">
          <h2 className='secondary-title'>Get an Estimate for Workspace</h2>
          <h1 className='main-title'>Post your requirements</h1>
          <p className='main-description'>
            Please fill the form below to receive a quote for workspace. <br />
            Please add all the details required.
          </p>
          <Form />
        </div>
      </main>
  )
}

export default App
