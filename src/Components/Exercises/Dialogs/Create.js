import React, { Component, Fragment } from 'react'
import { Dialog, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Add from '@material-ui/icons/Add';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class extends Component {
    state = {
        open : false
    }
    
    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        const {open} = this.state
        return <Fragment>
            <Button variant="fab" onClick={this.handleToggle} color="primary" aria-label="add">
                <Add />
            </Button>
            
            <Dialog
                open={open}
                onClose={this.handleToggle}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Create a New Exercise</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out a form below.
          </DialogContentText>
                    <form>
                    <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          variant="outlined"
        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" variant="raised">
                        Create
          </Button>

                </DialogActions>
            </Dialog>
        </Fragment>
    }
}
