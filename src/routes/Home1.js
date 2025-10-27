import React, { useState, useEffect } from 'react';
import Header from '../components/Recruiter/Header';
import ProfileCard from '../components/Recruiter/Sidebar/ProfileCard';
import QuickAccess from '../components/Recruiter/QuickAccess';
import Anchor from '../components/Recruiter/Anchor';
import ComposerStub from '../components/Recruiter/FeedComponent';
import FeedPost from '../components/Recruiter/FeedPost';
import NewsCard from '../components/Recruiter/NewsCard';
// import PizzlesCard from '../components/Recruiter/PizzlesCard';

 import './home1.css'
import { feed } from '../components/dummyData';
import GitHubContributions from '../components/GithubContributions';

export default function Home1() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className="app-container">
      <Header toggleTheme={toggleTheme} isDark={isDark} />

      <main className="main-content-wrapper">
        <div className="main-grid">

          {/* Left Sidebar */}
          <aside className="left-sidebar">
            <div className="sidebar-sticky-wrapper">
              <ProfileCard />
              <QuickAccess />
              <Anchor/>
            </div>
          </aside>

          {/* Center Feed */}
          <div className="center-feed">
              <ComposerStub />
              <GitHubContributions/>
            {feed.map((post) => (
              <FeedPost key={post.id} post={post} />
            ))}
          </div>

          {/* Right Sidebar */}
          <aside className="right-sidebar">
            <div className="sidebar-sticky-wrapper">
              <NewsCard />
              {/* <PizzlesCard /> */}
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
