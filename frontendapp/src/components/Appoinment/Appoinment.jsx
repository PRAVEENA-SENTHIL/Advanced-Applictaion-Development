import React from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';
import './Appoinment.css';

const Appoinment = () => {
    return (
        <section className="appoinment-wrapper">
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div className="section-title">
                            <h1 className="mt-5">Any Inquiry?</h1>
                        </div>
                        <div className="appoinment-form">
                            <form action="#" className="row">
                                <Grid item xs={12} sm={6} style={{minHeight:'10px'}}>
                                    <TextField fullWidth label="Name" variant="outlined" style={{ marginBottom: '10px', padding:'10px' }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label="Email" variant="outlined" style={{ marginBottom: '10px', padding:'10px' }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label="Phone" variant="outlined" style={{ marginBottom: '10px', padding:'10px' }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label="Subject" variant="outlined" style={{ marginBottom: '10px', padding:'10px' }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Message"
                                        variant="outlined"
                                        multiline
                                        rows={2}
                                        style={{ marginBottom: '10px', padding:'10px' }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" className="theme-btn btn-fill form-btn mt-5" style={{ width: '100%' }}>
                                        Submit
                                    </Button>
                                </Grid>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Appoinment;
