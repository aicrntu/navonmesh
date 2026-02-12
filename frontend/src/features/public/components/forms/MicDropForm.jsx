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
    Music,
    CreditCard,
    Camera,
    BookOpen,
} from "lucide-react";
import { micDropForm } from "../../../../api/micdrop.api.js";

const MicDropForm = () => {
    const initialState = {
        name: "",
        email: "",
        contact: "",
        collegeName: "",
        city: "",
        socialLink: "",
        whereDidYouHear: "",
        video: null,
        paymentScreenshot: null,
        participationType: "",
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

            await micDropForm(payload);
            alert("Mic Drop registration successful 🎉");

            setFormData(initialState);
            e.target.reset();
        } catch (err) {
            alert("Something went wrong ❌");
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        "w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff5722] focus:border-transparent transition-all outline-none text-gray-700";

    const iconClass =
        "absolute left-3 top-1/2 -translate-y-1/2 text-[#ff5722] w-5 h-5 opacity-70";

    const labelClass =
        "block text-sm font-semibold text-gray-600 mb-2 ml-1";

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20">
            <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

                {/* HEADER */}
                <div className="bg-[#ff5722] p-8 text-center text-white">
                    <h2 className="text-3xl font-extrabold tracking-tight underline italic decoration-white/30">
                        MIC DROP
                    </h2>
                    <a
                        href="/compitition/rule-book/RULE BOOK FOR SINGING COMPETITION NAVONMESH 2026.pdf"
                        target="_blank"
                        className="mt-4 inline-flex items-center gap-2 px-6 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-bold rounded-full transition-all border border-white/30"
                    >
                        <BookOpen className="w-4 h-4" />
                        Download Rule Book
                    </a>
                </div>

                <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">

                    {/* PERSONAL DETAILS */}
                    <section>
                        <div className="flex items-center gap-2 mb-6 border-b pb-2">
                            <Music className="w-5 h-5 text-[#ff5722]" />
                            <h3 className="text-lg font-bold text-gray-800">
                                Artist Information
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <User className={iconClass} />
                                <input
                                    name="name"
                                    placeholder="Full Name / Stage Name"
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
                                <User className={iconClass} />
                                <select
                                    name="participationType"
                                    value={formData.participationType}
                                    onChange={handleChange}
                                    required
                                    className={inputClass}
                                >
                                    <option value="">Participation Type</option>
                                    <option value="Solo">Solo</option>
                                    <option value="Duet">Duet</option>
                                </select>
                            </div>

                            <div className="relative">
                                <Globe className={iconClass} />
                                <input
                                    name="socialLink"
                                    placeholder="Social Media Profile Link"
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
                            <Share2 className="w-5 h-5 text-[#ff5722]" />
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

                    {/* VIDEO UPLOAD */}
                    <section>
                        <div className="flex items-center gap-2 mb-6 border-b pb-2">
                            <Video className="w-5 h-5 text-[#ff5722]" />
                            <h3 className="text-lg font-bold text-gray-800">
                                Performance Clip
                            </h3>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed hover:border-[#ff5722] transition-colors">
                            <label className={labelClass}>
                                Upload Your 1 Min Video(Max 50MB)*
                            </label>

                            <div className="flex items-center gap-4">
                                <Video className="w-8 h-8 text-[#ff5722] opacity-60" />
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
                    file:bg-[#ff5722] file:text-white
                    hover:opacity-90 cursor-pointer"
                                />
                            </div>
                        </div>
                    </section>

                    {/* PAYMENT DETAILS */}
                    <section>
                        <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-2">
                            <CreditCard className="w-5 h-5 text-[#ff5722]" />
                            <h3 className="text-lg font-bold text-gray-800">Payment Details</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 flex flex-col md:flex-row items-center gap-6">
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-gray-800 mb-2">Registration Fee: ₹ 200.00 Per Team</h4>
                                    <p className="text-gray-600 text-sm mb-4">Scan the QR code to pay the registration fee and upload the screenshot below for verification.</p>
                                </div>
                                <div className="w-40 h-40 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
                                    <img src="/compitition/scanner-upi.jpeg" alt="UPI Scanner" className="w-full h-full object-contain" />
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200 hover:border-[#ff5722] transition-colors">
                                <label className={labelClass}>Upload Payment Screenshot *</label>
                                <div className="flex items-center gap-4">
                                    <Camera className="text-[#ff5722] w-8 h-8 opacity-60" />
                                    <input
                                        name="paymentScreenshot"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleChange}
                                        required
                                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#ff5722] file:text-white hover:opacity-90 transition-all cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                    </section >

                    {/* SUBMIT */}
                    < button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#ff5722] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-orange-100 hover:-translate-y-0.5 transition disabled:opacity-50"
                    >
                        {loading ? "Submitting..." : "Submit Audition"}
                    </button >

                </form >
            </div >
        </div >
    );
};

export default MicDropForm;
