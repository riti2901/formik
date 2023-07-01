import React from 'react';
import { useFormik } from 'formik';
import {Button,TextField,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio,Select,MenuItem,Checkbox,FormGroup,
FormHelperText,InputLabel} from '@mui/material';
import { Box } from '@mui/system';
const Registration = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      country: '',
      gender: '',
      hobbies: []
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Required';
      }
      if(values.name.length < 3){
      errors.name = 'Name must be at least 3 characters long';
      }
      if (!/^[a-zA-Z]+$/.test(values.name)) {
        errors.name = 'Name must contain only letters';
      }
      if (!values.address) {
        errors.address = 'Required';
      }

      if (!values.country) {
        errors.country = 'Required';
      }

      if (!values.gender) {
        errors.gender = 'Required';
      }

      if (values.hobbies.length === 0) {
        errors.hobbies = 'Select at least one hobby';
      }

      return errors;
    }
  });

  return (
    <center><form onSubmit={formik.handleSubmit} >
          <Box marginBottom={2}>
      <TextField
        label="Name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
</Box>
 <Box marginBottom={2}>
      <TextField
        label="Address"
        name="address"
        value={formik.values.address}
        onChange={formik.handleChange}
        error={formik.touched.address && Boolean(formik.errors.address)}
        helperText={formik.touched.address && formik.errors.address}
        multiline
      />
      </Box>
      <Box marginBottom={2}>
      <FormControl error={formik.touched.country && Boolean(formik.errors.country)}>
      <InputLabel
              id="country-label"
              sx={{ position: 'relative', top: '20px', width: '200px'}} 
            >
              Select country
            </InputLabel>
        <Select
          name="country"
          value={formik.values.country}
          onChange={formik.handleChange}
        >
          <MenuItem value="">Select Country</MenuItem>
          <MenuItem value="India">India</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="Canada">Canada</MenuItem>
          <MenuItem value="Singapore">Singapore</MenuItem>
          <MenuItem value="Brazil">Brazil</MenuItem>
        </Select>
        <FormHelperText>{formik.touched.country && formik.errors.country}</FormHelperText>
      </FormControl>
</Box>
<Box marginBottom={2}>
      <FormControl component="fieldset" error={formik.touched.gender && Boolean(formik.errors.gender)}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <FormHelperText>{formik.touched.gender && formik.errors.gender}</FormHelperText>
      </FormControl>
</Box>
      <FormControl component="fieldset" error={formik.touched.hobbies && Boolean(formik.errors.hobbies)}>
        <FormLabel component="legend">Hobbies/Interests</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="hobbies"
                value="reading"
                checked={formik.values.hobbies.includes('reading')}
                onChange={formik.handleChange}
              />
            }
            label="Reading"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="hobbies"
                value="music"
                checked={formik.values.hobbies.includes('music')}
                onChange={formik.handleChange}
              />
            }
            label="Music"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="hobbies"
                value="sports"
                checked={formik.values.hobbies.includes('sports')}
                onChange={formik.handleChange}
              />
            }
            label="Sports"
          />
        </FormGroup>
        <FormHelperText>{formik.touched.hobbies && formik.errors.hobbies}</FormHelperText>
      </FormControl>
      <Box marginBottom={2}>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
      </Box>
    </form>
    </center>
  );
};
export default Registration;
