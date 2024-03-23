import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import makeStyles from '@mui/styled-engine';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D6A08C',
    },
    background: {
      default: '#FFF4F1',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const AdminDashboard = () => {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Logic to upload the selected file
    console.log(selectedFile);
    // Clear input after upload
    setSelectedFile(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Input
                type="file"
                onChange={handleFileChange}
                fullWidth
                disableUnderline
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpload}
                disabled={!selectedFile}
                style={{ marginTop: '16px' }}
              >
                Upload
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default AdminDashboard;
