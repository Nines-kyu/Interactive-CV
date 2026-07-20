import { useState } from 'react'
import 'leaflet/dist/leaflet.css';
import './App.css'
import Supalash from './Components/Features/Overlay/Supalash';
import { Outlet } from 'react-router-dom';
import ProfileSideBar from './Components/ProfileSideBar/ProfileSideBar';
import Navigation from './Components/Navigation/Navigation';

function App() {
  const [showSplash, setShowSplash] = useState(false);

  return (
    <>
      {showSplash ? (
        <Supalash onClose={() => setShowSplash(false)} />
      ) : (
        <div className="flex flex-col justify-center min-h-dvh bg-deepSeaBlack px-3 sm:px-6 py-4 sm:py-6">
          <div className="w-full max-w-[1660px] max-h-[90dvh] lg:min-h-[750px] rounded-2xl flex flex-col lg:flex-row overflow-hidden mx-auto">
            {/* Sidebar */}
            <div className="w-full lg:w-1/6 lg:min-w-[220px] lg:max-w-[280px] bg-midGray flex items-center justify-center p-3 shrink-0">
              <ProfileSideBar />
            </div>
            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden min-h-0">
              <Navigation />
              <div className="flex-1 overflow-y-auto">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App