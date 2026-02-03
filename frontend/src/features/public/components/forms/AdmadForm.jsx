import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  Users,
  Video,
} from "lucide-react";
import { admadForm } from "../../../../api/admad.api.js";

const AdMadForm = () => {
  const initialState = {
    name: "",
    email: "",
    number: "",
    state: "",
    pincode: "",
    whoAreYou: "",
    collegeName: "",
    numberOfTeamMember: "",
    video: null,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) =>
        payload.append(key, value)
      );

      await admadForm(payload);
      alert("AdMad registration successful 🎉");

      setFormData(initialState);
      e.target.reset();
    } catch (err) {
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#008fad] focus:border-transparent transition-all outline-none text-gray-700";

  const iconClass =
    "absolute left-3 top-1/2 -translate-y-1/2 text-[#008fad] w-5 h-5 opacity-70";

  const labelClass =
    "block text-sm font-semibold text-gray-600 mb-2 ml-1";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

        {/* HEADER */}
        <div className="bg-[#008fad] p-8 text-center text-white">
          <h2 className="text-3xl font-extrabold tracking-tight">
            AdMad – Advertising Madness
          </h2>
          <p className="mt-2 text-white/80">
            Register your team & showcase your creativity
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">

          {/* PERSONAL DETAILS */}
          <section>
            <div className="flex items-center gap-2 mb-6 border-b pb-2">
              <User className="w-5 h-5 text-[#008fad]" />
              <h3 className="text-lg font-bold text-gray-800">
                Participant Details
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <User className={iconClass} />
                <input
                  name="name"
                  placeholder="Full Name"
                  required
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="relative">
                <Mail className={iconClass} />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="relative">
                <Phone className={iconClass} />
                <input
                  name="number"
                  placeholder="Mobile Number"
                  required
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="relative">
                <MapPin className={iconClass} />
                <input
                  name="state"
                  placeholder="State"
                  required
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="relative">
                <MapPin className={iconClass} />
                <input
                  name="pincode"
                  placeholder="Pincode"
                  required
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="relative">
                <Building className={iconClass} />
                <select
                  name="whoAreYou"
                  required
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">You are a...</option>
                  <option value="Student">Student</option>
                  <option value="Professional">Professional</option>
                </select>
              </div>
            </div>
          </section>

          {/* TEAM DETAILS */}
          <section>
            <div className="flex items-center gap-2 mb-6 border-b pb-2">
              <Users className="w-5 h-5 text-[#008fad]" />
              <h3 className="text-lg font-bold text-gray-800">
                Team Information
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="collegeName"
                placeholder="College Name"
                required
                onChange={handleChange}
                className={inputClass.replace("pl-10", "pl-4")}
              />

              <input
                name="numberOfTeamMember"
                placeholder="Number of Team Members"
                required
                onChange={handleChange}
                className={inputClass.replace("pl-10", "pl-4")}
              />
            </div>
          </section>

          {/* VIDEO UPLOAD */}
          <section>
            <div className="flex items-center gap-2 mb-6 border-b pb-2">
              <Video className="w-5 h-5 text-[#008fad]" />
              <h3 className="text-lg font-bold text-gray-800">
                Pitch Video
              </h3>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed hover:border-[#008fad] transition">
              <label className={labelClass}>
                Upload Advertisement Video *
              </label>

              <div className="flex items-center gap-4">
                <Video className="w-8 h-8 text-[#008fad] opacity-60" />
                <input
                  type="file"
                  name="video"
                  accept="video/*"
                  required
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-[#008fad] file:text-white
                    hover:opacity-90 cursor-pointer"
                />
              </div>
            </div>
          </section>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#008fad] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-teal-100 hover:-translate-y-0.5 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Register for AdMad"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default AdMadForm;
