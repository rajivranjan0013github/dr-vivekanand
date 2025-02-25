import { Baby, Heart, Clock, Phone, MapPin, Star, Calendar, Award, Stethoscope, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import babycover from '../assets/baby-cover.webp';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={babycover}
            alt="Happy child with doctor"
            className="w-full h-full object-cover object-left brightness-[0.85]"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            <h1 className="text-5xl font-bold mb-4 text-shadow-lg">Dr. Vivekanand Sinha</h1>
            <p className="text-xl mb-6 text-shadow-lg">Dedicated Physician with Years of Experience</p>
            <Link
              to="/appointment"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
                alt="Dr. Sarah Johnson"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet Dr. Vivekanand Sinha</h2>
              <p className="text-gray-600 mb-6">
                With years of experience in medical care, Dr. Vivekanand Sinha has dedicated his career to ensuring the health and well-being of his patients. He provides comprehensive medical care with a focus on patient wellness and preventive medicine.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Award className="text-blue-500" />
                  <span>Board Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="text-blue-500" />
                  <span>Top Rated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Baby className="text-blue-500" />
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="text-blue-500" />
                  <span>Compassionate Care</span>
                </div>
              </div>
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Providing comprehensive pediatric care from newborns to adolescents
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Baby className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Well-Child Visits</h3>
              <p className="text-gray-600">
                Regular check-ups to monitor growth, development, and overall health of your child.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Stethoscope className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sick Visits</h3>
              <p className="text-gray-600">
                Prompt care for illnesses, infections, and other acute health concerns.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vaccinations</h3>
              <p className="text-gray-600">
                Complete immunization services following CDC recommended schedules.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg"
            >
              Show More Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Parents Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read what our patients' parents have to say about their experience with Dr. Vivekanand Sinha
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex gap-1 mb-4">
                <Star className="text-yellow-400 fill-current" />
                <Star className="text-yellow-400 fill-current" />
                <Star className="text-yellow-400 fill-current" />
                <Star className="text-yellow-400 fill-current" />
                <Star className="text-yellow-400 fill-current" />
              </div>
              <p className="text-gray-600 mb-4">
                "Dr. Vivekanand Sinha has been amazing with both our children. His patience and expertise make every visit comfortable and reassuring."
              </p>
              <div className="font-semibold">Priya R.</div>
              <div className="text-sm text-gray-500">Mother of two</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex gap-1 mb-4">
                <Star className="text-yellow-400 fill-current" />
                <Star className="text-yellow-400 fill-current" />
                <Star className="text-yellow-400 fill-current" />
                <Star className="text-yellow-400 fill-current" />
                <Star className="text-yellow-400 fill-current" />
              </div>
              <p className="text-gray-600 mb-4">
                "We couldn't ask for a better pediatrician. Dr. Sinha takes the time to listen and explain everything thoroughly."
              </p>
              <div className="font-semibold">Mohit T.</div>
              <div className="text-sm text-gray-500">Father of three</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex gap-1 mb-4">
                <Star className="text-yellow-400 fill-current" />
                <Star className="text-yellow-400 fill-current" />
                <Star className="text-yellow-400 fill-current" />
                <Star className="text-yellow-400 fill-current" />
                <Star className="text-yellow-400 fill-current" />
              </div>
              <p className="text-gray-600 mb-4">
                "The level of care and attention we receive is exceptional. Dr. Vivekanand truly cares about his patients."
              </p>
              <div className="font-semibold">Sarita M.</div>
              <div className="text-sm text-gray-500">Mother of one</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for appointments and inquiries. We're here to help you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-blue-500 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Location</h4>
                      <p className="text-gray-600">Near sai tempal, Gewalbigha, Gaya, Bihar 823001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-blue-500 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">099340 98277</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-blue-500 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Working Hours</h4>
                      <p className="text-gray-600">Mon-Sat: 10:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Sun: Emergency Cases Only</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    to="/appointment"
                    className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition"
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule Appointment
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-full">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.255901374193!2d84.98984811126896!3d24.786689448112952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a4535758729%3A0xbdaf8b493b21b838!2sDr.%20Vivekanand%20Sinha.!5e0!3m2!1sen!2sin!4v1739229416001!5m2!1sen!2sin"
                className="w-full h-full rounded-xl"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}