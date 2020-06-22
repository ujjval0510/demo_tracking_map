import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacers';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackFrom = () => {

    const {
        state: { name, recording, location },
        startRecording,
        stopRecording,
        addRecordedLocation,
        changeName
    } = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    return (
        <>
            <Spacer>

                <Input
                    value={name}
                    onChangeText={changeName}
                    label="Enter Name of Track" />

                {
                    recording ?
                        <Button
                            title="Stop Recording"
                            onPress={stopRecording}
                        />
                        :
                        <Button
                            title="Start Recording"
                            onPress={startRecording}
                        />
                }
                <Spacer>
                    {
                        !recording && location.length > 0 ?
                            (<Button
                                title="Save Recording"
                                onPress={saveTrack}
                            />)
                            : null
                    }
                </Spacer>
            </Spacer>
        </>
    );
};


export default TrackFrom;