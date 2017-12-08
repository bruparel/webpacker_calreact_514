import React from 'react';

export const FormErrors = ({formErrors}) => 
  <div>
    {Object.keys(formErrors).map(formErrorField =>
      formErrors[formErrorField].map(error => 
        <p key={formErrorField+error}>{formErrorField} {error}</p>)
    )}
  </div>
