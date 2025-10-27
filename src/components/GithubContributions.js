import React, { useEffect, useRef } from "react";
import "github-calendar/dist/github-calendar-responsive.css";
import GitHubCalendar from "github-calendar";
import "./githubContributions.css";

const GitHubContributions = ({
  username = "ritikrikm",
  id = "github-calendar",
}) => {
  const calendarRef = useRef(null);

  useEffect(() => {
    if (!calendarRef.current) return;

    calendarRef.current.innerHTML = "";

    GitHubCalendar(`#${id}`, username, {
      responsive: true,
      global_stats: false,
    });

    // Observer to recolor after content injection
    const observer = new MutationObserver(() => {
      setTimeout(() => {
        // Month label color fix (force reapply if injected late)
        const labels = calendarRef.current?.querySelectorAll(
          ".ContributionCalendar-label span[aria-hidden='true']"
        );
        const skipLink = calendarRef.current?.querySelector(
          "a[href*='year-link']"
        );

        const isDark =
          document.documentElement.classList.contains("dark");

        // --- UPDATED COLORS ---
        const textColor = isDark ? "#ffffff" : "#000000";
        // ---------------------

        labels?.forEach((span) => {
          span.style.color = textColor;
          span.style.fontWeight = "600";
        });

        if (skipLink) {
          skipLink.style.color = textColor;
        }
      }, 200);
    });

    observer.observe(calendarRef.current, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [id, username]);

  return (
    <div className="card github-card">
      <h3 className="github-title">Contribution Graph</h3>
      <div id={id} ref={calendarRef} className="calendar"></div>
    </div>
  );
};

export default GitHubContributions;