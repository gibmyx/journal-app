import * as React from 'react';
import {JournalLayout} from "../layout/JournalLayout";
import NothingSelectedView from "../views/NothingSelectedView";
import NoteView from "../views/NoteView";
import {ImageGallery} from "../components";
import {IconButton} from "@mui/material";
import {AddOutlined} from "@mui/icons-material";

type Props = {

};
export const JournalPage = (props: Props) => {
    return (
        <JournalLayout>
            <NothingSelectedView/>
            {/*<NoteView/>*/}

            <IconButton
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'red',
                    ':hover': {backgroundColor: 'red', opacity: 0.9},
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined/>
            </IconButton>
        </JournalLayout>
    );
};