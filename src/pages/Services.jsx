import { Baby, Heart, Stethoscope, Brain, Activity, Shield, Clipboard, Pill as Pills, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Baby,
    title: "Well-Child Visits",
    description: "Comprehensive check-ups to monitor your child's growth, development, and overall health. Includes physical examinations, developmental screenings, and preventive care guidance.",
    features: ["Growth monitoring", "Developmental assessment", "Nutrition guidance", "Behavioral evaluation"]
  },
  {
    icon: Brain,
    title: "Developmental Screening",
    description: "Regular assessments of your child's physical, emotional, and cognitive development to ensure they're meeting important milestones.",
    features: ["Milestone tracking", "Early intervention", "Behavioral assessment", "Parent education"]
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Proactive health care services to prevent illness and promote overall wellness in children of all ages.",
    features: ["Health screening", "Risk assessment", "Preventive guidance", "Lifestyle recommendations"]
  },
  {
    icon: Activity,
    title: "Sports Physicals",
    description: "Comprehensive physical examinations required for participation in school sports and other athletic activities.",
    features: ["Physical assessment", "Medical clearance", "Health recommendations", "Activity guidelines"]
  },
  {
    icon: Pills,
    title: "Medication Management",
    description: "Careful oversight of prescribed medications, including regular monitoring and adjustments as needed.",
    features: ["Prescription management", "Side effect monitoring", "Dosage adjustments", "Medication education"]
  },
  {
    icon: Stethoscope,
    title: "General Consultations",
    description: "Comprehensive pediatric check-ups to monitor your child's health and well-being. Includes physical examinations and preventive care guidance.",
    features: ["Physical examination", "Health assessment", "Preventive care", "Medical consultation"]
  },
  {
    icon: Activity,
    title: "Emergency Care",
    description: "Prompt medical care for acute pediatric conditions, illnesses, and other urgent health concerns.",
    features: ["Same-day appointments", "Comprehensive evaluation", "Treatment plans", "Follow-up care"]
  },
  {
    icon: Clipboard,
    title: "Health Monitoring",
    description: "Regular assessments of your child's health parameters to ensure optimal growth and development.",
    features: ["Vital monitoring", "Growth tracking", "Health tracking", "Regular check-ups"]
  },
  {
    icon: Users,
    title: "Parent Education",
    description: "Guidance and resources to help parents make informed decisions about their child's health and development.",
    features: ["Nutritional advice", "Safety guidelines", "Development tips", "Health resources"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-24"
      >
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Our Services</h1>
            <p className="text-xl md:text-2xl font-light text-blue-100 max-w-2xl mx-auto">
              Comprehensive pediatric care services designed for your child's health and well-being at every stage.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.div 
        className="container mx-auto px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-3"></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl py-16 mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Schedule Your Child's Visit</h2>
            <p className="text-xl text-blue-100 mb-10">Trust your child's health to our experienced pediatric care team.</p>
            <Link
              to="/appointment"
              className="inline-block bg-white text-blue-700 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 shadow-lg text-lg"
            >
              Book Appointment
            </Link>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}