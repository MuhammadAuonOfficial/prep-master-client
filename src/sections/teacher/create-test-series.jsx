import { Box, Button, Container, Modal, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'src/routes/hooks';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

export function CreateTestSeries() {
  const router = useRouter();

  const [testSets, setTestSets] = useState([]);
  const [open, setOpen] = useState(false);

  const createTest = () => {};

  return (
    <Container>
      <Typography variant="h3">Create Test Series</Typography>
      <Stack direction={'row'} spacing={4} mt={4}>
        <TextField label="Title" variant="outlined" />
        <Button variant="contained" onClick={createTest}>
          Create Test Series
        </Button>
      </Stack>
      {testSets.map((testSet) => (
        <Box>
          <Typography variant="h4">{testSet.title}</Typography>
          <Typography variant="body1">{testSet.description}</Typography>
        </Box>
      ))}
      <Modal open={open}>
        <Box sx={style}>
          <Typography variant="h6">Create Test Set</Typography>
          <Box></Box>
        </Box>
      </Modal>
    </Container>
  );
}
