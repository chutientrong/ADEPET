  
  
  function isValidUsername (value) {
      /* 
    Usernames can only have: 
    - Lowercase Letters (a-z) 
    - Numbers (0-9)
    - Dots (.)
    - Underscores (_)
  */
    const re =  /^[a-z0-9_\.]+$/;
    return re.test(String(value))
  }
  function validateUsername(value, setUsernameError) {
    if (value == '') {
      setUsernameError('');
    } else if (isValidUsername(value)) {
      setUsernameError('');
    } else {
      setUsernameError('Invalid User Name');
    }
  }

  function isValidEmail(value) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  }
  
  function validateEmail(value, setEmailError) {
    if (value == '') {
      setEmailError('');
    } else if (isValidEmail(value)) {
      setEmailError('');
    } else {
      setEmailError('Invalid Email');
    }
  }
  
  function validatePassword(value, setPasswordError) {
    if (value.length < 5) {
      setPasswordError('Password must be than 5 characters');
    } else {
      setPasswordError('');
    }
  }
  function validateCfPassword(value, password,setCfPasswordError) {
    if (value != password ) {
      setCfPasswordError('Password not match');
    } else {
      setCfPasswordError('');
    }
  }
  
  function validateInput(value, minLength, setError) {
    if (value.length < minLength) {
      setError('Invalid Input');
    } else {
      setError('');
    }
  }
  
  function calculateAngle(coordinates) {
    let startLat = coordinates[0]['latitude'];
    let startLng = coordinates[0]['longitude'];
    let endLat = coordinates[1]['latitude'];
    let endLng = coordinates[1]['longitude'];
    let dx = endLat - startLat;
    let dy = endLng - startLng;
  
    return (Math.atan2(dy, dx) * 180) / Math.PI;
  }
  
  const utils = {
    isValidUsername,
    validateUsername,
    isValidEmail,
    validateEmail,
    validatePassword,
    validateCfPassword,
    validateInput,
    calculateAngle,
  };
  
  export default utils;