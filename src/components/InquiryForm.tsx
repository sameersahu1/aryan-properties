import { useState } from 'react';
import { Send, CheckCircle, User, Phone, MessageSquare, Tag, FileText } from 'lucide-react';

interface InquiryFormProps {
  variant?: 'hero' | 'contact' | 'property';
  propertyName?: string;
  compact?: boolean;
}

export default function InquiryForm({ variant = 'contact', propertyName, compact = false }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: propertyName || '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API. Now redirect to WhatsApp.
    const whatsappText = encodeURIComponent(
      `*New Property Inquiry*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Requirement:* ${formData.requirement || 'Not specified'}
*Budget:* ${formData.budget || 'Not specified'}
*Message:* ${formData.message || 'N/A'}
Thank you! Please contact me regarding this property.`

      //`*New Inquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Requirement:* ${formData.requirement || 'Not specified'}%0A*Budget:* ${formData.budget || 'Not specified'}%0A*Message:* ${formData.message || 'N/A'}`
    );
    window.open(`https://wa.me/919953444307?text=${whatsappText}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className={`text-center py-12 ${compact ? 'px-6' : 'px-8'}`}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Inquiry Sent!</h3>
        <p className="text-slate-600">Thank you for reaching out. Our team will contact you shortly via WhatsApp.</p>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
        <div className="text-center mb-5">
          <h3 className="text-xl font-bold text-slate-900">Search Your Property</h3>
          <p className="text-sm text-slate-500">Get free consultation from our experts</p>
        </div>
        <div className="space-y-3">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Full Name *"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-sm"
            />
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number *"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-sm"
            />
          </div>
          <div className="relative">
            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <select
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-sm text-slate-700 bg-white"
            >
              <option value="">I'm looking for...</option>
              <option value="2 BHK Flat">2 BHK Flat</option>
              <option value="3 BHK Flat">3 BHK Flat</option>
              <option value="4 BHK Flat">4 BHK Flat</option>
              <option value="1 BHK Flat">1 BHK Flat</option>
              <option value="Rental Property">Rental Property</option>
              <option value="Commercial Space">Commercial Space</option>
              <option value="Plot/Land">Plot / Land</option>
              <option value="Villa">Villa</option>
            </select>
          </div>
          <div className="relative">
            <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-sm text-slate-700 bg-white"
            >
              <option value="">Your Budget Range</option>
              <option value="Below 30 Lakhs">Below ₹30 Lakhs</option>
              <option value="30-50 Lakhs">₹30 - 50 Lakhs</option>
              <option value="50 Lakhs - 1 Crore">₹50 Lakhs - 1 Crore</option>
              <option value="1-2 Crore">₹1 - 2 Crore</option>
              <option value="2-3 Crore">₹2 - 3 Crore</option>
              <option value="Above 3 Crore">Above ₹3 Crore</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm"
          >
            <Send className="w-4 h-4" />
            Submit Inquiry
          </button>
          <p className="text-xs text-center text-slate-500">
            We respect your privacy. Your info is safe with us.
          </p>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${compact ? '' : ''}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-white"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-white"
            placeholder="+91 98XXX XXXXX"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Requirement</label>
          <select
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-white text-slate-700"
          >
            <option value="">Select requirement</option>
            <option value="Buy 2 BHK">Buy 2 BHK</option>
            <option value="Buy 3 BHK">Buy 3 BHK</option>
            <option value="Buy 4 BHK/Villa">Buy 4 BHK / Villa</option>
            <option value="Rent 1/2/3 BHK">Rent Property</option>
            <option value="Commercial Space">Commercial Space</option>
            <option value="Plot/Land">Plot / Land</option>
            <option value="Sell Property">Sell Property</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Budget</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-white text-slate-700"
          >
            <option value="">Select budget</option>
            <option value="Below 30L">Below ₹30 Lakhs</option>
            <option value="30L-50L">₹30 - 50 Lakhs</option>
            <option value="50L-1Cr">₹50 Lakhs - 1 Crore</option>
            <option value="1Cr-2Cr">₹1 - 2 Crore</option>
            <option value="2Cr-3Cr">₹2 - 3 Crore</option>
            <option value="Above 3Cr">Above ₹3 Crore</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
          <textarea
            name="message"
            rows={compact ? 3 : 4}
            value={formData.message}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-white resize-none"
            placeholder="Tell us about your property requirements..."
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        Send Inquiry via WhatsApp
      </button>
    </form>
  );
}
