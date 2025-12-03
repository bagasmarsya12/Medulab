import React from 'react';
import { SCHEDULE_ITEMS } from '../constants';
import { Calendar, Clock, User, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

const Schedule: React.FC = () => {
  return (
    <section className="bg-white min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 pb-6 border-b border-slate-100">
          <div>
             <h1 className="text-3xl font-bold text-slate-900 mb-2">Jadwal Kelas Terdekat</h1>
             <p className="text-slate-600">Pantau jadwal bimbingan dan try out minggu ini.</p>
          </div>
          <div className="mt-4 md:mt-0">
             <Button variant="secondary" className="text-sm">Download Jadwal PDF</Button>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="hidden md:grid grid-cols-12 bg-slate-50 py-3 px-6 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <div className="col-span-3">Waktu & Tanggal</div>
            <div className="col-span-4">Topik Materi</div>
            <div className="col-span-3">Mentor</div>
            <div className="col-span-2 text-right">Program</div>
          </div>

          <div className="divide-y divide-slate-100">
            {SCHEDULE_ITEMS.map((item) => (
              <div key={item.id} className="p-6 md:p-0 md:grid md:grid-cols-12 hover:bg-slate-50 transition-colors items-center group">
                
                {/* Mobile View Label */}
                <div className="md:hidden flex items-center gap-2 mb-2 text-sm text-teal-600 font-semibold">
                   <Calendar className="h-4 w-4" /> {item.date}
                </div>

                <div className="md:col-span-3 md:py-4 md:px-6">
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-900 hidden md:block">{item.date}</span>
                    <div className="flex items-center gap-1.5 text-sm text-slate-500 mt-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4 md:py-4 md:px-6 mb-3 md:mb-0">
                  <span className="block font-medium text-slate-900">{item.topic}</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 mt-1 md:hidden">
                    {item.program}
                  </span>
                </div>

                <div className="md:col-span-3 md:py-4 md:px-6 mb-4 md:mb-0">
                   <div className="flex items-center gap-2">
                     <div className="bg-teal-100 p-1 rounded-full">
                       <User className="h-3 w-3 text-teal-600" />
                     </div>
                     <span className="text-sm text-slate-700">{item.mentor}</span>
                   </div>
                </div>

                <div className="md:col-span-2 md:py-4 md:px-6 text-right">
                  <span className="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-50 text-teal-700">
                    {item.program}
                  </span>
                  <div className="md:hidden flex justify-end">
                     <Button variant="ghost" className="text-sm h-8 px-3">Detail <ChevronRight className="ml-1 h-3 w-3" /></Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;