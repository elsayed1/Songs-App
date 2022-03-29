import { Card, Grid, TextField, Typography } from '@mui/material';
import React, { forwardRef, useEffect, useState } from 'react';

const LabeledInput = ({ label, ...rest }) => {
  return (
    <Grid container item alignItems="center" spacing={2} justifyContent="center">
      <Grid item xs={3}>
        <Typography variant="body1">{label}</Typography>
      </Grid>
      <Grid item>
        <TextField id="outlined-basic" label={label} variant="outlined" {...rest} />
      </Grid>
    </Grid>
  );
};

const Form = (_, ref) => {
  const [formData, setFormData] = useState(ref.current.userData);

  useEffect(() => {
    ref.current.userData = formData;
  }, [formData]);

  const handleChange = (e) => {
    const { value, id } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <Card sx={{ p: 3, backgroundColor: '#B4C5E4' }} elevation={4}>
      <Grid container spacing={2}>
        <LabeledInput
          id="username"
          value={formData.username}
          onChange={handleChange}
          label="Username"
        />
        <LabeledInput id="email" value={formData.email} onChange={handleChange} label="Email" />
        <LabeledInput id="mobile" value={formData.mobile} onChange={handleChange} label="Mobile" />
      </Grid>
    </Card>
  );
};

export default forwardRef(Form);
