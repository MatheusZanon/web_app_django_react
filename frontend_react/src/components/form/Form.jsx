import React, { useState } from 'react';
import styles from './Form.module.scss';

const Form = () => {
  // Estado inicial para os campos do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Atualiza o estado conforme os inputs mudam
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Lida com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Aqui você pode adicionar a lógica de envio de formulário, como uma chamada de API
  };

  return (
    <form onSubmit={handleSubmit} className={styles['form-container']}>
      <div>
        <h1>Contact Us</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;