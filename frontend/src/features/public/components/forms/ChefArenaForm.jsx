import { useState } from "react";
import {
    User,
    Mail,
    Phone,
    MapPin,
    Building,
    Globe,
    Share2,
    UtensilsCrossed,
} from "lucide-react";
import { chefArenaForm } from "../../../../api/chefarena.api.js";

const ChefArenaForm = () => {
    const initialState = {
        name: "",
        email: "",
        contact: "",
        collegeName: "",
        city: "",
        socialLink: "",
        whereDidYouHear: "",
    };

    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await chefArenaForm(formData);
            alert("Chef Arena registration successful 🎉");

            setFormData(initialState);
            e.target.reset();
        } catch (err) {
            alert("Something went wrong ❌");
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        "w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f44336] focus:border-transparent transition-all outline-none text-gray-700";

    const iconClass =
        "absolute left-3 top-1/2 -translate-y-1/2 text-[#f44336] w-5 h-5 opacity-70";

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

                {/* HEADER */}
                <div className="bg-[#f44336] p-8 text-center text-white">
                    <h2 className="text-3xl font-extrabold tracking-tight underline italic decoration-white/30">
                        CHEF ARENA
                    </h2>
                    <p className="mt-2 text-white/80 uppercase tracking-widest font-bold text-xs">
                        Where Passion Meets The Plate
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">

                    {/* PERSONAL DETAILS */}
                    <section>
                        <div className="flex items-center gap-2 mb-6 border-b pb-2">
                            <UtensilsCrossed className="w-5 h-5 text-[#f44336]" />
                            <h3 className="text-lg font-bold text-gray-800">
                                Chef Information
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
                                    placeholder="College Name"
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
                                    placeholder="Social Media / Portfolio Link"
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
                            <Share2 className="w-5 h-5 text-[#f44336]" />
                            <h3 className="text-lg font-bold text-gray-800">
                                Discovery Path
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

                    {/* SUBMIT */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#f44336] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-red-100 hover:-translate-y-0.5 transition disabled:opacity-50"
                    >
                        {loading ? "Submitting..." : "Join The Arena"}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default ChefArenaForm;
