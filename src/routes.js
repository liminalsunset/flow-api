import { searchPoseHandler, updatePoseHandler, createPoseHandler, getPoseHandler, listPoseHandler, deletePoseHandler } from './controllers/pose.controller.js';
import { createSequenceHandler, deleteSequenceHandler, getSequenceHandler, listSequenceHandler, updateSequenceHandler } from './controllers/sequence.controller.js';

export default function(app) {
    app.get('/healthcheck', (req, res) => res.sendStatus(200));
    app.get('/api/pose/:poseId', getPoseHandler);
    app.post('/api/pose', createPoseHandler);
    app.get('/api/pose/', listPoseHandler);
    app.put('/api/pose/:poseId', updatePoseHandler);
    app.delete('/api/pose/:poseId', deletePoseHandler);
    app.get('/api/sequence/:sequenceId', getSequenceHandler);
    app.get('/api/sequence', listSequenceHandler);
    app.post('/api/sequence', createSequenceHandler);
    app.put('/api/sequence/:sequenceId', updateSequenceHandler);
    app.delete('/api/sequence/:sequenceId', deleteSequenceHandler);
    app.get('/api/pose/search/:terms', searchPoseHandler);
}

