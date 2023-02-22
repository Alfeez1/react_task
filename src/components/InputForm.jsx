import React from 'react';
import { Grid, TextField, Button, Box } from '@material-ui/core';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useMediaQuery } from '@material-ui/core';

const MyForm = () => {
  const handleFileUpload = (event) => {};
  const isSmallScreen = useMediaQuery('(max-width:860px)');

  return (
    <Box m={3}>
      <Grid container spacing={3} style={{ marginTop: '16px' }}>
        <Grid item xs={12} md={4}>
          <Box mb={1}>
            <label style={{ fontSize: 14 }} htmlFor="input1">
              Email Address
            </label>
          </Box>
          <TextField id="input1" variant="outlined" size="small" fullWidth />
        </Grid>
        <Grid item xs={0} md={4} />
        <Grid item xs={0} md={4} />

        <Grid item xs={0} md={4} />
        <Grid item xs={0} md={4} />
        <Grid item xs={0} md={4} />

        <Grid item xs={12} md={4}>
          <Box mb={1}>
            <label htmlFor="input2-1" style={{ fontSize: 14 }}>
              First Name
            </label>
          </Box>
          <TextField id="input2-1" variant="outlined" size="small" fullWidth />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box mb={1}>
            <label htmlFor="input2-2" style={{ fontSize: 14 }}>
              Last Name
            </label>
          </Box>
          <TextField id="input2-2" variant="outlined" size="small" fullWidth />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box mb={1}>
            <label htmlFor="input2-3" style={{ fontSize: 14 }}>
              Telephone
            </label>
          </Box>
          <TextField id="input2-3" variant="outlined" size="small" fullWidth />
          <p style={{ marginTop: '8px', fontSize: '12px' }}>
            Please include your country and area code
          </p>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box style={{ marginBottom: '-18px' }}>
            <p style={{ fontSize: 14 }}>Upload your CV</p>
          </Box>
          <input
            accept=".pdf,.doc,.docx"
            style={{ display: 'none' }}
            id="cv"
            type="file"
            onChange={handleFileUpload}
          />
          <label htmlFor="cv">
            <Button
              variant="contained"
              size="small"
              className="upload"
              endIcon={<CloudUploadIcon />}
              style={{
                borderRadius: '15px',
                padding: '10px',
                backgroundColor: '#BFBFBF',
                color: 'black',
                width: '100%',
                marginTop: '8px',
              }}
            >
              Upload
            </Button>
          </label>
          <p style={{ marginTop: '8px', fontSize: '12px' }}>
            Select resume file (PDF, DOC, DOCX)
          </p>
        </Grid>

        <Grid item xs={12} md={0} />
        <Grid item xs={12} md={0} />

        <Grid item xs={12} md={12}>
          <Button
            variant="contained"
            color="primary"
            style={{
              borderRadius: '15px',
              padding: '10px 20px',
              backgroundColor: '#04A8E8',
              width: isSmallScreen ? '100%' : '170px',
              textAlign: isSmallScreen ? 'center' : 'left', // center text on small screens
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyForm;
