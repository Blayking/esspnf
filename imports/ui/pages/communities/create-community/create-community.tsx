import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, TextField } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

interface CreateCommunityProps {
  handleCreateModalOpen: () => void;
  handleCreateModalClose: () => void;
  handleOnCreateFormChange: (
    name: 'name' | 'description',
    value: string
  ) => void;
  handleCreateCommunity: () => void;
  isModalOpen: boolean;
  error?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  button: {
    marginLeft: '35px',
    width: '25%',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 3),
    display: 'flex',
    flexDirection: 'column',
    height: '25%',
    width: '25%',
    justifyContent: 'space-around',
  },
  submitButtonsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
  },
}));

function CreateCommunity({
  handleCreateCommunity,
  handleCreateModalOpen,
  handleCreateModalClose,
  handleOnCreateFormChange,
  isModalOpen,
}: CreateCommunityProps): JSX.Element {
  const onFormFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleOnCreateFormChange(
      event.target.name as 'name' | 'description',
      event.target.value
    );
  };

  const classes = useStyles();

  return (
    <>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleCreateModalOpen}
      >
        New Community
      </Button>
      <div className={classes.root}>
        <Modal
          className={classes.modal}
          open={isModalOpen}
          onClose={handleCreateModalClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={isModalOpen}>
            <Paper className={classes.paper}>
              <TextField
                label="Title"
                onChange={onFormFieldChange}
                name={'name'}
              />
              <TextField
                name={'description'}
                label="Description"
                onChange={onFormFieldChange}
              />
              <div className={classes.submitButtonsWrapper}>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleCreateCommunity}
                >
                  Ok
                </Button>
                <Button
                  className={classes.button}
                  variant="contained"
                  onClick={handleCreateModalClose}
                >
                  Cancel
                </Button>
              </div>
            </Paper>
          </Fade>
        </Modal>
      </div>
    </>
  );
}

export { CreateCommunity };
