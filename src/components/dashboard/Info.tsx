import {
  Box,
  Card,
  CardContent,
  Chip,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[800]
      : theme.palette.grey[200],
  color:
    theme.palette.mode === "dark"
      ? theme.palette.common.white
      : theme.palette.common.black,
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.grey[600]
        : theme.palette.grey[300],
  },
}));

export default function Info() {
  return (
    <Box marginTop={2}>
      <Card variant="outlined" component={Paper}>
        <CardContent>
          <Typography variant="h3" gutterBottom align="center">
            Elevate Your Productivity
          </Typography>
          <Typography variant="body1" gutterBottom>
            Welcome to Todos, your ultimate companion for task management!
            <div>
              In today's fast-paced world, staying organized is essential. The
              Todos app is here to help you manage your tasks effectively and
              achieve your goals.
            </div>
          </Typography>
          <Typography variant="h5" gutterBottom>
            Key Features
          </Typography>

          <ul>
            <Stack gap={2}>
              <li>
                <Typography variant="body1">Easy Task Management:</Typography>
                <Typography variant="body1">
                  Quickly add, edit, and organize your tasks. Set priorities and
                  due dates to keep yourself on track.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">Customize your labels:</Typography>
                <Typography variant="body1">
                  Sort tasks into personalized labels to streamline your
                  planning process and quickly find what you need.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">Offline by design:</Typography>
                <Typography variant="body1">
                  All your Todos data is stored in your local storage only. This
                  means if you install it, you can use it offline as well.
                </Typography>
              </li>
            </Stack>
          </ul>
          <Typography variant="h5" gutterBottom>
            We Value Your Feedback!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Your thoughts matter! Share your feedback with us to help improve
            your experience and make Todos even better.
            <div>
              <a href="https://github.com/fenilaphilip/todos">
                <StyledChip
                  label="Github"
                  size="medium"
                  icon={<GitHubIcon />}
                />
              </a>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
