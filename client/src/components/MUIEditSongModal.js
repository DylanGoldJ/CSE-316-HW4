import { useContext, useState } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIEditSongModal() {
    const { store } = useContext(GlobalStoreContext);
    const [ title, setTitle ] = useState(store.currentSong.title);
    const [ artist, setArtist ] = useState(store.currentSong.artist);
    const [ youTubeId, setYouTubeId ] = useState(store.currentSong.youTubeId);

    function handleConfirmEditSong() {
        let newSongData = {
            title: title,
            artist: artist,
            youTubeId: youTubeId
        };
        store.addUpdateSongTransaction(store.currentSongIndex, newSongData);        
    }

    function handleCancelEditSong() {
        store.hideModals();
    }

    function handleUpdateTitle(event) {
        setTitle(event.target.value);
    }

    function handleUpdateArtist(event) {
        setArtist(event.target.value);
    }

    function handleUpdateYouTubeId(event) {
        setYouTubeId(event.target.value);
    }

    return (
        <Modal
            open={store.currentModal !== null}
        >
            <Box sx={style}>
                <div className="modal-dialog">
                <header className="dialog-header">
                    Edit Song:
                </header>
                <div id="confirm-cancel-container">
                    <div>
                        <div>
                        <TextField id="standard-basic" label="Title:" variant="standard" 
                        value = {title}
                        onChange = {handleUpdateTitle}/>
                        </div>

                        <div>
                        <TextField id="standard-basic" label="Artist:" variant="standard" 
                        value = {artist}
                        onChange = {handleUpdateArtist}/>
                        </div>

                        <div>
                        <TextField id="standard-basic" label="YoutubeID:" variant="standard" 
                        value = {youTubeId}
                        onChange = {handleUpdateYouTubeId}/>
                        </div>
                    </div>
                    <div>
                        <button
                            id="dialog-yes-button"
                            className="modal-button"
                            onClick={handleConfirmEditSong}
                        >Confirm</button>
                        <button
                            id="dialog-no-button"
                            className="modal-button"
                            onClick={handleCancelEditSong}
                        >Cancel</button>
                    </div>
                </div>
            </div>
            </Box>
        </Modal>
    );
}