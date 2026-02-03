import { useState } from "react";
import {
    User,
    Mail,
    Phone,
    MapPin,
    Building,
    Globe,
    Share2,
    Video,
    Users,
} from "lucide-react";
import { crewClashForm } from "../../../../api/crewclash.api.js";

const CrewClashForm = () => {
    const initialState = {
        name: "",
        email: "",
        contact: "",
        collegeName: "",
        city: "",
        socialLink: "",
        whereDidYouHear: "",
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

            await crewClashForm(payload);
            alert("Crew Clash registration successful 🎉");

            setFormData(initialState);
            e.target.reset();
        } catch (err) {
            alert("Something went wrong ❌");
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        "w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#e91e63] focus:border-transparent transition-all outline-none text-gray-700";

    const iconClass =
        "absolute left-3 top-1/2 -translate-y-1/2 text-[#e91e63] w-5 h-5 opacity-70";

    const labelClass =
        "block text-sm font-semibold text-gray-600 mb-2 ml-1";

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

                {/* HEADER */}
                <div className="bg-[#e91e63] p-8 text-center text-white">
                    <h2 className="text-3xl font-extrabold tracking-tight underline italic decoration-white/30">
                        CREW CLASH
                    </h2>
                    <p className="mt-2 text-white/80 uppercase tracking-widest font-bold text-xs">
                        Assemble Your Crew & Dominate The Stage
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">

                    {/* CREW DETAILS */}
                    <section>
                        <div className="flex items-center gap-2 mb-6 border-b pb-2">
                            <Users className="w-5 h-5 text-[#e91e63]" />
                            <h3 className="text-lg font-bold text-gray-800">
                                Crew Representative Information
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <User className={iconClass} />
                                <input
                                    name="name"
                                    placeholder="Lead Name / Crew Name"
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
                                    name="contact"
                                    placeholder="Contact Number"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative">
                                <Building className={iconClass} />
                                <input
                                    name="collegeName"
                                    placeholder="College / Organization"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative">
                                <MapPin className={iconClass} />
                                <input
                                    name="city"
                                    placeholder="City"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative">
                                <Globe className={iconClass} />
                                <input
                                    name="socialLink"
                                    placeholder="Crew Social Media Link"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>
                        </div>
                    </section>

                    {/* ADDDITIONAL DETAILS */}
                    <section>
                        <div className="flex items-center gap-2 mb-6 border-b pb-2">
                            <Share2 className="w-5 h-5 text-[#e91e63]" />
                            <h3 className="text-lg font-bold text-gray-800">
                                Survey
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="relative">
                                <Share2 className={iconClass} />
                                <select
                                    name="whereDidYouHear"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                >
                                    <option value="">Where did you hear about us?</option>
                                    <option value="Instagram">Instagram</option>
                                    <option value="WhatsApp">WhatsApp</option>
                                    <option value="College">College/Campus Ambassador</option>
                                    <option value="Friend">From a Friend</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* VIDEO UPLOAD */}
                    <section>
                        <div className="flex items-center gap-2 mb-6 border-b pb-2">
                            <Video className="w-5 h-5 text-[#e91e63]" />
                            <h3 className="text-lg font-bold text-gray-800">
                                Crew Performance
                            </h3>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed hover:border-[#e91e63] transition">
                            <label className={labelClass}>
                                Upload Your 1 Min Video(Max 50MB)*
                            </label>

                            <div className="flex items-center gap-4">
                                <Video className="w-8 h-8 text-[#e91e63] opacity-60" />
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
                    file:bg-[#e91e63] file:text-white
                    hover:opacity-90 cursor-pointer"
                                />
                            </div>
                        </div>
                    </section>

                    {/* SUBMIT */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#e91e63] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-pink-100 hover:-translate-y-0.5 transition disabled:opacity-50"
                    >
                        {loading ? "Submitting..." : "Register Crew"}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default CrewClashForm;
