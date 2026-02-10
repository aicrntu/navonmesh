import { useState } from "react";
import { User, Mail, Phone, MapPin, Building, Users, FileText, Upload, CreditCard, Camera } from "lucide-react";
import { planxForm } from "../../../../api/planx.api.js";

const PlanxForm = () => {
  const brandTeal = "rgb(0, 143, 173)";
  const initialState = {
    name: "", email: "", number: "", state: "", pincode: "",
    whoAreYou: "", organizationName: "", startupIdeaName: "", teamMemberaName: "",
    emailOfTeam: "", teamDetail: "", aboutStartup: "", presentation: null, //paymentScreenshot: null,
    participants: [{ name: "", phone: "" }, { name: "", phone: "" }],
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleParticipantChange = (index, field, value) => {
    const updatedParticipants = [...formData.participants];
    updatedParticipants[index][field] = value;
    setFormData({ ...formData, participants: updatedParticipants });
  };

  const addParticipant = () => {
    if (formData.participants.length < 4) {
      setFormData({
        ...formData,
        participants: [...formData.participants, { name: "", phone: "" }],
      });
    }
  };

  const removeParticipant = (index) => {
    if (formData.participants.length > 2) {
      const updatedParticipants = formData.participants.filter((_, i) => i !== index);
      setFormData({ ...formData, participants: updatedParticipants });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'participants') {
          payload.append(key, JSON.stringify(value));
        } else {
          payload.append(key, value);
        }
      });

      await planxForm(payload);
      alert("PlanX registration successful 🎉");

      setFormData(initialState);
      e.target.reset();
    } catch (error) {
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#008fad] focus:border-transparent transition-all outline-none text-gray-700";
  const labelClass = "block text-sm font-semibold text-gray-600 mb-1.5 ml-1";
  const iconClass = "absolute left-3 top-1/2 -translate-y-1/2 text-[#008fad] w-5 h-5 opacity-70";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">

        <div className="bg-[#008fad] p-8 text-center text-white">
          <h2 className="text-3xl font-extrabold tracking-tight">PlanX – Business Plan Battle</h2>
          {/* <p className="mt-2 text-white/80">Register your startup idea and compete with the industry's best</p> */}
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
          <section>
            <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-2">
              <User className="w-5 h-5 text-[#008fad]" />
              <h3 className="text-lg font-bold text-gray-800">Founder Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <User className={iconClass} />
                <input name="name" value={formData.name} placeholder="Full Name" onChange={handleChange} required className={inputClass} />
              </div>
              <div className="relative">
                <Mail className={iconClass} />
                <input name="email" type="email" value={formData.email} placeholder="Email Address" onChange={handleChange} required className={inputClass} />
              </div>
              <div className="relative">
                <Phone className={iconClass} />
                <input name="number" value={formData.number} placeholder="Mobile Number" onChange={handleChange} required className={inputClass} />
              </div>
              <div className="relative">
                <MapPin className={iconClass} />
                <input name="state" value={formData.state} placeholder="State" onChange={handleChange} required className={inputClass} />
              </div>
              <div className="relative">
                <MapPin className={iconClass} />
                <input name="pincode" value={formData.pincode} placeholder="Pincode" onChange={handleChange} required className={inputClass} />
              </div>
              <div className="relative">
                <Building className={iconClass} />
                <select name="whoAreYou" value={formData.whoAreYou} onChange={handleChange} required className={inputClass}>
                  <option value="">Current Role</option>
                  <option value="UG Student">UG Student</option>
                  <option value="PG Student">PG Student</option>
                </select>

              </div>
              <input name="startupIdeaName" value={formData.startupIdeaName} placeholder="Startup Idea Name" onChange={handleChange} required className={inputClass.replace('pl-10', 'pl-4')} />
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-2">
              <Users className="w-5 h-5 text-[#008fad]" />
              <h3 className="text-lg font-bold text-gray-800">Organization & Team</h3>
            </div>
            <div className="space-y-6">
              <input name="organizationName" value={formData.organizationName} placeholder="College / University Name" onChange={handleChange} required className={inputClass.replace('pl-10', 'pl-4')} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input name="teamMemberaName" value={formData.teamMemberaName} placeholder="Team Member Names" onChange={handleChange} required className={inputClass.replace('pl-10', 'pl-4')} />
                <input name="emailOfTeam" type="email" value={formData.emailOfTeam} placeholder="Team Primary Email" onChange={handleChange} required className={inputClass.replace('pl-10', 'pl-4')} />
              </div>
              <textarea name="teamDetail" value={formData.teamDetail} placeholder="Brief about your team members..." onChange={handleChange} required rows={2} className={inputClass.replace('pl-10', 'pl-4') + " resize-none"} />

              {/* Participants Section */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-700">Participating Members (Min 2, Max 4)</h4>
                {formData.participants.map((participant, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <input
                      placeholder={`Member ${index + 1} Name`}
                      value={participant.name}
                      onChange={(e) => handleParticipantChange(index, "name", e.target.value)}
                      required
                      className={inputClass.replace("pl-10", "pl-4")}
                    />
                    <input
                      placeholder={`Member ${index + 1} Mobile`}
                      value={participant.phone}
                      onChange={(e) => handleParticipantChange(index, "phone", e.target.value)}
                      required
                      className={inputClass.replace("pl-10", "pl-4")}
                    />
                    {formData.participants.length > 2 && (
                      <button
                        type="button"
                        onClick={() => removeParticipant(index)}
                        className="text-red-500 font-bold hover:text-red-700"
                      >
                        X
                      </button>
                    )}
                  </div>
                ))}
                {formData.participants.length < 4 && (
                  <button
                    type="button"
                    onClick={addParticipant}
                    className="text-[#008fad] font-bold hover:underline"
                  >
                    + Add Participant
                  </button>
                )}
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-2">
              <FileText className="w-5 h-5 text-[#008fad]" />
              <h3 className="text-lg font-bold text-gray-800">The Pitch</h3>
            </div>
            <div className="space-y-6">
              <textarea name="aboutStartup" value={formData.aboutStartup} placeholder="Describe your startup idea in detail..." onChange={handleChange} required rows={4} className={inputClass.replace('pl-10', 'pl-4') + " resize-none"} />

              <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200 hover:border-[#008fad] transition-colors">
                <label className={labelClass}>Upload Presentation (PDF/PPT) *</label>
                <div className="flex items-center gap-4">
                  <Upload className="text-[#008fad] w-8 h-8 opacity-60" />
                  <input
                    name="presentation"
                    type="file"
                    accept=".pdf,.ppt,.pptx"
                    onChange={handleChange}
                    required
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#008fad] file:text-white hover:opacity-90 transition-all cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* <section>
            <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-2">
              <CreditCard className="w-5 h-5 text-[#008fad]" />
              <h3 className="text-lg font-bold text-gray-800">Payment Details</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Registration Fee: 200/- Per Team</h4>
                  <p className="text-gray-600 text-sm mb-4">Scan the QR code to pay the registration fee and upload the screenshot below for verification.</p>
                </div>
                <div className="w-40 h-40 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
                  <img src="/compitition/scanner-upi.jpeg" alt="UPI Scanner" className="w-full h-full object-contain" />
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200 hover:border-[#008fad] transition-colors">
                <label className={labelClass}>Upload Payment Screenshot *</label>
                <div className="flex items-center gap-4">
                  <Camera className="text-[#008fad] w-8 h-8 opacity-60" />
                  <input
                    name="paymentScreenshot"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    required
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#008fad] file:text-white hover:opacity-90 transition-all cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </section> */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#008fad] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-teal-100 hover:opacity-95 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:transform-none"
          >
            {loading ? "Processing Application..." : "Complete Registration"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlanxForm;