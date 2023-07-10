import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme/theme';
import { Routes } from './src/routes/Routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <StatusBar style="light" />
    </ThemeProvider>
  );
}

