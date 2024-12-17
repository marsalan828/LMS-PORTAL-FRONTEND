import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // Import FullCalendar
import dayGridPlugin from "@fullcalendar/daygrid"; // Day grid view
import timeGridPlugin from "@fullcalendar/timegrid"; // Time grid view
import interactionPlugin from "@fullcalendar/interaction"; // Drag-and-drop, select

function Dashboard() {
    // sample data for calendar
  const [events, setEvents] = useState([
    { title: "Meetingone", date: "2024-12-16" },
    { title: "Project Deadline", date: "2024-12-20" },
  ]);

  // Handle date click
  const handleDateClick = (info) => {
    const title = prompt("Enter Event Title:");
    if (title) {
      setEvents([...events, { title, date: info.dateStr }]);
    }
  };
    
    const handleEventClick = (info) => {
        if (window.confirm("Do you want to delete this event?")) {
            info.event.remove();
        }
    }

  return (
    <>
      <h1 className="font-bold text-center my-4 text-4xl">Dashboard</h1>
      <div className="dasboard-timeline mx-auto max-w-4xl p-4">
        <h1 className="text-4xl font-bold">Timeline</h1>
        <div className="timline-dates flex justify-between">
          <div className="days-dates flex justify-between w-96">
            <select
              name="days"
              id="days"
              className="text-gray-500 p-4 pt-2 pb-2 border-2 rounded-lg"
              defaultValue="Next 7 days"
            >
              <option value="All">All</option>
              <option value="Overdue">Overdue</option>

              <option value="Next 7 days">Next 7 days</option>
              <option value="Next 30 days">Next 30 days</option>
              <option value="Next 3 months">Next 3 months</option>
              <option value="Next 6 months">Next 6 months</option>
            </select>
            <select
              name="dates"
              id="dates"
              className="text-gray-500 p-4 pt-2 pb-2 border-2 rounded-lg"
              defaultValue="Sort by dates"
            >
              <option value="Sort by dates">Sort by dates</option>
              <option value="Sort by courses">Sort by courses</option>
            </select>
          </div>
          <input
            type="search"
            className="border-2 p-2 rounded-xl"
            placeholder="Search by activity or course"
            id="search"
            name="search"
          />
        </div>
      </div>
      <div className="calendar-container mx-auto max-w-4xl p-4">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          events={events}
          dateClick={handleDateClick} // Add event on date click
          eventClick={handleEventClick}
          headerToolbar={{
            start: "prev,next today",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
        />
      </div>
    </>
  );
}

export default Dashboard;
