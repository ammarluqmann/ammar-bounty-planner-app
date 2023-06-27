import React, { useState } from 'react';
import ClockWidget from '../widgets/ClockWidget';
import ReminderListWidget from '../widgets/ReminderListWidget';
import TimerWidget from '../widgets/TimerWidget';
import CalendarWidget from '../widgets/CalendarWidget';
import PhotoWidget from '../widgets/PhotoWidget';

export default function WidgetGalleryModal({ setShowWidgetModal, selectedWidgetArea, widgets, setWidgets }) {
  const [galleryWidgets, setGalleryWidgets] = useState([
    { component: <ClockWidget />, name: "Date and Time" },
    { component: <ReminderListWidget />, name: "Reminder List" },
    { component: <TimerWidget />, name: "Timer" },
    { component: <CalendarWidget />, name: "Calendar" },
    { component: <PhotoWidget />, name: "Photo" },
  ]);

  const addWidget = (widget) => {
    const widgetExists = widgets.some((w) => w.name === widget.name);
    if (!widgetExists) {
      const newWidget = {
        id: new Date().getTime(),
        component: widget.component,
        area: selectedWidgetArea,
        name: widget.name,
      };
      setWidgets([...widgets, newWidget]);
      setShowWidgetModal(false);
    } else {
      alert("You can only add one of each widget");
    }
  };

  return (
    <div className="modal" onClick={() => setShowWidgetModal(false)}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Widget Gallery</h2>
          <div className="widget-gallery">
            {galleryWidgets.map((widget, index) => (
              <div key={index} className="widget-gallery-item" onClick={() => addWidget(widget)}>
                <div className="widget-gallery-item-name">{widget.name}</div>
                <div className="widget-gallery-item-add-button">+</div>
                {widget.component}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}