'use client';

import React, { useEffect, useState } from 'react';
import {
  Calendar,
  Clock,
  BookOpen,
  CheckCircle,
  MoreHorizontal,
  Settings,
  Plus,
  ArrowUpRight,
  User,
  MapPin,
  Download,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import timetableData from '@/app/studyhub/Timetable.json';

const Box = ({ children, className = "" }) => (
  <div className={`p-6 rounded-3xl border-2 border-black neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:neo-shadow-sm transition-all duration-200 ${className}`}>
    {children}
  </div>
);

const Filter = ({ label, active = false }) => (
  <button className={`whitespace-nowrap px-6 py-3 rounded-full border-2 border-black text-base font-bold transition-all ${active ? 'bg-[var(--color-neo-mint)] text-black neo-shadow-sm' : 'bg-white text-gray-700 hover:bg-gray-50 hover:neo-shadow-sm'}`}>
    {label}
  </button>
);

export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [timetableClasses, setTimetableClasses] = useState([]);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const tasks = [
    { id: 1, name: 'Finish DAA worksheet', deadline: 'Jan 25 11:59 PM' },
    { id: 2, name: 'Networks quiz', deadline: 'Jan 23 11:59 PM' },
    { id: 3, name: 'Submit DBMS lab', deadline: 'Jan 26 11:59 PM' },
  ];

  const planItems = [
    { id: 1, title: 'Graph Theory', detail: 'Jan 24', accent: 'bg-[#A8E6CF]' },
    { id: 2, title: 'Parser Design', detail: 'Jan 27', accent: 'bg-[#FFE8A3]' },
    { id: 3, title: 'DBMS Unit 2', detail: 'Jan 22', accent: 'bg-[#FFD6E8]' },
  ];

  const resources = [
    { id: 1, name: 'Lecture Notes - AI', type: 'PDF', size: '2.4 MB', file: 'IV-A1.pdf' },
    { id: 2, name: 'DBMS Lab Manual', type: 'PDF', size: '1.8 MB', file: 'IV-A1.pdf' },
    { id: 3, name: 'Assignment Template', type: 'DOCX', size: '0.5 MB', file: 'IV-A1.pdf' },
    { id: 4, name: 'Study Guide - CD', type: 'PDF', size: '3.2 MB', file: 'IV-A1.pdf' },
  ];

  useEffect(() => {
    const dayName = daysOfWeek[selectedDate.getDay()];
    const classes = timetableData.timetable[dayName] || [];
    setTimetableClasses(classes);
  }, [selectedDate]);

  const handleDownload = (resource) => {
    try {
      const fileUrl = `/resources/${resource.file}`;
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = resource.file;
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download error:', error);
      alert('Error downloading file. Check console for details.');
    }
  };

  const calculateTotalHours = () => {
    if (timetableClasses.length === 0) return '0h';

    const timeToMinutes = (timeStr) => {
      let [hours, minutes] = timeStr.trim().split(':').map(Number);
      if (hours >= 1 && hours <= 5) {
        hours += 12;
      }
      return hours * 60 + minutes;
    };

    const firstClass = timetableClasses[0];
    const lastClass = timetableClasses[timetableClasses.length - 1];

    const startTime = timeToMinutes(firstClass.time.split(' - ')[0]);
    const endTime = timeToMinutes(lastClass.time.split(' - ')[1]);

    const totalMinutes = endTime - startTime;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
  };

  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const handleScheduleWheel = (event) => {
    const el = event.currentTarget;
    el.scrollTop += event.deltaY;
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDateClick = (day) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(newDate);
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);

    return days;
  };

  const monthName = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });
  const selectedDay = selectedDate.toLocaleDateString('default', { weekday: 'long', month: 'short', day: 'numeric' });

  return (
    <div className="min-h-screen bg-[var(--color-neo-bg)] p-2 md:p-4 font-sans text-black">
      <Navbar />


      <main className="mx-auto space-y-6 px-2 md:px-4">
        <div className="flex flex-col lg:flex-row gap-6 items-end justify-between">
          <div className="w-full overflow-hidden">
            <h2 className="text-5xl font-extrabold tracking-tight">Weekly Schedule</h2>
            <div className="flex items-center gap-4 mt-6 overflow-x-auto pb-3 scrollbar-hide">
              {['All', 'Compiler Design', 'AI', 'DBMS'].map((l, i) => <Filter key={l} label={l} active={i === 2} />)}
              <button className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-[var(--color-neo-orange)] border-2 border-black text-white neo-shadow hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"><Plus size={24} /></button>
            </div>
          </div>
          <div className="flex gap-12 bg-white/50 p-8 rounded-2xl lg:bg-transparent lg:p-0">
            <div><p className="text-gray-500 text-base font-bold">Hours</p><p className="text-4xl font-bold">{calculateTotalHours()}</p></div>
            <div><p className="text-gray-500 text-base font-bold">Tasks</p><p className="text-4xl font-bold">3/5</p></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-9 gap-6">
          <Box className="lg:col-span-6 bg-[#D0BCFF] flex flex-col relative min-h-[520px]">
            <div className="flex flex-col gap-4 z-10">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="bg-[#1A1A1A] text-white p-5 rounded-3xl border-2 border-black flex-1">
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-400 text-base">{monthName}</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                        className="px-3 py-1 text-sm hover:bg-gray-800 rounded"
                      >
                        ←
                      </button>
                      <button
                        onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                        className="px-3 py-1 text-sm hover:bg-gray-800 rounded"
                      >
                        →
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-500 mb-2">
                    {['S','M','T','W','T','F','S'].map((d, i) => (
                      <div key={i} className="py-2 font-semibold text-gray-400 text-base">{d}</div>
                    ))}
                    {generateCalendarDays().map((day, idx) => (
                      <button
                        key={idx}
                        onClick={() => day && handleDateClick(day)}
                        className={`aspect-square flex items-center justify-center rounded-full text-white cursor-pointer transition-colors text-base ${
                          day === null
                            ? 'opacity-0'
                            : selectedDate.getDate() === day && selectedDate.getMonth() === currentMonth.getMonth() && selectedDate.getFullYear() === currentMonth.getFullYear()
                            ? 'bg-[var(--color-neo-mint)] text-black font-bold'
                            : 'hover:bg-white/10'
                        }`}
                        disabled={day === null}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-[#1A1A1A] text-white p-6 rounded-3xl border-2 border-black flex-1 flex flex-col gap-4">
                  <div>
                    <h3 className="text-gray-400 text-base mb-4">Plan</h3>
                    <div className="flex gap-3">
                      <button className="px-5 py-2 text-white rounded-full text-sm">Lecture</button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    {planItems.map((item) => (
                      <div key={item.id} className={`${item.accent} text-black p-5 rounded-2xl border border-black/20`}>
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-2xl font-bold text-black">{item.title}</p>
                            <p className="text-xs font-bold mt-1 uppercase text-gray-700">Deadline</p>
                            <p className="text-sm text-gray-700">{item.detail}</p>
                          </div>
                          <ArrowUpRight size={20} className="text-black" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border-2 border-black p-5 neo-shadow sm:neo-shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-bold uppercase text-gray-500">Class Schedule</p>
                    <p className="text-base font-semibold text-gray-700">{selectedDay}</p>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Clock size={16} />
                    <span className="font-semibold">{calculateTotalHours()}</span>
                  </div>
                </div>
                <div
                  className="space-y-4 max-h-80 overflow-y-auto pr-2 -mr-2 scrollbar-thin"
                  style={{ overscrollBehavior: 'contain' }}
                  onWheelCapture={handleScheduleWheel}
                >
                  {timetableClasses.length > 0 ? (
                    timetableClasses.map((classItem, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl border-l-4 ${classItem.type === 'Break' ? 'bg-yellow-100 border-yellow-400' : 'bg-purple-100 border-purple-500'}`}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1 min-w-0 pr-2">
                            <div className="flex items-center gap-3 mb-2 text-sm text-gray-600">
                              <Clock size={14} />
                              <span className="font-semibold text-gray-800">{classItem.time}</span>
                            </div>
                            <p className="text-base font-bold text-gray-900 break-words">{classItem.className}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${classItem.type === 'Break' ? 'bg-yellow-300 text-yellow-900' : 'bg-purple-200 text-purple-800'}`}>
                            {classItem.type}
                          </span>
                        </div>
                        {classItem.type !== 'Break' && (
                          <div className="flex flex-wrap gap-3 text-xs text-gray-700 ml-6">
                            <span className="flex items-center gap-1"><User size={13} />{classItem.teacher}</span>
                            <span className="flex items-center gap-1"><MapPin size={13} />{classItem.room}</span>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="flex items-center justify-center h-20 text-gray-500 text-sm">
                      No classes scheduled for this day
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Box>

          <div className="lg:col-span-3 flex flex-col gap-6">
            <Box className="bg-[var(--color-neo-purple)] flex-1 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-purple-700" />
                  <h3 className="text-xl font-bold text-purple-900">Task List</h3>
                </div>
                <MoreHorizontal size={24} className="opacity-50" />
              </div>
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div key={task.id} className="bg-white border-2 border-black rounded-xl p-4 flex flex-col neo-shadow">
                    <span className="text-base font-semibold text-gray-900">{task.name}</span>
                    <span className="text-sm text-gray-600">Deadline: {task.deadline}</span>
                  </div>
                ))}
              </div>
            </Box>

            <Box className="bg-[var(--color-neo-purple)] flex-1 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen size={24} className="text-purple-700" />
                <h3 className="text-xl font-bold text-purple-900">Study Resources</h3>
              </div>
              <div className="space-y-3">
                {resources.map((resource) => (
                  <button
                    key={resource.id}
                    onClick={() => handleDownload(resource)}
                    className="w-full p-5 rounded-xl flex items-center justify-between transition-transform group border-2 border-black text-left neo-shadow"
                    style={{ backgroundColor: '#FBE36A' }}
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="w-12 h-12 rounded-lg bg-white border-2 border-black flex items-center justify-center text-yellow-900 text-base font-bold flex-shrink-0">
                        {resource.type.substring(0, 1)}
                      </div>
                      <div className="min-w-0 flex-1 text-black">
                        <p className="text-base font-semibold truncate">{resource.name}</p>
                        <p className="text-sm text-black/80">{resource.size}</p>
                      </div>
                    </div>
                    <Download size={20} className="text-black flex-shrink-0 ml-3 group-hover:scale-110 transition-transform" />
                  </button>
                ))}
              </div>
            </Box>
          </div>
        </div>
      </main>
    </div>
  );
}
