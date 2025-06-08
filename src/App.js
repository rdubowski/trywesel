import React, { useState } from 'react';
import { MapPin, Clock, Calendar, Users, Car } from 'lucide-react';

const WeddingPartyApp = () => {
  const [activeSection, setActiveSection] = useState('welcome');

  const sections = [
    { id: 'welcome', label: 'Główna', icon: '💕' },
    { id: 'plan', label: 'Plan', icon: '📋' },
    { id: 'directions', label: 'Dojazd', icon: '🗺️' },
    { id: 'rides', label: 'Transport', icon: '🚗' }
  ];

  const weddingPlan = [
    // Czwartek - 10 lipca
    { time: '14:00', event: 'Uroczystość ślubu w USC', icon: '💒', day: 'Czwartek, 10 lipca', link: 'https://www.google.com/maps/place/Urz%C4%85d+Stanu+Cywilnego+m.st.Warszawy/@52.2364232,20.9702733,17z/data=!4m10!1m2!2m1!1sUSC+Warszawa+Wola+M%C5%82ynarska+16+Warszawa!3m6!1s0x471ecb00119ac967:0xfd681f3c6dee8819!8m2!3d52.2364541!4d20.9728599!15sCihVU0MgV2Fyc3phd2EgV29sYSBNxYJ5bmFyc2thIDE2IFdhcnN6YXdhWioiKHVzYyB3YXJzemF3YSB3b2xhIG3FgnluYXJza2EgMTYgd2Fyc3phd2GSARdtYXJyaWFnZV9saWNlbnNlX2J1cmVhdZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuVFVOQmQzWXphRWRSRUFFqgFREAEyHxABIhvdjP-pirCxIefgyyGHoUa96IJ2k_ztcMY75TYyLBACIih1c2Mgd2Fyc3phd2Egd29sYSBtxYJ5bmFyc2thIDE2IHdhcnN6YXdh4AEA-gEECAAQKw!16s%2Fg%2F11lzxnzc9r?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D' },
    { time: '14:30', event: 'Zdjęcia i życzenia', icon: '📸', day: 'Czwartek, 10 lipca' },
    { time: '15:00', event: 'Obiad w Warszawie (adres wkrotce)', icon: '🍽️', day: 'Czwartek, 10 lipca' },
    { time: '17:00', event: 'Wyjazd do domku na wsi', icon: '🚗', day: 'Czwartek, 10 lipca', link: 'https://maps.app.goo.gl/h9oQ5gVDZ3y3LbZi9' },
    { time: '18:30', event: 'Ognisko i wiejskie atrakcje', icon: '🔥', day: 'Czwartek, 10 lipca', link: 'https://maps.app.goo.gl/h9oQ5gVDZ3y3LbZi9' },
    { time: '22:00', event: 'Nocleg w domku', icon: '🏡', day: 'Czwartek, 10 lipca', link: 'https://maps.app.goo.gl/h9oQ5gVDZ3y3LbZi9' },
    // Piątek - 11 lipca
    { time: '13:00', event: 'Obiad na miejscu', icon: '🥘', day: 'Piątek, 11 lipca' },
    { time: '15:00', event: 'Zwiedzanie Warszawy z przewodnikiem', icon: '🏛️', day: 'Piątek, 11 lipca', link: 'https://maps.app.goo.gl/xx4ZhRDZv1TSgTsk8' },
    { time: '19:00', event: 'Spektakl "Kinky Boots w teatrze Dramatycznym"', icon: '🎭', day: 'Piątek, 11 lipca', link: 'https://maps.app.goo.gl/g5K46qm6V7uZwKpR9' },
    { time: '22:00', event: 'Powrót do domku na wsi', icon: '🌙', day: 'Piątek, 11 lipca', link: 'https://maps.app.goo.gl/h9oQ5gVDZ3y3LbZi9' }
  ];

  const rides = [
    { driver: 'Rafał', passengers: ['Asia', 'Adam', 'Kuba', 'Ula'], phone: '+48' },
    { driver: 'Leszek (tata Rafała)', passengers: ['Małgosia', 'Zuza', 'Mati', 'Aga'], phone: '+48 ...' },
    { driver: 'Darek', passengers: ['Ala', 'Bartek', 'Justyna', 'Artur'], phone: '+48 ...' }
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'welcome':
        return (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-light text-gray-800">Asia i Rafał</h1>
              <h1 className="text-4xl font-light text-gray-800">zapraszają na ślub</h1>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">Czwartek, 10 lipca 2025</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">14:00</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-gray-500" />
                <a 
                  href="https://www.google.com/maps/place/Urz%C4%85d+Stanu+Cywilnego+m.st.Warszawy/@52.2364232,20.9702733,17z/data=!4m10!1m2!2m1!1sUSC+Warszawa+Wola+M%C5%82ynarska+16+Warszawa!3m6!1s0x471ecb00119ac967:0xfd681f3c6dee8819!8m2!3d52.2364541!4d20.9728599!15sCihVU0MgV2Fyc3phd2EgV29sYSBNxYJ5bmFyc2thIDE2IFdhcnN6YXdhWioiKHVzYyB3YXJzemF3YSB3b2xhIG3FgnluYXJza2EgMTYgd2Fyc3phd2GSARdtYXJyaWFnZV9saWNlbnNlX2J1cmVhdZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuVFVOQmQzWXphRWRSRUFFqgFREAEyHxABIhvdjP-pirCxIefgyyGHoUa96IJ2k_ztcMY75TYyLBACIih1c2Mgd2Fyc3phd2Egd29sYSBtxYJ5bmFyc2thIDE2IHdhcnN6YXdh4AEA-gEECAAQKw!16s%2Fg%2F11lzxnzc9r?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  USC Warszawa Wola
                </a>
              </div>
              <a 
                href="https://www.google.com/maps/place/Urz%C4%85d+Stanu+Cywilnego+m.st.Warszawy/@52.2364232,20.9702733,17z/data=!4m10!1m2!2m1!1sUSC+Warszawa+Wola+M%C5%82ynarska+16+Warszawa!3m6!1s0x471ecb00119ac967:0xfd681f3c6dee8819!8m2!3d52.2364541!4d20.9728599!15sCihVU0MgV2Fyc3phd2EgV29sYSBNxYJ5bmFyc2thIDE2IFdhcnN6YXdhWioiKHVzYyB3YXJzemF3YSB3b2xhIG3FgnluYXJza2EgMTYgd2Fyc3phd2GSARdtYXJyaWFnZV9saWNlbnNlX2J1cmVhdZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuVFVOQmQzWXphRWRSRUFFqgFREAEyHxABIhvdjP-pirCxIefgyyGHoUa96IJ2k_ztcMY75TYyLBACIih1c2Mgd2Fyc3phd2Egd29sYSBtxYJ5bmFyc2thIDE2IHdhcnN6YXdh4AEA-gEECAAQKw!16s%2Fg%2F11lzxnzc9r?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
              >
                ul. Młynarska 16, Warszawa
              </a>
            </div>

            <p className="text-gray-600 leading-relaxed">
               Co Kamena złączyła, tego człowiek niech nie rozdziela ⛓
            </p>
          </div>
        );

      case 'plan':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-light text-gray-800 text-center">Plan</h2>
            
            <div className="space-y-6">
              {/* Grupowanie po dniach */}
              {['Czwartek, 10 lipca', 'Piątek, 11 lipca'].map((day) => (
                <div key={day} className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-700 border-b border-gray-200 pb-2">
                    {day}
                  </h3>
                  <div className="space-y-3">
                    {weddingPlan
                      .filter(item => item.day === day)
                      .map((item, index) => (
                        <div key={index} className="flex items-center space-x-4 bg-white border border-gray-200 rounded-lg p-4">
                          <div className="text-2xl">{item.icon}</div>
                          <div className="flex-1">
                            {item.link ? (
                              <a 
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-gray-800 hover:text-blue-600 transition-colors"
                              >
                                {item.event}
                              </a>
                            ) : (
                              <div className="font-medium text-gray-800">{item.event}</div>
                            )}
                            <div className="text-sm text-gray-500">{item.time}</div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'directions':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-light text-gray-800 text-center">Jak dojechać</h2>
            
            <div className="space-y-4">
              {/* USC Warszawa Wola */}
              <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">💒</span>
                  <h3 className="font-medium text-gray-800">USC Warszawa Wola</h3>
                </div>
                <p className="text-gray-600 text-sm">ul. Młynarska 16, Warszawa</p>
                <a 
                  href="https://www.google.com/maps/place/Urz%C4%85d+Stanu+Cywilnego+m.st.Warszawy/@52.2364232,20.9702733,17z/data=!4m10!1m2!2m1!1sUSC+Warszawa+Wola+M%C5%82ynarska+16+Warszawa!3m6!1s0x471ecb00119ac967:0xfd681f3c6dee8819!8m2!3d52.2364541!4d20.9728599!15sCihVU0MgV2Fyc3phd2EgV29sYSBNxYJ5bmFyc2thIDE2IFdhcnN6YXdhWioiKHVzYyB3YXJzemF3YSB3b2xhIG3FgnluYXJza2EgMTYgd2Fyc3phd2GSARdtYXJyaWFnZV9saWNlbnNlX2J1cmVhdZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuVFVOQmQzWXphRWRSRUFFqgFREAEyHxABIhvdjP-pirCxIefgyyGHoUa96IJ2k_ztcMY75TYyLBACIih1c2Mgd2Fyc3phd2Egd29sYSBtxYJ5bmFyc2thIDE2IHdhcnN6YXdh4AEA-gEECAAQKw!16s%2Fg%2F11lzxnzc9r?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-gray-800 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-gray-700 transition-colors"
                >
                  Otwórz w mapach
                </a>
              </div>

              {/* Obiad pierwszego dnia */}
              <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">🍲</span>
                  <h3 className="font-medium text-gray-800">MIEJSCE is coming</h3>
                </div>
                <p className="text-gray-600 text-sm">Obiad pierwszego dnia - wkrotce</p>
              </div>


              {/* Domek na wsi */}
              <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">🏡</span>
                  <h3 className="font-medium text-gray-800">Domek na wsi</h3>
                </div>
                <p className="text-gray-600 text-sm">Nocleg i ognisko</p>
                <a 
                  href="https://maps.app.goo.gl/h9oQ5gVDZ3y3LbZi9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-gray-800 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-gray-700 transition-colors"
                >
                  Otwórz w mapach
                </a>
              </div>

              {/* Zwiedzanie Warszawy */}
              <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">🏛️</span>
                  <h3 className="font-medium text-gray-800">Zwiedzanie Warszawy</h3>
                </div>
                <p className="text-gray-600 text-sm">Punkt spotkania z przewodnikiem</p>
                <a 
                  href="https://maps.app.goo.gl/xx4ZhRDZv1TSgTsk8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-gray-800 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-gray-700 transition-colors"
                >
                  Otwórz w mapach
                </a>
              </div>

              {/* Teatr Dramatyczny */}
              <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">🎭</span>
                  <h3 className="font-medium text-gray-800">Teatr Dramatyczny</h3>
                </div>
                <p className="text-gray-600 text-sm">Spektakl "Kinky Boots"</p>
                <a 
                  href="https://maps.app.goo.gl/g5K46qm6V7uZwKpR9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-gray-800 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-gray-700 transition-colors"
                >
                  Otwórz w mapach
                </a>
              </div>

            </div>
          </div>
        );

      case 'rides':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-light text-gray-800 text-center">Transport</h2>
            <p className="text-gray-600 text-center text-sm">DO UZUPEŁNIENIA - ZALEŻY OD OBIADU</p>
            
            <div className="space-y-4">
              {rides.map((ride, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
                  <div className="flex items-center space-x-2">
                    <Car className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-800">{ride.driver}</span>
                    <span className="text-sm text-gray-500">(Kierowca)</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">Pasażerowie:</div>
                    <div className="flex flex-wrap gap-2">
                      {ride.passengers.map((passenger, pIndex) => (
                        <span key={pIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {passenger}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-100">
                    <a href={`tel:${ride.phone}`} className="text-sm text-blue-600 hover:text-blue-800">
                      📱 {ride.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-sm text-blue-800">
                <strong>Potrzebujesz transportu?</strong> Skontaktuj się z Rafałem.
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 py-3">
          <h1 className="text-xl font-light text-gray-800 text-center">A & R Ślub</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6">
        <div className="max-w-md mx-auto">
          {renderContent()}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
                activeSection === section.id 
                  ? 'text-gray-800 bg-gray-100' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="text-lg">{section.icon}</span>
              <span className="text-xs font-medium">{section.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Bottom padding to prevent content from being hidden behind nav */}
      <div className="h-20"></div>
    </div>
  );
};

export default WeddingPartyApp;