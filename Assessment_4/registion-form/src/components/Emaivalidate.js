import { react, useState } from 'react';

const useUserNameValidation = () => {
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');

  const validateUserName = (value) => {
    if (!value) {
      setError('User name is required.');
    } else if (value.length < 3) {
      setError('User name must be at least 3 characters long.');
    } else {
      setError('');
    }
    setUserName(value);
  };

  return {
    userName,
    error,
    validateUserName,
  };
};

export default useUserNameValidation;