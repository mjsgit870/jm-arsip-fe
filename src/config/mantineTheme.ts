import { createTheme, MantineColorsTuple } from "@mantine/core";

const brandColor: MantineColorsTuple = [
  "#ecefff",
  "#d5dafb",
  "#a9b1f1",
  "#7a87e9",
  "#5362e1",
  "#3a4bdd",
  "#2c40dc",
  "#1f32c4",
  "#182cb0",
  "#0a259c"
]

const mantineTheme = createTheme({
  fontFamily: 'Geist, sans-serif',
  colors: {
    brandColor
  },
  primaryColor: 'brandColor'
})

export default mantineTheme