import { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { database } from '../firebase';
import { ref, push, serverTimestamp } from 'firebase/database';

const timeSlots = [
  { slot: '10:00 AM', available: true },
  { slot: '11:00 AM', available: true },
  { slot: '12:00 PM', available: true },
  { slot: '4:00 PM', available: true },
  { slot: '5:00 PM', available: true },
  { slot: '6:00 PM', available: true },
  { slot: '7:00 PM', available: true },
  { slot: '8:00 PM', available: true }
];

export default function Appointment() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    guardianName: "",
    phoneNumber: "",
    notes: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time slot");
      return;
    }

    const appointmentData = {
      ...formData,
      appointmentDate: selectedDate,
      timeSlot: selectedTime,
      createdAt: serverTimestamp()
    };

    try {
      // Save to Firebase Realtime Database
      const appointmentsRef = ref(database, 'appointments/rocky');
      const newAppointmentRef = await push(appointmentsRef, appointmentData);
      console.log("Appointment scheduled with ID: ", newAppointmentRef.key);
      alert("Appointment scheduled successfully!");
      
      // Reset form
      setFormData({
        patientName: "",
        age: "",
        guardianName: "",
        phoneNumber: "",
        notes: ""
      });
      setSelectedDate("");
      setSelectedTime("");
    } catch (error) {
      console.error("Error scheduling appointment:", error);
      alert("Failed to schedule appointment. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-blue-500 px-6 py-8 text-white">
              <h1 className="text-3xl font-bold mb-2">Book an Appointment</h1>
              <p className="text-blue-100">Schedule a visit at SHISHU CARE CLINIC with Dr. Vivekanand Sinha</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age (in years)
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Guardian Name
                  </label>
                  <input
                    type="text"
                    name="guardianName"
                    value={formData.guardianName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Appointment Details */}
              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">Appointment Details</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline-block w-4 h-4 mr-2" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="inline-block w-4 h-4 mr-2" />
                      Preferred Slot
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((slot, index) => (
                        <button
                          key={index}
                          type="button"
                          disabled={!slot.available}
                          onClick={() => setSelectedTime(slot.slot)}
                          className={`p-2 text-sm rounded-lg border transition-colors
                            ${slot.available 
                              ? selectedTime === slot.slot
                                ? 'bg-blue-500 text-white border-blue-500'
                                : 'hover:border-blue-500 hover:text-blue-500'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                        >
                          {slot.slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="border-t pt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none h-32"
                  placeholder="Please provide any additional information about your visit..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="border-t pt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Schedule Appointment
                </button>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  By scheduling an appointment, you agree to our terms of service and privacy policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}