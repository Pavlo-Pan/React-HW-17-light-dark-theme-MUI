/** @jsxImportSource @emotion/react */
import Header from '../Header/Header';
import CardToggle from '../CardToggle/CardToggle';
import ButtonToggle from '../ButtonToggle/ButtonToggle';
import Layout from "../Layout/Layout";
import ThemeProviderWrapper from "../ThemeProviderWrapper/ThemeProviderWrapper";
function App() {
  return (
    <ThemeProviderWrapper>
      {({ isDarkMode, toggleTheme }) => (
        <Layout>
          <Header isDarkMode={isDarkMode} />
          <CardToggle isDarkMode={isDarkMode} />
          <ButtonToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
        </Layout>
      )}
    </ThemeProviderWrapper>
  );
}

export default App;