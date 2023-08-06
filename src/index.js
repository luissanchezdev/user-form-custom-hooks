import React from 'react';
import ReactDOM from 'react-dom/client';
import useField from './hooks/useField';

const App = () => {
  const userField = useField('text')
  const emailField = useField('email')
  const phoneField = useField('phone')


  return (
    <form>
      <div>
        <label>Name</label>
        <input type={ userField.name } value={ userField.value } onChange={ userField.onChange } />
      </div>
      <div>
        <label>Email</label>
        <input type={ emailField.name } value={ emailField.value } onChange={ emailField.onChange } />
      </div>
      <div>
        <label>Phone</label>
        <input type={ phoneField.name } value={ phoneField.value } onChange={ phoneField.onChange } />
      </div>
      <button type='submit'>Send</button>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);