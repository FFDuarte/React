import { createTheme  } from '@material-ui/core/styles/';
import pallet from './palette';
import typography from './typography'



const theme = createTheme ({
    pallet,
    typography
});

export default theme;