import React from 'react';
import { HashRouter, Route, Link, Routes } from 'react-router-dom'
import Grid from '@mui/material/Grid2';
import { ContactPage } from './Pages/ContactPage'
import { ProjectPage } from './Pages/ProjectPage'
import { PreferencePage } from './Pages/PreferencePage'

const App : React.FunctionComponent = () => {

  return (
    <div>
      <HashRouter>

        { /** ナビゲーシション（Drawer） */ }
        <div className = 'Navigation'>

          <Grid container>

            <Grid size = {{ xs: 3, sm: 1 }}>
              <Link to = '/project' style = { { textDecoration: 'none' , fontWeight: 'bold' } }>
                <span>Project</span>
              </Link>
            </Grid>

            <Grid size = {{ xs: 3, sm: 1 }}>
              <Link to = '/contact' style = { { textDecoration: 'none' , fontWeight: 'bold' } }>
                <span>Contact</span>
              </Link>
            </Grid>

            <Grid size = {{ xs: 3, sm: 1 }}>
              <Link to = '/preference' style = { { textDecoration: 'none' , fontWeight: 'bold' } }>
                <span>Preference</span>
              </Link>
            </Grid>

          </Grid>

        </div>

        { /** メインコンテンツ URLに応じて表示内容を変更 */ }
        <div className = 'Main'>
          <Routes>
            <Route path = '/'           element = { <ProjectPage />} />
            <Route path = '/project'    element = { <ProjectPage />} />
            <Route path = '/contact'    element = { <ContactPage />} />
            <Route path = '/preference' element = { <PreferencePage />} />
          </Routes>
        </div>

      </HashRouter>
    </div>
  );
};

export default App;