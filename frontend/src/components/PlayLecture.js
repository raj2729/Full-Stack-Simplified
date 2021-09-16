import { useState } from 'react';
import VideoPlayer from 'react-video-js-player'
import Modal from '@material-ui/core/Modal';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

function PlayLecture() {
  const classes = useStyles()
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <button type="button" onClick={handleOpen}>
        View Chapter
      </button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <VideoPlayer src='https://res.cloudinary.com/dizvyn9b5/video/upload/v1631600691/sgf6ftvyhfrodkgau5lm.mp4' height='500%'/>
      </Modal>
    </Container>
  );
}

export default PlayLecture;
