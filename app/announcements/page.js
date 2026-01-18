'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Bell, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button1';


export default function Announcements() {
  const [content, setContent] = useState({ announcements: [], events: [] });
  const [announcementPage, setAnnouncementPage] = useState(0);
  const [eventPage, setEventPage] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    fetch('/announcementcontent.json')
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, []);

  const paginatedAnnouncements = content.announcements.slice(
    announcementPage * itemsPerPage,
    (announcementPage + 1) * itemsPerPage
  );

  const paginatedEvents = content.events.slice(
    eventPage * itemsPerPage,
    (eventPage + 1) * itemsPerPage
  );

  const maxAnnouncementPages = Math.ceil(content.announcements.length / itemsPerPage);
  const maxEventPages = Math.ceil(content.events.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-[#FFF6E8] p-6 md:p-12">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-2 text-align-left">Announcement</h1>
            <p className="text-[#2C2C2C] font-semibold">Stay updated with announcements</p>
          </div>
          <div className="flex gap-3">
            <Button
              size="icon"
              className="rounded-full bg-[#BB93D8] hover:bg-[#CFB3E4] text-[#2C2C2C] shadow-lg"
            >
              <Bell className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              className="rounded-full bg-[#BB93D8] hover:bg-[#CFB3E4] text-[#2C2C2C] shadow-lg"
            >
              <Calendar className="h-5 w-5" />
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="bg-[#D7C8FF] backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
                <CardTitle className="text-2xl md:text-3xl font-bold text-[#2c2c2c]">
                  Announcements
                </CardTitle>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full h-8 w-8 border-[#2c2c2c] text-[#2C2C2C] hover:bg-[#F9D55C] hover:text-[#1E1D1D]"
                    onClick={() =>
                      setAnnouncementPage((prev) => Math.max(0, prev - 1))
                    }
                    disabled={announcementPage === 0}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full h-8 w-8 border-[#2c2c2c] text-[#2C2C2C] hover:bg-[#F9D55C] hover:text-[#1E1D1D]"
                    onClick={() =>
                      setAnnouncementPage((prev) =>
                        Math.min(maxAnnouncementPages - 1, prev + 1)
                      )
                    }
                    disabled={announcementPage >= maxAnnouncementPages - 1}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {paginatedAnnouncements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="p-4 rounded-2xl bg-[#E6DCFF] hover:shadow-md transition-all duration-300 cursor-pointer border border-[#CBB9FF] "
                >
                  <p className="text-sm font-bold text-[#2C2C2C] mb-1 uppercase tracking-wide">
                    {announcement.date}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 break-words">
                    {announcement.title}
                  </h3>
                  <p className="text-sm text-[#3c3a3d] leading-relaxed break-words">
                    {announcement.description}
                  </p>
                </div>
              ))}
              <Button
                variant="ghost"
                className="w-full text-black hover:text-[#7B5CFF] hover:bg-[#CBB9FF] rounded-2xl font-semibold"
              >
                ALL ANNOUNCEMENTS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#D7C8FF] backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
                <CardTitle className="text-2xl md:text-3xl font-bold text-[#2c2c2c]">
                  Events
                </CardTitle>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full h-8 w-8 border-[#2c2c2c] text-[#2C2C2C] hover:bg-[#F9D55C] hover:text-[#1E1D1D]"
                    onClick={() => setEventPage((prev) => Math.max(0, prev - 1))}
                    disabled={eventPage === 0}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full h-8 w-8 border-[#2c2c2c] text-[#2C2C2C] hover:bg-[#F9D55C] hover:text-[#1E1D1D]"
                    onClick={() =>
                      setEventPage((prev) => Math.min(maxEventPages - 1, prev + 1))
                    }
                    disabled={eventPage >= maxEventPages - 1}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {paginatedEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#E6DCFF] hover:shadow-md transition-all duration-300 cursor-pointer border border-[#CBB9FF]  "
                >
                  <div className="flex-shrink-0 bg-gradient-to-br from-[#F9D55C] to-[#F9D78B] text-[#1E1D1D] p-4 rounded-2xl text-center shadow-lg min-w-[80px]">
                    <p className="text-sm font-bold uppercase tracking-wider">
                      {event.month}
                    </p>
                    <p className="text-3xl font-bold leading-none mt-1">{event.day}</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 break-words">
                      {event.title}
                    </h3>
                    <p className="text-sm text-[#3c3a3d] font-semibold">{event.time}</p>
                  </div>
                </div>
              ))}
              <Button
                variant="ghost"
                className="w-full text-black hover:text-[#7B5CFF] hover:bg-[#CBB9FF] rounded-2xl font-semibold"
              >
                ALL EVENTS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-[#F9D55C] to-[#F9D78B] text-[#2C2C2C] border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Quick Stats</h3>
              <p className="text-5xl font-bold mb-2">7</p>
              <p className="text-[#2C2C2C]">Active Items</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#F9D55C] to-[#F9D78B] text-[#2C2C2C] border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">This Week</h3>
              <p className="text-5xl font-bold mb-2">4</p>
              <p className="text-[#2C2C2C]">Upcoming Events</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#F9D55C] to-[#F9D78B] text-[#2C2C2C] border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Priority</h3>
              <p className="text-5xl font-bold mb-2">3</p>
              <p className="text-[#2C2C2C]">High Priority</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#F9D55C] to-[#F9D78B] text-[#2C2C2C] border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Updates</h3>
              <p className="text-5xl font-bold mb-2">5</p>
              <p className="text-[#2C2C2C]">Recent Updates</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
